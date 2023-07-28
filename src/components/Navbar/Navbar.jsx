import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about">About</a></p>
    <p><a href="#menu">Menu</a></p>
    <p><a href="#awards">Awards</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='rest__navbar'>
      <div className="rest__navbar-logo">
        <img src={images.gericht} alt='rest__logo' />
      </div>
      <div className="rest__navbar-links">
        <div className="rest__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="rest__navbar-login">
        <p>Log In / Registration</p>
        <div />
        <p>Book Table</p>
      </div>
      <div className="rest__navbar-sidebar">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="rest__navbar-sidebar_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <div className="rest__navbar-sidebar_links">
              <Menu onClick={() => setToggleMenu(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
