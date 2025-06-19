import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import './Sidebar.css';

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const toggleSidebar = () => setCollapsed((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`sidebar desktop ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-top">
          {!collapsed && <h2 className="logo-text">My Portal</h2>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? <MenuIcon /> : <MenuOpenIcon />}
          </button>
        </div>
        <ul className="nav-list">
          <li>
            <HomeIcon />
            <span>{!collapsed && 'Home'}</span>
          </li>
          <li>
            <BarChartIcon />
            <span>{!collapsed && 'Reports'}</span>
          </li>
          <li>
            <SettingsIcon />
            <span>{!collapsed && 'Settings'}</span>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar mobile ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <h2 className="logo-text">My Portal</h2>
          <button className="mobile-close-btn" onClick={closeMobile}>
            ×
          </button>
        </div>
        <ul className="nav-list">
          <li onClick={closeMobile}>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li onClick={closeMobile}>
            <BarChartIcon />
            <span>Reports</span>
          </li>
          <li onClick={closeMobile}>
            <SettingsIcon />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
