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
  return Array.from(text).map((character, index) => (
    <span
      key={`${character}-${index}`}
      data-editorial-character
      className={uppercaseLetter.test(character) ? className : undefined}
    >
      {character}
    </span>
  ))
}
