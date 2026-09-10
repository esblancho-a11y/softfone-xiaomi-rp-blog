import { useEffect } from 'react'

const SEOHead = ({ 
  title = "Xiaomi RP Conectado - Smartphones Xiaomi em Ribeirão Preto",
  description = "Seu guia completo de smartphones Xiaomi em Ribeirão Preto. Reviews detalhados, comparativos, dicas e onde comprar POCO X7 Pro, Note 14 Pro 5G, Note 14S e POCO C75.",
  keywords = "Xiaomi Ribeirão Preto, POCO X7 Pro, Note 14 Pro 5G, Note 14S, POCO C75, smartphone Xiaomi, onde comprar Xiaomi RP, review Xiaomi",
  image = "/og-image.jpg",
  url = "https://xiaomi-rp-conectado.com",
  type = "website"
}) => {
  
  useEffect(() => {
    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Xiaomi RP Conectado",
      "description": description,
      "url": url,
      "publisher": {
        "@type": "Organization",
        "name": "Xiaomi RP Conectado",
        "logo": {
          "@type": "ImageObject",
          "url": `${url}/logo.png`
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.instagram.com/xiaomirpconectado",
        "https://www.facebook.com/xiaomirpconectado"
      ]
    }

    // Local Business Schema for Ribeirão Preto focus
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Xiaomi RP Conectado",
      "description": "Guia completo de smartphones Xiaomi em Ribeirão Preto",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Américo Brasiliense, 835 - Centro",
        "addressLocality": "Ribeirão Preto",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-21.1775",
        "longitude": "-47.8103"
      },
      "url": url,
      "telephone": "+55-16-3636-3965",
      "priceRange": "$$",
      "openingHours": "Mo-Sa 09:00-18:00"
    }

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]')
    existingScripts.forEach(script => script.remove())

    // Add new structured data
    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.textContent = JSON.stringify(localBusinessData)
    document.head.appendChild(script2)

    // Update meta tags dynamically
    document.title = title
    
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let meta = document.querySelector(selector)
      if (!meta) {
        meta = document.createElement('meta')
        if (property) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

  }, [title, description, keywords, image, url, type])

  return null
}

export default SEOHead

