import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from "../../constants";
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='rest__specialMenu flex__center section__padding' id='menu'>
    <div className="rest__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className='rest__specialMenu-title_special'>Today&apos;s Special</h1>
    </div>

    <div className="rest__specialMenu-menu">
      <div className="rest__specialMenu-menu_wine flex__center">
        <h1 className="rest__specialMenu-menu_heading">Wine & Beer</h1>
        <div className="rest__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="rest__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="rest__specialMenu-menu_cocktails flex__center">
        <h1 className="rest__specialMenu-menu_heading">Cocktails</h1>
        <div className="rest__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <button type='button' className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
