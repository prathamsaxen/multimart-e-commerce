import React, { useState } from "react";
import "../index.css";
import { toast } from "react-toastify";
import axios from "axios";
import "../styles/Contact.css";

function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [disable, setDisable] = useState(false);

  const submitUserEntry = async (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z ]+$/;
    const emailRegex =
      /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!contactData.name) {
      toast.error("Name is required!");
      return;
    } else if (!namePattern.test(contactData.name)) {
      toast.error("Name is not valid!");
      return;
    } else if (!contactData.email) {
      toast.error("Email is required");
      return;
    } else if (!emailRegex.test(contactData.email)) {
      toast.error("Email is invalid");
      return;
    } else {
      setDisable(true);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API}api/contact`,
          contactData
        );
        console.log(response);
        if (response.status === 200) {
          toast.success("Query Submitted Successfully");
          setContactData({ name: "", email: "", subject: "", message: "" });
        }
      } catch (err) {
        toast.error("Error in submitting your query!");
      }
      setDisable(false);
    }
  };
  return (
    <div className="contact-page">
      <div className="contact-us-page-section">
        <div className="contact-us-form">
          <form action="" onSubmit={submitUserEntry}>
            <h2>Contact Us</h2>
            <div className="contact-us-form-group">
              <div className="label-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={contactData.name}
                  onChange={(e) =>
                    setContactData({ ...contactData, name: e.target.value })
                  }
                  disabled={disable}
                  placeholder="John Doe"
                />
              </div>
              <div className="label-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={contactData.email}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                  disabled={disable}
                  placeholder="prathamsaxena@gmail.com"
                />
              </div>
            </div>
            <div className="label-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                value={contactData.subject}
                onChange={(e) =>
                  setContactData({ ...contactData, subject: e.target.value })
                }
                disabled={disable}
              />
            </div>
            <div className="label-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name=""
                id="message"
                value={contactData.message}
                onChange={(e) =>
                  setContactData({ ...contactData, message: e.target.value })
                }
                disabled={disable}
              ></textarea>
            </div>
            <input type="submit" value={"Send"} disabled={disable} />
          </form>
        </div>
        <div className="contact-us-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.0935956382436!2d78.05259667700845!3d27.8991009760733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a5c176570e5f%3A0xaf0a8ca698aad504!2sFORELSKET%20SOFTWARES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1718818754211!5m2!1sen!2sin"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
