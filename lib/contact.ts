export const WHATSAPP_NUMBER = '573003268025'
export const PHONE_DISPLAY = '300 326 8025'

export const ADDRESS_STREET = 'Calle 36 Sur # 41-32, Segundo piso'
export const ADDRESS_REFERENCE = 'Arriba de Las Granjas'
export const ADDRESS_CITY = 'Envigado, Antioquia'

const MAPS_QUERY = encodeURIComponent(
  'Calle 36 Sur # 41-32, Envigado, Antioquia, Colombia'
)

export const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`
export const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=17&output=embed`

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
