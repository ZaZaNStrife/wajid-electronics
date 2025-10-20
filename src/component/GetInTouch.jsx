import React from "react";
import "./GetInTouch.css";

function GetInTouch() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether you have a question about products, pricing, 
            or anything else — our team is ready to answer all your queries.
          </p>

          <div className="contact-details">
            <p><strong>📞 Phone:</strong> +92 3491166611 / +92 3184489979</p>
            <p><strong>📧 Email:</strong> zazansial@gmail.com</p>
            <p><strong>📍 Address:</strong>  Chand Shopping Plaza, Shop #10, Block B, Near Mobile Market,Watch Tower-Area, Gujranwala, Punjab</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
