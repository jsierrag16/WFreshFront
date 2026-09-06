import type { KeyboardEvent } from "react"

import heroImage from "@/assets/images/fresh-hero.png"

export function HeroSection() {
  const goToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative h-screen bg-black overflow-hidden cursor-pointer"
      onClick={goToCatalog}
      role="button"
      aria-label="Ver catálogo"
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) => event.key === "Enter" && goToCatalog()}
    >
      <img
        src={heroImage}
        alt="Fresh.co"
        className="absolute inset-0 w-full h-full object-cover select-none"
        style={{ objectPosition: "32% center" }}
        draggable={false}
      />
    </section>
  )
}
