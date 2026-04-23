"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h2 className="text-xl font-semibold text-red-500 dark:text-red-400">
        Something went wrong
      </h2>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        aria-label="Retry loading launches"
      >
        Retry
      </button>
    </div>
  );
}