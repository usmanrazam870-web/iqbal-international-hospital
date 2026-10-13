import React from 'react';
import { Clock, Calendar, Globe, DollarSign, Award, CheckCircle2 } from 'lucide-react';

const DoctorBioCard = ({ doctor, onBookAppointment }) => {
  // Detailed default/fallback doctor data
  const currentDoctor = {
    name: doctor?.name || 'Dr. Imran Saeed Ali',
    designation: doctor?.designation || 'Interventional Cardiology Specialist',
    qualification: doctor?.qualification || 'M.B.B.S | F.C.P.S (Cardiology) | Fellowship in Interventional Cardiology (USA)',
    experience: doctor?.experience || '18 YEARS',
    image: doctor?.image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300',
    bio: doctor?.bio || `${doctor?.name || 'Dr. Imran Saeed Ali'} is a highly distinguished specialist with extensive clinical experience. Expert in diagnosing, treating, and managing complex medical conditions with advanced clinical procedures at Iqbal International Hospital.`,
    opdTimings: doctor?.opdTimings || 'Mon - Sat: 04:00 PM - 08:00 PM',
    location: doctor?.location || 'OPD Clinic No. 12, First Floor',
    consultationFee: doctor?.consultationFee || 'PKR 2,500',
    languages: doctor?.languages || 'English, Urdu, Punjabi',
    specializations: doctor?.specializations || [
      'Angioplasty & Stenting',
      'Coronary Angiography',
      'Heart Failure Management',
      'Echocardiography (ECG/ECHO)',
      'Hypertension & Vascular Disease Treatment'
    ]
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          maxWidth: '680px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 10px 25px rgba(0, 33, 91, 0.05)',
        }}
      >
        {/* Doctor Header Info */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
          <img
            src={currentDoctor.image}
            alt={currentDoctor.name}
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #1066F8',
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <span
              style={{
                backgroundColor: '#EBF3FE',
                color: '#1066F8',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 10px',
                borderRadius: '6px',
                display: 'inline-block',
                marginBottom: '8px',
                letterSpacing: '0.5px',
              }}
            >
              EXPERIENCE : {currentDoctor.experience}
            </span>
            <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#00215B', margin: '0 0 4px 0' }}>
              {currentDoctor.name}
            </h1>
            <p style={{ fontSize: '14px', fontWeight: '600', color: '#1066F8', margin: '0 0 4px 0' }}>
              {currentDoctor.designation}
            </p>
            <p style={{ fontSize: '12px', color: '#4A5568', margin: 0, lineHeight: '1.4' }}>
              {currentDoctor.qualification}
            </p>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '20px 0' }} />

        {/* Doctor Overview */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#00215B', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Award size={18} color="#1066F8" /> Doctor Overview & Bio
          </h2>
          <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.6', margin: 0 }}>
            {currentDoctor.bio}
          </p>
        </div>

        {/* Key Info Grid (Fee, Languages, Timings, Location) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1066F8', marginBottom: '4px' }}>
              <Clock size={18} />
              <span style={{ fontWeight: '700', fontSize: '13px', color: '#00215B' }}>OPD Timings</span>
            </div>
            <p style={{ fontSize: '12px', color: '#4A5568', margin: 0 }}>{currentDoctor.opdTimings}</p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1066F8', marginBottom: '4px' }}>
              <Calendar size={18} />
              <span style={{ fontWeight: '700', fontSize: '13px', color: '#00215B' }}>Clinic Location</span>
            </div>
            <p style={{ fontSize: '12px', color: '#4A5568', margin: 0 }}>{currentDoctor.location}</p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1066F8', marginBottom: '4px' }}>
              <DollarSign size={18} />
              <span style={{ fontWeight: '700', fontSize: '13px', color: '#00215B' }}>Consultation Fee</span>
            </div>
            <p style={{ fontSize: '12px', color: '#4A5568', margin: 0, fontWeight: '700' }}>{currentDoctor.consultationFee}</p>
          </div>

          <div style={{ backgroundColor: '#F8FAFC', padding: '14px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1066F8', marginBottom: '4px' }}>
              <Globe size={18} />
              <span style={{ fontWeight: '700', fontSize: '13px', color: '#00215B' }}>Languages Spoken</span>
            </div>
            <p style={{ fontSize: '12px', color: '#4A5568', margin: 0 }}>{currentDoctor.languages}</p>
          </div>
        </div>

        {/* Clinical Services & Specializations */}
        <div style={{ marginBottom: '28px' }}>
          <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#00215B', marginBottom: '12px' }}>
            Key Specializations & Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
            {currentDoctor.specializations.map((spec, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#4A5568' }}>
                <CheckCircle2 size={16} color="#1066F8" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div>
          <button
            type="button"
            onClick={onBookAppointment}
            style={{
              width: '100%',
              backgroundColor: '#1066F8',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
          >
            PROCEED TO BOOKING
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorBioCard;