import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">Dashboard</h2>

      <nav className="sidebar-links">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
          Overview
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
          Analytics
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
          Settings
        </NavLink>
      </nav>

      <button className="sidebar-logout" onClick={handleLogout}>
        ⎋ Logout
      </button>
    </aside>
  );
}
