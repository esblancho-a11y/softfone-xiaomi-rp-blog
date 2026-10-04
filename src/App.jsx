import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import SEOHead from './components/SEOHead.jsx'
import './App.css'

// Importando imagens
import pocoX7Pro1 from './assets/blog_images/poco_x7_pro/poco_x7_pro_1.jpg'
import note14Pro5G1 from './assets/blog_images/redmi_note_14_pro_5g/note_14_pro_5g_1.jpg'
import pocoC751 from './assets/blog_images/poco_c75/poco_c75_1.jpg'

const WHATSAPP_NUMBER = '551636363965'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('SoftFone Rua Américo Brasiliense, 835 Ribeirão Preto SP')

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const GENERIC_MESSAGE = 'Olá! Vim pelo site da SoftFone Xiaomi RP e gostaria de um atendimento.'

function App() {
  const featuredArticles = [
    {
      id: 1,
      title: "POCO X7 Pro na SoftFone RP: Análise Completa do Novo Flagship Killer",
      excerpt: "Conheça o POCO X7 Pro disponível na SoftFone RP. Análise completa de desempenho, câmera e por que escolher nossa loja em Ribeirão Preto.",
      image: pocoX7Pro1,
      category: "Produto",
      message: "Olá! Vim pelo site e quero saber preço e disponibilidade do POCO X7 Pro.",
      featured: true
    },
    {
      id: 2,
      title: "Redmi Note 14 Pro 5G: Por Que Comprar na SoftFone Ribeirão Preto",
      excerpt: "Descubra as vantagens de adquirir o Redmi Note 14 Pro 5G na SoftFone RP: garantia estendida, assistência técnica e preço justo.",
      image: note14Pro5G1,
      category: "Produto",
      message: "Olá! Vim pelo site e quero saber preço e disponibilidade do Redmi Note 14 Pro 5G.",
      featured: true
    },
    {
      id: 3,
      title: "POCO C75 na SoftFone: O Melhor Custo-Benefício de Ribeirão Preto",
      excerpt: "O POCO C75 chegou na SoftFone RP! Conheça as especificações e por que nossa loja oferece o melhor negócio da cidade.",
      image: pocoC751,
      category: "Produto",
      message: "Olá! Vim pelo site e quero saber preço e disponibilidade do POCO C75.",
      featured: false
    }
  ]

  const storeInfo = {
    name: "SoftFone RP",
    address: "Rua Américo Brasiliense, 835 - Centro",
    phone: "(16) 3636-3965",
    whatsapp: "(16) 3636-3965",
    years: 21,
    services: ["Venda de Smartphones", "Assistência Técnica", "Garantia Estendida", "Parcelamento até 18x"]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <SEOHead />
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                SoftFone <span className="text-orange-500">Xiaomi RP</span>
              </h1>
              <p className="text-gray-600 mt-2 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Sua loja especializada em Xiaomi em Ribeirão Preto - Rua Américo Brasiliense, 835
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            SoftFone Xiaomi RP
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            21 anos de tradição em Ribeirão Preto • Loja física e assistência técnica especializada
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">POCO X7 Pro</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Note 14 Pro 5G</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">Note 14S</Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">POCO C75</Badge>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Visite Nossa Loja</h3>
            <p className="text-lg mb-2">📍 Rua Américo Brasiliense, 835 - Centro</p>
            <p className="text-lg mb-2">📞 (16) 3636-3965</p>
            <p className="text-lg mb-6">🕒 Segunda a Sábado: 9h às 18h</p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href={whatsappLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Em Destaque na Loja
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${article.featured ? 'bg-red-500' : 'bg-blue-500'}`}>
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                    <a href={whatsappLink(article.message)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consultar preço no WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Store Info */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Por Que Escolher a SoftFone RP?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {storeInfo.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {storeInfo.address}
                </p>
                <p className="text-gray-600 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {storeInfo.phone}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>{storeInfo.years} anos</strong> de tradição em Ribeirão Preto
                </p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                  <a href={whatsappLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp: {storeInfo.whatsapp}
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Nossos Serviços</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {storeInfo.services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full mt-4">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Como chegar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber preço e disponibilidade do POCO X7 Pro.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">POCO X7 Pro</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber preço e disponibilidade do Redmi Note 14 Pro 5G.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Note 14 Pro 5G</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber preço e disponibilidade do Redmi Note 14S.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Note 14S</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber preço e disponibilidade do POCO C75.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">POCO C75</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href={whatsappLink("Olá! Vim pelo site e preciso de assistência técnica para meu celular.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Assistência Técnica</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber sobre garantia estendida.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Garantia Estendida</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e quero saber sobre parcelamento.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Parcelamento</a></li>
                <li><a href={whatsappLink("Olá! Vim pelo site e preciso de suporte técnico.")} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Suporte Técnico</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <p className="text-gray-300 mb-2">Rua Américo Brasiliense, 835</p>
              <p className="text-gray-300 mb-2">Centro - Ribeirão Preto - SP</p>
              <p className="text-gray-300 mb-2">
                <a href="tel:+551636363965" className="hover:text-orange-500 transition-colors">📞 (16) 3636-3965</a>
              </p>
              <p className="text-gray-300">
                <a href={whatsappLink(GENERIC_MESSAGE)} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">📱 WhatsApp: (16) 3636-3965</a>
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} SoftFone Xiaomi RP. 21 anos de tradição em Ribeirão Preto.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink(GENERIC_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}

export default App

