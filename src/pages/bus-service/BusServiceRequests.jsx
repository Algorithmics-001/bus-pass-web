import React, { useState } from 'react';

import Navbar from "../../components/Navbar"
import Request from "../../components/Request"
import FilterDrawer from "../../components/FilterDrawer"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="bus-service"

const BusServiceRequests = () => {

  const test = [
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "college": "ABC University",
      "rollno": 123,
      "department": "Computer Science",
      "phone": 1234567890,
      "status": "account-request"
    },
    {
      "name": "Bob Smith",
      "email": "bob.smith@example.com",
      "college": "XYZ College",
      "rollno": 456,
      "department": "Electrical Engineering",
      "phone": 2345678901,
      "status": "account-request-accepted"
    },
    {
      "name": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "college": "DEF Institute",
      "rollno": 789,
      "department": "Mechanical Engineering",
      "phone": 3456789012,
      "status": "pass-request-new"
    },
    {
      "name": "David Lee",
      "email": "david.lee@example.com",
      "college": "GHI University",
      "rollno": 1011,
      "department": "Civil Engineering",
      "phone": 4567890123,
      "status": "pass-request-renew"
    },
    {
      "name": "Emily Taylor",
      "email": "emily.taylor@example.com",
      "college": "JKL College",
      "rollno": 1213,
      "department": "Chemistry",
      "phone": 5678901234,
      "status": "pass-request-renew-rejected"
    },
    {
      "name": "Frank White",
      "email": "frank.white@example.com",
      "college": "MNO Institute",
      "rollno": 1415,
      "department": "Biology",
      "phone": 6789012345,
      "status": "pass-request-new-accepted"
    },
    {
      "name": "Grace Martinez",
      "email": "grace.martinez@example.com",
      "college": "PQR University",
      "rollno": 1617,
      "department": "Physics",
      "phone": 7890123456,
      "status": "account-request-rejected"
    },
    {
      "name": "Henry Davis",
      "email": "henry.davis@example.com",
      "college": "STU College",
      "rollno": 1819,
      "department": "Mathematics",
      "phone": 8901234567,
      "status": "pass-request-new-rejected"
    },
    {
      "name": "Isabel Garcia",
      "email": "isabel.garcia@example.com",
      "college": "VWX Institute",
      "rollno": 2021,
      "department": "Computer Engineering",
      "phone": 9012345678,
      "status": "pass-request-renew-accepted"
    },
    {
      "name": "Jack Brown",
      "email": "jack.brown@example.com",
      "college": "YZA University",
      "rollno": 2223,
      "department": "Information Technology",
      "phone": 1234567890,
      "status": "account-request"
    }
  ];

  const [requests, setRequests] = useState(test)
  const [requestType, setRequestType] = useState("");

  useEffect(() => {
    axios.get('https://amr.sytes.net/college/requests', requestType, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      setRequests(response.data) // assuming response.data is an array of student object
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [requestType])

  return (
    <>
      <Navbar admin={ADMIN}/>

      <FilterDrawer admin={ADMIN} data={test} setRequests={setRequests}/>

      <div className="m-5">

        <div className="md-10 p-2">
          <Selector admin={ADMIN} setRequestType={setRequestType}/>

          <label htmlFor="college-filter-drawer" className="btn btn-outline btn-primary float-right drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            Sort by similarity 
          </label>

          <Search data={test} setRequests={setRequests}/>
        </div>

        <div className="mt-10 h-screen overflow-scroll">
          {requests.map((data, index) => (
            <Request key={index} info={data} />
          ))}
        </div>

      </div>
    </>
  )
};

export default BusServiceRequests;

