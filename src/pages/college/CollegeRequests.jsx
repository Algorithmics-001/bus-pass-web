import React, { useState } from 'react';

import Navbar from "../../components/Navbar"
import Request from "../../components/Request"
import FilterDrawer from "../../components/FilterDrawer"
import Selector from "../../components/Selector"
import Search from "../../components/Search"

const ADMIN="college"

const AccountRequests = () => {

  const test = [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "P@ssw0rd",
      "course": "inter",
      "batch": 2025,
      "semester": 3,
      "rollno": 123456,
      "department": "CSE",
      "phone": 123456789
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "password": "Password123",
      "course": "bachelors",
      "batch": 2023,
      "semester": 2,
      "rollno": 234567,
      "department": "ECE",
      "phone": 987654321
    },
    {
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "password": "StrongP@ss",
      "course": "masters",
      "batch": 2024,
      "semester": 1,
      "rollno": 345678,
      "department": "ME",
      "phone": 456789123
    },
    {
      "name": "Bob Brown",
      "email": "bob.brown@example.com",
      "password": "Secure123",
      "course": "inter",
      "batch": 2026,
      "semester": 4,
      "rollno": 456789,
      "department": "CE",
      "phone": 987123456
    },
    {
      "name": "Emily Wilson",
      "email": "emily.wilson@example.com",
      "password": "Pa$$w0rd",
      "course": "bachelors",
      "batch": 2022,
      "semester": 3,
      "rollno": 567890,
      "department": "CSE",
      "phone": 654321987
    },
    {
      "name": "Michael Garcia",
      "email": "michael.garcia@example.com",
      "password": "Passw0rd!",
      "course": "masters",
      "batch": 2028,
      "semester": 2,
      "rollno": 678901,
      "department": "ECE",
      "phone": 123789456
    },
    {
      "name": "Emma Martinez",
      "email": "emma.martinez@example.com",
      "password": "P@ssword",
      "course": "inter",
      "batch": 2027,
      "semester": 5,
      "rollno": 789012,
      "department": "ME",
      "phone": 456123789
    },
    {
      "name": "William Robinson",
      "email": "william.robinson@example.com",
      "password": "SecureP@ss",
      "course": "bachelors",
      "batch": 2029,
      "semester": 4,
      "rollno": 890123,
      "department": "CE",
      "phone": 789456123
    },
    {
      "name": "Olivia Lee",
      "email": "olivia.lee@example.com",
      "password": "MyP@ssword123",
      "course": "masters",
      "batch": 2021,
      "semester": 6,
      "rollno": 901234,
      "department": "CSE",
      "phone": 321654987
    },
    {
      "name": "James Martinez",
      "email": "james.martinez@example.com",
      "password": "P@ssw0rd123",
      "course": "inter",
      "batch": 2030,
      "semester": 7,
      "rollno": 123123,
      "department": "ECE",
      "phone": 987654321
    }
  ]

  const [requests, setRequests] = useState(test)

  return (
    <>
      <Navbar admin={ADMIN}/>

      <FilterDrawer admin={ADMIN} data={test} setRequests={setRequests}/>

      <div className="m-5">

        <div className="md-10 p-2">
          <Selector admin={ADMIN}/>

          <label htmlFor="college-filter-drawer" className="btn btn-outline btn-primary float-right drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            Filters
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

export default AccountRequests;

