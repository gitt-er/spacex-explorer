# SpaceX Explorer

A frontend SpaceX Explorer built with **Next.js (App Router)**, **React**, and **TypeScript**, powered by the public **SpaceX API v4**.

## GitHub Repo
 
`https://github.com/gitt-er/spacex-explorer`

---

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Run development server
```bash
npm run dev
```

### 3) Open app
[http://localhost:3000](http://localhost:3000)

---


## Features

### Launches List
- Server-side pagination with `POST /launches/query`
- Mission name search (debounced)
- Filters:
  - Upcoming / Past
  - Success / Failure
  - Date range (`from` / `to`)
- Sorting:
  - By launch date
  - By mission name
  - Asc / Desc
- Virtualized list rendering (`react-window`) for performance
- "Load more" pagination UX
- Loading skeletons, empty state, and error state with retry

### Launch Detail (`/launches/[id]`)
- Launch metadata: name, date, success status, details, links
- Related entities fetched by ID:
  - `GET /rockets/:id`
  - `GET /launchpads/:id`
- Flickr image gallery when available
- Favorite toggle from detail page

### Favorites
- Bookmark launches from list/detail
- Persisted in `localStorage`
- Favorites page to view and remove saved launches

### Optional/Bonus Implemented
- Chart: launches per year
- Chart: success rate
- Basic service worker registration for API caching/offline-read behavior

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Data fetching/cache:** TanStack React Query
- **Styling:** Tailwind CSS
- **List virtualization:** react-window
- **Charts:** Recharts
- **Offline/cache:** Service Worker (custom `public/sw.js`)

---

## Why App Router?

I chose **App Router** for:
- Better route co-location and nested layout model
- Clean file-based route conventions for `/launches`, `/launches/[id]`, `/favorites`
- Better support for mixed server/client components where needed

The root route currently redirects to `/launches`.

---

## Why React Query?

I chose **React Query** over custom fetchers-only because it provides:
- Request caching and deduplication
- Built-in loading/error/fetching states
- Pagination support via `useInfiniteQuery`
- Retry behavior and stale-time configuration
- Better perceived UX through background refresh patterns

---

## SpaceX API Usage

Base URL: `https://api.spacexdata.com/v4`

### Main endpoints used
- `POST /launches/query` (primary list endpoint)
- `GET /launches/:id`
- `GET /rockets/:id`
- `GET /launchpads/:id`

### Pagination strategy
The app does **not fetch all launches client-side**.  
Instead, it requests paginated data from `POST /launches/query` with:
- `query` object (search + filters)
- `options.page`
- `options.limit`
- `options.sort`

Each "Load more" increments server page and appends results.

### Example query payload
```json
{
  "query": {
    "name": { "$regex": "falcon", "$options": "i" },
    "upcoming": false,
    "success": true,
    "date_utc": { "$gte": "2020-01-01", "$lte": "2024-12-31" }
  },
  "options": {
    "page": 1,
    "limit": 10,
    "sort": { "date_utc": "desc" }
  }
}
```

---

## Project Structure

```txt
app/
  page.tsx                     # redirects to /launches
  launches/page.tsx            # launches listing page
  launches/[id]/page.tsx       # launch detail page
  favorites/page.tsx           # favorites page
  providers.tsx                # React Query provider
  swregister.tsx               # service worker registration

components/
  launches/LaunchList.tsx
  launches/SortAndDateControls.tsx
  launches/SuccessRateChart.tsx
  LaunchRow.tsx
  FavoriteButton.tsx
  RocketDescription.tsx

hooks/
  useLaunches.ts
  useDebounce.ts

lib/
  api.ts
  types.ts
  queryClient.ts
  favorites.ts
  launchAnalytics.ts
```

---

## Available Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - run ESLint

---

## Performance Considerations

- Server-side pagination via SpaceX query API (avoids loading all data)
- Debounced search input to reduce request volume
- Virtualized list rendering (`react-window`) to reduce DOM nodes
- Memoization for derived chart datasets (`useMemo`)
- React Query cache settings (`staleTime`, retry) to reduce redundant traffic

---

## Accessibility Considerations

- Semantic structure for major content sections
- Interactive controls use native form elements/buttons
- Distinct loading/error/empty UI states for better UX clarity
- Keyboard-friendly controls for filter/sort workflows

> Note: Further improvements can include stricter ARIA labeling, focus management after route transitions, and screen-reader announcements for async list updates.

---

## Tradeoffs and Decisions

- **Client-heavy list interactions** simplify rapid filtering/sorting UX but shift more logic to client components.
- **Load More** was selected over infinite auto-scroll for better user control and reduced accidental over-fetching.
- **Service worker caching** is intentionally basic to keep implementation small within timebox.

---

## Known Limitations / TODO

- Replace remaining weakly-typed spots with stricter domain types (no `any` paths in core flow)
- Add route-level `loading.tsx` / `error.tsx` boundaries for all major routes
- Improve accessibility with explicit labels and ARIA live updates for fetch status
- Add status-aware retry/backoff for `429` and `5xx` in API layer
- Add tests (unit + integration) for filters/query mapping
- Improve offline strategy with cache invalidation/versioning rules
- Add compare-launches side-by-side page with shareable URL params

---
