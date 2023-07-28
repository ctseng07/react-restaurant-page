import React from 'react';

import images from "../../constants/images";
import './Header.css';

const Header = () => {

  return (
    <div className='rest__header section__padding' id='home'>
      <div className="rest__header-content">
        <h3 className='rest__header-content_title'>Chase The New Flavour</h3>
        <img src={images.spoon} alt='header__logo' />

        <h1 className='rest__header-content_headline'>The Key To Fine Dining</h1>
        <div className="rest__header-content_text">
          <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        </div>
        <div className="rest__header-content_btn">
          <button type='button'>Explore Menu</button>
        </div>
      </div>
      <div className="rest__header-image">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
};

export default Header;
