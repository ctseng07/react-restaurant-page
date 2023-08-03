import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='rest__menuItem'>
    <div className="rest__menuItem-title">
      <div className="rest__menuItem-name">
        <p>{title}</p>
      </div>
      <div className="rest__menuItem-dash" />
      <div className="rest__menuItem-price">
        <p>{price}</p>
      </div>
    </div>
    <div className="rest__menuItem-sub">
      <p>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
