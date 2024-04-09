import React, { useState } from 'react';
import axios from 'axios';

function ComplaintPage() {
  const [complaintType, setComplaintType] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Complaint Type:", complaintType);
    console.log("Complaint Description:", complaintDescription);

    const complaint = {
      "complaint_type": complaintType,
      "complaint_description": complaintDescription
    }

    axios.post('https://amr.sytes.net/api/bus-service/complaint', complaint, {
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">File a Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="complaintType" className="text-lg font-semibold mb-2">Complaint Type:</label>
          <select
            id="complaintType"
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Complaint Type</option>
            <option value="technical">Technical Issue</option>
            <option value="billing">Billing Issue</option>
            <option value="service">Service Issue</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="complaintDescription" className="text-lg font-semibold mb-2">Complaint Description:</label>
          <textarea
            id="complaintDescription"
            value={complaintDescription}
            onChange={(e) => setComplaintDescription(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">Send</button>
      </form>
    </div>
  );
}

export default ComplaintPage;
