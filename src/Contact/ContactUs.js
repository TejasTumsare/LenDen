import Footer from "../componentsHome/FooterComponent";
import NavbarComponent from "../componentsHome/NavbarComponent";
import "./ContactUs.css";
import Location from "../asset/svg/Location.js";
import Email from "../asset/svg/Email.js";
import Mobile from "../asset/svg/Mobile.js";

import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you for reaching out to LenDen! We will get back to you shortly."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <NavbarComponent />
      <section className="contact-us">
        <h1>Contact LenDen</h1>
        <p>
          Welcome to LenDen! Whether you're a buyer, seller, or just have a
          question, we're here to assist you. Reach out to us using the form
          below, and we'll respond as soon as possible. Happy buying and
          selling!
        </p>
        <div className="contact-us-form">
          <form onSubmit={handleSubmit} className="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className="map">
        <h1>Our Location</h1>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509897!2d144.95565121564905!3d-37.817326979751984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b1fcefd3%3A0x2b7b58f29b6d70!2sAuction%20Street!5e0!3m2!1sen!2sau!4v1648591539469!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map Location"
          ></iframe>
          <div className="contact-info">
            <p>
              <Location className="icons"/> 123 Auction St, Marketplace City, USA
            </p>
            <p>
              <Email className="icons"/> support@lenden.com
            </p>
            <p>
              <Mobile className="icons"/>+1 234 567 8900
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
