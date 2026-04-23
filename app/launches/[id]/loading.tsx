export default function Loading() {
    return (
      <div className="min-h-screen bg-background px-6 py-10 text-foreground">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-8 w-64 rounded bg-zinc-200 animate-pulse dark:bg-zinc-800" />
          <div className="h-4 w-96 rounded bg-zinc-200 animate-pulse dark:bg-zinc-800" />
          <div className="h-32 w-full rounded-2xl bg-zinc-100 animate-pulse dark:bg-zinc-900" />
        </div>
      </div>
    );
  }