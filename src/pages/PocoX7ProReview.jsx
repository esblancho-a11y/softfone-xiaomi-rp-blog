import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Calendar, User, CheckCircle2, MapPin, Phone } from 'lucide-react'
import SEOHead from '@/components/SEOHead.jsx'
import SiteFooter from '@/components/SiteFooter.jsx'
import { storeInfo, buildWhatsappLink, phoneLink, mapsLink } from '@/lib/store.js'
import pocoX7Pro1 from '@/assets/blog_images/poco_x7_pro/poco_x7_pro_1.jpg'
import pocoX7Pro2 from '@/assets/blog_images/poco_x7_pro/poco_x7_pro_2.png'

const specs = [
  { label: "Processador", value: "MediaTek Dimensity 8400 Ultra" },
  { label: "Tela", value: "AMOLED 6,67\", resolução 1.5K e 120Hz" },
  { label: "Câmera principal", value: "50MP com estabilização óptica (OIS) + ultra-angular" },
  { label: "Bateria", value: "6000mAh com carregamento rápido HyperCharge 90W" },
  { label: "Resistência", value: "Certificação IP68/IP69 contra água e poeira" },
  { label: "Software", value: "HyperOS sobre Android" }
]

function PocoX7ProReview() {
  const whatsappLink = buildWhatsappLink('Olá! Vi a análise do POCO X7 Pro no site e gostaria de saber o preço e as condições disponíveis na loja.')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead
        title="POCO X7 Pro na SoftFone RP: Análise Completa | Ribeirão Preto"
        description="Análise do POCO X7 Pro disponível na SoftFone RP: ficha técnica, câmera, bateria e as vantagens de comprar com assistência técnica e garantia estendida em Ribeirão Preto."
        keywords="POCO X7 Pro, POCO X7 Pro Ribeirão Preto, POCO X7 Pro preço, SoftFone RP, ficha técnica POCO X7 Pro"
        url="https://xiaomi-rp-conectado.com/poco-x7-pro-review"
        type="article"
      />

      <header className="bg-white shadow-lg border-b-4 border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            SoftFone <span className="text-orange-500">Xiaomi RP</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <Badge className="bg-red-500 mb-4">Produto</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            POCO X7 Pro na SoftFone RP: Análise Completa do Novo Flagship Killer
          </h2>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-8">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />17 Ago 2025</span>
            <span className="flex items-center"><User className="w-4 h-4 mr-1" />8 min de leitura</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <img src={pocoX7Pro1} alt="POCO X7 Pro disponível na SoftFone RP" className="w-full h-64 object-cover rounded-lg shadow" />
            <img src={pocoX7Pro2} alt="Detalhe do POCO X7 Pro" className="w-full h-64 object-cover rounded-lg shadow" />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            O POCO X7 Pro chegou para reforçar a fama da linha X de entregar hardware de ponta por um preço
            competitivo — por isso já é conhecido como "flagship killer". Ele já está disponível na SoftFone RP,
            em Ribeirão Preto, com a garantia estendida e a assistência técnica própria que a loja oferece há 21 anos.
          </p>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Ficha Técnica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {specs.map((spec) => (
                  <li key={spec.label} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 mt-0.5 shrink-0" />
                    <span className="text-gray-700"><strong>{spec.label}:</strong> {spec.value}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                Configurações de memória/armazenamento podem variar conforme o lote em estoque — confirme a
                disponibilidade exata com a nossa equipe.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">Por Que Comprar o POCO X7 Pro na SoftFone RP?</h3>
          <ul className="space-y-3 mb-8">
            {storeInfo.services.map((service) => (
              <li key={service} className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span className="text-gray-700">{service}</span>
              </li>
            ))}
            <li className="flex items-center">
              <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
              <span className="text-gray-700">{storeInfo.years} anos de tradição e suporte pós-venda em Ribeirão Preto</span>
            </li>
          </ul>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-none">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Quer saber o preço e a disponibilidade?</h3>
              <p className="mb-6 opacity-90">Fale agora com a nossa equipe pelo WhatsApp ou visite a loja.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Mapa
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={phoneLink}>
                    <Phone className="w-4 h-4 mr-2" />
                    {storeInfo.phone}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}

export default PocoX7ProReview
