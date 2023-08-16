import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className='rest__footer rest__bg section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className="rest__footer-content">
      <div className="rest__footer-contact">
        <h1 className='rest__footer-title'>Contact Us</h1>
        <p className='rest__footer-text'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='rest__footer-text'>+1 212-344-1230 <br /> +1 212-555-1230</p>
      </div>

      <div className="rest__footer-logo">
        <img src={images.gericht} alt='footer_logo' />
        <div className="rest__footer-logo_content">
          <p className='rest__footer-logo_text'>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon_img" />
          <div className="rest__footer-logo_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="rest__footer-logo_text-end">
          <p>2021 Gerícht. All Rights reserved.</p>
        </div>
      </div>

      <div className="rest__footer-hours">
        <h1 className='rest__footer-title'>Working Hours</h1>
        <p className="rest__footer-text">Monday-Friday: <br /> 08:00 am -12:00 am</p>
        <p className="rest__footer-text">Saturday-Sunday: <br /> 07:00am -11:00 pm</p>
      </div>
    </div>
  </div>
);

export default Footer;
