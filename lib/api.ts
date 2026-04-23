import { LaunchQueryRequest } from "@/lib/types";
import { fetchWithRetry } from "./fetchWithRetry";
const BASE_URL = "https://api.spacexdata.com/v4";

export async function fetchLaunches(params: LaunchQueryRequest, signal?: AbortSignal) {
  const res = await fetchWithRetry(`${BASE_URL}/launches/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
    signal,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch launches");
  }
  return res.json();
}

export async function fetchLaunchById(id: string) {
  const res = await fetchWithRetry(`${BASE_URL}/launches/${id}`);
  if (!res.ok) throw new Error("Failed to fetch launch");
  return res.json();
}

export async function fetchRocket(id: string) {
  const res = await fetchWithRetry(`${BASE_URL}/rockets/${id}`);
  if (!res.ok) throw new Error("Failed to fetch rocket");
  return res.json();
}

export async function fetchLaunchpad(id: string) {
  const res = await fetchWithRetry(`${BASE_URL}/launchpads/${id}`);
  if (!res.ok) throw new Error("Failed to fetch launchpad");
  return res.json();
}