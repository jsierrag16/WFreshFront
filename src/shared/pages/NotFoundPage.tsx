import { Link } from "react-router"

import { ROUTES } from "@/app/router/routePaths"

export function NotFoundPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-white px-5 text-center text-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-black/35">Error 404</p>
        <h1
          className="mt-3 text-5xl md:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Página no encontrada
        </h1>
        <Link
          to={ROUTES.home}
          className="mt-8 inline-flex min-h-11 items-center justify-center bg-black px-5 text-[10px] tracking-[0.18em] uppercase text-white"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
