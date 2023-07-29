import React from 'react';

import { SubHeading } from '../../components';
import { images } from "../../constants";
import './AboutUs.css';

const AboutUs = () => (
  <div className='rest__aboutus rest__bg flex__center section__padding' id="about">
    <div className="rest__aboutus-overlay flex__center">
      <img src={images.G} alt='g_overlay' />
    </div>
    <div className="rest__aboutus-content">
      <div className="rest__aboutus-content_about">
        <SubHeading title="About Us" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
    <div className="rest__aboutus-image">
      <img src={images.knife} alt="knife img" />
    </div>
    <div className="rest__aboutus-content_history">
      <SubHeading title="Our History" />
      <p>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
  </div>
);

export default AboutUs;
