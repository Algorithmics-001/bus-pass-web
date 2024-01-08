// import "./App.css";
import SignUp from "./Pages/Authentication/SignUp";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import Login from "./Pages/Authentication/Login";
import HomeBus from "./Pages/BusPassOfficials/HomeBus";
import HomeCollege from "./Pages/CollegeOfficials/HomeCollege"
import CollegeApprovedRequests from "./Pages/BusPassOfficials/CollegeApprovedRequests";
import DepartmentWise from "./Pages/CollegeOfficials/DepartmentWise";
import StudentRequest from "./Pages/CollegeOfficials/StudentRequest";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
           <Route path="/homeBus" element={<HomeBus />} />
           <Route path="/homeCollege" element={<HomeCollege/>}/>
           <Route path="/CARequests" element={<CollegeApprovedRequests/>}/>
           <Route path="/DepartmentWise" element={<DepartmentWise/>}/>
           <Route path='/StudentRequest' element={<StudentRequest/>}/>
           
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
