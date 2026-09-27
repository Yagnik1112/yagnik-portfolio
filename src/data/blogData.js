export const blogArticles = [
  {
    id: "blog-1",
    slug: "shopify-20-theme-development-guide",
    title: "Complete Shopify 2.0 Theme Development Guide",
    excerpt: "Learn how to build modular, high-performing Shopify themes leveraging Online Store 2.0 section rendering, Metafields, and App Blocks.",
    date: "2026-08-15",
    readTime: "7 min read",
    author: "Yagnik Bavaliya",
    category: "Shopify 2.0",
    coverImage: "/projects/round12.png",
    seoTitle: "Shopify 2.0 Theme Development Guide | Yagnik Bavaliya",
    metaDescription: "A comprehensive guide to building modular Shopify Online Store 2.0 themes with dynamic sections, JSON templates, and Metafields.",
    content: [
      {
        type: "paragraph",
        text: "Shopify Online Store 2.0 revolutionized how developers build storefronts and how merchants customize their stores. By replacing legacy `.liquid` template files with JSON templates, Shopify allowed merchants to add drag-and-drop sections everywhere—not just on the home page."
      },
      {
        type: "heading",
        text: "1. The JSON Template Architecture"
      },
      {
        type: "paragraph",
        text: "In Shopify 2.0, pages like `product.json` or `collection.json` define which sections appear and in what order. A typical JSON template maps section IDs to their corresponding Liquid section schemas and default settings."
      },
      {
        type: "code",
        code: `{\n  "sections": {\n    "main": { "type": "main-product", "settings": {} },\n    "recommendations": { "type": "product-recommendations", "settings": {} }\n  },\n  "order": ["main", "recommendations"]\n}`
      },
      {
        type: "heading",
        text: "2. Leveraging Sections Everywhere"
      },
      {
        type: "paragraph",
        text: "When creating custom Liquid sections for 2.0 themes, ensure your `{% schema %}` tag defines reusable blocks and preset settings so store owners can reorder and customize elements without touching code."
      },
      {
        type: "heading",
        text: "3. Best Practices for Performance"
      },
      {
        type: "paragraph",
        text: "Keep Liquid loops efficient, defer non-critical JavaScript, and utilize native image tags with `loading='lazy'` and `srcset` attributes to maintain sub-second page rendering times."
      }
    ]
  },
  {
    id: "blog-2",
    slug: "shopify-liquid-development-tips",
    title: "10 Advanced Shopify Liquid Development Tips for Faster Storefronts",
    excerpt: "Boost your theme logic and site speed with these essential Liquid tag optimizations, assign filters, and array manipulation tricks.",
    date: "2026-07-28",
    readTime: "5 min read",
    author: "Yagnik Bavaliya",
    category: "Liquid",
    coverImage: "/projects/poster-lefi.png",
    seoTitle: "10 Advanced Shopify Liquid Development Tips | Yagnik Bavaliya",
    metaDescription: "Master Shopify Liquid with advanced syntax tips, array filtering, performance tricks, and clean code patterns.",
    content: [
      {
        type: "paragraph",
        text: "Liquid is the backbone of Shopify theme development. Writing clean, efficient Liquid code reduces server response times and makes codebases easier to maintain."
      },
      {
        type: "heading",
        text: "1. Minimize Expensive Database Loops"
      },
      {
        type: "paragraph",
        text: "Avoid nesting `for` loops inside collection or product iterations. Filter arrays early using Liquid filters like `where` or `map` rather than evaluating conditions inside a loop."
      },
      {
        type: "heading",
        text: "2. Use Liquid render Instead of include"
      },
      {
        type: "paragraph",
        text: "The deprecated `{% include %}` tag inherits variables from the parent scope, leading to unexpected side effects. Always use `{% render 'snippet-name', variable: value %}` for explicit variable scoping and faster compilation."
      }
    ]
  },
  {
    id: "blog-3",
    slug: "shopify-metafields-vs-metaobjects",
    title: "Shopify Metafields vs Metaobjects: When and How to Use Each",
    excerpt: "Understand the key structural differences between Metafields and Metaobjects to model complex custom eCommerce data effectively.",
    date: "2026-07-10",
    readTime: "6 min read",
    author: "Yagnik Bavaliya",
    category: "Data Modeling",
    coverImage: "/projects/pepedive.png",
    seoTitle: "Shopify Metafields vs Metaobjects Guide | Yagnik Bavaliya",
    metaDescription: "Learn when to use Shopify Metafields for single resource attributes and Metaobjects for multi-field custom data modeling.",
    content: [
      {
        type: "paragraph",
        text: "Data customization in Shopify has evolved significantly. While Metafields allow attaching single dynamic fields to products or customers, Metaobjects allow you to define custom multi-field data structures."
      },
      {
        type: "heading",
        text: "Metafields: Single Attribute Extension"
      },
      {
        type: "paragraph",
        text: "Use Metafields when adding isolated data points to an existing Shopify entity—such as a product washing instruction string, a custom PDF download URL, or a sizing chart image."
      },
      {
        type: "heading",
        text: "Metaobjects: Complex Relational Data"
      },
      {
        type: "paragraph",
        text: "Use Metaobjects when building reusable relational content models—like Designer Profiles, Ingredients Lists, or Store Locations. Metaobjects can contain multiple fields (text, image, color) and be linked directly across products."
      }
    ]
  },
  {
    id: "blog-4",
    slug: "shopify-app-development-python-node",
    title: "Building Custom Shopify Apps with Python & Node.js",
    excerpt: "An engineering breakdown of building custom private applications to solve unique inventory and ERP integration requirements.",
    date: "2026-06-22",
    readTime: "8 min read",
    author: "Yagnik Bavaliya",
    category: "App Development",
    coverImage: "/projects/mosaic-buddy.png",
    seoTitle: "Custom Shopify App Development with Python | Yagnik Bavaliya",
    metaDescription: "How to develop custom private Shopify apps using Python and Node.js to bridge warehouse operations, APIs, and Shopify inventory.",
    content: [
      {
        type: "paragraph",
        text: "Standard public Shopify apps often fall short when dealing with niche manufacturing, specialized warehouse workflows, or custom machinery output data."
      },
      {
        type: "heading",
        text: "Architecting a Private Integration App"
      },
      {
        type: "paragraph",
        text: "By establishing a secure backend service in Python or Node.js, developers can consume webhooks, query Shopify GraphQL APIs, and run background cron jobs to sync live physical inventory without manual data entry."
      }
    ]
  },
  {
    id: "blog-5",
    slug: "shopify-store-performance-optimization",
    title: "How to Achieve 90+ Lighthouse Scores on Shopify",
    excerpt: "Actionable performance engineering strategies for optimizing liquid templates, third-party apps, JS execution, and image delivery.",
    date: "2026-06-05",
    readTime: "6 min read",
    author: "Yagnik Bavaliya",
    category: "Performance",
    coverImage: "/projects/make-it-art.png",
    seoTitle: "Shopify Speed Optimization & Core Web Vitals | Yagnik Bavaliya",
    metaDescription: "Step-by-step techniques to improve Shopify Core Web Vitals, reduce LCP/CLS, and audit bloated app scripts.",
    content: [
      {
        type: "paragraph",
        text: "Page speed directly correlates with eCommerce conversion rates. A delay of just one second can decrease mobile conversions by up to 20%."
      },
      {
        type: "heading",
        text: "Key Steps for Speed Optimization"
      },
      {
        type: "paragraph",
        text: "Audit third-party app scripts for render-blocking delays, implement lazy loading for images below the fold, use WebP/AVIF formats, and inline critical CSS for above-the-fold content."
      }
    ]
  },
  {
    id: "blog-6",
    slug: "shopify-seo-best-practices",
    title: "Technical Shopify SEO: Schema Markup, Indexation, and Architecture",
    excerpt: "Essential technical SEO setup for Shopify stores to capture high-intent search traffic and outrank competitors.",
    date: "2026-05-18",
    readTime: "6 min read",
    author: "Yagnik Bavaliya",
    category: "SEO",
    coverImage: "/projects/aviary-beauty.png",
    seoTitle: "Technical Shopify SEO Best Practices | Yagnik Bavaliya",
    metaDescription: "Master technical Shopify SEO including JSON-LD schema, canonical URLs, collection hierarchy, and meta tag optimization.",
    content: [
      {
        type: "paragraph",
        text: "Shopify offers out-of-the-box SEO features, but scaling organic traffic requires tailored JSON-LD structured data, duplicate URL management, and optimized collection structures."
      }
    ]
  },
  {
    id: "blog-7",
    slug: "shopify-markets-multi-country-stores",
    title: "Scaling Globally with Shopify Markets: Multi-Currency & Localization",
    excerpt: "How to build localized shopping experiences across borders without maintaining multiple separate store instances.",
    date: "2026-05-01",
    readTime: "7 min read",
    author: "Yagnik Bavaliya",
    category: "eCommerce",
    coverImage: "/projects/gameday-legends.png",
    seoTitle: "Shopify Markets Multi-Country Store Development | Yagnik Bavaliya",
    metaDescription: "Configure Shopify Markets for seamless multi-currency checkout, localized domains, and country-specific pricing rules.",
    content: [
      {
        type: "paragraph",
        text: "Shopify Markets enables merchants to manage global expansion from a single admin. By setting up localized domains, automated currency conversion, and regional duties, international customers enjoy a friction-free experience."
      }
    ]
  },
  {
    id: "blog-8",
    slug: "building-custom-shopify-sections",
    title: "Building Reusable Custom Sections with Liquid & Schema Settings",
    excerpt: "A practical guide to coding dynamic Shopify sections with customizable colors, typography, block presets, and JS hooks.",
    date: "2026-04-12",
    readTime: "5 min read",
    author: "Yagnik Bavaliya",
    category: "Theme Development",
    coverImage: "/projects/twik-health.png",
    seoTitle: "Building Custom Shopify Sections | Yagnik Bavaliya",
    metaDescription: "Learn how to write custom Liquid theme sections with schema settings, modular blocks, and interactive JavaScript widgets.",
    content: [
      {
        type: "paragraph",
        text: "Custom sections give merchants complete creative control over their storefront pages while adhering to design system guidelines."
      }
    ]
  },
  {
    id: "blog-9",
    slug: "figma-to-shopify-development-workflow",
    title: "Figma to Shopify: Converting UI Designs into High-Converting Themes",
    excerpt: "Step-by-step workflow for frontend developers translating Figma design systems into responsive Liquid code.",
    date: "2026-03-25",
    readTime: "6 min read",
    author: "Yagnik Bavaliya",
    category: "Frontend",
    coverImage: "/projects/poster-lefi.png",
    seoTitle: "Figma to Shopify Development Guide | Yagnik Bavaliya",
    metaDescription: "Best practices for converting Figma design files into pixel-perfect, responsive Liquid theme templates and section components.",
    content: [
      {
        type: "paragraph",
        text: "Translating Figma designs to Shopify requires establishing CSS design tokens, responsive breakpoint rules, and mapping static design components to Shopify Liquid schemas."
      }
    ]
  },
  {
    id: "blog-10",
    slug: "shopify-third-party-app-integrations",
    title: "Integrating 3PL Logistics & Booking Systems into Shopify",
    excerpt: "How to integrate third-party APIs, Boulevard booking links, and automated fulfillment integrations securely.",
    date: "2026-03-10",
    readTime: "7 min read",
    author: "Yagnik Bavaliya",
    category: "Integrations",
    coverImage: "/projects/aviary-beauty.png",
    seoTitle: "Shopify 3PL & Third-Party API Integrations | Yagnik Bavaliya",
    metaDescription: "Integrate 3PL logistics, Boulevard booking software, and custom REST APIs into Shopify storefronts and themes.",
    content: [
      {
        type: "paragraph",
        text: "Integrating third-party services like Boulevard salon booking or custom 3PL logistics requires robust API authentication and graceful UI fallback mechanisms."
      }
    ]
  }
];
