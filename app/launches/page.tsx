"use client";

import { useState, useMemo } from "react";
import { useLaunches } from "@/hooks/useLaunches";
import { useDebounce } from "@/hooks/useDebounce";

import SearchBar from "@/components/launches/SearchBar";
import FiltersRow from "@/components/launches/FiltersRow";
import SortAndDateControls from "@/components/launches/SortAndDateControls";
import LaunchList from "@/components/launches/LaunchList";
import { getLaunchesPerYear, getSuccessRate } from "@/lib/launchAnalytics";
import LaunchesPerYearChart from "@/components/launches/LaunchesPerYearChart";
import SuccessRateChart from "@/components/launches/SuccessRateChart";
import { LaunchQuery } from "@/lib/types";

export default function LaunchesPage() {
  const [search, setSearch] = useState("");
  const [upcoming, setUpcoming] = useState<boolean | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [sort, setSort] = useState<"date_utc" | "name">("date_utc");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const debounced = useDebounce(search);

  const query: LaunchQuery = {};

  if (debounced.trim()) {
    query.name = { $regex: debounced, $options: "i" };
  }

  if (success !== null) query.success = success;
  if (upcoming !== null) query.upcoming = upcoming;

  if (dateFrom || dateTo) {
    query.date_utc = {};
    if (dateFrom) query.date_utc.$gte = dateFrom;
    if (dateTo) query.date_utc.$lte = dateTo;
  }

  const sortObj = { [sort]: sortDir };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useLaunches({ query, options: { sort: sortObj } });

  const launches = data?.pages.flatMap((p) => p.docs) ?? [];
  const itemData = useMemo(() => launches, [launches]);
  const yearlyData = useMemo(
    () => getLaunchesPerYear(launches),
    [launches]
  );
  
  const successData = useMemo(
    () => getSuccessRate(launches),
    [launches]
  );

  if (isError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
        <p className="text-red-500 dark:text-red-400">Failed to load launches</p>
        <button
          onClick={() => refetch()}
          className="ui-primary-btn rounded-lg px-4 py-2 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          🚀 SpaceX Explorer
        </h1>
        <p className="ui-muted mt-1">
          Browse and track all SpaceX launches
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-6 space-y-5">
        <SearchBar search={search} setSearch={setSearch} />

        <FiltersRow
          upcoming={upcoming}
          setUpcoming={setUpcoming}
          setSuccess={setSuccess}
          success={success}
        />

        <SortAndDateControls
          sort={sort}
          setSort={setSort}
          sortDir={sortDir}
          setSortDir={setSortDir}
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateFrom={setDateFrom}
          setDateTo={setDateTo}
        />
      </div>

      <LaunchList
        launches={launches}
        itemData={itemData}
        isLoading={isLoading}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        emptyText={`No ${upcoming == true ? ' Upcoming' : upcoming == false ? ' Past' : ''} ${success == true ? ' Successful' : success == false ? ' Failed' : ''} launches found. Try filtering again.`}
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <LaunchesPerYearChart data={yearlyData} />
        <SuccessRateChart data={successData} />
      </div>
    </div>
  );
}