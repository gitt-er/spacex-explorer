import { Launch } from "./types";

export function getLaunchesPerYear(launches: Launch[]) {
    const map: Record<string, number> = {};
  
    for (const l of launches) {
      const year = new Date(l.date_utc).getFullYear();
      map[year] = (map[year] || 0) + 1;
    }
  
    return Object.entries(map)
      .map(([year, count]) => ({ year, count }))
      .sort((a, b) => Number(a.year) - Number(b.year));
  }
  
  export function getSuccessRate(launches: Launch[]) {
    let success = 0;
    let failed = 0;
  
    for (const l of launches) {
      if (l.success === true) success++;
      else if (l.success === false) failed++;
    }
  
    return [
      { name: "Success", value: success },
      { name: "Failed", value: failed },
    ];
  }