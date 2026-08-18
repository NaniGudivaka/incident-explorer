
// Header component
// Contains the Header bar, Hamburger controls, left, right, and Notification .
//By seeing you can easily identify the CSS styles.



import { Menu, Search, Bell } from "lucide-react";

import "../styles/header.css";

function Header({ onMenuClick }) {
  return (
    <header className="header">

    {/*Header left */}
      <div className="header-left">

        {/* HAmburger */}
        <button
          className="hamburger-button"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>

        <div className="page-title">
          <h1>Dashboard</h1>
          <span>Monitor incidents and service health</span>
        </div>
      </div>

      {/* Right */ }

      <div className="header-right">

        <div className="header-search">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

      {/* Notification */}
        <button className="notification-button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot"></span>
        </button>

      </div>

    </header>
  );
}

export default Header;