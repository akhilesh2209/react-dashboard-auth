import ChartBox from "../components/ChartBox";

export default function Analytics() {
  return (
    <div className="dashboard">
      <h1>Analytics</h1>
      <p>Traffic and performance insights</p>

      {/* Weekly Activity */}
      <div className="chart-section">
        <ChartBox title="Weekly Activity" />
      </div>

      {/* Traffic Sources */}
      <div className="chart-section">
        <div className="chart-box">
          <h3>Traffic Sources</h3>

          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-title">Direct</p>
              <h3 className="stat-value">42%</h3>
            </div>

            <div className="stat-card">
              <p className="stat-title">Organic Search</p>
              <h3 className="stat-value">28%</h3>
            </div>

            <div className="stat-card">
              <p className="stat-title">Paid Ads</p>
              <h3 className="stat-value">18%</h3>
            </div>

            <div className="stat-card">
              <p className="stat-title">Referral</p>
              <h3 className="stat-value">12%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
