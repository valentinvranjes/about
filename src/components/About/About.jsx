import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg';
import {BsFileCodeFill} from 'react-icons/bs';
import {FaPeopleArrows} from 'react-icons/fa';
import {GiOpenFolder} from 'react-icons/gi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsFileCodeFill className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FaPeopleArrows className='about__icon'/>
              <h5>Clients</h5>
              <small>20+</small>
            </article>

            <article className='about__card'>
              <GiOpenFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>40+</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis voluptatem nemo id magnam, accusamus ut nisi sint mollitia quasi porro eveniet sequi blanditiis ratione dolores soluta? Deleniti, voluptatum ipsam.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
