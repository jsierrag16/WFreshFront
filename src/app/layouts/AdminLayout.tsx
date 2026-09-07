import { NavLink, Outlet } from "react-router"

import { ROUTES } from "@/app/router/routePaths"

const navigation = [
  { label: "Dashboard", to: ROUTES.admin.root, end: true },
  { label: "Productos", to: ROUTES.admin.products },
  { label: "Categorías", to: ROUTES.admin.categories },
]

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <header className="border-b border-black/10 bg-white px-5 py-4 md:hidden">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase">
          Fresh<span className="font-light text-black/40">.co</span>
        </p>
        <p className="mt-1 text-[10px] tracking-[0.2em] uppercase text-black/40">Admin</p>
      </header>

      <div className="mx-auto grid min-h-screen max-w-[1600px] md:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-black/10 bg-white px-5 py-8 md:flex md:flex-col">
          <div className="mb-10">
            <p className="text-base font-semibold tracking-[0.35em] uppercase">
              Fresh<span className="font-light text-black/40">.co</span>
            </p>
            <p className="mt-2 text-[10px] tracking-[0.22em] uppercase text-black/40">Administrador</p>
          </div>

          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-3 text-[11px] tracking-[0.16em] uppercase transition-colors ${
                    isActive ? "bg-black text-white" : "text-black/55 hover:bg-black/5 hover:text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto border-t border-black/10 pt-5">
            <NavLink
              to={ROUTES.home}
              className="text-[10px] tracking-[0.15em] uppercase text-black/45 hover:text-black"
            >
              Ver tienda pública
            </NavLink>
          </div>
        </aside>

        <div className="min-w-0">
          <nav className="flex gap-2 overflow-x-auto border-b border-black/10 bg-white px-4 py-3 md:hidden">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `whitespace-nowrap px-3 py-2 text-[10px] tracking-[0.14em] uppercase ${
                    isActive ? "bg-black text-white" : "border border-black/10 text-black/55"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <main className="px-4 py-8 md:px-10 md:py-10 lg:px-14">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
