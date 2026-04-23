export default function Loading() {
    return (
      <div className="min-h-screen bg-background px-6 py-10 text-foreground">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-8 w-48 rounded bg-zinc-200 animate-pulse dark:bg-zinc-800" />
          <div className="h-4 w-72 rounded bg-zinc-200 animate-pulse dark:bg-zinc-800" />
  
          <div className="space-y-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-24 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }