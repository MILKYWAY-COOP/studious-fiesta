import React from 'react';
import './footer.scss';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        GODWIN
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'></a>Home
        </li>
        <li>
          <a href='#about'></a>About
        </li>
        <li>
          <a href='#experience'></a>Experience
        </li>
        <li>
          <a href='#services'></a>Services
        </li>
        <li>
          <a href='#portfolio'></a>Portfolio
        </li>
        <li>
          <a href='#testimonials'></a>Testimonials
        </li>
        <li>
          <a href='#contact'></a>Contact
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://instagram.com'>
          <FiInstagram />
        </a>
        <a href='https://twitter.com'>
          <IoLogoTwitter />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Godwin Muthomi. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
