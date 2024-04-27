import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
import Request from "../../components/Request"
import FilterDrawer from "../../components/FilterDrawer"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="bus-service"

const BusServiceRequests = () => {
  const navigate = useNavigate()

  const [requests, setRequests] = useState([])
  const [render, setRender] = useState([])
  const [requestType, setRequestType] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if(Cookies.get('token')===undefined){
    //   navigate('/notfound')
    // }

    setLoading(true)
    axios.post('https://amr.sytes.net/api/bus-service/requests', requestType, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      setRequests(response.data) // assuming response.data is an array of student object
      setRender(response.data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error:', error);
      setLoading(false)
    });
  }, [requestType])

  return (
    <>
      <Navbar admin={ADMIN}/>

      <FilterDrawer admin={ADMIN} data={requests} setRequests={setRender}/>

      <div className="m-5">

        <div className="md-10 p-2">
          <Selector admin={ADMIN} setRequestType={setRequestType}/>

          <label htmlFor="college-filter-drawer" className="btn btn-outline btn-primary float-right drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            Sort by similarity 
          </label>

          <Search data={requests} setRequests={setRender} requestType={requestType}/>
        </div>

        <div className="mt-10 h-screen overflow-scroll">
          {loading ? 
            <span className="loading loading-bars loading-lg"></span>
            :
            <>
            {render.map((data, index) => (
              <Request key={index} info={data} requestType={requestType} admin={ADMIN}/>
            ))}</>
          }
        </div>

      </div>
    </>
  )
};

export default BusServiceRequests;

