import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../style/faq.css"
import Header from "../common-components/header";
import Footer from "../common-components/footer";

const FAQ = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
    message: '',
    attachment: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Header />
      <div>
        <hr />
        <main>
          <div className="faq-faq">
            <div className="faq-title">
              <h2>Frequently Asked Question (FAQs)</h2>
              <hr style={{ marginTop: '25px' }} />
            </div>
            <div className="faq-q_a">
              <p><Link to="/faq1">How To Donate?</Link></p>
              <p><Link to="/faq2">How To Register As An Individual?</Link></p>
              <p><Link to="/faq3">How To Register As An NGO?</Link></p>
              <p><Link to="/faq4">How Can We Connect With An NGO?</Link></p>
              <p><Link to="/faq5">How To Report An Accident?</Link></p>
            </div>
          </div>

          <section className="faq-section__support" id="faq-support">
            <h3>Submit a Request</h3>
            <p>Fill the form below to let us know about the problem you are facing.</p>
            <form className="faq-frm" onSubmit={handleSubmit}>
              <div className="faq-form__group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="faq-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="faq-form__group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="faq-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="faq-form__group">
                <label htmlFor="problem">Problem:</label>
                <select
                  id="faq-problem"
                  name="problem"
                  required
                  value={formData.problem}
                  onChange={handleInputChange}
                >
                  <option value="">Select the option that you are facing the problem in</option>
                  <option value="problem1">Donation</option>
                  <option value="problem2">Registration</option>
                  <option value="problem3">Login</option>
                  <option value="problem4">NGOs links not working</option>
                </select>
              </div>
              <div className="faq-form__group">
                <label htmlFor="message">Description:</label>
                <textarea
                  id="faq-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="faq-form__group">
                <label htmlFor="attachment">Attachment:</label>
                <input
                  type="file"
                  id="faq-attachment"
                  name="attachment"
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" className="faq-sub__btn" value="Submit" />
            </form>
          </section>

          <div className="faq-thank-u">
            <h1>Thank You For Visiting Us. Hope This Will Help You :)</h1>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;