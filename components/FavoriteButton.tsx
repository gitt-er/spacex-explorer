"use client";

import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite } from "@/lib/favorites";

export default function FavoriteButton({ id, onRemove }: { id: string, onRemove?: (id: string) => void }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(id));
  }, [id]);

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
          ? "bg-yellow-500 text-black border-yellow-400"
          : "border-zinc-700 text-white hover:border-zinc-500"
      }`}
    >
      {fav ? "★ Saved" : "☆ Save"}
    </button>
  );
}