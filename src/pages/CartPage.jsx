import products from "../data/products.json";
import "./CartPage.css";

export default function CartPage() {
  const cartProductIds = [2, 10];
  const cartItems = products.filter(product => cartProductIds.includes(product.id));

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td className="product-details">
                <img src={item.image.replace("public", "")} alt={item.name} />
                <div>
                  <strong>{item.name}</strong><br />
                  <span className="product-code">{item.category}</span>
                </div>
              </td>
              <td className="quantity-cell">
                <button className="qty-btn">−</button>
                <input type="text" readOnly value={1} />
                <button className="qty-btn">+</button>
              </td>
              <td>{item.price} $</td>
              <td>{item.price * 1} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
