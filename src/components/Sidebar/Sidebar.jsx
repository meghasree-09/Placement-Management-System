import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>

        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Dashboard</li>
        </NavLink>

        <NavLink
          to="/students"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Students</li>
        </NavLink>

        <NavLink
          to="/companies"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Companies</li>
        </NavLink>

        <NavLink
          to="/placements"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Placements</li>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Reports</li>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Settings</li>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>Logout</li>
        </NavLink>

      </ul>
    </div>
  );
}

export default Sidebar;