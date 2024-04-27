import React, { useState, useEffect } from 'react';

const Selector = ({ admin, setRequestType }) => {

  const handleChange = (event) => {
    const selection = event.target.value;

    const cases = {
      'account-request': {'account': 'applied'},
      'account-request-accepted': {'account': 'student'},
      'account-request-rejected': {'account': 'rejected'},

      'college-bus-pass-request': {'account': 'student', 'form': 'applied', 'forwarded': false, 'renew': false},
      'college-bus-pass-request-accepted': {'account': 'student', 'form': 'accepted', 'forwarded': false, 'renew': false},
      'college-bus-pass-request-rejected': {'account': 'student', 'form': 'rejected', 'forwarded': false, 'renew': false},

      'college-bus-pass-forwarded-request': {'account': 'student', 'form': 'applied', 'forwarded': true},
      'college-bus-pass-forwarded-request-accepted': {'account': 'student', 'form': 'accepted', 'forwarded': true},
      'college-bus-pass-forwarded-request-rejected': {'account': 'student', 'form': 'rejected', 'forwarded': true},

      'college-bus-pass-renew-request': {'account': 'student', 'form': 'applied', 'forwarded': false, 'renew': true},
      'college-bus-pass-renew-request-accepted': {'account': 'student', 'form': 'accepted', 'forwarded': false, 'renew': true},
      'college-bus-pass-renew-request-rejected': {'account': 'student', 'form': 'rejected', 'forwarded': false, 'renew': true},

      'bus-service-bus-pass-request': {'account': 'student', 'form': 'applied', 'forwarded': true, 'renew': false},
      'bus-service-bus-pass-request-accepted': {'account': 'student', 'form': 'accepted', 'forwarded': true, 'renew': false},
      'bus-service-bus-pass-request-rejected': {'account': 'student', 'form': 'rejected', 'forwarded': true, 'renew': false},

      'bus-service-bus-pass-renew-request': {'account': 'student', 'form': 'applied', 'forwarded': true, 'renew': true},
      'bus-service-bus-pass-renew-request-accepted': {'account': 'student', 'form': 'accepted', 'forwarded': true, 'renew': true},
      'bus-service-bus-pass-renew-request-rejected': {'account': 'student', 'form': 'rejected', 'forwarded': true, 'renew': true},
    }
    setRequestType(cases[selection]);
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
            <optgroup label="Forwarded Requests">
              <option value="college-bus-pass-forwarded-request">Forwarded by college</option>
              <option value="college-bus-pass-forwarded-request-accepted">Forward accepted</option>
              <option value="college-bus-pass-forwarded-request-rejected">Forward rejected</option>
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
