import React from 'react'
import './Nav.css';
import {ImHome} from 'react-icons/im';
import {ImUser} from 'react-icons/im';
import {ImBook} from 'react-icons/im';
import {BsFillFileCodeFill} from 'react-icons/bs';
import {MdContactSupport} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome/></a>
    <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser/></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook/></a>
    <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BsFillFileCodeFill/></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactSupport/></a>
   </nav>
  )
}

export default Nav
