import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
import RequestTable from "../../components/RequestTable"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="college"

const AccountRequests = () => {
  const navigate = useNavigate()

  const [requests, setRequests] = useState([])
  const [render, setRender] = useState([])
  const [requestType, setRequestType] = useState('a?');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if(Cookies.get('token')===undefined){
    //   navigate('/notfound')
    // }

    setLoading(true)
    let endpoint = "https://amr.sytes.net/api/college"
    if(requestType[0]=='a'){
      endpoint = endpoint + "/account/get"
    }
    else if(requestType[0]=='b'){
      endpoint = endpoint + "/pass/get"
    }
    switch (requestType[4]) {
      case '?':
        endpoint = endpoint + "/applied"
        break;
      case 'a':
        endpoint = endpoint + ((requestType[0]=='a')?"/accepted":"/forwarded")
        break;
      case 'r':
        endpoint = endpoint + "/rejected"
        break;
    }
    if(requestType[2]=='r'){endpoint = endpoint + "?type=true"}

    axios.post(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      setRequests(response.data) 
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

      <div className="m-5">

        <div className="md-10 p-2">

          <Selector admin={ADMIN} setRequestType={setRequestType}/>

          <Search data={requests} setRequests={setRender}/>

        </div>

        <div className="mt-10 h-screen overflow-scroll">
          <RequestTable data={render} requestType={requestType} admin={ADMIN}/>
        </div>

      </div>
    </>
  )
};

export default AccountRequests;

