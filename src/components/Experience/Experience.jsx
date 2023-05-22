import React from 'react';
import './Experience.css';
import {BsCheckCircleFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Job Competencies & Associated Skills</h5>
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>jQuery</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>

          </div>
        </div>
        
        <div className="experience__frontend">
        <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>NextJS</h4>
                  <small className='text-light'>Basic</small>
                </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>GraphQL</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
                <div>
                  <h4>ExpressJS</h4>
                  <small className='text-light'>Basic</small>
                </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
