import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/digitalAgency/Main";
import CreativeAgency from "./components/creativeAgency/Main";
import CompanyServices from "./components/services/Main";

function App() {
  return (
    <div className="App w-full flex justify-center text-gray-900">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Main />} />
          <Route path="creative-agency" element={<CreativeAgency />} />
          <Route path="services" element={<CompanyServices />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
