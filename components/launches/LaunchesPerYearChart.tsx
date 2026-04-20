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
      <div className="w-full h-80 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
        <h2 className="text-sm text-zinc-400 mb-3">Launches per year</h2>
  
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }