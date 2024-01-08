import React, { useEffect, useState } from "react";
import studentData from "../../Data/StudentData.json";
import { useLocation , useNavigate } from "react-router-dom";

const DepartmentWise: React.FC = () => {
  const [departments, setDepartments] = useState<string[]>([]);
  const [renewalRequests, setRenewalRequests] = useState<
    Record<string, number>
  >({});
  const { state } = useLocation();
const navigate=useNavigate();
  const course = state.course;
  const collegeName = state.collegeName;

  useEffect(() => {
    // Filter studentData for renewal requests from the same college and course
    const renewalRequestsData = studentData.filter(
      (student) =>
        student.college === collegeName &&
        student.course === course &&
        student.requestType === "renew" &&
        student.verificationStatus==="invalid"
    );

    // Extract unique departments
    const uniqueDepartments = Array.from(
      new Set(renewalRequestsData.map((student) => student.dept))
    );

    setDepartments(uniqueDepartments);

    // Count the number of renewal requests for each department
    const countRequests = () => {
      const count: Record<string, number> = {};
      uniqueDepartments.forEach((dept) => {
        const numRequests = renewalRequestsData.filter(
          (student) => student.dept === dept
        ).length;
        count[dept] = numRequests;
      });
      return count;
    };

    setRenewalRequests(countRequests());
  }, [collegeName, course]);

  const handleDepartmentClick = (department: string,course:string,collegeName:string) => {
    navigate("/StudentRequest",{state:{
        department,course,collegeName
    }})
  };

  return (
    <div>
      <h1>
        Renewal Requests for {collegeName} - {course}
      </h1>
      {departments.map((department) => (
        <div
          key={department}
          style={{
            width: "90%",
            border: "1px solid #ccc",
            margin: "10px auto",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => handleDepartmentClick(department,course,collegeName)}
        >
          <div>
            <h2>{department}</h2>
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
            {renewalRequests[department] || 0}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepartmentWise;
