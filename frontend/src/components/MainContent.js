import React from 'react';
import './MainContent.css';

const MainContent = ({ collapsed }) => (
  <div className={`main-content ${collapsed ? 'expanded' : ''}`}>
    <h1>Dashboard</h1>
    <p>This is your main content area.</p>
  </div>
);

export default MainContent;
