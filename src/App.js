import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Navbar />}>
          
        </Route>
     </Routes>
    </div>
  );
}

export default App;
