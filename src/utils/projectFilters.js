import { featuredProjects, otherProjects } from '../data/projectsData';
import {
  TECHNOLOGIES,
  FILTER_TECHNOLOGIES,
  PROJECT_CATEGORIES,
  FILTER_CATEGORIES,
  PRIVATE_TECHNOLOGIES,
} from '../data/projectTaxonomy';

export const ALL_FILTER = 'All';

/** Every project exactly once (featured first), keyed by slug. */
export const allProjects = [...featuredProjects, ...otherProjects].filter(
  (project, index, list) => list.findIndex((p) => p.slug === project.slug) === index
);

const featuredSlugs = new Set(featuredProjects.map((p) => p.slug));
export const isFeatured = (project) => featuredSlugs.has(project.slug);

/** Public technology tags for a project — private technologies are never exposed. */
export function getPublicTechnologies(project) {
  return (project.technologies || []).filter((tech) => !PRIVATE_TECHNOLOGIES.includes(tech));
}

/** Filter values a project belongs to: its public technologies plus a filterable category. */
function getFilterValues(project) {
  const values = new Set(getPublicTechnologies(project));
  if (FILTER_CATEGORIES.includes(project.category)) values.add(project.category);
  return values;
}

export function matchesFilter(project, filter) {
  return filter === ALL_FILTER || getFilterValues(project).has(filter);
}

/** Case-insensitive search across public, visible project fields only. */
export function matchesSearch(project, query) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    project.title,
    project.name,
    project.category,
    project.industry,
    project.shortDescription,
    ...getPublicTechnologies(project),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

export function filterProjects(projects, { filter = ALL_FILTER, query = '' } = {}) {
  return projects.filter((project) => matchesFilter(project, filter) && matchesSearch(project, query));
}

/**
 * Filter options derived from the project data: technologies and categories that at least
 * one project actually uses, each with its project count.
 */
export function getFilterOptions(projects = allProjects) {
  const counts = new Map();
  for (const project of projects) {
    for (const value of getFilterValues(project)) counts.set(value, (counts.get(value) || 0) + 1);
  }
  const options = [...FILTER_TECHNOLOGIES, ...FILTER_CATEGORIES]
    .filter((value) => counts.has(value) && !PRIVATE_TECHNOLOGIES.includes(value))
    .map((value) => ({ value, label: value, count: counts.get(value) }));
  return [{ value: ALL_FILTER, label: ALL_FILTER, count: projects.length }, ...options];
}

// Development-time guard: flag tags or categories that drift from the controlled vocabulary.
if (import.meta.env.DEV) {
  for (const project of allProjects) {
    const unknownTech = (project.technologies || []).filter((t) => !TECHNOLOGIES.includes(t));
    if (unknownTech.length) console.warn(`[projects] ${project.slug}: unknown technology tag(s)`, unknownTech);
    if (!PROJECT_CATEGORIES.includes(project.category)) console.warn(`[projects] ${project.slug}: unknown category "${project.category}"`);
  }
}
