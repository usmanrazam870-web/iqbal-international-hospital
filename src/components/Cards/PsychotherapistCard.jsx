import React from 'react';
import { ArrowRight } from 'lucide-react';

const psychotherapistData = [
  {
    category: 'Psychiatry & Psychotherapy',
    doctors: [
      {
        id: 1,
        name: 'Dr. Farooq Khan',
        designation: 'Consultant Psychiatrist & Psychotherapist',
        qualification: 'M.B.B.S | F.C.P.S (Psychiatry)',
        experience: '14 YEARS',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 2,
        name: 'Ms. Ayesha Malik',
        designation: 'Senior Clinical Psychologist',
        qualification: 'M.Sc | M.Phil (Clinical Psychology)',
        experience: '8 YEARS',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
      },
      {
        id: 3,
        name: 'Dr. Usman Tariq',
        designation: 'Consultant Neuro-Psychiatrist',
        qualification: 'M.B.B.S | Dip. Psych (London)',
        experience: '12 YEARS',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=300',
      },
    ],
  },
];

const PsychotherapistCard = ({ onSelectDoctor }) => {
  return (
    <div style={{ padding: '40px 60px', backgroundColor: '#F8FAFC' }}>
      {psychotherapistData.map((service, index) => (
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

export default PsychotherapistCard;