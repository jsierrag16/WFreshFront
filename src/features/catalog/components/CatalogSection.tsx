import { useState } from "react"

import { CATEGORIES, CATEGORY_FILTERS, PRODUCTS } from "@/features/catalog/data/products"
import type { CatalogFilter, Category } from "@/features/catalog/types/catalog"
import { ProductCard } from "@/features/catalog/components/ProductCard"

export function CatalogSection() {
  const [category, setCategory] = useState<Category>("TENIS")
  const [filter, setFilter] = useState<CatalogFilter>("TODOS")

  const handleCategory = (nextCategory: Category) => {
    setCategory(nextCategory)
    setFilter("TODOS")
  }

  const visibleProducts = PRODUCTS.filter((product) => product.category === category).filter(
    (product) => filter === "TODOS" || product.subcategory === filter,
  )

  return (
    <section id="catalogo" className="py-12 md:py-24 px-4 md:px-12">
      <div className="max-w-[1360px] mx-auto">
        <h2
          className="text-center text-3xl md:text-6xl mb-8 md:mb-10"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Catálogo
        </h2>

        <div className="flex justify-center gap-2 mb-4">
          {CATEGORIES.map((catalogCategory) => (
            <button
              key={catalogCategory}
              onClick={() => handleCategory(catalogCategory)}
              className={`text-[11px] tracking-[0.28em] uppercase px-6 md:px-8 py-3 min-h-[44px] border transition-colors duration-200 ${
                category === catalogCategory
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black/25 hover:border-black"
              }`}
            >
              {catalogCategory}
            </button>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-1.5 mb-2">
          {CATEGORY_FILTERS[category].map((catalogFilter) => (
            <button
              key={catalogFilter}
              onClick={() => setFilter(catalogFilter)}
              className={`text-[9px] md:text-[10px] tracking-[0.22em] uppercase px-3.5 md:px-5 py-2 min-h-[36px] border transition-colors duration-200 ${
                filter === catalogFilter
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#666] border-black/20 hover:border-black hover:text-black"
              }`}
            >
              {catalogFilter}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8 md:mb-12 min-h-[24px]">
          {filter === "ORIGINALES" && (
            <p className="text-[10px] tracking-[0.18em] uppercase text-[#999]">
              Disponibles bajo pedido
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-14">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <p className="text-center text-sm text-[#999] py-20 tracking-wide">
            No hay referencias en esta categoría aún.
          </p>
        )}
      </div>
    </section>
  )
}
