import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import ProductsPage from "./pages/ProductsPage";
import ItemDetailsPage from "./pages/ItemsDetailsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/galleries" element={<ExhibitionPage />} />
        <Route path="/galleries/products" element={<ProductsPage />} />
        <Route path="/galleries/products/item-details" element={<ItemDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
