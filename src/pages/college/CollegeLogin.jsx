import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

const CollegeLogin = () => {
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({
    // CollegeName: "",
    UserName: "",
    Password: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target; 
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (event) => {
    setLoading(true)
    // const creds = {"college": credentials.CollegeName, "username": credentials.UserName, "password": credentials.Password}
    const creds = {"username": credentials.UserName, "password": credentials.Password}
    axios.post('https://amr.sytes.net/api/college/login', creds, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      navigate('/college/')
      setLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false)
    });
  } // this api call must return a JWT token if creds are correct the token must be sent as res.cookies.send this will be automatically saved (ape chakk luga) in browwer and will send the JWT in subsiquent requests automatically.

  return (
    <>
      <h1 className="text-3xl text-center my-20 font-semibold p-3">College Login</h1>
      <center>
      <div className="flex flex-col items-center justify-center max-w-[30em]">

        {/* <label className="input input-bordered flex items-center gap-2 m-2 w-10/12"> */}
        {/*   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg> */}
        {/*   <input type="text" className="grow" placeholder="College Name" name="CollegeName" onChange={handleChange}/> */}
        {/* </label> */}

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

export default CollegeLogin;

