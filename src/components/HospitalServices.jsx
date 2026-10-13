import React from 'react';
import { Calendar, Building2, Cpu, Globe, ArrowRight } from 'lucide-react';

const HospitalServices = () => {
  const cardStyle = {
    backgroundColor: '#FFFFFF',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    transition: 'all 0.3s ease',
  };

  const iconBoxStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    backgroundColor: '#F4F7FE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8px',
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side: Text Info */}
        <div style={{ flex: '1 1 400px' }}>
          <span
            style={{
              color: '#1066F8',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            — About Us
          </span>

          <h1
            style={{
              color: '#00215B',
              fontSize: '32px',
              fontWeight: '800',
              margin: '12px 0 16px 0',
              lineHeight: '1.2',
            }}
          >
            Iqbal International Hospital
          </h1>

          <p
            style={{
              color: '#6D84A8',
              fontSize: '15px',
              lineHeight: '1.6',
              marginBottom: '28px',
            }}
          >
            Iqbal International Hospital is a leading healthcare institution
            established with a vision to provide world-class medical services
            using advanced technology and a team of highly qualified
            professionals.
          </p>

          <button
            type="button"
            style={{
              backgroundColor: '#1066F8',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = '#00215B')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = '#1066F8')
            }
          >
            Read More <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Side: Stats Grid */}
        <div
          style={{
            flex: '1 1 500px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}
        >
          {/* Stat Card 1 */}
          <div style={cardStyle}>
            <div style={iconBoxStyle}>
              <Calendar size={22} color="#1066F8" />
            </div>
            <span style={{ color: '#6D84A8', fontSize: '13px', fontWeight: '600' }}>
              Established
            </span>
            <h2 style={{ color: '#00215B', fontSize: '24px', fontWeight: '800', margin: 0 }}>
              2010
            </h2>
          </div>

          {/* Stat Card 2 */}
          <div style={cardStyle}>
            <div style={iconBoxStyle}>
              <Building2 size={22} color="#1066F8" />
            </div>
            <span style={{ color: '#6D84A8', fontSize: '13px', fontWeight: '600' }}>
              Branches
            </span>
            <h2 style={{ color: '#00215B', fontSize: '24px', fontWeight: '800', margin: 0 }}>
              3
            </h2>
            <p style={{ color: '#6D84A8', fontSize: '12px', margin: 0 }}>
              (Lahore, Karachi, Islamabad)
            </p>
          </div>

          {/* Stat Card 3 */}
          <div style={cardStyle}>
            <div style={iconBoxStyle}>
              <Cpu size={22} color="#1066F8" />
            </div>
            <span style={{ color: '#6D84A8', fontSize: '13px', fontWeight: '600' }}>
              Machinery
            </span>
            <h2 style={{ color: '#00215B', fontSize: '20px', fontWeight: '800', margin: 0 }}>
              Latest Generation
            </h2>
            <p style={{ color: '#6D84A8', fontSize: '12px', margin: 0 }}>
              (MRI, CT, Robotic Surgery)
            </p>
          </div>

          {/* Stat Card 4 */}
          <div style={cardStyle}>
            <div style={iconBoxStyle}>
              <Globe size={22} color="#1066F8" />
            </div>
            <span style={{ color: '#6D84A8', fontSize: '13px', fontWeight: '600' }}>
              International Ranking
            </span>
            <h2 style={{ color: '#00215B', fontSize: '24px', fontWeight: '800', margin: 0 }}>
              Top 200
            </h2>
            <p style={{ color: '#6D84A8', fontSize: '12px', margin: 0 }}>
              (Global Healthcare Index)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalServices;