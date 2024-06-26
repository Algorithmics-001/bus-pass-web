import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

const BusServiceLogin = () => {
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    // BusServiceName: "",
    UserName: "",
    Password: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (event) => {
    setLoading(true)
    // const creds = {"bus-service": credentials.BusServiceName, "username": credentials.UserName, "password": credentials.Password}
    const creds = {"username": credentials.UserName, "password": credentials.Password}
    axios.post('https://amr.sytes.net/api/bus-service/login', creds, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      navigate('/bus-service/')
      setLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false)
    });
  }

  useEffect(() => {
    if(Cookies.get('token')!==undefined){
      navigate('/bus-service')
    }
  }, [])

  return (
    <>
      <h1 className="text-3xl text-center mt-20 mb-20 font-semibold">Bus Service Login</h1>
        <center>
      <div className="flex flex-col items-center justify-center max-w-[30em] p-2">

        <label className="input input-bordered flex items-center gap-2 m-2 w-10/12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" name="UserName" onChange={handleChange}/>
        </label>

        <label className="input input-bordered flex items-center gap-2 m-2 w-10/12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" placeholder="Password" name="Password" onChange={handleChange}/>
        </label>

        <button className="btn btn-accent flex items-center gap-2 m-2 w-10/12" onClick={handleLogin}>
          {loading ? 
            <span className="loading loading-bars loading-lg"></span>
            :
            <p>Login</p>
          }
        </button>
      </div>
      </center>
    </>
  )
};

export default BusServiceLogin;

