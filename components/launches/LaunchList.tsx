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
              className="h-24 animate-pulse rounded-2xl border"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--surface-hover)" }}
            />
          ))}
        </div>
      )}

      {!isLoading && launches.length === 0 && (
        <div className="ui-muted py-10 text-center">
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
            className="ui-primary-btn rounded-xl px-6 py-3 transition"
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}