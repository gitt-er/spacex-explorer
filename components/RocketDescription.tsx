"use client";

import { useState } from "react";

export default function RocketDescription({
  description,
}: {
  description?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const text = description || "No description available.";

  return (
    <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      <p>
        {expanded ? text : text.slice(0, 150)}
        {text.length > 150 && !expanded && "..."}
      </p>

      {text.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs text-zinc-900 underline hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}