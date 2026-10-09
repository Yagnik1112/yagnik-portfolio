import { useEffect } from 'react';
import { siteData } from '../data/siteData';

export default function SEO({
  title = "Yagnik Bavaliya | Shopify Developer & eCommerce Developer",
  description = "Shopify Developer with 2+ years of experience building custom Shopify stores, Shopify 2.0 themes, apps, integrations and eCommerce solutions for international clients.",
  canonical = "https://yagnik-portfolio.vercel.app/",
  ogType = "website",
  ogImage = "https://yagnik-portfolio.vercel.app/images/profile/yagnik.jpg",
  article = null,
  breadcrumbs = null
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, value, isProperty = false) => {
      let element = isProperty
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.setAttribute('content', value);
      } else {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        element.setAttribute('content', value);
        document.head.appendChild(element);
      }
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonical, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', description, true);
    setMeta('twitter:image', ogImage, true);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      document.head.appendChild(canonicalLink);
    }

    // JSON-LD structured data graph injection
    const schemaId = 'json-ld-graph-schema';
    let schemaScript = document.getElementById(schemaId);
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const graph = [
      {
        "@type": "Person",
        "@id": "https://yagnik-portfolio.vercel.app/#person",
        "name": siteData.name,
        "jobTitle": siteData.title,
        "worksFor": {
          "@type": "Organization",
          "name": "DAYDREAMSOFT INFOTECH LLP"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Surat",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        },
        "email": siteData.email,
        "telephone": siteData.phone,
        "url": "https://yagnik-portfolio.vercel.app",
        "sameAs": [
          "https://github.com/Yagnik1112",
          "https://www.linkedin.com/in/yagnik-bavaliya-3b4759312/",
          "https://www.freelancer.in/u/yagnikb4"
        ],
        "knowsAbout": [
          "Shopify Development",
          "Shopify 2.0",
          "Liquid",
          "Shopify App Development",
          "eCommerce Architecture",
          "Shopify SEO",
          "React",
          "JavaScript"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://yagnik-portfolio.vercel.app/#website",
        "url": "https://yagnik-portfolio.vercel.app",
        "name": "Yagnik Bavaliya Portfolio",
        "description": description,
        "publisher": {
          "@id": "https://yagnik-portfolio.vercel.app/#person"
        }
      }
    ];

    if (breadcrumbs && Array.isArray(breadcrumbs)) {
      graph.push({
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      });
    }

    if (article) {
      graph.push({
        "@type": "Article",
        "headline": article.title || title,
        "description": article.excerpt || description,
        "datePublished": article.date,
        "author": {
          "@type": "Person",
          "name": siteData.name
        },
        "publisher": {
          "@id": "https://yagnik-portfolio.vercel.app/#person"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        }
      });
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": graph
    };

    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, canonical, ogType, ogImage, article, breadcrumbs]);

  return null;
}
