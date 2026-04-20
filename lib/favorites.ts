const KEY = "spacex_favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function isFavorite(id: string): boolean {
  return getFavorites().includes(id);
}

export function toggleFavorite(id: string) {
  const current = getFavorites();

  const updated = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];

  localStorage.setItem(KEY, JSON.stringify(updated));
}