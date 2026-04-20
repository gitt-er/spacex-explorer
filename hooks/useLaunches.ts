import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { fetchLaunches } from "@/lib/api";
import { LaunchQueryRequest, LaunchQueryResponse } from "@/lib/types";

type LaunchPage = LaunchQueryResponse;

export function useLaunches(filters: LaunchQueryRequest) {
  return useInfiniteQuery<
    LaunchPage,
    Error,
    InfiniteData<LaunchPage>,
    [string, LaunchQueryRequest],
    number
  >({
    queryKey: ["launches", filters],
    queryFn: ({ pageParam = 1, signal }) =>
      fetchLaunches({
        query: filters.query,
        options: {
          page: pageParam,
          limit: 10,
          sort: filters.options?.sort,
        },
      }, signal),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
}