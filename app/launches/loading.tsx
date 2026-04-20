export default function Loading() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-8 w-48 bg-zinc-800 rounded animate-pulse" />
          <div className="h-4 w-72 bg-zinc-800 rounded animate-pulse" />
  
          <div className="space-y-3 mt-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-24 rounded-2xl bg-zinc-900 border border-zinc-800 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }