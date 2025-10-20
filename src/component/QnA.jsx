import React, { useState } from "react";
import "./QnA.css";

function QnA() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample Questions and Answers
  const faqData = [
    {
      id: 1,
      question: "What products does ZaZaN Electronics offer?",
      answer:
        "We offer a wide range of electronics including laptops, smartphones, cameras, headphones, gaming consoles, and home appliances.",
    },
    {
      id: 2,
      question: "Do you provide delivery services?",
      answer:
        "Yes! We provide fast and reliable delivery all over Pakistan. You can also track your order in real-time through our website.",
    },
    {
      id: 3,
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@zazanelectronics.com or call us at +92 335 9353533. We’re available 7 days a week.",
    },
    {
      id: 4,
      question: "Do your products come with a warranty?",
      answer:
        "Yes, all products sold by ZaZaN Electronics come with a 1-year standard warranty unless otherwise stated.",
    },
    {
      id: 5,
      question: "Can I return or exchange a product?",
      answer:
        "We accept returns and exchanges within 7 days of purchase, provided the item is unused and in original packaging.",
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash on Delivery (COD), Bank Transfer, and all major credit/debit cards through our secure payment gateway.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="qna" className="qna-section">
      <h2>Q&A - Frequently Asked Questions</h2>
      <p className="qna-subtitle">
        Got questions? We’ve got answers. Click on a question to view the details.
      </p>

      <div className="qna-container">
        {faqData.map((item, index) => (
          <div
            className={`qna-item ${activeIndex === index ? "active" : ""}`}
            key={item.id}
          >
            <div className="qna-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span className="qna-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="qna-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px",
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QnA;
