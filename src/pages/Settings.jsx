import { useAuth } from "../context/AuthContext";

export default function Settings() {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Settings</h1>
      <p className="dashboard-subtext">Manage your account details</p>

      <div className="settings-card">
        <h3>Account Information</h3>
        <hr />

        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> Admin</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  );
}
