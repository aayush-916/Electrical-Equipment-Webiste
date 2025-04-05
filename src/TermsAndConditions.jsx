import React from "react";

const TermsAndConditions = () => {
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
        Terms & Conditions
      </h1>

      <p>
        Welcome to Electrical Eq Experts. These Terms & Conditions outline the rules and responsibilities associated with using our website and services. By accessing our website or engaging with our services, you agree to comply with the terms listed below. Please read them carefully.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        1. Acceptance of Terms
      </h2>
      <p>
        By using this website, you confirm that you accept these terms and agree to be legally bound by them. If you do not agree to these terms, please do not use our website or services.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        2. Services Provided
      </h2>
      <p>
        Electrical Eq Experts specializes in electrical equipment sales, installations, repairs, and expert consultation. We strive to offer reliable solutions, but availability and service timelines may vary depending on location and demand.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        3. User Responsibilities
      </h2>
      <p>By using our services, you agree to:</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Provide accurate and honest information when filling out forms or making inquiries</li>
        <li>Not use the site or services for any unlawful activities</li>
        <li>Respect our team members and any support personnel</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        4. Intellectual Property
      </h2>
      <p>
        All content on this website—including text, images, icons, and design—is either owned by us or used under proper licensing. Unauthorized reproduction or distribution is strictly prohibited.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        5. Pricing and Payments
      </h2>
      <p>
        All service prices listed are subject to change without notice. Final pricing may vary based on site inspections, required components, or custom service packages. Payments must be made through authorized and secure channels only.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        6. Limitation of Liability
      </h2>
      <p>
        While we strive to ensure smooth and safe service, Electrical Eq Experts is not liable for any direct or indirect damages arising from the use or misuse of our services, including delays or equipment issues outside of our control.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        7. Third-Party Links
      </h2>
      <p>
        Our website may include links to third-party websites or services. We are not responsible for their content, policies, or practices. We recommend reviewing their terms before interacting with those platforms.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        8. Changes to Terms
      </h2>
      <p>
        We reserve the right to update these Terms & Conditions at any time. Changes will be reflected on this page, and continued use of our services after updates implies your acceptance of those changes.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        9. Termination
      </h2>
      <p>
        We may suspend or terminate access to our services if we detect misuse, abuse, or violation of our terms. We also reserve the right to deny service under reasonable circumstances.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#007bff", marginTop: "30px" }}>
        10. Contact
      </h2>
      <p>
        If you have questions about these terms or need clarification, you can reach us at:
      </p>
      <p style={{ marginTop: "10px" }}>
        <strong>Email:</strong> support@ElectricalEq.in <br />
      </p>

      <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#666" }}>
        Last updated on: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsAndConditions;
