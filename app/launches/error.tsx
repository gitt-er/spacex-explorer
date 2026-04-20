"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold text-red-400">
        Something went wrong
      </h2>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition"
        aria-label="Retry loading launches"
      >
        Retry
      </button>
    </div>
  );
}