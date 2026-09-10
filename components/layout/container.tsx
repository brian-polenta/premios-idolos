import type { ComponentProps } from "react"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      small: "max-w-[var(--container-sm)]",
      medium: "max-w-[var(--container-md)]",
      large: "max-w-[var(--container-lg)]",
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "large" },
})

export function Container({
  className,
  size,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof containerVariants>) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  )
}
