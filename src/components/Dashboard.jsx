import React from 'react';
import '../styles/Dashboard.css';
import PerformanceChart from '../charts/PerformanceChart';
import ConversionChart from '../charts/ConversionChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="widget-grid">
        <div className="widget"><PerformanceChart /></div>
        <div className="widget"><ConversionChart /></div>
      </div>
    </div>
  );
};

export default Dashboard;
