# Supabase Keepalive — GitHub Actions Heartbeat

**Purpose:** Prevent the Supabase free-tier project from auto-pausing after 7 days of database inactivity. The fix is a scheduled GitHub Action that runs a tiny read query against the database twice a week, resetting the inactivity timer.

**Why this approach:** No new infrastructure, no new accounts, no cost. Repo already lives on GitHub. GitHub Actions cron runs in UTC and is free for public repos (and includes 2,000 free minutes/month for private repos — this workflow uses ~1 minute/month).

**Why twice a week, not once:** Belt-and-suspenders. Once a week works in theory but leaves zero margin if a single run fails (network blip, GitHub Actions outage, holiday). Mondays + Thursdays gives a 3-to-4 day max gap, well under the 7-day pause threshold.

**Stack assumed:** Next.js + Supabase, repo on GitHub, deployed to Netlify. No code changes to the app itself — this is pure CI configuration.

---

## Phase 1 — One-time setup

### Prompt 1 of 3: Create the workflow file

Create a new file at `.github/workflows/supabase-keepalive.yml` with the following contents:

```yaml
name: Supabase keepalive

on:
  schedule:
    # Mondays and Thursdays at 12:00 UTC (07:00 ET / 08:00 EDT)
    - cron: "0 12 * * 1,4"
  workflow_dispatch: # allows manual trigger from the Actions tab

jobs:
  ping:
    name: Ping Supabase REST API
    runs-on: ubuntu-latest
    steps:
      - name: Read one row from lesson_progress
        run: |
          response=$(curl -s -o /tmp/body -w "%{http_code}" \
            -X GET "${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}/rest/v1/lesson_progress?select=id&limit=1" \
            -H "apikey: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}" \
            -H "Authorization: Bearer ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}")

          echo "HTTP status: $response"
          echo "Response body:"
          cat /tmp/body

          if [ "$response" -ne 200 ]; then
            echo "::error::Supabase keepalive ping failed with status $response"
            exit 1
          fi

          echo "Keepalive ping successful."
```

**Notes on the choices:**

- The query targets `lesson_progress` because it's confirmed to exist in the schema (per `CLAUDE.md`). It has RLS enabled, so the anon key returns zero rows for unauthenticated callers — that's fine. The query still hits the database, which is what resets the inactivity timer.
- `select=id&limit=1` keeps the response payload minimal.
- Both `apikey` and `Authorization: Bearer` headers are sent because Supabase's PostgREST gateway expects both for anon access.
- `workflow_dispatch` lets you manually trigger the workflow from the GitHub UI to verify it works without waiting for the cron.
- The script fails loudly (`exit 1`) on any non-200 response so a paused project or rotated key surfaces as a failed Action run rather than silently no-op.

Do **not** commit yet — secrets need to be added first (next prompt).

---

### Prompt 2 of 3: Add repository secrets

GitHub Actions cannot read `.env.local`. The workflow references two secrets that must be added to the repo settings.

Steps to perform manually (this is a GitHub UI task, not a code change):

1. Go to the repo on GitHub → **Settings** → **Secrets and variables** → **Actions**.
2. Click **New repository secret**.
3. Add the first secret:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: copy from `.env.local` (format: `https://<project-id>.supabase.co`)
4. Click **New repository secret** again.
5. Add the second secret:
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: copy from `.env.local` (the long JWT starting with `eyJ...`)

**Do not** use the `SUPABASE_SERVICE_ROLE_KEY` for this. The anon key is sufficient and has no admin privileges, so a leak through workflow logs is low-impact. The service role key bypasses RLS and should never appear in CI logs.

---

### Prompt 3 of 3: Verify and commit

1. Commit the workflow file:
   ```bash
   git add .github/workflows/supabase-keepalive.yml
   git commit -m "ci: add Supabase keepalive heartbeat to prevent free-tier pause"
   git push
   ```
2. Open the repo on GitHub → **Actions** tab.
3. Find the **Supabase keepalive** workflow in the left sidebar.
4. Click **Run workflow** (top right) → **Run workflow** to trigger a manual run.
5. Wait ~10 seconds, refresh, and click into the run.
6. Expand the **Read one row from lesson_progress** step.
7. Confirm:
   - HTTP status: `200`
   - Response body: `[]` (empty array — RLS denies anon, expected)
   - Final line: `Keepalive ping successful.`

If it returns 401 or 404, the secrets are misconfigured — re-check the values against `.env.local`. If it returns 200, the heartbeat is live and will run automatically on Mondays and Thursdays at 12:00 UTC.

---

## Maintenance notes

- **If the anon key is rotated** in Supabase, update the `NEXT_PUBLIC_SUPABASE_ANON_KEY` repo secret. The workflow will start failing loudly (visible red ❌ in the Actions tab) until it's updated.
- **If `lesson_progress` is ever renamed or dropped**, update the table name in the workflow URL. Pick any RLS-enabled table that exists — the read doesn't need to return data, it just needs to hit the database.
- **GitHub will email** the repo owner if a scheduled workflow fails. Don't disable that — it's the only signal that the heartbeat has stopped working.
- **GitHub auto-disables scheduled workflows after 60 days of repo inactivity.** This is a separate concern from Supabase. Any commit to the repo resets that 60-day timer, so as long as the redesign work continues, this won't trigger. If the repo ever goes fully dormant, the workflow will pause and Supabase pausing will resume.
- **No code in the app changes.** This is purely CI infrastructure.

---

## When to remove this

Delete the workflow when:

1. Upgrading to Supabase Pro ($25/mo removes pause-on-inactivity entirely), or
2. The site has consistent daily traffic from real users hitting auth or portal routes.

Either condition makes the heartbeat redundant.
