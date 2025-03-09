import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Globe, Search, Zap, MessageSquare, CheckCircle, Award, Users, ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Simulate social proof counter
  const [visitorCount] = useState(Math.floor(Math.random() * 50) + 120);

  useEffect(() => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/your-account',
        parentElement: document.getElementById('calendly-embed'),
      });
    }
  }, []);

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-[#ff6b6b]" />,
      title: "Création Web",
      description: "Sites web professionnels et responsive qui convertissent vos visiteurs en clients."
    },
    {
      icon: <Search className="w-12 h-12 text-[#ff6b6b]" />,
      title: "SEO",
      description: "Optimisation pour les moteurs de recherche pour une visibilité maximale."
    },
    {
      icon: <Zap className="w-12 h-12 text-[#ff6b6b]" />,
      title: "Publicité en Ligne",
      description: "Campagnes publicitaires ciblées pour atteindre votre audience idéale."
    }
  ];

  const portfolio = [
    {
      title: "EcoVert - E-commerce Bio",
      description: "Refonte complète d'une boutique bio en ligne avec +150% de conversion",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
      results: ["150% augmentation des ventes", "Temps de chargement -60%", "Taux de rebond -35%"],
      tags: ["E-commerce", "UI/UX", "Performance"]
    },
    {
      title: "SportFlex - Application Fitness",
      description: "Application web progressive pour coaches sportifs et athlètes",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      results: ["10,000+ utilisateurs actifs", "4.8/5 satisfaction", "98% uptime"],
      tags: ["Web App", "PWA", "React"]
    },
    {
      title: "GastroTech - Réservation Restaurant",
      description: "Plateforme de réservation en ligne pour groupe de restaurants",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
      results: ["45% réservations en plus", "Coûts réduits de 30%", "Integration CRM"],
      tags: ["SaaS", "API", "Dashboard"]
    },
    {
      title: "ImmoSmart - Immobilier",
      description: "Portail immobilier avec estimation IA et visite virtuelle",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      results: ["2M€ transactions/mois", "15min temps moyen/visite", "+200 agents"],
      tags: ["IA", "3D", "Cloud"]
    },
    {
      title: "EduPro - Plateforme E-learning",
      description: "Solution e-learning pour formation professionnelle",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      results: ["5,000+ étudiants", "95% completion", "ROI client 300%"],
      tags: ["LMS", "Video", "Analytics"]
    },
    {
      title: "FinTech - Banking App",
      description: "Application bancaire nouvelle génération",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      results: ["1M+ transactions", "Sécurité ISO 27001", "-40% support"],
      tags: ["Fintech", "Security", "Mobile"]
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "CEO, TechStart",
      content: "Notre trafic a augmenté de 200% en 3 mois grâce à leur expertise SEO.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      name: "Pierre Dubois",
      role: "Fondateur, EcoShop",
      content: "Le ROI de nos campagnes publicitaires a doublé depuis notre collaboration.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#ff6b6b]">DigiWeb</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#ff6b6b]">Services</a>
              <a href="#realisations" className="text-gray-700 hover:text-[#ff6b6b]">Réalisations</a>
              <a href="#resultats" className="text-gray-700 hover:text-[#ff6b6b]">Résultats</a>
              <a href="#rendez-vous" className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full hover:bg-[#ff5252] transition-colors">
                Prendre RDV
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                <ChevronDown className={`w-6 h-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformez Votre Présence Digitale
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous créons des expériences web qui convertissent, optimisons votre visibilité et générons des résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#rendez-vous" className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-colors flex items-center justify-center">
                Réserver une Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#realisations" className="border-2 border-[#ff6b6b] text-[#ff6b6b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6b6b] hover:text-white transition-colors">
                Voir Nos Réalisations
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-[#ff6b6b] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-2 text-sm">
            <Users className="w-4 h-4" />
            <span>{visitorCount} personnes consultent notre site actuellement</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="realisations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs digitaux
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#ff6b6b] mr-2" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#rendez-vous" className="inline-flex items-center bg-[#ff6b6b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-colors">
              Discuter de votre projet <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Ce Que Disent Nos Clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="pourquoi-nous" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Pourquoi Nous Choisir</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600">10+ ans d'expérience</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Résultats Garantis</h3>
              <p className="text-gray-600">Satisfaction client 100%</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support Dédié</h3>
              <p className="text-gray-600">Disponible 24/7</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Solutions Innovantes</h3>
              <p className="text-gray-600">Toujours à la pointe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="rendez-vous" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Réservez Votre Consultation Gratuite</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez un créneau qui vous convient pour discuter de votre projet avec l'un de nos experts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div id="calendly-embed" style={{ minHeight: '700px' }}></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span>contact@digiweb.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>123 Avenue Digital, 75001 Paris</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                ></textarea>
                <button className="w-full bg-[#ff6b6b] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-colors">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">DigiWeb</h3>
              <p className="text-sm">Votre partenaire pour une présence digitale réussie.</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Création Web</li>
                <li>SEO</li>
                <li>Publicité en Ligne</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Études de cas</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>Mentions légales</li>
                <li>Politique de confidentialité</li>
                <li>CGV</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2025 DigiWeb. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <button 
        className="fixed bottom-4 right-4 bg-[#ff6b6b] text-white p-4 rounded-full shadow-lg hover:bg-[#ff5252] transition-colors"
        onClick={() => alert('Chat functionality would be integrated here')}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold mb-4">Recevez nos conseils d'experts</h3>
            <p className="text-gray-600 mb-6">Inscrivez-vous à notre newsletter pour recevoir nos meilleurs conseils en marketing digital.</p>
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4"
            />
            <button className="w-full bg-[#ff6b6b] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-colors">
              S'inscrire
            </button>
            <button 
              className="mt-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPopup(false)}
            >
              Non merci
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;