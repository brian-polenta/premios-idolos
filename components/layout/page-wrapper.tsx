import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function PageWrapper({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="page-wrapper"
      className={cn("min-h-[100dvh] overflow-clip", className)}
      {...props}
    />
  )
}
