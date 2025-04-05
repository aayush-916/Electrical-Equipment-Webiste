import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Electrical Eq</h2>
          <p>
            At Electrical Eq, we’re committed to delivering smart and reliable electrical
            solutions for homes and businesses. From household installations to
            advanced workplace support, we prioritize safety, innovation, and
            satisfaction—every time.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/PrivacyPolicy">PrivacyPolicy</Link></li>
            <li><Link to="/TermsAndConditions">TermsAndConditions</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <p>
            <FaEnvelope className="footer-icon mail" style={{ color: "#F06292" }} />{" "}
            support@ElectricalEq.in
          </p>
          <p>
            <FaMapMarkerAlt className="footer-icon location" style={{ color: "#4FC3F7" }} />{" "}
            Middle Village, NY 11379, USA
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Electrical Eq. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
