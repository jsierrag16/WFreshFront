import { Outlet } from "react-router"

import { FloatingWhatsApp } from "@/shared/components/FloatingWhatsApp"
import { SiteFooter } from "@/shared/components/SiteFooter"

export function PublicLayout() {
  return (
    <div className="bg-white text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
