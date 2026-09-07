import { Route, Routes } from "react-router"

import { AdminLayout } from "@/app/layouts/AdminLayout"
import { PublicLayout } from "@/app/layouts/PublicLayout"
import { ROUTES } from "@/app/router/routePaths"
import { AdminCategoriesPage } from "@/features/admin/pages/AdminCategoriesPage"
import { AdminDashboardPage } from "@/features/admin/pages/AdminDashboardPage"
import { AdminLoginPage } from "@/features/admin/pages/AdminLoginPage"
import { AdminProductCreatePage } from "@/features/admin/pages/AdminProductCreatePage"
import { AdminProductEditPage } from "@/features/admin/pages/AdminProductEditPage"
import { AdminProductsPage } from "@/features/admin/pages/AdminProductsPage"
import { CatalogPage } from "@/features/catalog/pages/CatalogPage"
import { HomePage } from "@/features/catalog/pages/HomePage"
import { NotFoundPage } from "@/shared/pages/NotFoundPage"

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.catalog} element={<CatalogPage />} />
      </Route>

      <Route path={ROUTES.admin.login} element={<AdminLoginPage />} />

      <Route path={ROUTES.admin.root} element={<AdminLayout />}>
        <Route index element={<AdminDashboardPage />} />
        <Route path="productos" element={<AdminProductsPage />} />
        <Route path="productos/nuevo" element={<AdminProductCreatePage />} />
        <Route path="productos/:productId/editar" element={<AdminProductEditPage />} />
        <Route path="categorias" element={<AdminCategoriesPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
