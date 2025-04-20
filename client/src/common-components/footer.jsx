import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-top">
          <div className="footer-headline">
            <h2>Donate to make Pollution-Free Marine</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <div className="footer-subscribe">
            <Link to="/donate">
              <button id="donate">Donate</button>
            </Link>
          </div>
        </section>

        <div className="footer-columns">
          <section className="footer-logo">
            <Link to='/'><img src="/png-jpg/logo/logo 1.png" alt="SeaGuardian" /></Link>
          </section>
          <section>
            <h3>Product</h3>
            <ul>
              <li><Link to="/donate">Donation</Link></li>
            </ul>
          </section>
          <section>
            <h3>Resources</h3>
            <ul>
              <li><Link to="/the-latest">Latest Works</Link></li>
              <li><Link to="/our-program">Our Programs</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </section>
        </div>

        <div className="footer-bottom">
          <small>© SeaGuardian {new Date().getFullYear()}, All rights reserved</small>
          <span className="social-links">
            <a href="https://github.com/ayushsharma-1/Marine-Pollution-Control-SeaGuardian" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="small" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;