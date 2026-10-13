import React from 'react';
import { Trash2, Search, UserX } from 'lucide-react';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Farid Ullah Khan',
    designation: 'Consultant Cardiac Surgeon',
    category: 'Cardiac Surgery',
    experience: '22 YEARS',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Dr. Akhter Ali Bandeesha',
    designation: 'Consultant Cardiologist',
    category: 'Cardiology',
    experience: '25 YEARS',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Dr. Amna Riaz',
    designation: 'Consultant Dentist',
    category: 'Dentistry',
    experience: '11 YEARS',
    image: 'https://via.placeholder.com/100',
  },
];

const RemoveDoctorCard = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          maxWidth: '650px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 10px 25px rgba(0, 33, 91, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <UserX size={24} color="#DC2626" />
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#00215B', margin: 0 }}>
            Remove Doctor
          </h2>
        </div>
        <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '20px' }}>
          Hospital directory se kisi doctor ko remove karne ke liye search karein aur Remove click karein.
        </p>

        {/* Search Input */}
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <Search size={18} color="#1066F8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
          <input
            type="text"
            placeholder="Search by doctor name or specialty..."
            style={{
              width: '100%',
              padding: '10px 12px 10px 40px',
              borderRadius: '10px',
              border: '1px solid #CBD5E1',
              fontSize: '14px',
              outline: 'none',
              color: '#00215B',
            }}
          />
        </div>

        {/* Static Doctors List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '12px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <img
                  src={doc.image}
                  alt={doc.name}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #1066F8',
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#00215B', margin: '0 0 2px 0' }}>
                    {doc.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#1066F8', margin: '0 0 2px 0', fontWeight: '600' }}>
                    {doc.category} - {doc.designation}
                  </p>
                  <span style={{ fontSize: '10px', color: '#718096', fontWeight: '700' }}>
                    EXP: {doc.experience}
                  </span>
                </div>
              </div>

              {/* Remove Button */}
              <button
                type="button"
                style={{
                  backgroundColor: '#FEE2E2',
                  color: '#DC2626',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#DC2626';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FEE2E2';
                  e.currentTarget.style.color = '#DC2626';
                }}
              >
                <Trash2 size={16} /> Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RemoveDoctorCard;