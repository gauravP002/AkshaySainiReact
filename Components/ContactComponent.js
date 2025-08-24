const ContactComponent = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>📍 123 Food Street, Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@restaurant.com</p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
