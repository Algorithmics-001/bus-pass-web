import React, { useState, useEffect } from 'react';

const Selector = ({ admin, setRequestType }) => {

  const handleChange = (event) => {
    setRequestType(event.target.value);
    console.log(event.target.value)
  };

  return (
    <>
      {(admin == "college") ? 
        (
          <select className="select w-full max-w-xs" onChange={handleChange}>
            <option disabled selected className="text-md">Choose request type</option>
            <optgroup label="Account Requests">
              <option value="account-request">Account requests</option>
              <option value="account-request-accepted">Account accepted</option>
              <option value="account-request-rejected">Account rejected</option>
            </optgroup>
            <optgroup label="New Bus Pass Requests">
              <option value="college-bus-pass-request">New bus pass requests</option>
              <option value="college-bus-pass-request-accepted">New bus pass accepted</option>
              <option value="college-bus-pass-request-rejected">New bus pass rejected</option>
            </optgroup>
            <optgroup label="Renew Bus Pass Requests">
              <option value="college-bus-pass-renew-request">Renew bus pass</option>
              <option value="college-bus-pass-renew-request-accepted">Renew bus pass accepted</option>
              <option value="college-bus-pass-renew-request-rejected">Renew bus pass rejected</option>
            </optgroup>
          </select>
        )
        :
        (
          <select className="select w-full max-w-xs" onChange={handleChange}>
            <option disabled selected className="text-md">Choose request type</option>
              <optgroup label="New Bus Pass Requests">
                <option value="bus-service-bus-pass-request">New bus pass requests</option>
                <option value="bus-service-bus-pass-request-accepted">New bus pass accepted</option>
                <option value="bus-service-bus-pass-request-rejected">New bus pass rejected</option>
              </optgroup>
              <optgroup label="Renew Bus Pass Requests">
                <option value="bus-service-bus-pass-renew-request">Renew bus pass</option>
                <option value="bus-service-bus-pass-renew-request-accepted">Renew bus pass accpeted</option>
                <option value="bus-service-bus-pass-renew-request-rejected">Renew bus pass rejected</option>
              </optgroup>
          </select>
        )
      }
    </>
  )
}

export default Selector; 
