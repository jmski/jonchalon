'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useFormSubmission } from '@/lib/hooks'
import { renderHeadline } from '@/lib/render-headline'
import type { StarterGuideCapture } from '@/lib/types'

// ─────────────────────────────────────────────────────────────────────────────
// StarterGuideForm
//
// Shared starter-guide capture used on audit + foundation (and migrated onto
// home + ikigai in step 4). Reuses the existing email-capture-* CSS so it
// inherits the same visual treatment as the newsletter form until starter-guide
// specific styles land in the polish phase.
// ─────────────────────────────────────────────────────────────────────────────

interface StarterGuideFormProps {
  guide: StarterGuideCapture | null | undefined
  successMessage?: string
}

const FALLBACK = {
  eyebrow: 'Starter Guide',
  headline: 'Get the Foundation Starter Guide',
  body: 'A short PDF outlining the four pillars of embodied presence — and where most people start.',
  firstNamePlaceholder: 'First name',
  emailPlaceholder: 'your@email.com',
  submitLabel: 'Send me the guide',
  success: 'Check your inbox — the guide is on its way.',
}

export function StarterGuideForm({ guide, successMessage }: StarterGuideFormProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const { state, submit } = useFormSubmission({
    endpoint: '/api/starter-guide',
    onSuccess: () => {
      setFirstName('')
      setEmail('')
    },
  })

  const eyebrow = guide?.eyebrow ?? FALLBACK.eyebrow
  const headline = guide?.headline ?? FALLBACK.headline
  const body = guide?.body ?? FALLBACK.body
  const firstNamePlaceholder = guide?.firstNamePlaceholder ?? FALLBACK.firstNamePlaceholder
  const emailPlaceholder = guide?.emailPlaceholder ?? FALLBACK.emailPlaceholder
  const submitLabel = guide?.submitLabel ?? FALLBACK.submitLabel
  const success = successMessage ?? FALLBACK.success

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    submit({ firstName, email })
  }

  return (
    <section className="email-capture-section starter-guide-form">
      <div className="email-capture-inner">
        <div className="email-capture-copy">
          {eyebrow && <span className="email-capture-eyebrow">{eyebrow}</span>}
          <h2 className="email-capture-heading">{renderHeadline(headline)}</h2>
          {body && <p className="email-capture-subheading">{body}</p>}
        </div>

        {state.submitted ? (
          <div className="email-capture-success">
            <p className="email-capture-success-message">{success}</p>
          </div>
        ) : (
          <form className="email-capture-form starter-guide-form-fields" onSubmit={handleSubmit} noValidate>
            <div className="email-capture-field-group starter-guide-form-row">
              <input
                type="text"
                className="email-capture-input starter-guide-input"
                placeholder={firstNamePlaceholder}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                aria-label="First name"
                disabled={state.isSubmitting}
              />
              <input
                type="email"
                className="email-capture-input starter-guide-input"
                placeholder={emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                disabled={state.isSubmitting}
              />
              <Button type="submit" disabled={state.isSubmitting}>
                {state.isSubmitting ? 'Sending…' : submitLabel}
              </Button>
            </div>
            {state.error && (
              <p className="email-capture-error" role="alert">{state.error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

export default StarterGuideForm

