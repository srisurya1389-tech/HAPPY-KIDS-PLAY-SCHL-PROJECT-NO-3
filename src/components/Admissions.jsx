import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admissions.css';

const Admissions = () => {
  const navigate = useNavigate();

  const handleDownload = (filename, docTitle) => {
    const headerBorder = '='.repeat(40);
    const content = `${headerBorder}\nHAPPY KIDS PLAYSCHOOL & KINDERGARTEN\nDocument: ${docTitle}\n${headerBorder}\n\nThis is a mock PDF/Text document representing the downloadable resource: ${filename}.\n\nWelcome to Happy Kids! Learning with Joy!\nFor more details, contact: admissions@happykids.com or text on WhatsApp.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const fees = [
    { class: 'Nursery', age: '2 – 3 Years', timings: '9:00 AM – 12:00 PM', fee: '$150 / mo' },
    { class: 'LKG', age: '3 – 4 Years', timings: '8:30 AM – 1:00 PM', fee: '$180 / mo' },
    { class: 'UKG', age: '4 – 6 Years', timings: '8:30 AM – 1:30 PM', fee: '$200 / mo' }
  ];

  return (
    <section id="admissions" className="admissions section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">ADMISSIONS</span>
          <h2>Enroll your child today</h2>
        </div>

        <div className="admissions-layout">
          {/* Left Block: Admission Info & Steps */}
          <div className="admissions-info-block">
            <div className="admissions-card">
              <div className="admissions-decor top-left">🎉</div>
              <div className="admissions-decor top-right">🎈</div>
              
              <div className="admissions-badge">Admissions Open 2026 – 2027</div>
              
              <h3>Join our happy family!</h3>
              <p className="admissions-desc">
                Our enrollment process is designed to be warm, clear, and simple. Visit our facility, view our learning programs, submit documentation, and prepare for a magical learning journey.
              </p>

              <div className="steps-container">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h4>Visit & Tour</h4>
                  <p>Book a slot and walk through classrooms.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h4>Submit Form</h4>
                  <p>Fill out details online or offline.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h4>Welcome Kids</h4>
                  <p>Meet teachers and begin learning.</p>
                </div>
              </div>

              <button 
                className="btn-primary admissions-btn"
                onClick={() => navigate('/apply')}
              >
                Apply Online Now 🎒
              </button>
            </div>
          </div>

          {/* Right Block: Fees & Downloadable Forms */}
          <div className="admissions-details-block">
            {/* Fees Table */}
            <div className="fee-card">
              <h3>💵 Program Fee Structure</h3>
              <div className="table-responsive">
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Age Group</th>
                      <th>Class Timings</th>
                      <th>Monthly Tuition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.map((f, i) => (
                      <tr key={i}>
                        <td><strong>{f.class}</strong></td>
                        <td>{f.age}</td>
                        <td>{f.timings}</td>
                        <td><span className="fee-badge">{f.fee}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="fee-footer-text">
                * Fees are billed monthly. Security deposit and registration fees apply upon registration.
              </p>
            </div>

            {/* Downloads Card */}
            <div className="downloads-card">
              <h3>📂 Download Resources</h3>
              <p>Get instant access to our guidelines, policy documents, and form templates.</p>
              <div className="download-buttons-grid">
                <button 
                  className="btn-secondary download-btn"
                  onClick={() => handleDownload('happy_kids_brochure.txt', 'School Brochure')}
                >
                  📖 Download Brochure (PDF)
                </button>
                <button 
                  className="btn-secondary download-btn"
                  onClick={() => handleDownload('happy_kids_admission_form.txt', 'Registration Form')}
                >
                  📝 Download Application Form (PDF)
                </button>
                <button 
                  className="btn-secondary download-btn"
                  onClick={() => handleDownload('happy_kids_fee_policy.txt', 'Tuition Fees Policy')}
                >
                  💰 Download Fee Policy (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
