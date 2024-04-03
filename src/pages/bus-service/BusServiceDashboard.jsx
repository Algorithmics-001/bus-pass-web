import React, { useState, useEffect } from "react";

import axios from 'axios';

import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats"

const ADMIN="bus-service"

const BusServiceDashboard = () => {

  // const test = [
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"},
  //   {number:100, text:"huehue"}
  // ]

  const [stats, setStats] = useState([])

  useEffect(() => {
    axios.get('https://amr.sytes.net/bus-service/dashboard', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Response:', response.data);
        setStats(response.data) // assuming response.data is a array of objects
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []) // here the jwt is being set automatically 

  return (
    <>
      <Navbar admin={ADMIN}/>

      <div className="flex flex-row flex-wrap justify-center w-1/2 mt-20 mx-auto">
        {stats.map((data, index) => (
          <Stats key={index} info={data} />
        ))}
      </div>
    </>
  )
};

export default BusServiceDashboard;

