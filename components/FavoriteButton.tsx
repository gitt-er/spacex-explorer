"use client";

import { useState } from "react";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

export default function FavoriteButton({ id, onRemove }: { id: string, onRemove?: (id: string) => void }) {
  const [fav, setFav] = useState(() => isFavorite(id));

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
    setFav(!fav);
    onRemove?.(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1 rounded-full text-xs border transition ${
        fav
          ? "border-yellow-500/50 bg-yellow-400/20 text-yellow-700 dark:text-yellow-300"
          : "ui-secondary-btn"
      }`}
    >
      {fav ? "★ Saved" : "☆ Save"}
    </button>
  );
}