import React, { useState } from "react";
import "./ProductCard.css";

import laptop from "../assets/products/laptop.jpeg";
import phone from "../assets/products/phone.jpeg";
import earphones from "../assets/products/earphones.jpeg";
import camera from "../assets/products/camera.jpeg";
import tablet from "../assets/products/tablet.jpeg";
import smartwatch from "../assets/products/smartwatch.jpeg";
import keyboard from "../assets/products/keyboard.jpeg";
import mouse from "../assets/products/mouse.jpeg";
import speaker from "../assets/products/speaker.jpeg";

const productsData = [
  { id: 1, name: "Laptop Pro X", price: "$999", image: laptop },
  { id: 2, name: "Smartphone Z", price: "$699", image: phone },
  { id: 3, name: "Noise Cancelling Earphones", price: "$199", image: earphones },
  { id: 4, name: "4K Camera", price: "$499", image: camera },
  { id: 5, name: "Smart Tablet X10", price: "$399", image: tablet },
  { id: 6, name: "Smartwatch Elite", price: "$249", image: smartwatch },
  { id: 7, name: "Mechanical Keyboard", price: "$149", image: keyboard },
  { id: 8, name: "Wireless Mouse", price: "$79", image: mouse },
  { id: 9, name: "Bluetooth Speaker", price: "$129", image: speaker },
];

function ProductCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    if (!cart.includes(product.id)) {
      setCart([...cart, product.id]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in your cart.`);
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="product-header">
        <h2>Our Best Selling Products</h2>

        <div className="search-cart">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="cart-icon">
            🛒<span>{cart.length}</span>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
                <button className="btn-cart" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No products found!</p>
        )}
      </div>
    </section>
  );
}

export default ProductCards;
