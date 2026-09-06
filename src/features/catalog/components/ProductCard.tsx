import type { Product } from "@/features/catalog/types/catalog"
import { WhatsAppIcon } from "@/shared/components/icons/SocialIcons"
import { makeWhatsAppUrl } from "@/shared/utils/whatsapp"

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group text-center">
      <div className="overflow-hidden bg-[#f2f2f2] aspect-[4/5] mb-3 md:mb-4 relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {product.subcategory === "ORIGINALES" && (
          <span className="absolute top-2 left-2 text-[8px] md:text-[9px] tracking-[0.18em] uppercase bg-black text-white px-1.5 py-0.5">
            Bajo pedido
          </span>
        )}
      </div>

      <p className="text-[11px] md:text-[13px] font-medium tracking-wide mb-3 leading-snug px-1">
        {product.name}
      </p>

      <a
        href={makeWhatsAppUrl(product.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.18em] md:tracking-[0.2em] uppercase border border-black px-3 md:px-4 py-2.5 min-h-[38px] hover:bg-black hover:text-white transition-colors duration-200"
      >
        <WhatsAppIcon size={11} />
        Consultar
      </a>
    </div>
  )
}
