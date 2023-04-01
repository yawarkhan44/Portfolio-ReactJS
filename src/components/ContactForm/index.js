import React, {useState} from "react";

import "./ContactFormStyles.scss";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send form data to server or do something else with it
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  return (
    <>
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    ></textarea>
                </div>
            </form>
            <div className="align-right">
            <button type="submit">Send Message!</button>
            </div>
            
        </div>
        
    </>
  );
};

export default ContactForm;