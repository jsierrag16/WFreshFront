import { CONTACT } from "@/shared/config/contact"

export function makeWhatsAppUrl(productName: string) {
  const message = `Hola, vengo del catálogo de Fresh 👋\nQuisiera consultar precio y disponibilidad de:\n\n${productName}`

  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
}
