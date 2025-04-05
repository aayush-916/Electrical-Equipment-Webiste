import React from "react";
import "./App.css";
import { FaPenNib } from "react-icons/fa"; // just one elegant icon

const Blog = () => {
  return (
    <div className="blog-full-container">
      <div className="overlay">
        <div className="blog-full-content">
          <FaPenNib className="blog-icon" />
          <h2 className="section-title">Insights That Matter</h2>
          <p className="section-description">
            Discover practical tips, future trends, and expert knowledge in electrical systems, appliances, and energy management. Our blog delivers value-packed content to help you make informed decisions for your home or workspace.
          </p>

          <div className="blog-article">
            <h3>Why Regular Electrical Maintenance is Crucial</h3>
            <p>
              Maintaining your electrical systems isn’t just about fixing what’s broken—it's about preventing major issues before they start. Over time, wiring ages, loads increase, and appliances become less efficient. Scheduling regular checkups helps identify faults early, improves energy efficiency, and keeps your household or business running safely.
            </p>

            <h3>Smart Appliances and How They Save You Time</h3>
            <p>
              From AI-enabled washing machines to voice-controlled lighting systems, smart appliances are transforming everyday routines. They optimize energy use, provide remote access, and even alert you before something goes wrong. These technologies don't just add luxury—they provide convenience, safety, and cost control in the long run.
            </p>

            <h3>How to Choose the Right Electrician for Your Project</h3>
            <p>
              Whether you're renovating or just installing a ceiling fan, having the right professional matters. Look for certified experience, transparent pricing, client reviews, and a clear understanding of your specific needs. An expert technician ensures safety, precision, and peace of mind.
            </p>

            <h3>Hidden Energy Wasters in Every Home</h3>
            <p>
              You may be surprised to learn that idle chargers, outdated appliances, and poor lighting choices are silently consuming your power. Our team shares tips like switching to LED, using surge-protected power strips, and unplugging unused devices to reduce unnecessary energy consumption.
            </p>

            <h3>What to Do During a Power Surge or Short Circuit</h3>
            <p>
              Electrical mishaps can be stressful. But acting quickly and safely makes all the difference. Shut off the main power if safe, avoid contact with faulty equipment, and call for professional help. Installing surge protectors and circuit breakers ahead of time can prevent future incidents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
