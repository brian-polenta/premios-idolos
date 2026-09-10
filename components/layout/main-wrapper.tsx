import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function MainWrapper({ className, ...props }: ComponentProps<"main">) {
  return (
    <main
      data-slot="main-wrapper"
      className={cn("relative", className)}
      {...props}
    />
  )
}
