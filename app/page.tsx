import { MainWrapper } from "@/components/layout/main-wrapper"
import type {Metadata} from 'next'
import { PageWrapper } from "@/components/layout/page-wrapper"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeCategories } from "@/components/sections/home-categories"
import { HomeFaqFooter } from "@/components/sections/home-faq-footer"
import { HomeJury } from "@/components/sections/home-jury"
import { HomeProcess } from "@/components/sections/home-process"
import { HomeRecap } from "@/components/sections/home-recap"
import { getHomeContent } from "@/lib/home-content"

export async function generateMetadata(): Promise<Metadata> {
  const {page, settings} = await getHomeContent()
  const seo = {...settings.seo, ...page.seo}

  return {
    title: seo.title,
    description: seo.description,
    openGraph: seo.ogImageUrl ? {images: [{url: seo.ogImageUrl}]} : undefined,
  }
}

export default async function Page() {
  const content = await getHomeContent()

  return (
    <PageWrapper>
      <MainWrapper>
        <HomeHero content={content.page.hero} socials={content.settings.socialLinks} />
        <HomeRecap content={content.page.recap} />
        <HomeProcess content={content.page.process} />
        <HomeCategories categories={content.categories} content={content.page.categories} />
        <HomeJury judges={content.judges} content={content.page.jury} />
        <HomeFaqFooter faqs={content.faqs} content={content.page.faq} settings={content.settings} />
      </MainWrapper>
    </PageWrapper>
  )
}
