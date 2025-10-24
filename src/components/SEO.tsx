import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // Add structured data for Local Business and Medical Business
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["MedicalBusiness", "Physician"],
          "@id": "https://drpedrosmaniotto.com.br/#organization",
          "name": "Dr. Pedro Smaniotto - Cirurgia Plástica",
          "url": "https://drpedrosmaniotto.com.br",
          "logo": "https://drpedrosmaniotto.com.br/logo.png",
          "image": "https://storage.googleapis.com/gpt-engineer-file-uploads/9BFJYopr2datixRSnA4Oq0kYvS63/social-images/social-1761170180738-DR-PEDRO-007.jpg",
          "description": "Cirurgia plástica estética e reparadora com Dr. Pedro Smaniotto. Formação pela USP e Stanford. Especialista em mamoplastia, abdominoplastia, rinoplastia, lipoaspiração e blefaroplastia em Campo Grande - MS.",
          "telephone": "+55-67-99116-3617",
          "priceRange": "$$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Oceano Atlântico, 100",
            "addressLocality": "Campo Grande",
            "addressRegion": "MS",
            "postalCode": "79020-180",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -20.4697,
            "longitude": -54.6201
          },
          "medicalSpecialty": "Plastic Surgery",
          "founder": {
            "@type": "Person",
            "name": "Dr. Pedro Smaniotto",
            "jobTitle": "Cirurgião Plástico",
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "Faculdade de Medicina da USP"
              },
              {
                "@type": "EducationalOrganization", 
                "name": "Stanford University"
              }
            ],
            "honorificPrefix": "Dr.",
            "hasCredential": [
              "Medicina pela Faculdade de Medicina da USP (FMUSP)",
              "Especialização em Cirurgia Geral pela FMUSP",
              "Especialização em Cirurgia Plástica pela FMUSP",
              "Fellow em Cirurgia Plástica na Universidade de Stanford",
              "Doutor em Ciências pela Faculdade de Medicina da USP"
            ]
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Procedimentos de Cirurgia Plástica",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Mamoplastia",
                  "alternateName": ["Mamoplastia Redutora", "Prótese Mamária", "Aumento Híbrido", "Mastopexia"],
                  "description": "Cirurgia plástica das mamas para redução, aumento ou lifting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Abdominoplastia",
                  "description": "Cirurgia para remoção de excesso de pele e gordura abdominal"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Lipoaspiração",
                  "alternateName": ["Lipo HD", "Lipo com Renuvion", "Lipoescultura"],
                  "description": "Remoção de gordura localizada para modelagem corporal"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Rinoplastia",
                  "description": "Cirurgia plástica do nariz para correção estética e funcional"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Blefaroplastia",
                  "description": "Cirurgia plástica das pálpebras para rejuvenescimento facial"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Ritidoplastia",
                  "alternateName": ["Lift Facial", "Facelift", "Necklift"],
                  "description": "Cirurgia de rejuvenescimento facial e cervical"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Ginecomastia",
                  "description": "Tratamento cirúrgico para contorno torácico masculino"
                }
              }
            ]
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "areaServed": {
            "@type": "City",
            "name": "Campo Grande",
            "containedIn": {
              "@type": "State",
              "name": "Mato Grosso do Sul"
            }
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://drpedrosmaniotto.com.br/#website",
          "url": "https://drpedrosmaniotto.com.br",
          "name": "Dr. Pedro Smaniotto - Cirurgia Plástica",
          "publisher": {
            "@id": "https://drpedrosmaniotto.com.br/#organization"
          },
          "inLanguage": "pt-BR"
        },
        {
          "@type": "WebPage",
          "@id": "https://drpedrosmaniotto.com.br/#webpage",
          "url": "https://drpedrosmaniotto.com.br",
          "name": "Dr. Pedro Smaniotto - Cirurgia Plástica Estética e Reparadora | Campo Grande MS",
          "description": "Cirurgia plástica com propósito. Dr. Pedro Smaniotto, formado pela USP e Stanford, oferece procedimentos estéticos e reparadores com resultados naturais e seguros em Campo Grande - MS.",
          "isPartOf": {
            "@id": "https://drpedrosmaniotto.com.br/#website"
          },
          "about": {
            "@id": "https://drpedrosmaniotto.com.br/#organization"
          },
          "inLanguage": "pt-BR"
        }
      ]
    };

    // Check if script already exists
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.origin + window.location.pathname;
      document.head.appendChild(canonical);
    }
  }, []);

  return null;
};

export default SEO;
