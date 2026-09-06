import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/shared/components/icons/SocialIcons"
import { CONTACT } from "@/shared/config/contact"

function SocialLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "flex items-center justify-center gap-2 hover:text-white transition-colors"
    : "flex items-center gap-2 hover:text-white transition-colors"

  return (
    <>
      <a
        href={`https://wa.me/${CONTACT.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        <WhatsAppIcon size={mobile ? 13 : 14} /> {CONTACT.whatsappDisplay}
      </a>
      <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <InstagramIcon size={mobile ? 13 : 14} /> {CONTACT.instagramHandle}
      </a>
      <a href={CONTACT.tiktokUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <TikTokIcon size={mobile ? 13 : 14} /> {CONTACT.tiktokHandle}
      </a>
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-white border-t border-white/8 py-8 px-5 md:px-12">
      <div className="max-w-[1360px] mx-auto">
        <div className="hidden md:flex items-center justify-between">
          <span className="text-base font-semibold tracking-[0.38em] uppercase">
            FRESH<span className="font-light opacity-40">.CO</span>
          </span>
          <div className="flex items-center gap-8 text-[11px] tracking-[0.2em] text-white/50">
            <SocialLinks />
          </div>
          <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase">© Fresh.co</p>
        </div>

        <div className="flex md:hidden flex-col items-center gap-5 text-center">
          <span className="text-base font-semibold tracking-[0.38em] uppercase">
            FRESH<span className="font-light opacity-40">.CO</span>
          </span>
          <div className="flex flex-col gap-3 text-[11px] tracking-[0.2em] text-white/50">
            <SocialLinks mobile />
          </div>
          <p className="text-[10px] tracking-[0.3em] text-white/25 uppercase">© Fresh.co</p>
        </div>
      </div>
    </footer>
  )
}
