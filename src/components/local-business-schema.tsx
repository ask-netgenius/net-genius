'use client';

import Script from 'next/script';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHours?: string[];
  priceRange?: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
}

export function LocalBusinessSchema({
  name = "Net Genius",
  description = "Professional software development agency specializing in web development, DevOps, automation, system design, and Rust programming services.",
  url = "https://netgenius.dev",
  telephone = "+1-234-567-8900",
  email = "hello@netgenius.dev",
  address = {
    streetAddress: "123 Tech Lane",
    addressLocality: "Tech City", 
    addressRegion: "TC",
    postalCode: "54321",
    addressCountry: "US"
  },
  openingHours = [
    "Mo-Fr 09:00-18:00"
  ],
  priceRange = "$1200-$10000",
  geo,
  sameAs = [
    "https://github.com/netgenius",
    "https://linkedin.com/company/netgenius", 
    "https://twitter.com/netgenius"
  ]
}: LocalBusinessSchemaProps = {}) {
  
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url,
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0],
      "opens": hours.split(' ')[1].split('-')[0],
      "closes": hours.split(' ')[1].split('-')[1]
    })),
    "priceRange": priceRange,
    "serviceArea": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Full-stack web application development using modern frameworks and technologies"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "DevOps Services",
          "description": "CI/CD pipeline setup, cloud infrastructure, and deployment automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "System Design",
          "description": "Scalable system architecture and enterprise-grade solution design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rust Programming", 
          "description": "High-performance systems programming using Rust language"
        }
      }
    ],
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      }
    }),
    "sameAs": sameAs
  };

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
}