import React, { useState } from 'react';
import LeadModal from './LeadModal';
import leadsData from '../data/leads';
import '../styles/Leads.css';

const Leads = () => {
  const [selectedLead, setSelectedLead] = useState(null);

  const handleLeadClick = (lead) => {
    setSelectedLead(lead);
  };

  return (
    <div className="leads">
      <h1>Leads</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.contact}</td>
              <td>{lead.status}</td>
              <td>{lead.date}</td>
              <td><button onClick={() => handleLeadClick(lead)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedLead && <LeadModal lead={selectedLead} onClose={() => setSelectedLead(null)} />}
    </div>
  );
};

export default Leads;
