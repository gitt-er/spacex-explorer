export default function SearchBar({
    search,
    setSearch,
  }: {
    search: string;
    setSearch: (v: string) => void;
  }) {
    return (
      <div>
        <label htmlFor="search" className="sr-only">
          Search SpaceX missions
        </label>
  
        <input
          id="search"
          placeholder="Search missions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 
          focus:outline-none focus:ring-2 focus:ring-white/20 transition"
        />
      </div>
    );
  }