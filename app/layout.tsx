import localFont from "next/font/local"
import type { Metadata } from "next"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity/visual-editing"

import "./globals.css"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SanityLive } from "@/sanity/lib/live"

export const metadata: Metadata = {
  metadataBase: new URL("https://premios-idolos.vercel.app"),
  title: "Premios Ídolo 2026 | Los creadores que mueven al país",
  description:
    "Nominá a tus creadores favoritos en Premios Ídolo 2026. La comunidad y el jurado reconocen a quienes mueven al país.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Premios Ídolo",
    title: "Premios Ídolo 2026 | Los creadores que mueven al país",
    description: "Nominá a tus creadores favoritos en Premios Ídolo 2026.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premios Ídolo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premios Ídolo 2026 | Los creadores que mueven al país",
    description: "Nominá a tus creadores favoritos en Premios Ídolo 2026.",
    images: ["/opengraph-image.jpg"],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Premios Ídolo",
      url: "https://premios-idolos.vercel.app",
      logo: "https://premios-idolos.vercel.app/apple-icon.png",
    },
    {
      "@type": "Event",
      name: "Premios Ídolo 2026",
      description:
        "Los premios a los creadores que mueven al país. Nominá a tus favoritos en cada categoría.",
      url: "https://premios-idolos.vercel.app",
      image: "https://premios-idolos.vercel.app/opengraph-image.jpg",
      startDate: "2026-10-28",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "Argentina",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AR",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "Premios Ídolo",
        url: "https://premios-idolos.vercel.app",
      },
    },
  ],
}

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

export default async function RootLayout({
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}
      </body>
    </html>
  )
}
