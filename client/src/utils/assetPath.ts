// Utility to build correct public asset URLs respecting Vite base (import.meta.env.BASE_URL)
// Ensures no double slashes and works for GitHub Pages subpath deployments.
export function assetPath(p: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/,'/');
  const cleaned = p.replace(/^\/+/, '');
  return base + cleaned;
}
