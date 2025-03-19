import React, { useState, useEffect } from "react";
import {
  Calendar,
  ChevronDown,
  Globe,
  Search,
  Zap,
  MessageSquare,
  CheckCircle,
  Award,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import CookieConsent from "react-cookie-consent";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  // Simulate social proof counter
  const [visitorCount] = useState(Math.floor(Math.random() * 50) + 120);

  useEffect(() => {}, []);

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-[#ff6b6b]" />,
      title: "Création Web",
      description:
        "Sites web professionnels et responsive qui convertissent vos visiteurs en clients.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#ff6b6b]" />,
      title: "SEO",
      description:
        "Optimisation pour les moteurs de recherche pour une visibilité maximale.",
    },
    {
      icon: <Zap className="w-12 h-12 text-[#ff6b6b]" />,
      title: "Publicité en Ligne",
      description:
        "Campagnes publicitaires ciblées pour atteindre votre audience idéale.",
    },
  ];

  const portfolio = [
    {
      title: "Cabinet Misino - Orthodontiste",
      description:
        "Création d'un site vitrine moderne avec prise de rendez-vous en ligne et optimisation SEO locale.",
      image: "/thumbnails/cabinet_misino_thumbnail.png",
      results: [
        "300+ visiteurs chaque mois",
        "+30% de visibilité locale grâce au SEO",
        "100% uptime garanti",
      ],
      tags: ["Santé", "Site Vitrine", "SEO"],
    },
    {
      title: "AB Nature - Cosmétiques Bio",
      description:
        "Refonte complète d'une boutique en ligne de cosmétiques bio avec une navigation optimisée.",
      image: "/thumbnails/abnature_thumbnail.png",
      results: [
        "15% d'augmentation des ventes",
        "Amélioration du taux de conversion de 10%",
        "3x plus rapide que l'ancien site",
      ],
      tags: ["E-commerce", "UX/UI", "Performance"],
    },
    {
      title: "SARL Garage Brincat - Garage automobile",
      description:
        "Mise en place d'un site web avec un module de présentation de véhicules disponibles et gestion des avis clients.",
      image: "/thumbnails/sarl_garage_brincat_thumbnail.png",
      results: [
        "+15% à +50% de leads qualifiés",
        "+40% de visibilité locale",
        "Mise en avant des avis Google pour renforcer la crédibilité",
      ],
      tags: ["Automobile", "Site Vitrine", "Disponibilités en ligne"],
    },
    {
      title: "Inform'Agen - Informaticien à domicile",
      description:
        "Site vitrine avec formulaire de contact et référencement local optimisé.",
      image: "/thumbnails/informagen_thumbnail.png",
      results: [
        "10+ demandes d’intervention par mois",
        "+50% de visibilité sur Google",
        "Système de contact simplifié",
      ],
      tags: ["Service", "Site Vitrine", "SEO"],
    },
    {
      title: "CheckYourSmile - Apprentissage de vocabulaire en ligne",
      description:
        "Plateforme d'apprentissage en ligne spécialisée dans le vocabulaire professionnel.",
      image: "/thumbnails/checkyoursmile_thumbnail.png",
      results: [
        "300+ utilisateurs actifs",
        "85% taux de complétion des cours",
        "Interface interactive pour améliorer l'engagement",
      ],
      tags: ["E-learning", "Web App", "Gamification"],
    },
    {
      title: "Création-sites-godino.fr - Créateur de sites internet",
      description:
        "Refonte du site d'un créateur de sites internet indépendant pour mettre en avant ses réalisations.",
      image: "/thumbnails/creation-sites-godino_thumbnail.png",
      results: [
        "+20% de demandes de devis",
        "Optimisation mobile et performance améliorée",
        "Portfolio interactif attractif",
      ],
      tags: ["Freelance", "Web Design", "SEO"],
    },
  ];

  const testimonials = [
    {
      name: "Dr. Misino",
      role: "Orthodontiste, Cabinet Misino",
      content:
        "Depuis la mise en ligne du site, nous recevons plus de rendez-vous en ligne et nos patients trouvent plus facilement les informations dont ils ont besoin.",
      image: "/icons/misino_icon_alt.png",
    },
    {
      name: "Jean-Michel Brincat",
      role: "Gérant, SARL Garage Brincat",
      content:
        "Un vrai plus pour notre garage ! Les clients nous trouvent plus facilement et peuvent consulter nos véhicules dispnibles directement en ligne.",
      image: "/icons/sarlgaragebrincat.png",
    },
  ];

  useEffect(() => {
    const handleCalendlyEvent = (event) => {
      if (event.origin.includes("calendly.com")) {
        try {
          let eventData = JSON.parse(event.data);

          if (eventData.event && eventData.event.startsWith("calendly.")) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: eventData.event, // Exemple: calendly.event_scheduled
              calendly_event: eventData.payload?.event || null,
              invitee_email: eventData.payload?.email || null,
              invitee_name: eventData.payload?.name || null,
            });

            console.log("📢 Calendly Event Tracked:", eventData);
          }
        } catch (error) {
          console.error("❌ Erreur lors du tracking Calendly", error);
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CookieConsent
        location="bottom"
        buttonText="C'est compris !"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Afin d'améliorer l'expérience utilisateur, ce site utilise des cookies.{" "}
        {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img className="w-8" src="/icons/digiweb_logo.svg" alt="" />
              <span className="text-2xl font-bold text-[#ff6b6b]">DigiWeb</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-[#ff6b6b]"
              >
                Services
              </a>
              <a
                href="#realisations"
                className="text-gray-700 hover:text-[#ff6b6b]"
              >
                Réalisations
              </a>
              <a
                href="#resultats"
                className="text-gray-700 hover:text-[#ff6b6b]"
              >
                Résultats
              </a>
              <a
                href="#rendez-vous"
                className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full hover:bg-[#ff5252] transition-colors"
              >
                Prendre RDV
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div className="fixed top-16 right-4 bg-white shadow-lg rounded-lg p-4 w-48 z-50 border border-gray-200">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-2 right-2 text-gray-600"
          >
            <div className="w-5 h-5" />
          </button>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="block text-gray-700 hover:text-[#ff6b6b]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#realisations"
                className="block text-gray-700 hover:text-[#ff6b6b]"
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                href="#resultats"
                className="block text-gray-700 hover:text-[#ff6b6b]"
              >
                Résultats
              </a>
            </li>
            <li>
              <a
                href="#rendez-vous"
                className="block bg-[#ff6b6b] text-white text-center px-4 py-2 rounded-full hover:bg-[#ff5252] transition-colors"
              >
                Prendre RDV
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformez Votre Présence Digitale
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous créons des expériences web qui convertissent, optimisons
              votre visibilité et générons des résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#rendez-vous"
                className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-colors flex items-center justify-center"
              >
                Réserver une Consultation{" "}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#realisations"
                className="border-2 border-[#ff6b6b] text-[#ff6b6b] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6b6b] hover:text-white transition-colors"
              >
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
            <span>
              {visitorCount} personnes consultent notre site actuellement
            </span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
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
              Découvrez comment nous avons aidé nos clients à atteindre leurs
              objectifs digitaux
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
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
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-[#ff6b6b] mr-2" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#rendez-vous"
              className="inline-flex items-center bg-[#ff6b6b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff5252] transition-colors"
            >
              Discuter de votre projet <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="resultats" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Ce Que Disent Nos Clients
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
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
          <h2 className="text-3xl font-bold text-center mb-16">
            Pourquoi Nous Choisir
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-[#ff6b6b] mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expertise Reconnue</h3>
              <p className="text-gray-600">4+ ans d'expérience</p>
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
        {/* <a
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 user-select-none"
          href="https://calendly.com/pierre-godino-dev/30min"
          target="_blank"
        > */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Réservez Votre Consultation Gratuite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez un créneau qui vous convient pour discuter de votre
            projet avec l'un de nos experts.
          </p>
        </div>
        <iframe
          // style={{ pointerEvents: "none" }}
          src="https://calendly.com/digiweb-solutions/30min"
          width="100%"
          height="900"
        ></iframe>
        {/* </a> */}
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
                  <a href="mailto:contact@pierre-godino.com">
                    contact@pierre-godino.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <a href="tel:+33767249980">+33 7 67 24 99 80</a>
                </div>
                {/* <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4" />
                  <span>13 Rue Jeanne d'arc</span>
                </div> */}
              </div>
            </div>
            <div>
              <form
                className="space-y-4"
                method="POST"
                action="https://formspree.io/f/xanenwww"
              >
                <input
                  type="text"
                  name="Nom"
                  placeholder="Nom"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                />
                <textarea
                  name="Message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#ff6b6b]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#ff6b6b] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-colors"
                >
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
              <p className="text-sm">
                Votre partenaire pour une présence digitale réussie.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Création Web</li>
                <li>SEO</li>
                <li>Publicité en Ligne</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">
                Ressources
              </h4>
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
      {/* <button
        className="fixed bottom-4 right-4 bg-[#ff6b6b] text-white p-4 rounded-full shadow-lg hover:bg-[#ff5252] transition-colors"
        onClick={() => alert("Chat functionality would be integrated here")}
      >
        <MessageSquare className="w-6 h-6" />
      </button> */}

      {/* Email Popup */}

      {/* {showPopup && (
        <script
          async
          data-uid="c9a7bd3ce9"
          src="https://digiwebsolutions.kit.com/c9a7bd3ce9/index.js"
        ></script>
      )} */}
    </div>
  );
}

export default App;
