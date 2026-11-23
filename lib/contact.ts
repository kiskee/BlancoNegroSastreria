export const WHATSAPP_NUMBER = '573003268025'
export const PHONE_DISPLAY = '300 326 8025'

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
