import Navbar from "./Navbar";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Education from "../pages/Education.jsx";
import Awards from "../pages/Awards.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
