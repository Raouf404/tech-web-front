import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fleurs from "./pages/Fleurs";
import Bouquets from "./pages/Bouquets";
import MonCompte from "./pages/MonCompte";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/bouquets" element={<Bouquets />} />
          <Route path="/compte" element={<MonCompte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
