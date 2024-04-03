import React, { useState, useEffect } from "react";

import * as XLSX from "xlsx";

const FileUploader = ({ admin, setJsonData, jsonData }) => {

  const [file, setFile] = useState(null);
  const [sheetNames, setSheetNames] = useState([])

  const handleActionChange = (event) => {
    const action = event.target.value
    
    setJsonData({
      ...jsonData,
      "approve-type": action
    });
  };

  const handleSelection = () => {
    const sheetName = event.target.value

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        
        setJsonData({
          ...jsonData,
          "students": json
        });
      };
      reader.readAsBinaryString(file);
    }
  }

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        setSheetNames(workbook.SheetNames)
      };
      reader.readAsBinaryString(file);
    }
  }, [file])

  return (
    <>
      <input 
        type="file" 
        className="file-input file-input-bordered w-full max-w-xs m-2" 
        accept=".xls,.xlsx"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <select className="select select-bordered w-full max-w-xs" onChange={handleSelection}>
        <option disabled selected>Choose Sheet</option>
        {sheetNames.map((sheet) => 
          <option>{sheet}</option>
        )}
      </select>

      {(admin == "college") ? 
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accept account request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="account-request-accepted" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Reject account request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="account-request-rejected" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Accept new bus-pass request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="college-bus-pass-request-accepted" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Reject new bus-pass request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="college-bus-pass-request-rejected" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Accept bus-pass renewal request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="college-bus-pass-renew-request-accepted" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Reject new bus-pass renewal request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="college-bus-pass-renew-request-rejected" 
              onChange={handleActionChange} 
            />
          </label>
        </div>
        :
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accept new bus-pass request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="bus-service-bus-pass-request-accepted" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Reject new bus-pass request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="bus-service-bus-pass-request-rejected" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Accept bus-pass renewal request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="bus-service-bus-pass-renew-request-accepted" 
              onChange={handleActionChange} 
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Reject new bus-pass renewal request</span>
            <input 
              type="radio" 
              name="radio-10" 
              className="radio checked:bg-blue-500 ml-10" 
              value="bus-service-bus-pass-renew-request-rejected" 
              onChange={handleActionChange} 
            />
          </label>
        </div>

      }

    </>
  )
};

export default FileUploader;

