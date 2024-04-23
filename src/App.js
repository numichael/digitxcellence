import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/home/Main";
import CompanyServices from "./components/services/Main";
import { useEffect } from "react";
import Academy from "./components/academy/Main";
import ProgramDetails from "./components/academy/ProgramDetails";
import ContactPage from "./components/contact";
import ServiceDetails from "./components/services/ServiceDetails";

function App() {

  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("home")
    }
  }, [location])

  return (
    <div className="App relative w-full flex justify-center text-gray-900 overflow-x-hidden">
      {/* <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-[#319b6b7f] z-[1] w-20 h-20 rounded-md absolute top-[5%] right-[4%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[10.5%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-32 h-32 rounded-md absolute top-[14%] right-[2%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[21.3%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[25.3%] right-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[1] w-32 h-32 rounded-md absolute top-[27%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[1] w-20 h-20 rounded-md absolute top-[35%] right-[4%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[40.5%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-32 h-32 rounded-md absolute top-[46%] right-[2%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[50.3%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[55.3%] right-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[61.3%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[65.3%] right-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[1] w-32 h-32 rounded-md absolute top-[70%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[1] w-20 h-20 rounded-md absolute top-[85%] right-[4%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[89.5%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-32 h-32 rounded-md absolute top-[93%] right-[2%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[95.3%] left-[3%]"></div>
        <div className="bg-[#319b6b7f] z-[20] w-20 h-20 rounded-md absolute top-[98.3%] right-[3%]"></div>
      </div> */}

      <Routes className="z-[10]">
        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Main />} />
          <Route path="services" element={<CompanyServices />} />
          <Route path="academy" element={<Academy />} />
          <Route path="/program-details" element={<ProgramDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service-details" element={<ServiceDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
