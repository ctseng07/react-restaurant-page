import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='rest__newsLetter'>
    <div className="rest__newsLetter-content">
      <SubHeading title="Newsletter" />
      <h1 className='rest__newsLetter-content_title'>Subscribe To Our Newsletter</h1>
      <p className='rest__newsletter-content_text'>And never miss latest Updates!</p>
    </div>

    <div className="rest__newsLetter-content_input">
      <input type="email" placeholder='Email Address' />
      <button type='button' className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
