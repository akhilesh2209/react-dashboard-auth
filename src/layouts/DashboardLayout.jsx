import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="dashboard">
        <Outlet />
      </div>
    </div>
  );
}
