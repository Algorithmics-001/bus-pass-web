import React, { useEffect, useState } from "react";
import studentData from "../../Data/StudentData.json";
import { useLocation ,useNavigate } from "react-router-dom";
import collegeOfficialsData from "../../Data/CollegeOfficials.json";

const HomeCollege: React.FC = () => {
  const [courses, setCourses] = useState<string[]>([])
  const [renewalRequests, setRenewalRequests] = useState<
    Record<string, Record<string, number>>
  >({});
  const { state } = useLocation();
    const navigate=useNavigate();
  const email = state;
  const loggedInCollege = collegeOfficialsData.find(
    (official) => official.email === email
  );

  // Retrieve college name from the logged-in college official
  const collegeName = loggedInCollege?.college;

  useEffect(() => {
    // Filter studentData for renewal requests from the same college
    const renewalRequestsData = studentData.filter(
      (student) =>
        student.college === collegeName && student.requestType === "renew" && student.verificationStatus==="invalid"
    );

    // Extract unique courses and departments
    const uniqueCourses = Array.from(
      new Set(renewalRequestsData.map((student) => student.course))
    );
    const uniqueDepartments = Array.from(
      new Set(renewalRequestsData.map((student) => student.dept))
    );

    setCourses(uniqueCourses);


    // Count the number of renewal requests for each course and department
    const countRequests = () => {
      const count: Record<string, Record<string, number>> = {};
      uniqueCourses.forEach((course) => {
        count[course] = {};
        uniqueDepartments.forEach((dept) => {
          const numRequests = renewalRequestsData.filter(
            (student) => student.course === course && student.dept === dept
          ).length;
          count[course][dept] = numRequests;
        });
      });
      return count;
    };

    setRenewalRequests(countRequests());
  }, [collegeName]);

  const handleCourseClick = (course: string,_collegeName:any) => {
    navigate("/DepartmentWise", { state: {course,collegeName} });
  };

 

  return (
    <div>
      <h1>Renewal Requests for {collegeName}</h1>
      {courses.map((course) => (
        <div
          key={course}
          style={{
            width: "90%",
            border: "1px solid #ccc",
            margin: "10px auto",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => handleCourseClick(course,collegeName)}
        >
          <div>
            <h2>{course}</h2>
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
            {Object.values(renewalRequests[course] || {}).reduce(
              (sum, count) => sum + count,
              0
            )}
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default HomeCollege;
