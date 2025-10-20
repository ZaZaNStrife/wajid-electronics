import React from "react";
import "./About.css";
import ownerImg from "../assets/owner.jpeg"; // 🧍 Add your shop owner image here

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left Side - Text */}
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Gujranwala Electronics</strong> – your trusted destination for
            cutting-edge gadgets and premium electronics. From laptops and smartphones to
            accessories and home tech, we deliver quality you can rely on.
          </p>
          <p>
            Our goal is to make advanced technology affordable, accessible, and enjoyable for
            everyone. Whether you’re a casual user or a tech enthusiast, we’ve got something
            just for you.
          </p>
          <ul className="about-list">
            <li>✔️ 100% Genuine Products</li>
            <li>✔️ Fast & Reliable Delivery</li>
            <li>✔️ Trusted by Thousands of Customers</li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
          <img src={ownerImg} alt="Shop Owner - ZaZaN" />
          <p className="owner-caption">ZaZaN — Founder & Owner</p>
        </div>

      </div>
    </section>
  );
}

export default About;
