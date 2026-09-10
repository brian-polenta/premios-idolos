import Image from "next/image"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  variant?: "lockup-light" | "wordmark-dark"
  priority?: boolean
}

const logos = {
  "lockup-light": {
    src: "/brand/logo-premios-idolo-light.svg",
    alt: "Premios Ídolo",
    width: 112,
    height: 48,
  },
  "wordmark-dark": {
    src: "/brand/wordmark-idolo-dark.svg",
    alt: "Ídolo",
    width: 1390,
    height: 486,
  },
} as const

export function BrandLogo({
  className,
  variant = "lockup-light",
  priority = false,
}: BrandLogoProps) {
  const logo = logos[variant]

  return (
    <Image
      data-slot="brand-logo"
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  )
}
