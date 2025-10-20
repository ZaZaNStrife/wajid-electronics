import React from "react";
import "./ExperienceTeam.css";

import team1 from "../assets/team/team1.jpeg";
import team2 from "../assets/team/team2.jpeg";
import team3 from "../assets/team/team3.jpeg";
import team4 from "../assets/team/team4.jpeg";

const teamMembers = [
  {
    id: 1,
    name: "Zazan Yousaf",
    role: "Founder & CEO",
    desc: "With over 10 years of experience in the electronics industry, he leads Gujranwala Electronics with innovation and dedication.",
    image: team1,
  },
  {
    id: 2,
    name: "Black Parker",
    role: "Marketing Head",
    desc: "An expert in branding and marketing strategy, Black ensures ZaZaN reaches the right audience worldwide.",
    image: team2,
  },
  {
    id: 3,
    name: "Superior Parker",
    role: "Lead Developer",
    desc: "A passionate tech enthusiast who designs and develops smooth digital experiences for customers.",
    image: team3,
  },
  {
    id: 4,
    name: "Scarlet Parker",
    role: "Product Manager",
    desc: "Coordinates the development of new tech products ensuring top-notch quality and customer satisfaction.",
    image: team4,
  },
];

function ExperienceTeam() {
  return (
    <section id="team" className="team-section">
      <h2>Meet Our Experienced Team</h2>
      <p className="team-intro">
        Our dedicated professionals bring years of expertise in technology, marketing, and product innovation.  
        Together, we make <strong>ZaZaN Electronics</strong> a trusted name in the tech world.
      </p>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="desc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceTeam;
