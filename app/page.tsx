import { MainWrapper } from "@/components/layout/main-wrapper"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { HomeHero } from "@/components/sections/home-hero"

export default function Page() {
  return (
    <PageWrapper>
      <MainWrapper>
        <HomeHero />
      </MainWrapper>
    </PageWrapper>
  )
}
