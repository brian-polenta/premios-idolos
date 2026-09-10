import { MainWrapper } from "@/components/layout/main-wrapper"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeCategories } from "@/components/sections/home-categories"
import { HomeFaqFooter } from "@/components/sections/home-faq-footer"
import { HomeJury } from "@/components/sections/home-jury"
import { HomeProcess } from "@/components/sections/home-process"
import { HomeRecap } from "@/components/sections/home-recap"
import { getHomeContent } from "@/lib/home-content"

export default async function Page() {
  const content = await getHomeContent()

  return (
    <PageWrapper>
      <MainWrapper>
        <HomeHero />
        <HomeRecap />
        <HomeProcess />
        <HomeCategories categories={content.categories} />
        <HomeJury judges={content.judges} />
        <HomeFaqFooter faqs={content.faqs} />
      </MainWrapper>
    </PageWrapper>
  )
}
