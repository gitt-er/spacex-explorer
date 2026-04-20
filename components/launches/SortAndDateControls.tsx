import { SortAndDateControlsProps } from "@/lib/types";

export default function SortAndDateControls({
    sort,
    setSort,
    sortDir,
    setSortDir,
    dateFrom,
    dateTo,
    setDateFrom,
    setDateTo,
  }: SortAndDateControlsProps) {
    return (
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <div className="flex gap-2">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortAndDateControlsProps["sort"])}
            className="bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg"
          >
            <option value="date_utc">Date</option>
            <option value="name">Name</option>
          </select>
  
          <select
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value as SortAndDateControlsProps["sortDir"])}
            className="bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg"
          >
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </select>
        </div>
  
        <div className="flex gap-2">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg"
          />
  
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 px-3 py-2 rounded-lg"
          />
        </div>
      </div>
    );
  }