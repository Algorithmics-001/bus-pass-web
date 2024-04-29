import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie'

import Navbar from "../../components/Navbar"
// import Request from "../../components/Request"
import RequestTable from "../../components/RequestTable"
import FilterDrawer from "../../components/FilterDrawer"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="college"

const AccountRequests = () => {
  const navigate = useNavigate()

  const [requests, setRequests] = useState([])
  const [render, setRender] = useState([
    {
      'id': 1,
      'name': 'Alice Smith',
      'email': 'alice.smith@example.com',
      'course': 'Computer Science',
      'batch': 2022,
      'semester': 4,
      'rollno': 1,
      'department': 'Computer Science',
      'address': '123 Main St, City, Country',
      'phone': '+1234567890'
    },
    {
      'id': 2,
      'name': 'Bob Johnson',
      'email': 'bob.johnson@example.com',
      'course': 'Mechanical Engineering',
      'batch': 2023,
      'semester': 3,
      'rollno': 5,
      'department': 'Mechanical Engineering',
      'address': '456 Elm St, City, Country',
      'phone': '+1987654321'
    },
    {
      'id': 3,
      'name': 'Charlie Brown',
      'email': 'charlie.brown@example.com',
      'course': 'Physics',
      'batch': 2022,
      'semester': 5,
      'rollno': 3,
      'department': 'Physics',
      'address': '789 Oak St, City, Country',
      'phone': '+1357924680'
    },
    {
      'id': 4,
      'name': 'Diana Martinez',
      'email': 'diana.martinez@example.com',
      'course': 'Biology',
      'batch': 2024,
      'semester': 2,
      'rollno': 2,
      'department': 'Biology',
      'address': '987 Pine St, City, Country',
      'phone': '+2468135790'
    },
    {
      'id': 5,
      'name': 'Ethan Wilson',
      'email': 'ethan.wilson@example.com',
      'course': 'Chemistry',
      'batch': 2023,
      'semester': 4,
      'rollno': 7,
      'department': 'Chemistry',
      'address': '234 Maple St, City, Country',
      'phone': '+1122334455'
    },
    {
      'id': 6,
      'name': 'Fiona Garcia',
      'email': 'fiona.garcia@example.com',
      'course': 'Mathematics',
      'batch': 2022,
      'semester': 6,
      'rollno': 4,
      'department': 'Mathematics',
      'address': '345 Cedar St, City, Country',
      'phone': '+6677889900'
    },
    {
      'id': 7,
      'name': 'George Lee',
      'email': 'george.lee@example.com',
      'course': 'Electrical Engineering',
      'batch': 2023,
      'semester': 2,
      'rollno': 9,
      'department': 'Electrical Engineering',
      'address': '567 Walnut St, City, Country',
      'phone': '+9988776655'
    },
    {
      'id': 8,
      'name': 'Hannah Allen',
      'email': 'hannah.allen@example.com',
      'course': 'Psychology',
      'batch': 2024,
      'semester': 1,
      'rollno': 6,
      'department': 'Psychology',
      'address': '678 Birch St, City, Country',
      'phone': '+1122334455'
    },
    {
      'id': 9,
      'name': 'Ian Taylor',
      'email': 'ian.taylor@example.com',
      'course': 'History',
      'batch': 2023,
      'semester': 3,
      'rollno': 8,
      'department': 'History',
      'address': '890 Sycamore St, City, Country',
      'phone': '+3344556677'
    },
    {
      'id': 10,
      'name': 'Jennifer Rodriguez',
      'email': 'jennifer.rodriguez@example.com',
      'course': 'English',
      'batch': 2022,
      'semester': 5,
      'rollno': 10,
      'department': 'English',
      'address': '901 Cedar St, City, Country',
      'phone': '+5566778899'
    }
  ])
  const [requestType, setRequestType] = useState('a?');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // if(Cookies.get('token')===undefined){
    //   navigate('/notfound')
    // }

    setLoading(true)
    axios.post('https://amr.sytes.net/api/college/requests', requestType, {
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
          <RequestTable data={render} requestType={requestType} admin={ADMIN}/>
          {/* {loading ?  */}
          {/*   <span className="loading loading-bars loading-lg"></span> */}
          {/*   : */}
          {/*   <> */}
          {/*   {render.map((data, index) => ( */}
          {/*     <Request key={index} info={data} requestType={requestType} admin={ADMIN}/> */}
          {/*   ))}</> */}
          {/* } */}
        </div>

      </div>
    </>
  )
};

export default AccountRequests;

