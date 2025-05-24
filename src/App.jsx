import "./APP.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>🛍️ Shahar Web Store 🛍️</h1>
          <nav>
            <Link to="/" className="nav-btn">Products</Link>
            <Link to="/cart" className="nav-btn">Cart 🛒 </Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
