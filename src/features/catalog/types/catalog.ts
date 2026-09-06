export type Category = "TENIS" | "PERFUMES"

export type ProductSubcategory = "DAMA" | "HOMBRE" | "ORIGINALES"

export type CatalogFilter = "TODOS" | ProductSubcategory

export interface Product {
  id: number
  name: string
  category: Category
  subcategory: ProductSubcategory
  image: string
}
