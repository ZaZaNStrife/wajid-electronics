import React, { useEffect, useState } from "react";
import "./Hero.css";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  // 🌀 Auto-slide with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400); // fade out before switching
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="hero">
      {/* 🌟 HERO CONTENT */}
      <div className="hero-content">
        <h1>
          Welcome to <br />
          <span className="gradient-text">Gujranwala Electronics & Crockery</span>
        </h1>
        <p className="hero-description">
          Experience the fusion of innovation and style. Explore top-quality electronics, 
          home appliances, and elegant crockery designed to elevate your everyday living.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      {/* 🖼️ IMAGE SLIDER */}
      <div className="hero-slider">
        <img
          key={currentImage}
          src={images[currentImage]}
          alt="Product Showcase"
          className={`slider-image ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>
    </section>
  );
}

export default Hero;
