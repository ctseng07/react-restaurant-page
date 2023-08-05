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
)

// const Logo = () => (
//   <div className="rest__laurels-logo">
//     <img src={images.logo} alt="logo_img" />
//   </div>
// )

const Laurels = () => (
  <div className='rest__laurels rest__bg section__padding' id='awards'>
    {/* <div className="rest__laurels-logo">
      <img src={images.logo} alt="logo_img" />
    </div> */}

    <div className="rest__laurels-content">
      <SubHeading title="Awards & Recognition" />
      <h1 className='rest__laurels-content_title'>Our Laurels</h1>

      <div className="rest__laurels-awards">
        {data.awards.map((award) => <AwardInfo award={award} title={award.title} subtitle={award.subtitle} />)}
      </div>
    </div>

    <div className="rest__laurels-image">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div >
);

export default Laurels;
