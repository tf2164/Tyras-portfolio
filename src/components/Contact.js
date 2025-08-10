// src/components/Contact.js
import './comp.css';

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully! I'll get back to you soon.");
          // Clear form
          setName("");
          setEmail("");
          setMessage("");
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch((error) => alert("Error sending message. Please try again."));
  }

  return (
    <section id="contact">
      <div className="sections">
        <div className="contact-container">
          <div className="contact-block">
            <div className="contact-header">
              <h2 className="section-title">
                Let's Connect! 
              </h2>
              <p className="section-description" style={{ color: '#f5f5f5', textAlign: 'center', marginBottom: '2rem' }}>
                I'd love to hear from you! Whether you have a project in mind, a question to ask, or just want to say hi, I'm here and eager to chat.
              </p>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="form-submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}