import { Link, Outlet } from "react-router-dom";

export default function DashboardPage() {
  return (
    <div>
      This is Dashboard Page
      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="setting">Setting</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
