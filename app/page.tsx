import { MainWrapper } from "@/components/layout/main-wrapper"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeRecap } from "@/components/sections/home-recap"

export default function Page() {
  return (
    <PageWrapper>
      <MainWrapper>
        <HomeHero />
        <HomeRecap />
      </MainWrapper>
    </PageWrapper>
  )
}
