// AboutUs.js
import React from "react";
import "./About.scss"; // Optional: use for styling the component

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>[Your Company Name]</strong> – the ultimate
          solution for real estate management and investment. Our platform is
          designed to simplify the real estate experience for property owners,
          tenants, and agents. With our comprehensive tools, you can streamline
          property management, enhance tenant satisfaction, and maximize
          investment returns.
        </p>

        <h2>Our Mission</h2>
        <p>
          To transform property management through innovative technology and
          exceptional service. We aim to make real estate management efficient,
          transparent, and user-friendly for all our clients.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Innovation:</strong> Leveraging the latest technology to
            drive efficiency.
          </li>
          <li>
            <strong>Integrity:</strong> Building trust and transparency in every
            transaction.
          </li>
          <li>
            <strong>Customer-Centricity:</strong> Ensuring our clients' success
            is our priority.
          </li>
        </ul>

        <h2>Our Services</h2>
        <ul>
          <li>Property and Lease Management</li>
          <li>Financial Reporting and Analytics</li>
          <li>Tenant Communication and Support</li>
          <li>Maintenance Tracking and Service Requests</li>
        </ul>

        <p>
          Join us on a journey to redefine real estate management. Experience
          property management that works for you!
        </p>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
