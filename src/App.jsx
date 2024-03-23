import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CollegeLogin from "./pages/CollegeLogin"
import BusServiceLogin from "./pages/BusServiceLogin"
import BusServiceDashboard from "./pages/BusSerivceDashboard"
import CollegeDashboard from "./pages/CollegeDashboard"
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/college-login" element={<CollegeLogin />} />
        <Route path="/bus-service-login" element={<BusServiceLogin />} />
        <Route path="/bus-service" element={<BusServiceDashboard />} />
        <Route path="/college" element={<BusServiceDashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
