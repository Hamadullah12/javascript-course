import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
   <Link to="./dashboardPage">Dashboard</Link>
   <Link to="./">Home</Link>
    </div>
  );
}
