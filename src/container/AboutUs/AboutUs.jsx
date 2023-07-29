import React from 'react';

import { SubHeading } from '../../components';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='rest__aboutus rest__bg flex__center section__padding' id="about">
    <div className="rest__aboutus-overlay flex__center">
      <img src={images.G} alt='g letter' />
    </div>
    <div className="rest__aboutus-content">
      <div className="rest__aboutus-content_about">
        <SubHeading title="About Us" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
