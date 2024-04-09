import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
import FileUploader from "../../components/FileUploader"
import PreviewRequest from "../../components/PreviewRequest"

const ADMIN="college"

const CollegeBulkApprove = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [jsonData, setJsonData] = useState({
    "approve-type": "",
    "students": [] 
  });

  const handleSubmit = () => {
    console.log(jsonData)
    setLoading(true)
    axios.post('https://amr.sytes.net/college/requests/bulk', jsonData, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      setLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false)
    });
  }

  useEffect(() => {
    // if(Cookies.get('token')===undefined){
    //   navigate('/notfound')
    // }
  }, [])

  return (
    <>
      <Navbar admin={ADMIN}/>

      <div className="flex flex-col items-center justify-center float-left w-1/3">
        <FileUploader admin={ADMIN} setJsonData={setJsonData} jsonData={jsonData}/>
        <button className="btn btn-primary m-2 w-full max-w-xs" onClick={handleSubmit}>
          {loading ? 
            <span className="loading loading-bars loading-lg"></span>
            :
            <p>Submit</p>
          }
        </button>
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

export default CollegeBulkApprove;
