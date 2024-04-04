import React, { useState } from 'react';

import axios from 'axios';

function ComplaintPage() {

  const [complaintType, setComplaintType] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Complaint Type:", complaintType);
    console.log("Complaint Description:", complaintDescription);
    // setComplaintType('');
    // setComplaintDescription('');
    const complaint = {
      "complaint-type": complaintType,
      "complaint-description": complaintDescription
    }

    axios.post('https://amr.sytes.net/complaint', complaint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h2>Complaint Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="complaintType">Complaint Type:</label>
          <select
            id="complaintType"
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
          >
            <option value="">Select Complaint Type</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Issue</option>
            <option value="service">Service Issue</option>
          </select>
        </div>
        <div>
          <label htmlFor="complaintDescription">Complaint Description:</label>
          <textarea
            id="complaintDescription"
            value={complaintDescription}
            onChange={(e) => setComplaintDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ComplaintPage;
