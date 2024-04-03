import React, { useState } from "react";

import * as XLSX from "xlsx";
import axios from 'axios';

import Navbar from "../../components/Navbar"
import FileUploader from "../../components/FileUploader"
import PreviewRequest from "../../components/PreviewRequest"

const ADMIN="college"

const CollegeBulkApprove = () => {

  const [jsonData, setJsonData] = useState([]);

  const handleSubmit = () => {
    console.log(jsonData)
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

        {jsonData.map((student, index) => 
          <PreviewRequest key={index}/>
        )}
      </div>
    </>
  );
}

export default CollegeBulkApprove;
