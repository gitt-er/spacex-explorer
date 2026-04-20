export default function Loading() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="h-8 w-64 bg-zinc-800 rounded animate-pulse" />
          <div className="h-4 w-96 bg-zinc-800 rounded animate-pulse" />
          <div className="h-32 w-full bg-zinc-900 rounded-2xl animate-pulse" />
        </div>
      </div>
    );
  }