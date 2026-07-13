import React, { useState } from 'react';
import './Enquiry.css';

const PHONE_NUMBER = '8247389473';

const Enquiry = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    childAge: '',
    program: 'Not Sure',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Hello! I'd like to enquire about Happy Kids Playschool.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Child's Age: ${form.childAge}\n` +
      `Program: ${form.program}\n` +
      `Message: ${form.message || '-'}`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm({ name: '', phone: '', childAge: '', program: 'Not Sure', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="enquiry" className="enquiry section-padding">
      <div className="container">
        <div className="enquiry-card">
          <div className="section-title">
            <span className="section-subtitle">QUICK ENQUIRY</span>
            <h2>Have a Question? Ask Away 📝</h2>
            <p className="enquiry-intro">
              Fill this out and we'll reach you on WhatsApp — usually within a few hours.
            </p>
          </div>

          {submitted ? (
            <div className="enquiry-success">
              <div className="enquiry-success-icon">✅</div>
              <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
              <p>We've opened WhatsApp with your details pre-filled. Just hit send and our team will get back to you shortly.</p>
              <button className="btn-secondary" onClick={resetForm}>Send Another Enquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="enquiry-form-row">
                <div className="form-group">
                  <label htmlFor="enq-name">Parent Name</label>
                  <input
                    id="enq-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enq-phone">Phone Number</label>
                  <input
                    id="enq-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>

              <div className="enquiry-form-row">
                <div className="form-group">
                  <label htmlFor="enq-age">Child's Age</label>
                  <input
                    id="enq-age"
                    type="text"
                    name="childAge"
                    value={form.childAge}
                    onChange={handleChange}
                    placeholder="e.g., 3 years"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="enq-program">Interested Program</label>
                  <select id="enq-program" name="program" value={form.program} onChange={handleChange}>
                    <option>Not Sure</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enq-message">Message (optional)</label>
                <textarea
                  id="enq-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any questions for us?"
                  rows="3"
                />
              </div>

              <button type="submit" className="btn-primary enquiry-submit">Send Enquiry 💬</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
