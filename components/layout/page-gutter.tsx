import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function PageGutter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="page-gutter"
      className={cn("px-page", className)}
      {...props}
    />
  )
}
