import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Home } from "./components/Home";
import { Skywalker } from "./components/pages/Skywalker/index";
import { GJR } from "./components/pages/GJR/index";
import { Librex } from "./components/pages/Librex/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skywalker" element={<Skywalker />} />
          <Route path="/gjr" element={<GJR />} />
          <Route path="/librex" element={<Librex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
