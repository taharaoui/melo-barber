import { defineConfig } from "vite";
import { business } from "./src/data/business.js";
import { services } from "./src/data/services.js";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Schema HairSalon généré depuis business.js pour rester synchronisé avec le site.
function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: business.name,
    url: business.url,
    image: `${business.url}/og-image.jpg`,
    logo: `${business.url}/favicon.svg`,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    currenciesAccepted: "CAD",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: business.hours
      .filter((entry) => entry.open)
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${DAYS[entry.day]}`,
        opens: entry.open,
        closes: entry.close,
      })),
    acceptsReservations: business.bookingUrl,
    sameAs: [business.social.instagram.url, business.social.facebook.url, business.social.tiktok.url],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        price: service.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "CAD",
        url: service.link,
        itemOffered: { "@type": "Service", name: service.name },
      })),
    },
  };
}

export default defineConfig({
  plugins: [
    {
      name: "melo-jsonld",
      transformIndexHtml() {
        return [
          {
            tag: "script",
            attrs: { type: "application/ld+json" },
            children: JSON.stringify(localBusinessSchema()),
            injectTo: "head",
          },
        ];
      },
    },
  ],
});
