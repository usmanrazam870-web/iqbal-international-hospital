import React from 'react';
import { HeartPulse, ArrowUpRight } from 'lucide-react';

// Apni background image ko import karein (Path apne project ke mutabiq adjust kar lein)
import sliderBg from '../assets/backgroundimage.jpeg';

const HomeSlider = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)), url(${sliderBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 80px',
        position: 'relative',
      }}
    >
      {/* Left Content Card */}
      <div style={{maxWidth: '550px',}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <HeartPulse size={26} color="#1066F8" />
          <p style={{ margin: 0, fontWeight: '600', color: '#00215B', fontSize: '16px' }}>
            Your Health, Our Priority
          </p>
        </div>

        <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#00215B', lineHeight: '1.25', margin: '0 0 16px 0' }}>
          Advance Healthcare for a{' '}
          <span style={{ color: '#1066F8' }}>Healthier Tomorrow</span>
        </h1>

        <p style={{ color: '#4A5568', fontSize: '15px', lineHeight: '1.6', marginBottom: '28px' }}>
          Iqbal International Hospital is committed to providing world-class medical care with compassion, expertise, and the latest technology.
        </p>
        <button
          type="button"
          style={{
            backgroundColor: '#1066F8',
            color: '#FFFFFF',
            border: 'none',
            padding: '12px 26px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
        >
          Learn More <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;