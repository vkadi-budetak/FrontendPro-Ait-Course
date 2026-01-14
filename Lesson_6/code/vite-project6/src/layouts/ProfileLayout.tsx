import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div>
      <nav>
        <NavLink to={"/profile/settings"}>Settings</NavLink>
        <NavLink to={"/profile/data"}>Data</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
