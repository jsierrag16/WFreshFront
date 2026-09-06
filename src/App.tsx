import { CatalogSection } from "@/features/catalog/components/CatalogSection"
import { HeroSection } from "@/features/catalog/components/HeroSection"
import { FloatingWhatsApp } from "@/shared/components/FloatingWhatsApp"
import { SiteFooter } from "@/shared/components/SiteFooter"

export default function App() {
  return (
    <div className="bg-white text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <HeroSection />
      <CatalogSection />
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
