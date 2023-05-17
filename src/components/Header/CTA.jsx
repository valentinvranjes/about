import React from 'react';
import CV from './CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#Contact">Let's Talk</a>
    </div>
  )
}

export default CTA
