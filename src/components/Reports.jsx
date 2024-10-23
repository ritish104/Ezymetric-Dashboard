import React from 'react';
import { saveAs } from 'file-saver';
import { jsPDF } from 'jspdf';
import leadsData from '../data/leads';

const Reports = () => {
  const exportCSV = () => {
    const csvData = leadsData.map(lead => `${lead.name},${lead.contact},${lead.status},${lead.date}`).join('\n');
    const blob = new Blob([`Name,Contact,Status,Date\n${csvData}`], { type: 'text/csv' });
    saveAs(blob, 'leads_report.csv');
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Leads Report', 10, 10);
    leadsData.forEach((lead, i) => {
      doc.text(`${lead.name}, ${lead.contact}, ${lead.status}, ${lead.date}`, 10, 20 + i * 10);
    });
    doc.save('leads_report.pdf');
  };

  return (
    <div className="reports">
      <h1>Reports</h1>
      <button onClick={exportCSV}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
    </div>
  );
};

export default Reports;
