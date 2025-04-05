import React from "react";
import "./App.css";
import {
  FaPlug,
  FaLightbulb,
  FaTools,
  FaSolarPanel,
  FaClipboardCheck,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="services-container">
      <div className="overlay">
        <div className="services-content">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            We provide complete electrical support — from basic installations to advanced energy systems. Whether you’re upgrading your home or building your business infrastructure, our services are tailored to offer safe, smart, and sustainable results.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <FaPlug className="icon icon-plug" />
              <h3>Home Electrical Setup</h3>
              <p>
                We handle wiring, socket installations, switches, surge protection, and everything in between for a safe and energy-efficient home.
              </p>
            </div>

            <div className="service-card">
              <FaLightbulb className="icon icon-bulb" />
              <h3>Smart Lighting Solutions</h3>
              <p>
                Bring your space to life with automated lighting systems, motion sensors, and smart bulbs. Control everything at your fingertips.
              </p>
            </div>

            <div className="service-card">
              <FaTools className="icon icon-tools" />
              <h3>Appliance Installation</h3>
              <p>
                We help install household and office appliances like fans, geysers, inverters, and heavy-duty equipment with precision and care.
              </p>
            </div>

            <div className="service-card">
              <FaSolarPanel className="icon icon-solar" />
              <h3>Solar Energy Integration</h3>
              <p>
                Save energy and reduce costs by switching to solar. Our team handles setup, maintenance, and system design for renewable power.
              </p>
            </div>

            <div className="service-card">
              <FaClipboardCheck className="icon icon-inspection" />
              <h3>Safety Inspection & Upgrades</h3>
              <p>
                Get your wiring, load distribution, and panel boards checked by certified experts. We identify risks and upgrade them safely.
              </p>
            </div>

            <div className="service-card">
              <FaHeadset className="icon icon-support" />
              <h3>Technical Assistance & AMC</h3>
              <p>
                We offer expert advice, fault diagnosis, and Annual Maintenance Contracts (AMC) for long-term performance and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
