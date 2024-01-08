import React, { useEffect, useState } from "react";
import busPassOfficialsData from "../../Data/BusPassOfficials.json"; // Adjust the path accordingly
import collegeOfficialsData from "../../Data/CollegeOfficials.json"; // Adjust the path accordingly
import studentData from "../../Data/StudentData.json"; // Adjust the path accordingly
import { useLocation, useNavigate } from "react-router-dom";

interface BusPassOfficial {
  email: string;
  password: string;
  role: string;
  location: string;
  busServiceName: string;
  inchargeName: string;
  depotNumber: string;
}

interface CollegeOfficial {
  email: string;
  password: string;
  role: string;
  college: string;
  location: string;
  aicteNumber: string;
  collegeType: string;
}

const HomeBus: React.FC = () => {
  const [colleges, setColleges] = useState<CollegeOfficial[]>([]);
  const { state } = useLocation();
  const email=state
const navigate = useNavigate();
    // let email = "official1@example.com";

  useEffect(() => {
    // Find the location of the logged-in bus pass official
    const loggedInBusPassOfficial: BusPassOfficial | undefined =
      busPassOfficialsData.find(
        (official) => official.email === email
      );
     

    if (loggedInBusPassOfficial) {
      // Find all colleges from collegeOfficialsData in the same location
      const collegesInSameLocation = collegeOfficialsData.filter(
        (college) => college.location === loggedInBusPassOfficial.location
      );

      setColleges(collegesInSameLocation);
      
    }
  }, [email]); // Dependency on the logged-in user's email

  const getRenewalRequestsCount = (collegeName: string): number => {
    // Filter studentData for renewal requests from the specific college with paid verification
    const renewalRequests = studentData.filter(
      (student) =>
        student.requestType === "renew" &&
        student.verificationStatus === "paid" &&
        student.college === collegeName
    );

    return renewalRequests.length;
  };
  const handleCollegeClick = (_collegeName: string) => {
    // Navigate to Requests.tsx with the college name as a parameter
    navigate("/CARequests", { state: _collegeName });
  };

  return (
    <div>
      <h1>Bus Officials Home Page</h1>

      {colleges.map((college) => (
        <div
          key={college.email}
          style={{
            width: "90%",
            border: "1px solid #ccc",
            margin: "10px auto",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => handleCollegeClick(college.college)}
        >
          <div>
            <h2>{college.college}</h2>
            <p>Location: {college.location}</p>
            <p>AICTE Number: {college.aicteNumber}</p>
            <p>Type: {college.collegeType}</p>
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "blue",
              color: "white",
              textAlign: "center",
              lineHeight: "40px",
            }}
          >
            {getRenewalRequestsCount(college.college)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBus;
