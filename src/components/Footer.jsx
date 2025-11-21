import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Logeshwaran J</h3>
            <p>Software Development Engineer | Full Stack + Mobile Developer</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:logesh@example.com">
              Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Logeshwaran J. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;