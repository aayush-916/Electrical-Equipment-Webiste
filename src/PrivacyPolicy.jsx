import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        color: "white",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
        backgroundColor:"Black",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          marginBottom: "20px",
          color: "#00bcd4",
        }}
      >
        Privacy Policy
      </h1>

      <p>
        At Justcallgeeks Experts, we are committed to protecting your privacy and ensuring your data is handled securely and transparently. This policy outlines how we collect, use, and protect your information when you visit our website or use our services.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        1. Information We Collect
      </h2>
      <p>
        We may collect basic personal details including your name, email address, phone number, and location when you fill out forms on our website or contact us directly. We may also collect non-personal data like your IP address and browser type to enhance your browsing experience.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        2. How We Use Your Information
      </h2>
      <p>We use your data to:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Respond to your inquiries and provide expert assistance</li>
        <li>Improve our services and website experience</li>
        <li>Send updates or promotional content (only with your consent)</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        3. Data Sharing
      </h2>
      <p>
        We do not sell, rent, or share your personal information with third parties except when required by law or to fulfill services (such as delivery or support) you have requested from us.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        4. Cookies
      </h2>
      <p>
        Our website may use cookies to understand visitor behavior and preferences. You can disable cookies in your browser settings if you prefer not to have them collected.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        5. Data Security
      </h2>
      <p>
        We implement standard industry security measures to protect your data. However, please note that no system is 100% secure, and we recommend you avoid sharing sensitive information through unprotected channels.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        6. Your Rights
      </h2>
      <p>
        You have the right to access, update, or request deletion of your personal data. To do so, please contact us using the details provided below.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        7. Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy occasionally to reflect changes in our practices or services. We encourage you to review it periodically to stay informed.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        8. Contact Us
      </h2>
      <p>
        If you have any questions about this Privacy Policy, feel free to contact us at:
      </p>
      <p style={{ marginTop: "10px" }}>
        <strong>Email:</strong> support@Justcallgeeks.in <br />
        <strong>Phone:</strong> +91 98765 43210
      </p>

      <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#666" }}>
        Last updated on: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
