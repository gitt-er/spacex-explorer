"use client";

import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/favorites";
import { fetchLaunchById } from "@/lib/api";
import Link from "next/link";
import FavoriteButton from "@/components/FavoriteButton";
import { Launch } from "@/lib/types";

export default function FavoritesPage() {
  const [launches, setLaunches] = useState<Launch[]>([]);

  useEffect(() => {
    async function load() {
      const ids = getFavorites();

      const data = await Promise.all(
        ids.map((id) => fetchLaunchById(id))
      );

      setLaunches(data);
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-background p-10 text-foreground">
      <h1 className="text-3xl font-bold mb-6">Favorites</h1>

      <div className="space-y-4">
        {launches.length == 0 && (
          <div className="ui-muted p-10 text-center">
            No favorites yet ⭐
          </div>)}
        {launches.length > 0 && launches.map((launch) => (
          <div key={launch.id} className="px-2">
            <Link href={`/launches/${launch.id}`}>
              <div className="ui-card block p-5 transition hover:brightness-[1.03]">
                
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-lg font-semibold">{launch.name}</h2>
                    <p className="ui-muted text-sm">
                      {new Date(launch.date_utc).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        launch.success === true
                          ? "bg-green-500/20 text-green-400"
                          : launch.success === false
                          ? "bg-red-500/20 text-red-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {launch.success === true
                        ? "Success"
                        : launch.success === false
                        ? "Failed"
                        : "Upcoming"}
                    </span>

                    <FavoriteButton
                      id={launch.id}
                      onRemove={(id) => {
                        setLaunches((prev) => prev.filter((l) => l.id !== id));
                      }} />
                  </div>
                </div>

              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}