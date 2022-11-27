import React from 'react';
import './header.scss';
import CTA from './CTA';
import ME from '../../assets/pic1.jpg';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Godwin Muthomi</h1>
        <h5 className='text-light'>
          Machine Learning, Data Science, Artificial Intelligence
        </h5>
        <h5 className='text-light'>Engineer</h5>

        <CTA />
        <HeaderSocial />
        <div className='me'>{/* <img src= {ME} alt="me" /> */}</div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
