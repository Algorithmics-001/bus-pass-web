import React, { useState, useEffect } from 'react';

const Selector = ({ admin, setRequestType }) => {

  const handleChange = (event) => {
    const selection = event.target.value;
    setRequestType(selection);
  };

  return (
    <>
      {(admin == "college") ? 
        (
          <select className="select w-full max-w-xs" onChange={handleChange} defaultValue="a?">
            <option disabled selected className="text-md">Choose request type</option>
            <optgroup label="Account Requests">
              <option value="a?">Account requests</option>
              <option value="aa">Account accepted</option>
              <option value="ar">Account rejected</option>
            </optgroup>
            <optgroup label="New Bus Pass Requests">
              <option value="bcf?">New bus pass requests</option>
              <option value="bcfa">New bus pass accepted</option>
              <option value="bcfr">New bus pass rejected</option>
            </optgroup>
            <optgroup label="Renew Bus Pass Requests">
              <option value="bcr?">Renew bus pass</option>
              <option value="bcra">Renew bus pass accepted</option>
              <option value="bcrr">Renew bus pass rejected</option>
            </optgroup>
          </select>
        )
        :
        (
          <select className="select w-full max-w-xs" onChange={handleChange} defaultValue="bbf?">
            <option disabled selected className="text-md">Choose request type</option>
              <optgroup label="New Bus Pass Requests">
                <option value="bbf?">New bus pass requests</option>
                <option value="bbfa">New bus pass accepted</option>
                <option value="bbfr">New bus pass rejected</option>
              </optgroup>
              <optgroup label="Renew Bus Pass Requests">
                <option value="bbr?">Renew bus pass</option>
                <option value="bbra">Renew bus pass accpeted</option>
                <option value="bbrr">Renew bus pass rejected</option>
              </optgroup>
          </select>
        )
      }
    </>
  )
}

export default Selector; 
