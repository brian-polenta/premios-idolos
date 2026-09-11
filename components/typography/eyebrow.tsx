import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Eyebrow({
  className,
  lineClassName,
  children,
  ...props
}: ComponentProps<"p"> & { lineClassName?: string }) {
  return (
    <p
      data-slot="eyebrow"
      data-eyebrow-reveal
      className={cn(
        "flex items-center gap-3 font-display text-[1.375rem] leading-none",
        className
      )}
      {...props}
    >
      <span aria-hidden className={cn("h-px w-6 bg-current", lineClassName)} />
      {children}
      <span aria-hidden className={cn("h-px w-6 bg-current", lineClassName)} />
    </p>
  )
}
