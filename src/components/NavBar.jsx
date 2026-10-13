import React from 'react';
import imageLogo from '../assets/favicon.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const linkStyle = {
    color: '#00215B',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '600',
    transition: 'color 0.2s ease',
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 40px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo link to Home */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img
            style={{ height: '50px', objectFit: 'contain' }}
            src={imageLogo}
            alt="Hospital Logo"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About Us
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        
        <Link to="/contact" style={linkStyle}>
          Contact Us
        </Link>

        {/* Login Link Styled as Button */}
        <Link
          to="/login"
          style={{
            backgroundColor: '#1066F8',
            color: '#FFFFFF',
            padding: '9px 20px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = '#00215B')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = '#1066F8')
          }
        >
          <ArrowRight size={16} /> Login
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;