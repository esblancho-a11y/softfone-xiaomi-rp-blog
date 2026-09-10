export const storeInfo = {
  name: "SoftFone RP",
  address: "Rua Américo Brasiliense, 835 - Centro",
  phone: "(16) 3636-3965",
  whatsapp: "(16) 3636-3965",
  rating: 4.8,
  years: 21,
  services: ["Venda de Smartphones", "Assistência Técnica", "Garantia Estendida", "Parcelamento até 18x"]
}

const whatsappDigits = `55${storeInfo.whatsapp.replace(/\D/g, '')}`

export const buildWhatsappLink = (message) =>
  `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`

export const phoneLink = `tel:+55${storeInfo.phone.replace(/\D/g, '')}`

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeInfo.address + ', Ribeirão Preto - SP')}`
