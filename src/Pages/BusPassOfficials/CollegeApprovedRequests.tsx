import React, { useState } from "react";
import studentData from "../../Data/StudentData.json";
import { toast } from "react-toastify";
import { useLocation} from "react-router-dom";


interface Student {
  studentName: string;
  studentRoll: string;
  dept: string;
  address: string;
  busStop: string;
  verificationStatus: string;
  college: string;
  gender: string;
  requestType: string;
  year: number;
  course: string;
}



const CollegeApprovedRequests: React.FC= () => {
 
  const { state } = useLocation();

  const collegeName = state;
   const [students, setStudents] = useState<Student[]>(getFilteredStudents());

  function getFilteredStudents() {
    // Filter studentData for students from the same college with requestType=renew and verificationStatus=paid
    return studentData.filter(
      (student) =>
        student.college === collegeName &&
        student.requestType === "renew" &&
        student.verificationStatus === "paid"
    );
  }
 const handleApproveAll = () => {
   // Update verification status to "valid" for all students
   setStudents((prevStudents) =>
     prevStudents.map((student) => ({
       ...student,
       verificationStatus: "valid",
     }))
   );

   toast.success("All requests approved!");
 };
 const handleApprove = (studentRoll: string) => {
   // Update verification status to "valid" for the approved student
   setStudents((prevStudents) =>
     prevStudents.map((student) =>
       student.studentRoll === studentRoll
         ? { ...student, verificationStatus: "valid" }
         : student
     )
   );

   toast.success(`Request approved for student ${studentRoll}`);
   
 };


  return (
    <div>
      <div className="flex justify-between items-center align-center mt-2">
        <h2 className="ml-2">Renewal Requests for {collegeName}</h2>
        <button
          onClick={handleApproveAll}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mr-2"
        >
          Approve All
        </button>
      </div>
      <div className="flex flex-wrap ">
        {students.map((student) => (
          <div
            key={student.studentRoll}
            className="bg-white rounded-md overflow-hidden shadow-md m-4 p-1 w-64 "
          >
            <h3 className="text-lg font-semibold text-center mb-2">
              {student.studentName}
            </h3>
            <p className="text-sm">
              <span className="font-bold">Roll Number:</span>{" "}
              {student.studentRoll}
            </p>
            <p className="text-sm">
              <span className="font-bold">Department:</span> {student.dept}
            </p>
            <p className="text-sm">
              <span className="font-bold">Address:</span> {student.address}
            </p>
            <p className="text-sm">
              <span className="font-bold">Bus Stop:</span> {student.busStop}
            </p>
            <p className="text-sm">
              <span className="font-bold">Year:</span> {student.year}
            </p>
            <p className="text-sm">
              <span className="font-bold">Course:</span> {student.course}
            </p>
            <p className="text-sm">
              <span className="font-bold">Status:</span>{" "}
              {student.verificationStatus}
            </p>

            <button
              onClick={() => handleApprove(student.studentRoll)}
              className="bg-blue-500 text-white px-4 py-2 w-full rounded-b-md hover:bg-blue-700 mb-1 mt-1"
            >
              Approve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeApprovedRequests;
