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
      <div className="ui-card h-80 w-full p-4">
        <h2 className="ui-muted mb-3 text-sm">Success rate</h2>
  
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