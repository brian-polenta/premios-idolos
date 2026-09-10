import type { ComponentProps } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("", {
  variants: {
    spacing: {
      none: "",
      small: "py-section-sm",
      medium: "py-section-md",
      large: "py-section-lg",
    },
  },
  defaultVariants: { spacing: "medium" },
})

export function Section({
  className,
  spacing,
  ...props
}: ComponentProps<"section"> & VariantProps<typeof sectionVariants>) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing }), className)}
      {...props}
    />
  )
}
