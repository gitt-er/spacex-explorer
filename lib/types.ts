export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  upcoming: boolean;
  rocket: string;
  launchpad: string;
  details?: string;
  links: {
    webcast?: string;
    article?: string;
    flickr: {
      original: string[];
    };
  };
}

export interface LaunchQueryResponse {
  docs: Launch[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface LaunchQueryRequest {
  query?: LaunchQuery;
  options?: {
    page?: number;
    limit?: number;
    sort?: Record<string, 1 | -1 | "asc" | "desc">;
  };
};

export type LaunchQuery = {
  name?: {
    $regex: string;
    $options: string;
  };
  success?: boolean;
  upcoming?: boolean;
  date_utc?: {
    $gte?: string;
    $lte?: string;
  };
};

export type LaunchListProps = {
  launches: Launch[];
  itemData: Launch[];
  isLoading: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
  emptyText: string;
};

type SortField = "date_utc" | "name";
type SortDirection = "asc" | "desc";

export type SortAndDateControlsProps = {
  sort: SortField;
  setSort: (value: SortField) => void;

  sortDir: SortDirection;
  setSortDir: (value: SortDirection) => void;

  dateFrom: string;
  dateTo: string;

  setDateFrom: (value: string) => void;
  setDateTo: (value: string) => void;
};

export type LaunchesPerYearData = {
  year: string | number;
  count: number;
};