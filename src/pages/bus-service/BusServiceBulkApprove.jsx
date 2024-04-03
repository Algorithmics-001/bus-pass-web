import React, { useState } from "react";

import axios from 'axios';

import Navbar from "../../components/Navbar"
import FileUploader from "../../components/FileUploader"
import PreviewRequest from "../../components/PreviewRequest"

const ADMIN="bus-service"

const BusServiceBulkApprove = () => {

  const [jsonData, setJsonData] = useState({
    "approve-type": "",
    "students": [] 
  });

  const handleSubmit = () => {
    axios.post('https://amr.sytes.net/bus-service/requests/bulk', jsonData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
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
    <>
      <Navbar admin={ADMIN}/>

      <div className="flex flex-col items-center justify-center float-left w-1/3">
        <FileUploader admin={ADMIN} setJsonData={setJsonData} jsonData={jsonData}/>
        <button className="btn btn-primary m-2 w-full max-w-xs" onClick={handleSubmit}>Submit</button>
      </div>

      <div className="flex flex-col items-center justify-center float-right w-2/3">
        <h1>Preview</h1>

        {jsonData.students.map((student, index) => 
          <PreviewRequest key={index}/>
        )}
      </div>
    </>
  );
}

export default BusServiceBulkApprove;
