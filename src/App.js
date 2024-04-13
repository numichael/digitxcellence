import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/digitalAgency/Main";
import CreativeAgency from "./components/creativeAgency/Main";
import CompanyServices from "./components/services/Main";
import { useEffect } from "react";
import Academy from "./components/academy/Main";
import ProgramDetails from "./components/academy/ProgramDetails";
import ContactPage from "./components/contact";

function App() {

  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("home")
    }
  }, [location])

  return (
    <div className="App w-full flex justify-center text-gray-900 overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Main />} />
          <Route path="creative-agency" element={<CreativeAgency />} />
          <Route path="services" element={<CompanyServices />} />
          <Route path="academy" element={<Academy />} />
          <Route path="/program-details" element={<ProgramDetails />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
