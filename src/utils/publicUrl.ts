/** Prefix for public assets ("/" locally, "/portfolio/" on GitHub Pages). */
export function publicUrl(path: string): string {
  const p = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${p}`;
}
