import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CollegeLogin from "./pages/college/CollegeLogin"
import CollegeDashboard from "./pages/college/CollegeDashboard"
import CollegeRequests from "./pages/college/CollegeRequests"
import CollegeBulkApprove from "./pages/college/CollegeBulkApprove"
import BusServiceLogin from "./pages/bus-service/BusServiceLogin"
import BusServiceDashboard from "./pages/bus-service/BusServiceDashboard"
import BusServiceRequests from "./pages/bus-service/BusServiceRequests"
import About from "./pages/About"
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />

        <Route path="/college">
          <Route index element={<CollegeDashboard />} />
          <Route path="login" element={<CollegeLogin />} />
          <Route path="requests" element={<CollegeRequests />} />
          <Route path="bulk" element={<CollegeBulkApprove/>} />
        </Route>

        <Route path="/bus-service">
          <Route index element={<BusServiceDashboard />} />
          <Route path="login" element={<BusServiceLogin />} />
          <Route path="requests" element={<BusServiceRequests />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
