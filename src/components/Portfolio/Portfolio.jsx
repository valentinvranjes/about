import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio'>
        <h5>My work and achievements</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="Portfolio1" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
                <a href="https://github.com" className='btn' target='_blank'>Github</a>
                <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt="Portfolio2" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt="Portfolio3" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt="Portfolio4" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG5} alt="Portfolio5" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt="Portfolio6" />
            </div>
              <h3>This is a portfolio item title</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>Github</a>
              <a href="https://dribbble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
               
        </div>
      </section>
    </div>
  )
}

export default Portfolio
