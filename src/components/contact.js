import React from 'react';
import '../styles/contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger, FaInstagramSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6qdbvom', 'template_okcryvi', form.current, '3yADLul3j9MnoMRNN')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <div className="container contact__container">
        <div className='contact__options'>
          
        </div>
        {/* END of conatct options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your FUll Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact