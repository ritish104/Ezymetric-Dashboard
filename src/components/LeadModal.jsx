import React from 'react';
import '../styles/LeadModal.css';

const LeadModal = ({ lead, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{lead.name}</h2>
        <p>Contact: {lead.contact}</p>
        <p>Status: {lead.status}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LeadModal;
