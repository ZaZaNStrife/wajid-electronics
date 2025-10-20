import React, { useState } from "react";
import "./Categories.css";

// Import local images
import laptopImg from "../assets/categories/laptop.jpeg";
import phoneImg from "../assets/categories/phone.jpeg";
import cameraImg from "../assets/categories/camera.jpeg";
import headphonesImg from "../assets/categories/headphones.jpeg";
import consoleImg from "../assets/categories/console.jpeg";
import watchImg from "../assets/categories/watch.jpeg";
import speakerImg from "../assets/categories/speaker.jpeg";
import accessoriesImg from "../assets/categories/accessories.jpeg";
import kitchenImg from "../assets/categories/kitchen.jpeg";

const categoryData = [
  {
    id: 1,
    name: "Laptops",
    description: "High-performance laptops for gaming, business, and study.",
    image: laptopImg,
  },
  {
    id: 2,
    name: "Smartphones",
    description: "The latest Android and iPhone devices with stunning cameras.",
    image: phoneImg,
  },
  {
    id: 3,
    name: "Cameras",
    description: "Capture every moment with professional DSLR and mirrorless cameras.",
    image: cameraImg,
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling headphones and wireless earbuds.",
    image: headphonesImg,
  },
  {
    id: 5,
    name: "Gaming Consoles",
    description: "PlayStation, Xbox, and Nintendo gaming systems.",
    image: consoleImg,
  },
  {
    id: 6,
    name: "Smart Watches",
    description: "Track fitness, notifications, and calls on your wrist.",
    image: watchImg,
  },
  {
    id: 7,
    name: "Speakers",
    description: "Portable and home speakers with powerful sound quality.",
    image: speakerImg,
  },
  {
    id: 8,
    name: "Computer Accessories",
    description: "Keyboards, mice, and monitors for your perfect setup.",
    image: accessoriesImg,
  },
  {
    id: 9,
    name: "Kitchen Appliances",
    description: "Latest microwaves, blenders, and electric cookers.",
    image: kitchenImg,
  },
];

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="categories" className="categories-section">
      <h2>Our Categories</h2>
      <p className="subtitle">
        Explore our wide range of premium electronics and accessories.
      </p>

      <div className="categories-grid">
        {categoryData.map((cat) => (
          <div
            className="category-card"
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
          >
            <img src={cat.image} alt={cat.name} />
            <div className="card-body">
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <button className="explore-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <div className="category-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setSelectedCategory(null)}>
              ✖
            </button>
            <img src={selectedCategory.image} alt={selectedCategory.name} />
            <h2>{selectedCategory.name}</h2>
            <p>{selectedCategory.description}</p>
            <button
              className="explore-btn"
              onClick={() => alert(`${selectedCategory.name} products coming soon!`)}
            >
              View Products
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Categories;
