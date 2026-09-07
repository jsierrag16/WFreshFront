import { Link } from "react-router"

import { ROUTES } from "@/app/router/routePaths"
import { AdminPagePlaceholder } from "@/features/admin/components/AdminPagePlaceholder"

export function AdminProductsPage() {
  return (
    <AdminPagePlaceholder
      eyebrow="Catálogo"
      title="Productos"
      description="Esta será la vista para crear, editar, activar, desactivar y ordenar productos. Por ahora dejamos la ruta y el layout preparados sin duplicar la información temporal del catálogo."
    >
      <div className="mt-8 border border-dashed border-black/20 bg-white p-6 md:p-8">
        <p className="text-sm text-black/50">La tabla de productos se conectará en la fase de servicios/API.</p>
        <Link
          to={ROUTES.admin.newProduct}
          className="mt-5 inline-flex min-h-10 items-center justify-center bg-black px-4 text-[10px] tracking-[0.16em] uppercase text-white"
        >
          + Nuevo producto
        </Link>
      </div>
    </AdminPagePlaceholder>
  )
}
