import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="field has-background-main is-rounded p-1">
      <h2 className="has-text-white has-bottom-line">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label has-text-white has-border-secondary" htmlFor="name">Name</label>
          <input
            className="input has-background-accent m-1"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label has-text-white" htmlFor="email">Email</label>
          <input
            className="input has-background-accent m-1"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label has-text-white" htmlFor="message">Message</label>
          <textarea
            className="input has-background-accent m-1"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="has-background-secondary m-1" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
