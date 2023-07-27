import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/gericht.png';
// import line from '../../asset/line.png';
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
        <img src={logo} alt='logo' />
      </div>
      <div className="rest__navbar-links">
        <div className="rest__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="rest__navbar-login">
        <p>Log In / Registration</p>
        <p>Book Table</p>
      </div>
      <div className="rest__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="rest__navbar-menu_container scale-up-center">
            <div className="rest__navbar-menu_container-links">
              <Menu />
              <div className="rest__navbar-menu_container-links-login">
                <p>Log In / Registration</p>
                <p>Book Table</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  )
};

export default Navbar;
