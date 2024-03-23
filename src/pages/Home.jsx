import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1 className="text-5xl text-center mt-20">Welcome to <b>DigiPass</b></h1>
      <div className="flex flex-col items-center justify-center p-5 mt-20">
        <Link to="/college-login" className="text-xl btn btn-primary m-5">College Login</Link>
        <Link to="/bus-service-login" className="text-xl w-30 btn btn-primary m-5">Bus Service Login</Link>
      </div>
    </>
  );
};

export default Home;
