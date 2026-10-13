import React from 'react';
import { ArrowRight } from 'lucide-react';

const surgeryData = [
  {
    category: 'General & Laparoscopic Surgery',
    doctors: [
      {
        id: 1,
        name: 'Prof. Dr. Shahid Hameed',
        designation: 'Consultant General & Laparoscopic Surgeon',
        qualification: 'M.B.B.S | F.R.C.S (UK)',
        experience: '24 YEARS',
        image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 2,
        name: 'Dr. Bilal Ahmed',
        designation: 'Specialist Laparoscopic Surgeon',
        qualification: 'M.B.B.S | F.C.P.S (General Surgery)',
        experience: '16 YEARS',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 3,
        name: 'Dr. Sana Zafar',
        designation: 'Consultant Bariatric & General Surgeon',
        qualification: 'M.B.B.S | F.C.P.S (Surgery)',
        experience: '10 YEARS',
        image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=300',
      },
    ],
  },
];

const SurgeryCard = ({ onSelectDoctor }) => {
  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#F8FAFC' }}>
      {surgeryData.map((service, index) => (
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
          {/* Category Title */}
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

          {/* Doctors Grid */}
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
                {/* Doctor Avatar */}
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

                {/* Doctor Info */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Experience Badge */}
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

                  {/* Doctor Name */}
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

                  {/* Designation & Qualifications */}
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

                  {/* View Profile Button Only */}
                  <div style={{ marginTop: 'auto' }}>
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

export default SurgeryCard;