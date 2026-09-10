import localFont from "next/font/local"

import "./globals.css"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const openSans = localFont({
  src: "./fonts/open-sans-variable.ttf",
  variable: "--font-open-sans",
  display: "swap",
})

const gambarino = localFont({
  src: "./fonts/gambarino-regular.otf",
  variable: "--font-gambarino",
  display: "swap",
})

const rosevine = localFont({
  src: "./fonts/rosevine-free.otf",
  variable: "--font-rosevine",
  display: "swap",
})

const meaCulpa = localFont({
  src: "./fonts/mea-culpa-regular.ttf",
  variable: "--font-mea-culpa",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        openSans.variable,
        gambarino.variable,
        rosevine.variable,
        meaCulpa.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
