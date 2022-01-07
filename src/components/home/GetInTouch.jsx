import React, { useState } from "react";
import {FaPhoneAlt} from "react-icons/fa";
import { send } from 'emailjs-com';

const GetInTouch = ({ heading, message, email, phone, darkmode }) => {
  const [sending, setSending] = useState(false);
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(()=>{
      send(
        'service_h9prgxt',
        'template_qozthl9',
        toSend,
        'user_XIa1ZKE6EgScViFzysjeY',
      )
      .then((response) => {
        alert('Your message is successfully sent!');
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        alert('Your message failed to send');
        console.log('FAILED...', err);
      });

      setSending(false);
      setToSend({
        name: '',
        email: '',
        message: '',
      });
    }, 3000);
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <form onSubmit={onSubmit} class="shadow-lg rounded px-4 py-4">
        <div className="form-group">
          <input 
            name="name" 
            type="text" 
            className={`form-control ${darkmode && 'bg-dark text-white'}`}
            placeholder="Your Name"
            value={toSend.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            name="email" 
            type="email" 
            className={`form-control ${darkmode && 'bg-dark text-white'}`}
            placeholder="Your Email"
            value={toSend.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            className={`form-control ${darkmode && 'bg-dark text-white'}`}
            rows="4" 
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
            required
          >
          </textarea>
        </div>
        <button type="submit" className="btn btn-dark btn-block border border-info">
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>
      <p className="lead text-center pt-4">
        {message} <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="lead text-sm mb-3">or</div>
      <FaPhoneAlt size={23}/> <a href={`tel:${phone}`}> {phone}</a>
    </>
  );
};

export default GetInTouch;
