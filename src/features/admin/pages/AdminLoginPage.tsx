import { Link } from "react-router"

import { ROUTES } from "@/app/router/routePaths"

export function AdminLoginPage() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[#f5f5f3] px-5 py-10 text-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <section className="w-full max-w-md border border-black/10 bg-white p-7 md:p-9">
        <p className="text-sm font-semibold tracking-[0.35em] uppercase">
          Fresh<span className="font-light text-black/40">.co</span>
        </p>
        <p className="mt-8 text-[10px] tracking-[0.22em] uppercase text-black/40">Administrador</p>
        <h1
          className="mt-2 text-4xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Iniciar sesión
        </h1>
        <p className="mt-4 text-sm leading-6 text-black/50">
          La pantalla ya está separada del panel. Implementaremos autenticación real cuando exista el backend; por ahora no guardamos ni simulamos credenciales.
        </p>

        <div className="mt-8 border border-dashed border-black/20 p-4 text-xs leading-5 text-black/45">
          Autenticación pendiente de la fase backend.
        </div>

        <Link
          to={ROUTES.home}
          className="mt-6 inline-block text-[10px] tracking-[0.15em] uppercase text-black/45 hover:text-black"
        >
          Volver a la tienda
        </Link>
      </section>
    </main>
  )
}
