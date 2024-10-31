import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/styles/styles.css';
import fb from '../../Assets/images/fb.jpg';
import insta from '../../Assets/images/insta.jpg';
import tweet from '../../Assets/images/tweet.png';
import git from '../../Assets/images/git.jpg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/topics">Explore</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: info@paramedicpreppro.com</p>
          <p>Phone: +254 703 135569</p>
          <p>Address: 123 Paramedic St, Nairobi, Kenya</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <ul className="social-media">
            <li><Link to="#"><i className="fab fa-facebook"></i> <img src={fb} alt='facebook-icon' width={50} /></Link></li>
            <li><Link to="#"><i className="fab fa-twitter"></i> <img src={tweet} alt='tweet-icon' width={50} /></Link></li>
            <li><Link to="#"><i className="fab fa-instagram"></i> <img src={insta} alt='insta-icon' width={50} /></Link></li>
            <li><Link to="https://github.com/Wanjiruwanjiku-tech/final-project-alxSe"><i className="fab fa-instagram"></i> <img src={git} alt='insta-icon' width={50} /></Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
