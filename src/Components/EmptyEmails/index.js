import React from 'react';

import Logo from '../Images/logo.png';
import './index.css';

export default function EmptyEmailContainer() {
  return (
    <div className="emptyContainer">
      <div>
        <img alt="empty" src={Logo} className="icon" />
      </div>
    </div>
  );
}
