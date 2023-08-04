import React from 'react';

import { SubHeading } from '../../components';
import images from "../../constants/images";
import './Chef.css';

const Chef = () => (
  <div className='rest__chef rest__bg section__padding' id='chef'>
    <div className="rest__chef-image">
      <img src={images.chef} alt="chef_img" />
    </div>
    <div className="rest__chef-content">
      <div className="rest__chef-content_wrapper">
        <SubHeading title="Chef's Word" />
        <h1 className='rest__chef-content_title'>What We Believe In</h1>
        <div className="rest__chef-content_text">
          <img src={images.quote} alt="quote_img" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className='rest__chef-content_text-two'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
      </div>
      <div className="rest__chef-sign">
        <h1 className='rest__chef-sign_name'>Kevin Luo</h1>
        <p>Chef & Founder</p>
        <img src={images.sign} alt="sign_img" />
      </div>
    </div>
  </div>
);

export default Chef;
