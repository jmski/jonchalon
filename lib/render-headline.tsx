/**
 * Converts all {{anchor}} markers in a headline string into <em>anchor</em>.
 *
 * Example:
 *   renderHeadline('Find the work you were {{meant}} for.')
 *   → <>Find the work you were <em>meant</em> for.</>
 */
export function renderHeadline(headline: string): React.ReactNode {
  const anchorPattern = /\{\{(.+?)\}\}/g
  const matches = [...headline.matchAll(anchorPattern)]

  if (matches.length === 0) {
    return headline
  }

  const parts: React.ReactNode[] = []
  let cursor = 0

  matches.forEach((match, idx) => {
    const fullMatch = match[0]
    const anchorWord = match[1]
    const start = match.index ?? 0

    if (start > cursor) {
      parts.push(headline.slice(cursor, start))
    }

    parts.push(<em key={`anchor-${idx}`}>{anchorWord}</em>)
    cursor = start + fullMatch.length
  })

  if (cursor < headline.length) {
    parts.push(headline.slice(cursor))
  }

  return (
    <>
      {parts}
    </>
  )
}
