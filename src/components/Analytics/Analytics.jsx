import React from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import '../../styles/Analytics.css'; 

export default function Analytics() {
  return (
    <div className="analytics-container">
      <h2>Analytics Dashboard</h2>

      <div className="chart-section">
        <h3>Sales Performance</h3>
        <BarChart />
      </div>

      <div className="chart-section">
        <h3>Visitor Trends</h3>
        <LineChart />
      </div>

      <div className="chart-section">
        <h3>Market Share</h3>
        <PieChart />
      </div>
    </div>
  );
}
