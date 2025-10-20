import React, { useEffect, useState } from "react";
import "./Hero.css";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Gujranwala Electronics & Crockery</h1>
        <p className="hero-description">
          Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Read More</button>
        </div>
      </div>

      <div className="hero-slider">
        <img src={images[currentImage]} alt="Tech Products" className="slider-image" />
      </div>
    </section>
  );
}

export default Hero;
