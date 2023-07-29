import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import images from "../../constants/images";
import './Header.css';

const Header = () => {

  return (
    <div className='rest__header section__padding' id='home'>
      <div className="rest__header-content">
        <SubHeading title="Chase the new flavour" />
        <h1 className='rest__header-content_headline'>The Key To Fine Dining</h1>
        <div className="rest__header-content_text">
          <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>
      </div>
      <div className="rest__header-image">
        <img src={images.welcome} alt="header__img" />
      </div>
    </div>
  );
};

export default Header;
