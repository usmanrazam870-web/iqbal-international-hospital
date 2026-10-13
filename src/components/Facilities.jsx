import React from 'react';
import { ArrowRight } from 'lucide-react';

const Facilities = () => {
  const cardStyle = {
    flex: '1 1 320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 30px',
    backgroundColor: '#FFFFFF', // Default White
    borderRadius: '16px',
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const titleStyle = {
    color: '#1066F8', // Default Blue Text
    fontSize: '20px',
    fontWeight: '700',
    margin: 0,
    transition: 'color 0.3s ease',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#1066F8'; // Hover Blue
    e.currentTarget.style.boxShadow = '0 12px 28px rgba(16, 102, 248, 0.35)';
    e.currentTarget.style.transform = 'translateY(-5px)';
    
    // Hover text & icon color change
    const title = e.currentTarget.querySelector('h2');
    const icon = e.currentTarget.querySelector('svg');
    if (title) title.style.color = '#FFFFFF';
    if (icon) icon.style.color = '#FFFFFF';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#FFFFFF'; // Reset to White
    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.08)';
    e.currentTarget.style.transform = 'translateY(0)';
    
    // Reset text & icon color
    const title = e.currentTarget.querySelector('h2');
    const icon = e.currentTarget.querySelector('svg');
    if (title) title.style.color = '#1066F8';
    if (icon) icon.style.color = '#1066F8';
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
      }}
    >
      {/* Top Heading */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: '800',
          color: '#00215B',
          marginBottom: '36px',
        }}
      >
        Hospital Services and Facilities
      </h1>

      {/* Cards Grid */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        {/* 1. 24/7 Emergency */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>24/7 Emergency</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 2. Doctor Availability */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Doctor Availability</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 3. Patient Insurance */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Patient Insurance</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 4. 24/7 Pharmacy */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>24/7 Pharmacy</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 5. Lab & Diagnostics */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Lab & Diagnostics</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 6. ICU Care */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>ICU Care</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 7. Radiology & X-Ray */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Radiology & X-Ray</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 8. Blood Bank */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Blood Bank</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 9. Cardiology */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Cardiology</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 10. Online Doctor */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Online Doctor</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 11. Ambulance 24/7 */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Ambulance 24/7</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>

        {/* 12. Find Us */}
        <a href="#" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h2 style={titleStyle}>Find Us</h2>
          <ArrowRight size={24} color="#1066F8" />
        </a>
      </div>
    </div>
  );
};

export default Facilities;