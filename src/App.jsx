import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import PrivacyPolicy from "./PrivacyPolicy";
import Root from "./Root";
import ServicesPage from "./ServicesPage";
import TermsAndConditions from "./TermsAndConditions";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Root/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} />
      </Routes>
   
  );
};

export default App;
