import { Link } from 'react-router-dom'
import { storeInfo, buildWhatsappLink, phoneLink, mapsLink } from '@/lib/store.js'

function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">SoftFone Xiaomi RP</h4>
            <p className="text-gray-300">
              21 anos de tradição em Ribeirão Preto. Sua loja especializada
              em smartphones Xiaomi com assistência técnica e garantia estendida.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Produtos</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/poco-x7-pro-review" className="hover:text-orange-500 transition-colors">
                  POCO X7 Pro
                </Link>
              </li>
              <li>
                <a
                  href={buildWhatsappLink('Olá! Vi o Redmi Note 14 Pro 5G no site da SoftFone RP e gostaria de mais informações.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  Note 14 Pro 5G
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsappLink('Olá! Vi o Redmi Note 14S no site da SoftFone RP e gostaria de mais informações.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  Note 14S
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsappLink('Olá! Vi o POCO C75 no site da SoftFone RP e gostaria de mais informações.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  POCO C75
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Serviços</h5>
            <ul className="space-y-2 text-gray-300">
              {storeInfo.services.map((service) => (
                <li key={service}>
                  <a
                    href={buildWhatsappLink(`Olá! Gostaria de saber mais sobre: ${service}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-orange-500 transition-colors mb-2">
              Rua Américo Brasiliense, 835<br />Centro - Ribeirão Preto - SP
            </a>
            <a href={phoneLink} className="block text-gray-300 hover:text-orange-500 transition-colors mb-2">
              📞 {storeInfo.phone}
            </a>
            <a href={buildWhatsappLink('Olá! Vi o site da SoftFone RP e gostaria de mais informações.')} target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-orange-500 transition-colors">
              📱 WhatsApp: {storeInfo.whatsapp}
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 SoftFone Xiaomi RP. {storeInfo.years} anos de tradição em Ribeirão Preto.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
