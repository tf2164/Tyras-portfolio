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
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" >
<div>
  <br></br>
  <br></br>
  <form
  name="contact"
  method="POST"
  data-netlify="true"
  onSubmit={handleSubmit}
  className="hiremeform">
   
  <input type="hidden" name="form-name" value="contact" />
  
  <h2 className="main-titles section-title">
    Let's Connect! 
  </h2>
  <p className="captions">
  I'd love to hear from you! <br></br>
  Whether you have a project in mind,
   a question to ask,  <br></br>or just want to say hi, I'm here and eager to chat.
  </p>
  <div >
    <label htmlFor="name" className="">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="">
    <label htmlFor="email" className="l">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="input">
    <label
      htmlFor="message"
      className="message-field">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      onChange={(e) => setMessage(e.target.value)}
    />
  </div>
  <button
    type="submit"
    className="submit-button">
    Submit
  </button>
</form>

      </div>
    </section>
  );
}