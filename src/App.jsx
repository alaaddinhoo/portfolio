import Home2 from "./pages/Home2.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Home2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
