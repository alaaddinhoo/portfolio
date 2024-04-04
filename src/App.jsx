import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hasta from "./pages/Hasta.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/hasta" element={<Hasta />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
