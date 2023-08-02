import React from 'react';

import { MenuItem, SubHeading } from '../../components';
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
          {data.wines.map((wines, index) => (
            <MenuItem key={wines.title + index} title={wines.title} price={wines.price} tags={wines.tags} />
          ))}
        </div>
      </div>

      {/* <div className="rest__specialMenu-menu_img">
      <img src={images.menu} alt="menu__img" />
    </div> */}

      <div className="rest__specialMenu-menu_cocktails">
        <h1 className="rest__specialMenu-menu_heading">Cocktails</h1>
        <div className="rest__specialMenu-menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
