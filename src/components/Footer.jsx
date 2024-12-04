import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="foot-section">
        <a href="#contact" className="foot contact">Contact Info</a>
      </div>
      <div className="foot-section">
        <a href="#privacy" className="foot privacy">Privacy & Terms</a>
      </div>
      <div className="foot-section copyright">
        Copyright © 2024 Aginflix
      </div>
    </footer>
  );
}

export default Footer;
