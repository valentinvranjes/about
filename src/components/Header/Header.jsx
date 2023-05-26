import React from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h2>Valentin Vranješ</h2>
        <h4 className="text-light">Fullstack developer</h4>
        <CTA />
        <HeaderSocials />
      </div>
   </header>
  )
}

export default Header
