import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Awards from "./pages/Awards.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Theme from "./components/Theme";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
