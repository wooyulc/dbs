// Email.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_6qdbvom', 'template_okcryvi', e.target, '3yADLul3j9MnoMRNN')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.error(error.text);
        alert('An error occurred, please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required />
      </div>
      <input type="submit" value="Send Email" />
    </form>
  );
};

export default Email;