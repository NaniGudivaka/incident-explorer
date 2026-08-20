import { useLocation } from "react-router-dom";

import { Menu, Search, Bell } from "lucide-react";

import "../styles/header.css";

function Header({ onMenuClick }) {

  const location = useLocation();

  const pageInfo = {
    "/": {
      title: "Dashboard",
      subtitle: "Monitor incidents and service health",
    },
    "/incidents": {
      title: "Incidents",
      subtitle: "View and explore all incidents.",
    },
  };

  const currentPage = pageInfo[location.pathname] || pageInfo["/"];

  return (
    <header className="header">

      {/* Header left */}
      <div className="header-left">

        {/* Hamburger */}
        <button
          className="hamburger-button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>

        <div className="page-title">
          <h1>{currentPage.title}</h1>
          <span>{currentPage.subtitle}</span>
        </div>

      </div>

      {/* Header right */}
      <div className="header-right">

        <div className="header-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        {/* Notification */}
        <button
          className="notification-button"
          aria-label="Notifications"
        >
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

      </div>

    </header>
  );
}

export default Header;