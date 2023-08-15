import React from 'react';
import { BsInstagram } from "react-icons/bs"

import images from '../../constants/images';
import './Gallery.css';
import { SubHeading } from '../../components';

const Gallery = () => {

  return (
    <div className='rest__gallery section__padding'>
      <div className="rest__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className='rest__gallery-content_title'>Photo Gallery</h1>
        <div className="rest__gallery-content_text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button type='button' className='custom__button'>View More</button>
        </div>
      </div>
      <div className="rest__gallery-images">
        <img src={images.gallery04} alt='img_1' />
        <img src={images.gallery03} alt='img_2' />
        <img src={images.gallery02} alt='img_3' />
        <img src={images.gallery01} alt='img_4' />
      </div>
    </div>
  );
};

export default Gallery;
