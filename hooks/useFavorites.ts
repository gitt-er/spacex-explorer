const KEY = "spacex-favorites";

export function useFavorites() {
  const get = (): string[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  };

  const toggle = (id: string) => {
    const current = get();
    const updated = current.includes(id)
      ? current.filter((i) => i !== id)
      : [...current, id];

    localStorage.setItem(KEY, JSON.stringify(updated));
  };

  return { get, toggle };
}