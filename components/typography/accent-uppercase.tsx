const uppercaseLetter = /[A-ZÁÉÍÓÚÜÑ]/

type AccentUppercaseProps = {
  text: string
  className?: string
}

/**
 * In editorial headings, an uppercase letter is an intentional art direction
 * cue from the CMS: render only that letter in Mea Culpa.
 */
export function AccentUppercase({text, className = 'font-accent'}: AccentUppercaseProps) {
  return Array.from(text).map((character, index) => {
    if (character === '\n') return <br key={`line-break-${index}`} />

    return (
      <Fragment key={`${character}-${index}`}>
        <span
          data-editorial-character
          className={uppercaseLetter.test(character) ? className : undefined}
        >
          {character}
        </span>
      </Fragment>
    )
  })
}
import {Fragment} from 'react'
