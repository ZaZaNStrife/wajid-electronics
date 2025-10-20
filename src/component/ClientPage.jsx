import React from "react";
import "./ClientPage.css";

import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";
import client4 from "../assets/clients/client4.png";
import client5 from "../assets/clients/client5.png";
import client6 from "../assets/clients/client6.png";

const clients = [
  { id: 1, name: "Cloud", image: client1 },
  { id: 2, name: "Satoru", image: client2 },
  { id: 3, name: "Jinwoo", image: client3 },
  { id: 4, name: "Fushiguro", image: client4 },
  { id: 5, name: "Eva Berken", image: client5 },
  { id: 6, name: "Noctis", image: client6 },
];

function ClientPage() {
  return (
    <section id="clients" className="clients-section">
      <h2>Our Valued Clients</h2>
      <p className="clients-intro">
        At <strong>Gujranwala Electronics</strong>, we are proud to serve some of the leading tech 
        companies and distributors across the region. We value every partnership and strive to 
        provide unmatched service and innovation.
      </p>

      <div className="client-grid">
        {clients.map((client) => (
          <div className="client-card" key={client.id}>
            <img src={client.image} alt={client.name} />
            <h4>{client.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientPage;
