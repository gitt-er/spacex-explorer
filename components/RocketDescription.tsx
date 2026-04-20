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
    <div className="text-sm text-gray-400 leading-relaxed">
      <p>
        {expanded ? text : text.slice(0, 150)}
        {text.length > 150 && !expanded && "..."}
      </p>

      {text.length > 150 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-white text-xs underline hover:text-gray-300"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}