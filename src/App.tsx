import { useState } from "react"
import heroImage from "./imports/ChatGPT_Image_31_ago_2026__19_28_29_upscayl_4x_upscayl-standard-4x.png"

const WHATSAPP_NUMBER = "573009575554"

const makeWhatsAppUrl = (productName: string) => {
  const msg = `Hola, vengo del catálogo de Fresh 👋\nQuisiera consultar precio y disponibilidad de:\n\n${productName}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

const INSTAGRAM_URL = "https://www.instagram.com/wearfresh.co"
const TIKTOK_URL = "https://www.tiktok.com/@wearfresh.co"

type Category = "TENIS" | "PERFUMES"
type Sub = "TODOS" | "DAMA" | "HOMBRE" | "ORIGINALES"

interface Product {
  id: number
  name: string
  category: Category
  sub: Exclude<Sub, "TODOS">
  image: string
}

const products: Product[] = [
  // ── TENIS · HOMBRE ──
  { id: 1,  name: "Nike Air Force 1 Low",    category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1600185365778-7875a359b924?w=800&h=960&fit=crop&auto=format" },
  { id: 3,  name: "Nike Air Max 97",         category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=960&fit=crop&auto=format" },
  { id: 4,  name: "Jordan 1 Retro High OG",  category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1731132198530-e4b2dc51d511?w=800&h=960&fit=crop&auto=format" },
  { id: 5,  name: "Jordan 4 Retro",          category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1655853548169-646b6e0f15ca?w=800&h=960&fit=crop&auto=format" },
  { id: 9,  name: "New Balance 574",         category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1778358508125-ac77d3eedddb?w=800&h=960&fit=crop&auto=format" },
  { id: 11, name: "Nike Air Max Plus TN",    category: "TENIS",    sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1610664676282-55c8de64f746?w=800&h=960&fit=crop&auto=format" },
  // ── TENIS · DAMA ──
  { id: 2,  name: "Nike Dunk Low Panda",     category: "TENIS",    sub: "DAMA",      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&h=960&fit=crop&auto=format" },
  { id: 6,  name: "Adidas Samba OG",        category: "TENIS",    sub: "DAMA",      image: "https://images.unsplash.com/photo-1641687589434-a86e8de59855?w=800&h=960&fit=crop&auto=format" },
  { id: 7,  name: "Adidas Stan Smith",       category: "TENIS",    sub: "DAMA",      image: "https://images.unsplash.com/photo-1786550786139-a4780e22d55c?w=800&h=960&fit=crop&auto=format" },
  { id: 8,  name: "New Balance 550",         category: "TENIS",    sub: "DAMA",      image: "https://images.unsplash.com/photo-1767440557966-219b4b09b34f?w=800&h=960&fit=crop&auto=format" },
  { id: 10, name: "Converse Chuck 70",       category: "TENIS",    sub: "DAMA",      image: "https://images.unsplash.com/photo-1585843736857-bd7438e55c67?w=800&h=960&fit=crop&auto=format" },
  // ── TENIS · ORIGINALES (bajo pedido) ──
  { id: 12, name: "Jordan 3 Retro",          category: "TENIS",    sub: "ORIGINALES", image: "https://images.unsplash.com/photo-1767684807239-56bf9d81be4a?w=800&h=960&fit=crop&auto=format" },
  { id: 19, name: "Nike Air Force 1 Mid",    category: "TENIS",    sub: "ORIGINALES", image: "https://images.unsplash.com/photo-1518656306295-aa28b28b2504?w=800&h=960&fit=crop&auto=format" },
  { id: 20, name: "Jordan 1 Retro Low OG",   category: "TENIS",    sub: "ORIGINALES", image: "https://images.unsplash.com/photo-1767440557966-219b4b09b34f?w=800&h=960&fit=crop&auto=format" },
  // ── PERFUMES · HOMBRE ──
  { id: 13, name: "Jean Paul Gaultier Le Male", category: "PERFUMES", sub: "HOMBRE", image: "https://images.unsplash.com/photo-1778058505814-6d247ccb600c?w=800&h=960&fit=crop&auto=format" },
  { id: 14, name: "Dior Sauvage",            category: "PERFUMES", sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1760860992203-85ca32536788?w=800&h=960&fit=crop&auto=format" },
  { id: 15, name: "Armani Acqua di Giò",     category: "PERFUMES", sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1533603208986-24fd819e718a?w=800&h=960&fit=crop&auto=format" },
  { id: 16, name: "Bleu de Chanel",          category: "PERFUMES", sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1632168264568-f85c71f7ca71?w=800&h=960&fit=crop&auto=format" },
  { id: 18, name: "Versace Eros",            category: "PERFUMES", sub: "HOMBRE",    image: "https://images.unsplash.com/photo-1607506740211-ff3d6b933dda?w=800&h=960&fit=crop&auto=format" },
  // ── PERFUMES · DAMA ──
  { id: 17, name: "Calvin Klein CK One",     category: "PERFUMES", sub: "DAMA",      image: "https://images.unsplash.com/photo-1607506740059-3772dc2a10b1?w=800&h=960&fit=crop&auto=format" },
  { id: 21, name: "Chanel N°5",             category: "PERFUMES", sub: "DAMA",      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=960&fit=crop&auto=format" },
  { id: 22, name: "Lancôme La Vie Est Belle", category: "PERFUMES", sub: "DAMA",    image: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&h=960&fit=crop&auto=format" },
]

const SUBS: Record<Category, Sub[]> = {
  TENIS:    ["TODOS", "DAMA", "HOMBRE", "ORIGINALES"],
  PERFUMES: ["TODOS", "DAMA", "HOMBRE"],
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.79a8.16 8.16 0 004.77 1.52V6.86a4.85 4.85 0 01-1-.17z" />
    </svg>
  )
}

export default function App() {
  const [category, setCategory] = useState<Category>("TENIS")
  const [sub, setSub] = useState<Sub>("TODOS")

  const goToCatalog = () => {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCategory = (cat: Category) => {
    setCategory(cat)
    setSub("TODOS")
  }

  const visible = products
    .filter((p) => p.category === category)
    .filter((p) => sub === "TODOS" || p.sub === sub)

  return (
    <div className="bg-white text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ══ HERO ══ */}
      <section
        id="hero"
        className="relative h-screen bg-black overflow-hidden cursor-pointer"
        onClick={goToCatalog}
        role="button"
        aria-label="Ver catálogo"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && goToCatalog()}
      >
        <img
          src={heroImage}
          alt="Fresh.co"
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ objectPosition: "32% center" }}
          draggable={false}
        />
      </section>

      {/* ══ CATÁLOGO ══ */}
      <section id="catalogo" className="py-12 md:py-24 px-4 md:px-12">
        <div className="max-w-[1360px] mx-auto">

          {/* Título */}
          <h2
            className="text-center text-3xl md:text-6xl mb-8 md:mb-10"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Catálogo
          </h2>

          {/* Categorías principales */}
          <div className="flex justify-center gap-2 mb-4">
            {(["TENIS", "PERFUMES"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`text-[11px] tracking-[0.28em] uppercase px-6 md:px-8 py-3 min-h-[44px] border transition-colors duration-200 ${
                  category === cat
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/25 hover:border-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Subcategorías */}
          <div className="flex justify-center flex-wrap gap-1.5 mb-2">
            {SUBS[category].map((s) => (
              <button
                key={s}
                onClick={() => setSub(s)}
                className={`text-[9px] md:text-[10px] tracking-[0.22em] uppercase px-3.5 md:px-5 py-2 min-h-[36px] border transition-colors duration-200 ${
                  sub === s
                    ? "bg-black text-white border-black"
                    : "bg-white text-[#666] border-black/20 hover:border-black hover:text-black"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Nota bajo pedido — solo cuando ORIGINALES está activo */}
          <div className="flex justify-center mb-8 md:mb-12 min-h-[24px]">
            {sub === "ORIGINALES" && (
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#999]">
                Disponibles bajo pedido
              </p>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-14">
            {visible.map((product) => (
              <div key={product.id} className="group text-center">
                <div className="overflow-hidden bg-[#f2f2f2] aspect-[4/5] mb-3 md:mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {product.sub === "ORIGINALES" && (
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
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-sm text-[#999] py-20 tracking-wide">
              No hay referencias en esta categoría aún.
            </p>
          )}

        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-black text-white border-t border-white/8 py-8 px-5 md:px-12">
        <div className="max-w-[1360px] mx-auto">
          <div className="hidden md:flex items-center justify-between">
            <span className="text-base font-semibold tracking-[0.38em] uppercase">
              FRESH<span className="font-light opacity-40">.CO</span>
            </span>
            <div className="flex items-center gap-8 text-[11px] tracking-[0.2em] text-white/50">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <WhatsAppIcon size={14} /> 300 957 5554
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <InstagramIcon size={14} /> @wearfresh.co
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <TikTokIcon size={14} /> @wearfresh.co
              </a>
            </div>
            <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase">© Fresh.co</p>
          </div>
          <div className="flex md:hidden flex-col items-center gap-5 text-center">
            <span className="text-base font-semibold tracking-[0.38em] uppercase">
              FRESH<span className="font-light opacity-40">.CO</span>
            </span>
            <div className="flex flex-col gap-3 text-[11px] tracking-[0.2em] text-white/50">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <WhatsAppIcon size={13} /> 300 957 5554
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <InstagramIcon size={13} /> @wearfresh.co
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                <TikTokIcon size={13} /> @wearfresh.co
              </a>
            </div>
            <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase">© Fresh.co</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp — mobile */}
      <a
        href={makeWhatsAppUrl("consulta general")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 md:hidden bg-black text-white flex items-center gap-2 px-4 py-3 hover:bg-[#111] transition-colors"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={16} />
        <span className="text-[10px] tracking-[0.2em] uppercase">WhatsApp</span>
      </a>
    </div>
  )
}
