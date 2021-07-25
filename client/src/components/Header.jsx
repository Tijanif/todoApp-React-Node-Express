import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div className='heading'>
      <h1>
        Fullstack Todo <span className='italic secondary-color'>App...</span>
      </h1>
      <p className='italic secondary-color'>
        Created with Node, Express and React
      </p>
    </div>
  );
};

export default Header;
