import React, { useState } from "react";
import "./contact.scss";
import apiRequest from "../../lib/apiRequest"; // Ensure this is correctly set up

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(""); // To display errors
  const [success, setSuccess] = useState(""); // To display success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("All fields are required.");
      return;
    }

    // Reset messages
    setError("");
    setSuccess("");

    try {
      const response = await apiRequest.post("/users/send-email", formData);

      if (response.status === 200) {
        setSuccess("message sent successfully our team will contact you !");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        setError("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("An error occurred while sending your message.");
    }
  };

  return (
    <div className="contact-us">
      <div className="content">
        <div className="registerPage">
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <h1>Contact Us</h1>
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <input
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
              <input
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
};

export default ContactUs;
