import React, { useState, useEffect } from "react";

import axios from 'axios';

const Profile = () => {

  const test = {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "course": "Computer Science",
    "batch": 2022,
    "semester": 3,
    "rollno": 1234,
    "department": "Engineering",
    "address": "123 Main Street",
    "phone": 1234567890,
  }

  const [profileData, setProfileData] = useState(test)

  useEffect(() => {
    axios.get('https://amr.sytes.net/profile', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Response:', response.data);
        profileData(response.data) // assuming response.data is a array of objects
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []) // here the jwt is being set automatically 

  return (
    <>
    <center>
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-3xl">Profile Details</h2>
    <hr />
    <div className=" flex flex-col card-actions justify-end">
    {(profileData.email) && <p className="py-4"><b>Email:</b> {profileData.email}</p>}
      {(profileData.college) && <p className="py-4"><b>College:</b> {profileData.college}</p>}
      {(profileData.course) && <p className="py-4"><b>Course:</b> {profileData.course}</p>}
      {(profileData.batch) && <p className="py-4"><b>Batch:</b> {profileData.batch}</p>}
      {(profileData.semester) && <p className="py-4"><b>Semester:</b> {profileData.semester}</p>}
      {(profileData.rollno) && <p className="py-4"><b>RollNo:</b> {profileData.rollno}</p>}
      {(profileData.department) && <p className="py-4"><b>Department:</b> {profileData.department}</p>}
      {(profileData.address) && <p className="py-4"><b>Address:</b> {profileData.address}</p>}
      {(profileData.phone) && <p className="py-4"><b>Phone:</b> {profileData.phone}</p>}
    </div>
  </div>
</div>
</center>
    </>
  )
}

export default Profile;
