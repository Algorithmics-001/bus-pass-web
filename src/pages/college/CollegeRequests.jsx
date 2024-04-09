import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
import Request from "../../components/Request"
import FilterDrawer from "../../components/FilterDrawer"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="college"

const AccountRequests = () => {
  const navigate = useNavigate()

  // const test = [
    // {
    //   "name": "John Doe",
    //   "email": "john.doe@example.com",
    //   "course": "Computer Science",
    //   "batch": 2022,
    //   "semester": 3,
    //   "rollno": 1234,
    //   "department": "Engineering",
    //   "address": "123 Main Street",
    //   "phone": 1234567890,
    // },
  //   {
  //     "name": "Alice Smith",
  //     "email": "alice.smith@example.com",
  //     "course": "Business Administration",
  //     "batch": 2023,
  //     "semester": 2,
  //     "rollno": 5678,
  //     "department": "Business",
  //     "address": "456 Elm Street",
  //     "phone": 9876543210,
  //   },
  //   {
  //     "name": "Bob Johnson",
  //     "email": "bob.johnson@example.com",
  //     "course": "Psychology",
  //     "batch": 2021,
  //     "semester": 4,
  //     "rollno": 9101,
  //     "department": "Arts",
  //     "address": "789 Oak Street",
  //     "phone": 1357924680,
  //   },
  //   {
  //     "name": "Emily Brown",
  //     "email": "emily.brown@example.com",
  //     "course": "Biology",
  //     "batch": 2020,
  //     "semester": 5,
  //     "rollno": 1121,
  //     "department": "Science",
  //     "address": "101 Pine Street",
  //     "phone": 2468013579,
  //   },
  //   {
  //     "name": "Michael Wilson",
  //     "email": "michael.wilson@example.com",
  //     "course": "Economics",
  //     "batch": 2024,
  //     "semester": 1,
  //     "rollno": 3141,
  //     "department": "Social Sciences",
  //     "address": "202 Cedar Street",
  //     "phone": 9871234560,
  //   },
  //   {
  //     "name": "Sarah Taylor",
  //     "email": "sarah.taylor@example.com",
  //     "course": "History",
  //     "batch": 2022,
  //     "semester": 6,
  //     "rollno": 4151,
  //     "department": "Humanities",
  //     "address": "303 Walnut Street",
  //     "phone": 3692581470,
  //   },
  //   {
  //     "name": "David Martinez",
  //     "email": "david.martinez@example.com",
  //     "course": "Chemistry",
  //     "batch": 2023,
  //     "semester": 3,
  //     "rollno": 6171,
  //     "department": "Science",
  //     "address": "404 Maple Street",
  //     "phone": 9517534680,
  //   },
  //   {
  //     "name": "Jennifer Garcia",
  //     "email": "jennifer.garcia@example.com",
  //     "course": "English Literature",
  //     "batch": 2021,
  //     "semester": 7,
  //     "rollno": 8191,
  //     "department": "Arts",
  //     "address": "505 Birch Street",
  //     "phone": 1239874560,
  //   },
  //   {
  //     "name": "Daniel Brown",
  //     "email": "daniel.brown@example.com",
  //     "course": "Physics",
  //     "batch": 2020,
  //     "semester": 2,
  //     "rollno": 9201,
  //     "department": "Science",
  //     "address": "606 Cedar Street",
  //     "phone": 7896541230,
  //   },
  //   {
  //     "name": "Jessica Nguyen",
  //     "email": "jessica.nguyen@example.com",
  //     "course": "Mathematics",
  //     "batch": 2024,
  //     "semester": 4,
  //     "rollno": 1221,
  //     "department": "Science",
  //     "address": "707 Pine Street",
  //     "phone": 4563217890,
  //   }
  // ];

  const [requests, setRequests] = useState([])
  const [render, setRender] = useState([])
  const [requestType, setRequestType] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if(Cookies.get('token')===undefined){
      navigate('/notfound')
    }

    setLoading(true)
    axios.get('https://amr.sytes.net/college/requests', requestType, {
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

          <Search data={requests} setRequests={setRender}/>

        </div>

        <div className="mt-10 h-screen overflow-scroll">
          {loading ? 
            <span className="loading loading-bars loading-lg"></span>
            :
            <>
            {render.map((data, index) => (
              <Request key={index} info={data} requestType={requestType} />
            ))}</>
          }
        </div>

      </div>
    </>
  )
};

export default AccountRequests;

