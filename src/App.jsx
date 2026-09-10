import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, MapPin, Phone, Star, Calendar, User } from 'lucide-react'
import SEOHead from './components/SEOHead.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import { storeInfo, buildWhatsappLink, phoneLink, mapsLink } from './lib/store.js'
import './App.css'

// Importando imagens
import pocoX7Pro1 from './assets/blog_images/poco_x7_pro/poco_x7_pro_1.jpg'
import note14Pro5G1 from './assets/blog_images/redmi_note_14_pro_5g/note_14_pro_5g_1.jpg'
import pocoC751 from './assets/blog_images/poco_c75/poco_c75_1.jpg'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const featuredArticles = [
    {
      id: 1,
      title: "POCO X7 Pro na SoftFone RP: Análise Completa do Novo Flagship Killer",
      excerpt: "Conheça o POCO X7 Pro disponível na SoftFone RP. Análise completa de desempenho, câmera e por que escolher nossa loja em Ribeirão Preto.",
      image: pocoX7Pro1,
      category: "Produto",
      readTime: "8 min",
      date: "17 Ago 2025",
      featured: true,
      path: "/poco-x7-pro-review"
    },
    {
      id: 2,
      title: "Redmi Note 14 Pro 5G: Por Que Comprar na SoftFone Ribeirão Preto",
      excerpt: "Descubra as vantagens de adquirir o Redmi Note 14 Pro 5G na SoftFone RP: garantia estendida, assistência técnica e preço justo.",
      image: note14Pro5G1,
      category: "Produto",
      readTime: "6 min",
      date: "16 Ago 2025",
      featured: true,
      productName: "Redmi Note 14 Pro 5G"
    },
    {
      id: 3,
      title: "POCO C75 na SoftFone: O Melhor Custo-Benefício de Ribeirão Preto",
      excerpt: "O POCO C75 chegou na SoftFone RP! Conheça as especificações e por que nossa loja oferece o melhor negócio da cidade.",
      image: pocoC751,
      category: "Produto",
      readTime: "5 min",
      date: "15 Ago 2025",
      featured: false,
      productName: "POCO C75"
    }
  ]

  const categories = [
    { name: "Produtos", count: 12, color: "bg-blue-500" },
    { name: "Promoções", count: 8, color: "bg-green-500" },
    { name: "Assistência", count: 15, color: "bg-purple-500" },
    { name: "Dicas", count: 6, color: "bg-orange-500" },
    { name: "Novidades", count: 4, color: "bg-red-500" }
  ]

  const whatsappLink = buildWhatsappLink('Olá! Vi o site da SoftFone RP e gostaria de mais informações.')

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
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="bg-transparent outline-none text-gray-700 w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
            <p className="text-lg mb-2">
              📍 <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                Rua Américo Brasiliense, 835 - Centro
              </a>
            </p>
            <p className="text-lg mb-2">
              📞 <a href={phoneLink} className="underline hover:no-underline">(16) 3636-3965</a>
            </p>
            <p className="text-lg">🕒 Segunda a Sábado: 9h às 18h</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Artigos em Destaque
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
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  {article.path ? (
                    <Button asChild className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                      <Link to={article.path}>Ler Artigo</Link>
                    </Button>
                  ) : (
                    <Button asChild className="w-full mt-4 bg-orange-500 hover:bg-orange-600">
                      <a
                        href={buildWhatsappLink(`Olá! Vi o artigo sobre o ${article.productName} no site e gostaria de mais informações.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Perguntar no WhatsApp
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Categorias
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-xl">{category.count}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">{category.count} artigos</p>
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
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{storeInfo.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {storeInfo.address}
                </p>
                <p className="text-gray-600 mb-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={phoneLink} className="hover:text-orange-500 transition-colors">
                    {storeInfo.phone}
                  </a>
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>{storeInfo.years} anos</strong> de tradição em Ribeirão Preto
                </p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
                  <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                    Visite Nossa Loja
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App

