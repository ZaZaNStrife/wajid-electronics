import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        {/* --- Company Info --- */}
        <div className="footer-section about">
          <h3>Gujranwala Electronics</h3>
          <p>
            Gujranwala Electronics offers top-quality electronics and kitchen appliances.
            Founded by <strong>Muhammad Zazan Yousaf</strong>, we are committed to
            delivering the latest tech and innovative products.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div className="footer-section contact">
          <h4>Follow Us</h4>
          <p><strong>Phone:</strong> +92 3491166611</p>
          <p><strong>Phone:</strong> +92 3184489979</p>
          <p><strong>Email:</strong> zazansial@gmail.com</p>
          <p><strong>Address:</strong><br />
            Chand Shopping Plaza, Shop #10, Block B, Near Mobile Market,<br />
            Watch Tower-Area, Gujranwala, Punjab
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Muhammad Zazan Yousaf. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
