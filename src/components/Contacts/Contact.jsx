import React from 'react';
import './Contact.css';
import {MdEmail} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {RiWhatsappFill} from 'react-icons/ri';

const Contacts = () => {
  return (
    <section id='contact'>
        <h5>Get In touch</h5>
        <h2>Contact Me</h2>
        
        <div className="container contact__container">
          <div className="contact__options">
          
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>valentin@valentin.com</h5>
            <a href='mailto:valentin@valentin.com' target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <BsFillChatDotsFill className='contact__option-icon'/>
            <h4>Chat</h4>
            <h5>Let's Chat!</h5>
            <a href='https://valentinvranjes.github.io/seminarski_rad/' target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=123456789' target="_blank">Send a message</a>
          </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="10" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
      </section>
  )
}

export default Contacts
