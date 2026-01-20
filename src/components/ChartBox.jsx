import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchChartData } from "../services/mockApi";

export default function ChartBox() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchChartData().then(setData);
  }, []);

  if (!data) {
    return <div className="chart-skeleton" />;
  }

  return (
    <div className="chart-box">
      <h3>Weekly Activity</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
