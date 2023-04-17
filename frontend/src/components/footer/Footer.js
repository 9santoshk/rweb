import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3 className="footer__column-title">Company Logo</h3>
          <div className="footer__social">
            <a href="/" className="footer__social-link">
              <FaTwitter />
            </a>
            <a href="/" className="footer__social-link">
              <FaFacebook />
            </a>
            <a href="/" className="footer__social-link">
              <FaInstagram />
            </a>
            <a href="/" className="footer__social-link">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Product Services</h3>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Product 1
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Product 2
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Product 3
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Product 4
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__column-title">Contact Us</h3>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Contact
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Terms of Service
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__menu-item">
              <a href="/" className="footer__menu-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
