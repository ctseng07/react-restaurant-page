import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';


const AwardInfo = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="rest__awardInfo">
    <img src={imgUrl} alt="awards" />
    <div className="rest__awardInfo-content">
      <p className='rest__awardInfo-content_title'>{title}</p>
      <p className='rest__awardInfo-content_text'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className='rest__bg rest__laurels section__padding' id='awards'>
    <div className="rest__laurels-content">
      <SubHeading title="Awards & Recognition" />
      <h1 className='rest__laurels-content_title'>Our Laurels</h1>

      <div className="rest__laurels-awards">
        {data.awards.map((award) => <AwardInfo award={award} key={award.title} />)}
      </div>
    </div>

    <div className="rest__laurels-image">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div >
);

export default Laurels;
