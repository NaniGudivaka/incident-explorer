
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  AlertTriangle,
  Server,
  Network,
  Users,
  Rocket,
  Database,
  Globe,
  BarChart3,
  X,
} from "lucide-react";

import "../styles/sideBar.css";

function SideBar({ isOpen, onClose }) {
  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Incidents",
      icon: AlertTriangle,
    },
    {
      label: "Services",
      icon: Server,
    },
    {
      label: "Dependencies",
      icon: Network,
    },
    {
      label: "Teams",
      icon: Users,
    },
    {
      label: "Deployments",
      icon: Rocket,
    },
    {
      label: "Databases",
      icon: Database,
    },
    {
      label: "Environments",
      icon: Globe,
    },
    {
      label: "Reports",
      icon: BarChart3,
    },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      {/* Mobile close button */}
      <button
        className="sidebar-close"
        onClick={onClose}
        aria-label="Close sidebar"
      >
        <X size={24} />
      </button>

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-icon">
          <Network size={22} />
        </div>

        <div className="logo-content">
          <h2>Incident Explorer</h2>
          <span>Smart Dependency View</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const path =
            item.label === "Dashboard"
              ? "/"
              : `/${item.label.toLowerCase()}`;

          return (
            <NavLink
              key={item.label}
              to={path}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} strokeWidth={1.8} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User */}
      <div className="sidebar-user">
        <div className="user-avatar">
          NG
        </div>

        <div className="user-info">
          <strong>Nani Gudivaka</strong>
          <span>Full Stack Developer</span>
        </div>

        <span className="user-arrow">›</span>
      </div>

    </aside>
  );
}

export default SideBar;