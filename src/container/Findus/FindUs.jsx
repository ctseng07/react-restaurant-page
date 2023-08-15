import React from 'react';

import "./FindUs.css"
import { SubHeading } from '../../components';
import images from '../../constants/images';

const FindUs = () => (
  <div className='rest__findUs rest__bg section__padding' id='contact'>
    <div className="rest__findUs-content">
      <SubHeading title="Contact" />
      <h1 className='rest__findUs-content_title'>Find Us</h1>
      <div className="rest__findUs-content_info">
        <p className='rest__findUs-content_text'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className='rest__findUs-content_text-title'>Opening Hours</p>
        <p className="rest__findUs-content_text">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="rest__findUs-content_text">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type='button' className='custom__button'>Vistit Us</button>
    </div>
    <div className="rest__findUs-image">
      <img src={images.findus} alt='findus-img' />
    </div>
  </div>
);

export default FindUs;
