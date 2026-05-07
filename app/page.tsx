import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { FeaturedProperties } from "../components/featured-properties"
import { AboutSection } from "../components/about-section"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FeaturedProperties />
      <AboutSection />
      <Footer />
    </main>
  )
}
