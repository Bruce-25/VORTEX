import './styling/Footer.css';

const Footer = () => {
  return (
    <footer className="vortex-footer">
      <div className="footer-content">
        <h2 className="footer-logo">VORTEX</h2>
        <p className="footer-quote">
          “In chaos, we find clarity. In silence, we shape strength.”
        </p>
        <div className="footer-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="images/fb.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="images/ig.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="images/x.png" alt="X / Twitter" className="social-icon" />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} VORTEX Corp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
