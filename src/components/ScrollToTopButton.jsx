import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 900,
          backgroundColor: '#96BBBB',
          border: 'none',
          borderRadius: '50%',
          padding: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} color="#fff" />
      </button>
    )
  );
};

export default ScrollToTopButton;
