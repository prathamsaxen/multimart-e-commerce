import React from "react";
import "../index.css";
function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-us-page-section">
        <div className="contact-us-form">
          <form action="">
          <h2>Contact Us</h2>
            <div className="contact-us-form-group">
              <div className="label-group">
                <label for="name">Name:</label>
                <input type="text" id="name" />
              </div>
              <div className="label-group">
                <label for="email">Email:</label>
                <input type="email" id="email" />
              </div>
            </div>
            <div className="label-group">
              <label for="subject">Subject:</label>
              <input type="text" id="subject" />
            </div>
            <div className="label-group">
              <label for="message">Message:</label>
              <textarea name="" id="message"></textarea>
            </div>
            <input type="submit" value={"Send"}/>
          </form>
        </div>
        <div className="contact-us-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0935956382436!2d78.05259667700845!3d27.8991009760733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5c176570e5f%3A0xaf0a8ca698aad504!2sFORELSKET%20SOFTWARES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1718818754211!5m2!1sen!2sin"
            // width="600"
            // height="450"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
