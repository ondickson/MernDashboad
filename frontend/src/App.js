import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileSidebar = () => setMobileOpen(prev => !prev);
  const closeMobileSidebar = () => setMobileOpen(false);

  return (
    <div className="dashboard">
      {/* Mobile Toggle Button */}
      <button className="mobile-toggle" onClick={toggleMobileSidebar}>
        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Backdrop */}
      {mobileOpen && <div className="mobile-backdrop show" onClick={closeMobileSidebar} />}

      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content */}
      <MainContent collapsed={collapsed} />
    </div>
  );
}

export default App;
