import { AdminPagePlaceholder } from "@/features/admin/components/AdminPagePlaceholder"

export function AdminProductCreatePage() {
  return (
    <AdminPagePlaceholder
      eyebrow="Productos"
      title="Nuevo producto"
      description="La ruta para crear productos ya existe. El formulario llegará cuando definamos el modelo definitivo del producto y la API, para evitar construir campos que luego tengamos que rehacer."
    />
  )
}
