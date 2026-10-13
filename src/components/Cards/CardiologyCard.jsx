import React from 'react';
import { ArrowRight } from 'lucide-react';

const cardiologyCard = [
  {
    category: 'Cardiology',
    doctors: [
      {
        id: 4,
        name: 'Dr. Akhter Ali Bandeesha',
        designation: 'Consultant Cardiologist',
        qualification: 'M.B.B.S | F.C.P.S (Cardiology)',
        experience: '25 YEARS',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 5,
        name: 'Dr. Imran Saeed Ali',
        designation: 'Interventional Cardiology Specialist',
        qualification: 'M.B.B.S | F.C.P.S (Cardiology)',
        experience: '18 YEARS',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 6,
        name: 'Dr. Khurram Abbas',
        designation: 'Consultant Cardiologist',
        qualification: 'M.B.B.S | M.D (Cardiology)',
        experience: '15 YEARS',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
      },
    ],
  },
];

const CardiologyCard = ({ onSelectDoctor }) => {
  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#F8FAFC' }}>
      {cardiologyCard.map((service, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            padding: '24px 32px',
            marginBottom: '32px',
            boxShadow: '0 4px 12px rgba(0, 33, 91, 0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '28px',
            }}
          >
            <h1
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#00215B',
                margin: 0,
              }}
            >
              {service.category}
            </h1>
            <ArrowRight size={22} color="#1066F8" style={{ marginTop: '2px' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}
          >
            {service.doctors.map((doctor) => (
              <div
                key={doctor.id}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  borderRight: '1px solid #EDF2F7',
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #1066F8',
                    flexShrink: 0,
                  }}
                />

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      backgroundColor: '#EBF3FE',
                      color: '#1066F8',
                      fontSize: '10px',
                      fontWeight: '700',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      marginBottom: '6px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    EXPERIENCE : {doctor.experience}
                  </span>

                  <h2
                    style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#00215B',
                      margin: '0 0 4px 0',
                      lineHeight: '1.3',
                    }}
                  >
                    {doctor.name}
                  </h2>

                  <p
                    style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: '#4A5568',
                      margin: '0 0 2px 0',
                    }}
                  >
                    {doctor.designation}
                  </p>
                  <p
                    style={{
                      fontSize: '11px',
                      color: '#718096',
                      margin: '0 0 14px 0',
                      lineHeight: '1.4',
                    }}
                  >
                    {doctor.qualification}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
                    <button
                      type="button"
                      onClick={() => onSelectDoctor && onSelectDoctor(doctor)}
                      style={{
                        width: '100%',
                        backgroundColor: '#00215B',
                        color: '#FFFFFF',
                        border: 'none',
                        padding: '8px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
                    >
                      VIEW PROFILE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardiologyCard;