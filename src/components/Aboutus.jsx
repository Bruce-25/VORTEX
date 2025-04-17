import Navbar from './Navbar';
import './styling/Aboutus.css';

const AboutUs = () => {
  return (
    
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">Discover who we are and what drives us</p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <p className="section-text">
            We are Vortex, a fashion company born from a desire to create unique, high-quality, and meaningful designs.
            Founded on the belief that fashion is a way to express individuality, our mission is to bring style and purpose to every outfit.
          </p>
          <p className="section-text">
            Our approach is simple yet bold: merge timeless elegance with modern innovation. We believe in crafting pieces that speak to the soul and transcend trends.
            Through every collection, we aim to empower individuals to feel confident, elegant, and true to themselves.
          </p>
          <p className="section-text">
            At Vortex, fashion is more than just clothing—it’s a movement, a statement. A statement that encourages resilience, elegance, and authenticity. We believe that true style is ageless, just like the philosophy that guides us.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-cards">
            <div className="team-card">
              <img src="logo.jpeg" alt="Team Member" className="team-img" />
              <h3 className="team-name">Bruce William</h3>
              <p className="team-role">CEO & Founder</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-img" />
              <h3 className="team-name">Jane Smith</h3>
              <p className="team-role">Lead Designer</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="team-img" />
              <h3 className="team-name">Michael Lee</h3>
              <p className="team-role">Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Us */}
      <section className="contact-us-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-text">We’d love to hear from you! Whether it’s for feedback, questions, or partnerships, reach out to us directly.</p>

          <div className="contact-info">
            <p className="email">
              <strong>Email: </strong><a href="mailto:info@vortexfashion.com" className="email-link">info@vortexfashion.com</a>
            </p>

            <div className="social-media-links">
              <a href="https://www.instagram.com/vortexfashion" target="_blank" rel="noopener noreferrer">
                <img src="images/ig.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://www.facebook.com/vortexfashion" target="_blank" rel="noopener noreferrer">
                <img src="images/fb.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://twitter.com/vortexfashion" target="_blank" rel="noopener noreferrer">
                <img src="images/x.png" alt="Twitter" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section> <br />
      

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} VORTEX. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
