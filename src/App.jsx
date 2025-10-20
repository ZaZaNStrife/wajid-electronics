import React, { useEffect } from "react";
import "./App.css";

// Import all components
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import ProductCards from "./component/ProductCard";
import About from "./component/About";
import ClientPage from "./component/ClientPage";
import Categories from "./component/Categories";
import ExperienceTeam from "./component/ExperienceTeam";
import QnA from "./component/QnA";
import GetInTouch from "./component/GetInTouch";
import Footer from "./component/Footer";

function App() {
  // Ensure page always starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="section">
        <Hero />
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <ProductCards />
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <About />
      </section>

      {/* Clients Section */}
      <section id="clients" className="section">
        <ClientPage />
      </section>

      {/* Categories Section */}
      <section id="categories" className="section">
        <Categories />
      </section>

      {/* Experience Team Section */}
      <section id="team" className="section">
        <ExperienceTeam />
      </section>

      {/* Q&A Section */}
      <section id="qna" className="section">
        <QnA />
      </section>

      {/* Get In Touch Section */}
      <section id="contact" className="section">
        <GetInTouch />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
