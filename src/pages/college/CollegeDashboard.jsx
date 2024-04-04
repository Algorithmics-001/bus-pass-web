import React, { useState, useEffect } from "react";

import axios from 'axios';

import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats.jsx"


const ADMIN="college"

const CollegeDashboard = () => {

  // const test = [
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"}
  // ]

  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://amr.sytes.net/college/dashboard', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Response:', response.data);
        setStats(response.data) // assuming response.data is a array of objects
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false)
      });
  }, []) // here the jwt is being set automatically 

  return (
    <>
      <Navbar admin={ADMIN}/>

      <div className="flex flex-row flex-wrap justify-center w-1/2 mt-20 mx-auto">
        {loading ? 
          <span className="loading loading-bars loading-lg"></span>
          :
          <>
            {stats.map((data, index) => (
              <Stats key={index} info={data} />
            ))}
          </>
        }
      </div>
    </>
  )
};

export default CollegeDashboard;

