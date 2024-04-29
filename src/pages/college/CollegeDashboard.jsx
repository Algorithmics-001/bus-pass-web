import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
import Stats from "../../components/Stats.jsx"


const ADMIN="college"

const CollegeDashboard = () => {
  const navigate = useNavigate()

  const test = [
    {number:34, text:"account requests"},
    {number:14, text:"account reqeust accepted"},
    {number:1, text:"account reqeust rejected"},
    {number:44, text:"new bus pass accpeted"},
    {number:4, text:"new bus pass rejected"},
    {number:10, text:"renew requests accepted"},
    {number:2, text:"renew reqeusts rejected"},
  ]

  const [stats, setStats] = useState(test)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if(Cookies.get('token')===undefined){
    //   navigate('/notfound')
    // }
    setLoading(true)
    axios.get('https://amr.sytes.net/college/dashboard', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Response:', response.data);
        setStats(response.data) 
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false)
      });
  }, []) 

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

