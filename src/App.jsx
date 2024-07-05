import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/galleries" element={<ExhibitionPage />} />
        <Route path="/galleries/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
