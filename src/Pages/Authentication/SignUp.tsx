// SignUp.tsx

import React, { useState } from "react";
import collegesData from "../../Data/ludhiana_colleges.json"; // Assuming you have a file with the colleges data
import { Link } from "react-router-dom";

interface College {
  university: string;
  college: string;
  "aicte-id": string;
  college_type: string;
  state: string;
  district: string;
}
const SignUp: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [collegeType, setCollegeType] = useState<string>("");
  const [aicteNumber, setAicteNumber] = useState<string>("");
const [searchTerm, setSearchTerm] = useState<string>("");
const [filteredColleges, setFilteredColleges] = useState<College[]>([]);

const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedRole = event.target.value;
  setRole(selectedRole);
};

const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const term = event.target.value;
  setSearchTerm(term);

  const filtered = collegesData.filter((college) =>
    college.college.toLowerCase().includes(term.toLowerCase())
  );
  setFilteredColleges(filtered);
};

const handleCollegeSelect = (college: College) => {
  setSearchTerm(college.college)
  setSelectedCollege(college.college);
  setLocation(college.district);
  setCollegeType(college.college_type);
  setAicteNumber(college["aicte-id"]);
  setFilteredColleges([]); // Clear the filtered list after selection
};

  return (
    <>
      {/* <section className="bg-gray-50 dark:bg-gray-900 overflow-y: auto"> */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  max-h-full">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
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
                  value={role}
                  onChange={handleRoleChange}
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
              {role === "busPassOfficial" && (
                <>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="busServiceName"
                      id="busServiceName"
                      placeholder="Bus Service Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="inchargeName"
                      id="inchargeName"
                      placeholder="Incharge Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="depotNumber"
                      id="depotNumber"
                      placeholder="Depot Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                </>
              )}
              {role === "collegeOfficial" && (
                <>
                  <div>
                    <label
                      htmlFor="college"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select College
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={searchTerm}
                      onChange={handleSearchTermChange}
                      placeholder="Search for or select a college"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
                    />
                    {!!filteredColleges.length && (
                      <div className="relative z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-36 overflow-y-auto">
                        {filteredColleges.map((college) => (
                          <div
                            key={college.college}
                            className="cursor-pointer p-2 hover:bg-gray-100"
                            onClick={() => handleCollegeSelect(college)}
                          >
                            {college.college}
                          </div>
                        ))}
                      </div>
                    )}
                    <input
                      type="text"
                      id="selectedCollege"
                      name="selectedCollege"
                      value={selectedCollege}
                      className="hidden"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={location}
                      placeholder="Location"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="aicteNumber"
                      id="aicteNumber"
                      value={aicteNumber}
                      placeholder="AICTE Number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      readOnly
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="collegeType"
                      id="collegeType"
                      value={collegeType}
                      placeholder="College Type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      readOnly
                    />
                  </div>
                </>
              )}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default SignUp;
