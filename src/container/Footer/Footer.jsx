import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className='rest__footer section__padding' id='login'>
    <FooterOverlay />
    <Newsletter />

    <div className="rest__footer-content">
      <div className="rest__footer-content_contact">
        <h1 className='rest__footer-contact-title'>Contact Us</h1>
        <p className='rest__footer-contact-text'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='rest__footer-contact-text'>+1 212-344-1230</p>
        <p className='rest__footer-contact-text'>+1 212-555-1230</p>
      </div>

      <div className="rest__footer-content_logo">
        <img src={images.gericht} alt='footer_logo' />
      </div>
    </div>
  </div>
);

export default Footer;
