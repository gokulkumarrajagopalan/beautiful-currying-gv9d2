import React from "react";
import cback from "./contacbackground.jpg";

function ContactComponent() {
  return (
    <div
      className="contact-section"
      style={{ backgroundImage: `url(${cback})` }}
    >
      <h2>CONTACT</h2>
      <blockquote>
        <p>&quot;The only way to do great work is to love what you do.&quot;</p>
        <footer>- Steve Jobs</footer>
      </blockquote>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactComponent;
