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
          className="ui-input w-full rounded-xl px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-blue-400/30"
        />
      </div>
    );
  }