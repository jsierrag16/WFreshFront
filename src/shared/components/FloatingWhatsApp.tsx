import { WhatsAppIcon } from "@/shared/components/icons/SocialIcons"
import { makeWhatsAppUrl } from "@/shared/utils/whatsapp"

export function FloatingWhatsApp() {
  return (
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
  )
}
