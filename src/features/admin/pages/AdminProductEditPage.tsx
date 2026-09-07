import { useParams } from "react-router"

import { AdminPagePlaceholder } from "@/features/admin/components/AdminPagePlaceholder"

export function AdminProductEditPage() {
  const { productId } = useParams()

  return (
    <AdminPagePlaceholder
      eyebrow="Productos"
      title="Editar producto"
      description={`Ruta dinámica preparada para el producto ${productId ?? ""}. Más adelante cargaremos aquí sus datos reales desde la API.`}
    />
  )
}
