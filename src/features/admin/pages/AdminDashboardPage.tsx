import { Link } from "react-router"

import { ROUTES } from "@/app/router/routePaths"
import { AdminPagePlaceholder } from "@/features/admin/components/AdminPagePlaceholder"

const cards = [
  { label: "Productos", value: "—" },
  { label: "Disponibles", value: "—" },
  { label: "Agotados", value: "—" },
  { label: "Categorías", value: "—" },
]

export function AdminDashboardPage() {
  return (
    <AdminPagePlaceholder
      eyebrow="Fresh Admin"
      title="Dashboard"
      description="La estructura del panel ya está lista. Los datos reales llegarán cuando conectemos el backend y la base de datos."
    >
      <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.label} className="border border-black/10 bg-white p-5">
            <p className="text-[10px] tracking-[0.16em] uppercase text-black/40">{card.label}</p>
            <p className="mt-4 text-3xl font-medium">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border border-black/10 bg-white p-5 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium">Gestión de catálogo</p>
            <p className="mt-1 text-xs leading-5 text-black/45">
              En la siguiente fase conectaremos productos, categorías y disponibilidad a una capa de servicios.
            </p>
          </div>
          <Link
            to={ROUTES.admin.products}
            className="inline-flex min-h-10 items-center justify-center bg-black px-4 text-[10px] tracking-[0.16em] uppercase text-white"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </AdminPagePlaceholder>
  )
}
