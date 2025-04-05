import React from "react";
import "./App.css";
import { FaPlug, FaTools, FaHandsHelping } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1 className="home-title">
            Power. Performance. <span className="highlight">Peace of Mind.</span>
          </h1>
          <p className="home-subtitle">
            We deliver high-quality household Justcallgeeksuipment, Geeks and professional support, ensuring efficiency and long-lasting reliability for your home or workplace.
          </p>

          <div className="icon-row">
            <div className="icon-box icon-box-plug">
              <FaPlug className="icon icon-plug" />
              <span>Trusted Equipment</span>
            </div>
            <div className="icon-box icon-box-tools">
              <FaTools className="icon icon-tools" />
              <span>Geeks Setup</span>
            </div>
            <div className="icon-box icon-box-support">
              <FaHandsHelping className="icon icon-support" />
              <span>Reliable Support</span>
            </div>
          </div>

          <p className="cta-text">
            Experience practical solutions and Geeks advice tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
