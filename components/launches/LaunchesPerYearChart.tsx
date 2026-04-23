import { LaunchesPerYearData } from "@/lib/types";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";

  export default function LaunchesPerYearChart({ data }: {data: LaunchesPerYearData[]}) {
    return (
      <div className="ui-card h-80 w-full p-4">
        <h2 className="ui-muted mb-3 text-sm">Launches per year</h2>
  
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="year" stroke="var(--muted)" />
            <YAxis stroke="var(--muted)" />
            <Tooltip />
            <Bar dataKey="count" fill="var(--primary)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }