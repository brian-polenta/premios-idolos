import type { ComponentProps, ReactNode } from "react"

import { Eyebrow } from "@/components/typography/eyebrow"
import { cn } from "@/lib/utils"

type EditorialHeadingProps = ComponentProps<"div"> & {
  eyebrow: string
  children: ReactNode
  align?: "left" | "center"
  size?: "default" | "large"
  eyebrowTone?: "ink" | "blush"
}

export function EditorialHeading({
  eyebrow,
  children,
  align = "left",
  size = "default",
  eyebrowTone = "ink",
  className,
  ...props
}: EditorialHeadingProps) {
  return (
    <div
      data-slot="editorial-heading"
      className={cn(
        "flex flex-col gap-6 md:gap-12",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
      {...props}
    >
      <Eyebrow
        lineClassName="first:w-5 last:w-[3.8125rem]"
        className={cn(
          "gap-[0.6875rem] leading-normal",
          align === "center" && "[&_span]:!w-[3.8125rem]",
          eyebrowTone === "blush" && "text-brand-blush"
        )}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        data-char-reveal
        className={cn(
          "font-display tracking-[-0.02em]",
          size === "large" ? "type-display-large" : "type-display"
        )}
      >
        {children}
      </h2>
    </div>
  )
}
