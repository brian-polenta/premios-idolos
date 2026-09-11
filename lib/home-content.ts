import { client } from "@/sanity/lib/client"

export type Category = {
  name: string
  slug: string
  order: number
  isActive?: boolean
}

export type Faq = {
  question: string
  answer: string
  order: number
}

export type Judge = {
  name: string
  position: string
  companyName?: string
  companyLogoUrl?: string
  photoUrl?: string
  photoStatus: "pending" | "ready"
  order: number
}

export type HomeContent = {
  categories: Category[]
  faqs: Faq[]
  judges: Judge[]
}

const homeContentQuery = `{
  "categories": *[_type == "category" && (!defined(isActive) || isActive)] | order(order asc) {
    name,
    "slug": slug.current,
    order,
    isActive
  },
  "faqs": *[_type == "faq"] | order(order asc) {
    question,
    answer,
    order
  },
  "judges": *[_type == "judge"] | order(order asc) {
    name,
    position,
    companyName,
    "companyLogoUrl": companyLogo.asset->url,
    "photoUrl": photo.asset->url,
    photoStatus,
    order
  }
}`

export async function getHomeContent(): Promise<HomeContent> {
  return client.fetch<HomeContent>(
    homeContentQuery,
    {},
    { next: { revalidate: 60 } }
  )
}
