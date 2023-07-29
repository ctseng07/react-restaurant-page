import React from 'react';

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div className="rest__header-content_title">
    <p className='rest__header-title'>{title}</p>
    <img src={images.spoon} alt='spoon__img' />
  </div>
);

export default SubHeading;
