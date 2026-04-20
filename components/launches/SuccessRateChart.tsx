import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  type SuccessRateData = {
    name: string;
    value: number;
  };

  export default function SuccessRateChart({ data }: {data: SuccessRateData[]}) {
    return (
      <div className="w-full h-80 bg-zinc-900 rounded-xl p-4 border border-zinc-800">
        <h2 className="text-sm text-zinc-400 mb-3">Success rate</h2>
  
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={100}>
              <Cell fill="#4ade80" />
              <Cell fill="#ef4444" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }