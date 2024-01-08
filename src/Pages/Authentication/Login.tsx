// Login.tsx

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import CollegeOfficials from "../../Data/CollegeOfficials.json"
import BusPassOfficials from "../../Data/BusPassOfficials.json"
import { toast  } from "react-toastify";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  

  // Use React Router's useHistory hook to manage navigation
  const navigate = useNavigate(); // Updated hook

const handleLogin = () => {
  // Find the user in the respective JSON data based on email, password, and role
  let userData;
  if (selectedRole === "busPassOfficial") {
    userData = BusPassOfficials.find(
      (officialData) =>
        officialData.email === email &&
        officialData.password === password
    );
  } else if (selectedRole === "collegeOfficial") {
    userData = CollegeOfficials.find(
      (officialData) =>
        officialData.email === email &&
        officialData.password === password
    );
  }

  // If user is found, redirect to the respective Home page
  if (userData) {
    toast.success(`Successfully logged in as ${selectedRole}`);

    let homeRoute = "";
    if (selectedRole === "busPassOfficial") {
      homeRoute = "/homeBus";
    } else if (selectedRole === "collegeOfficial") {
      homeRoute = "/homeCollege";
    } else {
      homeRoute = "/home"; // Default route if role is not specified
    }
    
    // Navigate to the determined route without state information
    navigate(homeRoute , {state: email});
  }

    else {
      // If user is not found, display an error message
     toast.error("Invalid credentials. Please try again baba.");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 overflow-y-auto max-h-full">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Registered Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                {/* Role Selection */}
                <div>
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={selectedRole || ""}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="busPassOfficial">Bus Pass Official</option>
                    <option value="collegeOfficial">College Official</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Log in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
 
    </>
  );
};

export default Login;
