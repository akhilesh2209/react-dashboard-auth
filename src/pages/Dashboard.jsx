import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import ChartBox from "../components/ChartBox";
import SkeletonCard from "../components/SkeletonCard";
import { fetchDashboardStats } from "../services/mockApi";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchDashboardStats().then((data) => setStats(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}</h1>

      </div>

      <div className="stats-grid">
        {!stats ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <StatCard title="Total Users" value={stats.users} />
            <StatCard title="Monthly Revenue" value={stats.revenue} />
            <StatCard title="Active Sessions" value={stats.sessions} />
            <StatCard title="Conversion Rate" value={stats.conversion} />
          </>
        )}
      </div>

      <div className="chart-section">
        <ChartBox />
      </div>
    </div>
  );
}
