const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

/** Formats an ISO date string ("2026-08-15") as "Aug 15, 2026"; returns the input if it can't be parsed. */
export function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : formatter.format(date);
}
