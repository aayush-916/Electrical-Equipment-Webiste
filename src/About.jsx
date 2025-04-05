import React from "react";
import "./App.css";
import {
  FaBolt,
  FaCogs,
  FaHandsHelping,
  FaShieldAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="overlay">
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a team of passionate electrical experts dedicated to bringing high-performance, reliable, and long-lasting solutions to homes and workplaces. With over a decade of industry experience, our goal is to simplify your electrical needs through expert consultation, durable equipment, and long-term support.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <FaBolt className="icon icon-bolt" />
              <h3>Power-Driven Solutions</h3>
              <p>
                From energy-efficient appliances to surge protection and voltage stabilizers, our catalog of products is designed to empower your living or working space. We ensure every installation promotes safety and optimal energy consumption.
              </p>
            </div>

            <div className="about-card">
              <FaCogs className="icon icon-cogs" />
              <h3>Customized Installations</h3>
              <p>
                Every environment is unique. That’s why we offer customized electrical planning for homes, offices, and industrial spaces. Our team evaluates your requirements and creates a tailored solution that fits your lifestyle or business goals.
              </p>
            </div>

            <div className="about-card">
              <FaHandsHelping className="icon icon-help" />
              <h3>Professional Support</h3>
              <p>
                We offer more than just equipment — we provide complete service support. Whether it's a quick fix, a major upgrade, or detailed consultation, our technical team is always ready to assist with a human-first approach.
              </p>
            </div>

            <div className="about-card">
              <FaShieldAlt className="icon icon-shield" />
              <h3>Safety First</h3>
              <p>
                All our solutions follow national safety standards. With protective devices and quality-tested products, we ensure both people and property remain safe from electrical hazards.
              </p>
            </div>

            <div className="about-card">
              <FaTools className="icon icon-tools" />
              <h3>Maintenance & Repairs</h3>
              <p>
                Regular wear and tear is inevitable — our skilled engineers are available for routine maintenance and quick diagnostics, ensuring your systems run smoothly without interruptions.
              </p>
            </div>

            <div className="about-card">
              <FaCheckCircle className="icon icon-check" />
              <h3>Trusted by Hundreds</h3>
              <p>
                We’ve served over 500 clients across multiple sectors. Our growing reputation is built on trust, efficiency, and commitment. Each satisfied customer is a step closer to our vision of being the most dependable name in electrical solutions.
              </p>
            </div>
          </div>

          <p className="about-footer-text">
            Whether you're setting up a new space, upgrading your current infrastructure, or simply looking for honest guidance, we're here to help. Let us bring expert-level precision and peace of mind into your daily life. Electrical excellence is just a call away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
