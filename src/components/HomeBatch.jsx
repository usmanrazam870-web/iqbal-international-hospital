import React from 'react';
import { UserSearch, UserCheck, MapPin, ArrowRight } from 'lucide-react';

const HomeBatch = () => {
  const cardStyle = {
    flex: '1 1 320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 32px', // Size bada kar diya hai
    backgroundColor: '#1066F8', // Blue background
    borderRadius: '16px',
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(16, 102, 248, 0.25)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const leftGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const iconBoxStyle = {
    width: '58px', // Icon box ka size badha diya
    height: '58px',
    borderRadius: '14px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Halka white overlay blue par
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle = {
    color: '#FFFFFF',
    fontSize: '22px', // Text size badha diya
    fontWeight: '700',
    margin: 0,
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#00215B'; // Dark blue hover
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 33, 91, 0.35)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#1066F8';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 102, 248, 0.25)';
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '30px 20px',
        flexWrap: 'wrap',
      }}
    >
      {/* Find a Doctor */}
      <a
        href="#"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={leftGroupStyle}>
          <div style={iconBoxStyle}>
            <UserSearch size={28} color="#FFFFFF" />
          </div>
          <h2 style={titleStyle}>Find a Doctor</h2>
        </div>
        <ArrowRight size={26} color="#FFFFFF" />
      </a>

      {/* Patient Portal */}
      <a
        href="#"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={leftGroupStyle}>
          <div style={iconBoxStyle}>
            <UserCheck size={28} color="#FFFFFF" />
          </div>
          <h2 style={titleStyle}>Patient Portal</h2>
        </div>
        <ArrowRight size={26} color="#FFFFFF" />
      </a>

      {/* Find Us */}
      <a
        href="#"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={leftGroupStyle}>
          <div style={iconBoxStyle}>
            <MapPin size={28} color="#FFFFFF" />
          </div>
          <h2 style={titleStyle}>Find Us</h2>
        </div>
        <ArrowRight size={26} color="#FFFFFF" />
      </a>
    </div>
  );
};

export default HomeBatch;