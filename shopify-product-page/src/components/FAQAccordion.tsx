import React, { useState } from 'react';
import '../styles/faq-accordion.css';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items = [
    {
      id: '1',
      question: 'What is the warranty period?',
      answer: 'We offer a comprehensive 2-year warranty covering manufacturing defects and performance issues.'
    },
    {
      id: '2',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Express shipping available for 2-3 business days.'
    },
    {
      id: '3',
      question: 'Is this product eco-friendly?',
      answer: 'Yes! Our products are made from 100% recyclable materials and packaged in sustainable materials.'
    },
    {
      id: '4',
      question: 'Can I return the product?',
      answer: 'Absolutely! We offer a 30-day money-back guarantee if you are not completely satisfied.'
    },
    {
      id: '5',
      question: 'What is included in the box?',
      answer: 'The package includes the main product, user manual, warranty card, and care instructions.'
    }
  ]
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-accordion-container">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our product</p>
      </div>
      
      <div className="faq-list">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`faq-item ${expandedId === item.id ? 'expanded' : ''}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleAccordion(item.id)}
              aria-expanded={expandedId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="faq-question-text">{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <div 
              className="faq-answer-wrapper"
              id={`faq-answer-${item.id}`}
            >
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
