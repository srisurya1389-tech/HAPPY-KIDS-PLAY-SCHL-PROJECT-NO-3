import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsList = [
    {
      question: 'What are the timings of the playschool?',
      answer: 'We operate Monday through Friday from 8:30 AM to 1:30 PM. We also offer extended daycare options until 5:30 PM for parents who require additional child coverage.'
    },
    {
      question: 'What is the teacher-to-student ratio?',
      answer: 'To ensure personalized care and instruction, we maintain a 1:6 ratio for our Nursery program and a 1:12 ratio (with a lead teacher and a dedicated assistant) for LKG and UKG classes.'
    },
    {
      question: 'Do you provide healthy meals or snacks?',
      answer: 'Yes! We provide freshly prepared, nutritious snacks and balanced lunches daily. Our menu is created alongside child nutrition experts, emphasizing organic, low-sugar, and allergen-friendly options.'
    },
    {
      question: 'How do you handle security and emergency situations?',
      answer: 'The campus is fully gated with single-point smart-card entry and 24/7 CCTV monitoring. Furthermore, all our teachers and support staff are certified in Pediatric CPR and First Aid.'
    },
    {
      question: 'Can we visit the school before applying?',
      answer: 'Absolutely! We strongly encourage school visits. You can schedule a guided tour by filling out the form in the Contact section, or by calling our admin desk directly.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="container">
        <div className="section-title">
          <span className="section-subtitle">COMMON QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-accordion">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-arrow">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
