import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function Eyebrow({
  className,
  children,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      data-slot="eyebrow"
      className={cn(
        "flex items-center gap-3 font-display text-[1.375rem] leading-none",
        className
      )}
      {...props}
    >
      <span aria-hidden className="h-px w-6 bg-current" />
      {children}
      <span aria-hidden className="h-px w-6 bg-current" />
    </p>
  )
}
