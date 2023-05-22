import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Valentin Vranješ</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='ME'>
          <img src={ME} alt={ME} />
        </div>
        
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header
