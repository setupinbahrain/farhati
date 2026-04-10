import React from 'react';

type SEOProps = {
  title: string;
  description: string;
  url: string;
  isProductPage?: boolean;
  price?: string;
  image?: string;
};

export default function SEO({ title, description, url, isProductPage, price, image }: SEOProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": isProductPage ? "Product" : "WebPage",
    "name": title,
    "description": description,
    "url": url,
  };

  const productSchemaExtension = isProductPage ? {
    "image": image || "https://farhati.bh/images/logo-transparent.png",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BHD",
      "price": price || "35.00",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Farhati Bahrain"
      }
    }
  } : {};

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Farhati Gifting Bahrain",
    "image": "https://farhati.bh/images/logo-transparent.png",
    "telephone": "+973 1234 5678",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Manama",
      "addressCountry": "BH"
    },
    "priceRange": "$$$"
  };

  const finalSchema = { ...baseSchema, ...productSchemaExtension };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
