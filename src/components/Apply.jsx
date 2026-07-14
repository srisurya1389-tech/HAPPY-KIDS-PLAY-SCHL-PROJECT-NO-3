import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import './Apply.css';

const Apply = () => {
  const navigate = useNavigate();
  usePageMeta('Apply Now | Happy Kids', 'Start your child\'s admission at Happy Kids Playschool — quick form, no account needed.');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    childName: '',
    class: 'Tiny Tots'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const CLASS_FEES = { 'Tiny Tots': '₹8,000', 'Explorers': '₹9,500', 'Kindergarten Prep': '₹11,000' };

  const handleSubmit = (e) => {
    e.preventDefault();

    let registrations;
    try {
      registrations = JSON.parse(localStorage.getItem('happyKidsRegistrations') || '[]');
    } catch (err) {
      console.error("Failed to parse registrations from localStorage:", err);
      registrations = [];
    }
    registrations.push({
      id: Date.now().toString(),
      name: formData.childName,
      contact: formData.phone,
      className: formData.class,
      fee: CLASS_FEES[formData.class] || '',
      status: 'Unpaid'
    });
    localStorage.setItem('happyKidsRegistrations', JSON.stringify(registrations));

    alert('Application submitted successfully! We will contact you soon.');
    navigate('/');
  };

  return (
    <div className="apply-page">
      <div className="container apply-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
        
        <div className="apply-card">
          <div className="apply-header">
            <h2>Admissions Form 🎒</h2>
            <p>Join the Happy Kids family! Please fill out the details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="apply-form">
            <div className="form-group">
              <label htmlFor="parentName">Parent/Guardian Name</label>
              <input 
                type="text" 
                id="parentName" 
                name="parentName" 
                value={formData.parentName} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone / Mobile Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="+91 XXXXX XXXXX" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="childName">Child's Name</label>
              <input 
                type="text" 
                id="childName" 
                name="childName" 
                value={formData.childName} 
                onChange={handleChange} 
                placeholder="Enter child's full name" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="class">Admission For Class</label>
              <select 
                id="class" 
                name="class" 
                value={formData.class} 
                onChange={handleChange}
                required
              >
                <option value="Tiny Tots">Tiny Tots (Ages 2-3)</option>
                <option value="Explorers">Explorers (Ages 3-4)</option>
                <option value="Kindergarten Prep">Kindergarten Prep (Ages 4-6)</option>
              </select>
            </div>

            <button type="submit" className="btn-primary submit-btn">Submit Application ✨</button>
            <p className="apply-privacy">
              We'll only use these details to process your child's admission — never shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
