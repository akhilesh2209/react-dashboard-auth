export function fetchDashboardStats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        users: "1,248",
        revenue: "₹32,540",
        sessions: "892",
        conversion: "4.6%",
      });
    }, 1200);
  });
}

export function fetchChartData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: "Mon", value: 120 },
        { label: "Tue", value: 210 },
        { label: "Wed", value: 180 },
        { label: "Thu", value: 260 },
        { label: "Fri", value: 300 },
      ]);
    }, 1200);
  });
}
