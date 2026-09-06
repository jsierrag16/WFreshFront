import type { CatalogFilter, Category, Product } from "@/features/catalog/types/catalog"

export const PRODUCTS: Product[] = [
  // TENIS · HOMBRE
  { id: 1, name: "Nike Air Force 1 Low", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1600185365778-7875a359b924?w=800&h=960&fit=crop&auto=format" },
  { id: 3, name: "Nike Air Max 97", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=960&fit=crop&auto=format" },
  { id: 4, name: "Jordan 1 Retro High OG", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?w=800&h=960&fit=crop&auto=format" },
  { id: 5, name: "Jordan 4 Retro", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?w=800&h=960&fit=crop&auto=format" },
  { id: 9, name: "New Balance 574", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1778358508125-ac77d3eedddb?w=800&h=960&fit=crop&auto=format" },
  { id: 11, name: "Nike Air Max Plus TN", category: "TENIS", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1610664676282-55c8de64f746?w=800&h=960&fit=crop&auto=format" },

  // TENIS · DAMA
  { id: 2, name: "Nike Dunk Low Panda", category: "TENIS", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=960&fit=crop&auto=format" },
  { id: 6, name: "Adidas Samba OG", category: "TENIS", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1641687589434-a86e8de59855?w=800&h=960&fit=crop&auto=format" },
  { id: 7, name: "Adidas Stan Smith", category: "TENIS", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1786550786139-a4780e22d55c?w=800&h=960&fit=crop&auto=format" },
  { id: 8, name: "New Balance 550", category: "TENIS", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1767440557966-219b4b09b34f?w=800&h=960&fit=crop&auto=format" },
  { id: 10, name: "Converse Chuck 70", category: "TENIS", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1585843736857-bd7438e55c67?w=800&h=960&fit=crop&auto=format" },

  // TENIS · ORIGINALES (bajo pedido)
  { id: 12, name: "Jordan 3 Retro", category: "TENIS", subcategory: "ORIGINALES", image: "https://images.unsplash.com/photo-1767684807239-56bf9d81be4a?w=800&h=960&fit=crop&auto=format" },
  { id: 19, name: "Nike Air Force 1 Mid", category: "TENIS", subcategory: "ORIGINALES", image: "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?w=800&h=960&fit=crop&auto=format" },
  { id: 20, name: "Jordan 1 Retro Low OG", category: "TENIS", subcategory: "ORIGINALES", image: "https://images.unsplash.com/photo-1767440557966-219b4b09b34f?w=800&h=960&fit=crop&auto=format" },

  // PERFUMES · HOMBRE
  { id: 13, name: "Jean Paul Gaultier Le Male", category: "PERFUMES", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1778058505814-6d247ccb600c?w=800&h=960&fit=crop&auto=format" },
  { id: 14, name: "Dior Sauvage", category: "PERFUMES", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1760860992203-85ca32536788?w=800&h=960&fit=crop&auto=format" },
  { id: 15, name: "Armani Acqua di Giò", category: "PERFUMES", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1533603208986-24fd819e718a?w=800&h=960&fit=crop&auto=format" },
  { id: 16, name: "Bleu de Chanel", category: "PERFUMES", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1632168264568-f85c71f7ca71?w=800&h=960&fit=crop&auto=format" },
  { id: 18, name: "Versace Eros", category: "PERFUMES", subcategory: "HOMBRE", image: "https://images.unsplash.com/photo-1607506740211-ff3d6b933dda?w=800&h=960&fit=crop&auto=format" },

  // PERFUMES · DAMA
  { id: 17, name: "Calvin Klein CK One", category: "PERFUMES", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1607506740059-3772dc2a10b1?w=800&h=960&fit=crop&auto=format" },
  { id: 21, name: "Chanel N°5", category: "PERFUMES", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=960&fit=crop&auto=format" },
  { id: 22, name: "Lancôme La Vie Est Belle", category: "PERFUMES", subcategory: "DAMA", image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&h=960&fit=crop&auto=format" },
]

export const CATEGORY_FILTERS: Record<Category, CatalogFilter[]> = {
  TENIS: ["TODOS", "DAMA", "HOMBRE", "ORIGINALES"],
  PERFUMES: ["TODOS", "DAMA", "HOMBRE"],
}

export const CATEGORIES: Category[] = ["TENIS", "PERFUMES"]
