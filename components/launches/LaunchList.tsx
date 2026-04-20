import { FixedSizeList as List } from "react-window";
import LaunchRow from "@/components/LaunchRow";
import { LaunchListProps } from "@/lib/types";

export default function LaunchList({
  launches,
  itemData,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  emptyText,
  fetchNextPage
}: LaunchListProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {isLoading && (
        <div className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-24 rounded-2xl bg-zinc-900 animate-pulse border border-zinc-800"
            />
          ))}
        </div>
      )}

      {!isLoading && launches.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          {emptyText}
        </div>
      )}

      {!isLoading && launches.length > 0 && (
        <List
          height={600}
          itemCount={launches.length}
          itemSize={110}
          width={"100%"}
        >
          {({ index, style }) => (
            <LaunchRow index={index} style={style} data={itemData} />
          )}
        </List>
      )}

      {hasNextPage && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition"
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}