const uppercaseLetter = /[A-ZÁÉÍÓÚÜÑ]/

type AccentUppercaseProps = {
  text: string
  className?: string
}

type ResponsiveAccentUppercaseProps = {
  desktopText: string
  mobileText: string
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

export function ResponsiveAccentUppercase({desktopText, mobileText, className}: ResponsiveAccentUppercaseProps) {
  return (
    <>
      <span className="md:hidden"><AccentUppercase text={mobileText} className={className} /></span>
      <span className="hidden md:inline"><AccentUppercase text={desktopText} className={className} /></span>
    </>
  )
}
import {Fragment} from 'react'
