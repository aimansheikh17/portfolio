import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>CONTACT</h3>
          <p>This is my personal portfolio website.</p>
          <p>+91 8722552732</p>
          <p>mohammedaiman2001@gmail.com</p>
          <p>Dubai, UAE</p>
        </div>

        <div className="footer-column">
          <h3>EXPLORE</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#activities">Additional</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>FOLLOW</h3>
          <div className="social-icons">
            <a href="https://github.com/aimansheikh17" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/aiman_sheikhh_17/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/mohammed-aiman-036005327" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

