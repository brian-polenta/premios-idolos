import {Fragment} from 'react'

type AccentInitialsProps = {
  text: string
  wordIndexes: number[]
}

/** Keeps a CMS title as one string while styling selected word initials. */
export function AccentInitials({text, wordIndexes}: AccentInitialsProps) {
  let wordIndex = 0

  return text.split(/(\s+)/).map((part, index) => {
    if (!part || /^\s+$/.test(part)) return <Fragment key={index}>{part}</Fragment>

    const shouldAccent = wordIndexes.includes(wordIndex)
    wordIndex += 1

    if (!shouldAccent) return <Fragment key={index}>{part}</Fragment>

    return (
      <span key={index}>
        <span className="relative inline-block font-accent text-[1.12em] leading-[0] font-normal">
          {part.charAt(0)}
        </span>
        {part.slice(1)}
      </span>
    )
  })
}
