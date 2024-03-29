import React, { useState } from "react";
import * as XLSX from "xlsx";
import axios from 'axios';

import Navbar from "../../components/Navbar"

const ADMIN="college"

const CollegeBulkApprove = () => {

  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);
  const [action, setAction] = useState("");

  const handleActionChange = (event) => {
    setAction(event.target.value); // Update the state with the selected action
  };

  const handleApprove = () => {

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        const updatedData = json.map((student) => {
          return { ...student, STATUS: `${action}`};
        });
        
        setJsonData(updatedData);
        // axios.post('your-api-endpoint', updatedData)
        //   .then(response => {
        //     console.log('Data sent to API:', response.data);
        //     
        //     setJsonData(updatedData);
        //   })
        //   .catch(error => {
        //     console.error('Error sending data to API:', error);
        //   });
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <>
      <Navbar admin={ADMIN}/>

      <h1 className="text-3xl text-center mt-20 mb-20">Upload Excel Sheet</h1>

      <div className="flex flex-col items-center justify-center">

        <div>
          The file must have the following fields
        </div>
        
        <input 
          type="file" 
          className="file-input file-input-bordered w-full max-w-xs m-2" 
          accept=".xls,.xlsx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Approve student accounts</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="approveStudentAccounts" 
              checked={action === "approveStudentAccounts"} 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Approve bus-pass application</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="approveBusPassApplication"
              checked={action === "approveBusPassApplication"} 
              onChange={handleActionChange}
            />
          </label>
        </div>

        <button className="btn btn-primary m-2 w-full max-w-xs" onClick={handleApprove}>Submit</button>


        <ul>
          {jsonData.map((student, index) => (
            <li key={index}>NAME: {student.NAME} STATUS: {student.STATUS}</li>
          ))}
        </ul>

      </div>
    </>
  );
}

export default CollegeBulkApprove;
