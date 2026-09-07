export const ROUTES = {
  home: "/",
  catalog: "/catalogo",
  admin: {
    root: "/admin",
    login: "/admin/login",
    products: "/admin/productos",
    newProduct: "/admin/productos/nuevo",
    editProduct: (productId: string | number) => `/admin/productos/${productId}/editar`,
    categories: "/admin/categorias",
  },
} as const
