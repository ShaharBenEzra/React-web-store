import "./ProductsPage.css";
import products from "../data/products.json";

export default function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-content">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p><strong>Made in:</strong> {product.made_in}</p>
              <p><strong>Warranty:</strong> {product.warranty_years} years</p>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>

        ))}
      </div>
    </div>
  );
}
