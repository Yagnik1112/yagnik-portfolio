/**
 * Controlled vocabulary for portfolio projects. Keeping one canonical spelling per technology
 * means every project using it shares the same tag and appears under the same filter.
 */

// Canonical public technology tags, in the order they appear as filters and on cards.
export const TECHNOLOGIES = [
  'Shopify',
  'Shopify 2.0',
  'Liquid',
  'JavaScript',
  'HTML',
  'CSS',
  'WordPress',
  'Shopify Markets',
  'SEO',
  'Google Analytics',
  'Google Tag Manager',
  'API Integration',
  'App Integration',
  'Inventory Management',
];

// Technologies offered as filter pills (tags used on very few projects stay searchable instead).
export const FILTER_TECHNOLOGIES = ['Shopify', 'Shopify 2.0', 'Liquid', 'JavaScript', 'HTML', 'CSS', 'WordPress', 'Shopify Markets', 'SEO'];

// Primary project types. Categories are separate from technology tags.
export const PROJECT_CATEGORIES = [
  'Shopify Development',
  'Shopify Markets & Localization',
  'Shopify SEO & Analytics',
  'Custom Applications',
  'WordPress Development',
  'HTML & CSS Website',
];

// Categories that are also offered as filters.
export const FILTER_CATEGORIES = ['Custom Applications'];

// Technologies never shown as public tags or filters (recorded only in `internalTechnologies`).
export const PRIVATE_TECHNOLOGIES = ['Python'];
