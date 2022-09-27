import React from "react";
import "../styles/components/socialnetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />,link:"https://www.linkedin.com/in/vinicius-costa-643810181/" },
  { name: "github", icon: <FaGithub />,link:"https://github.com/ViniciusCosta126" },
  { name: "instagram", icon: <FaInstagram />, link:"https://www.instagram.com/__viniciusc6" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => {
        return (
          <a
            href={network.link}
            className="social-btn"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        );
      })}
    </section>
  );
};

export default SocialNetworks;
