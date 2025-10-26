import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Define all routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductCards />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/team" element={<ExperienceTeam />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/contact" element={<GetInTouch />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
