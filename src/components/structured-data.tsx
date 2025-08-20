'use client';

import Script from 'next/script';

interface OrganizationDataProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

export function OrganizationStructuredData({
  name = "Net Genius",
  url = "https://net-genius.in",
  logo = "https://net-genius.in/logo.png",
  description = "Professional web development, DevOps, automation, system design, and Rust programming services. We build scalable enterprise-grade products and full-stack solutions for businesses worldwide.",
  address = {
    streetAddress: "National Institute of Technology",
    addressLocality: "Rourkela",
    addressRegion: "Odisha",
    postalCode: "769008",
    addressCountry: "IN"
  },
  contactPoint,
  sameAs = []
}: OrganizationDataProps = {}) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": name,
    "url": url,
    "logo": logo,
    "description": description,
    "foundingDate": "2019",
    "numberOfEmployees": "5-10",
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development", 
      "DevOps",
      "Automation",
      "System Design",
      "Rust Programming",
      "Enterprise Software",
      "Cloud Solutions",
      "Backend Development",
      "Frontend Development",
      "UI/UX Design",
      "Database Design",
      "API Development",
      "Microservices",
      "Continuous Integration",
      "Continuous Deployment"
    ],
    "serviceType": [
      "Web Development",
      "Full-Stack Development",
      "DevOps Services", 
      "Automation",
      "System Design",
      "Rust Programming",
      "Enterprise Software Development",
      "Cloud Solutions",
      "Backend Development",
      "Frontend Development",
      "UI/UX Design"
    ],
    "areaServed": "Worldwide",
    ...(address && { "address": {
      "@type": "PostalAddress",
      ...address
    }}),
    ...(contactPoint && { "contactPoint": {
      "@type": "ContactPoint",
      ...contactPoint
    }}),
    ...(sameAs.length > 0 && { "sameAs": sameAs })
  };

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
}

interface ServiceDataProps {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
  url?: string;
}

export function ServiceStructuredData({
  name,
  description,
  provider = "Net Genius",
  areaServed = "Worldwide", 
  serviceType = "Professional Service",
  url = "https://net-genius.in"
}: ServiceDataProps) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": url
    },
    "areaServed": areaServed,
    "serviceType": serviceType,
    "url": url
  };

  return (
    <Script
      id={`service-${name.toLowerCase().replace(/\s+/g, '-')}-structured-data`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceData),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Net Genius",
    "description": "Professional web development, DevOps, automation, system design, and Rust programming services. We build scalable enterprise-grade products and full-stack solutions for businesses worldwide.",
    "url": "https://net-genius.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://net-genius.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Net Genius",
      "url": "https://net-genius.in"
    }
  };

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  );
}

export function BreadcrumbStructuredData({ 
  items 
}: { 
  items: Array<{ name: string; url: string }> 
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
}