import React, { useState } from 'react';
import { User, Phone, Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const PatientDetailsCard = ({ patientData, isDoctorView = false, onStatusChange, onSubmitPatientDetails }) => {
  // Form Input States
  const [name, setName] = useState(patientData?.name || '');
  const [phone, setPhone] = useState(patientData?.phone || '');
  const [gender, setGender] = useState(patientData?.gender || 'Male');
  const [date, setDate] = useState(patientData?.date || '');
  
  // Submitted State (Jab tak Book click nahi hoga, badge show nahi hoga)
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const status = patientData?.status || 'pending';

  // Patient Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Click par Status Badge visible karne ke liye

    if (onSubmitPatientDetails) {
      onSubmitPatientDetails({ name, phone, gender, date, status: 'pending' });
    }
  };

  const renderStatusBadge = () => {
    // Agar patient view ho aur abhi tak book na kiya ho toh badge mat dikhao
    if (!isDoctorView && !isSubmitted) {
      return null;
    }

    switch (status) {
      case 'pending':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FDE68A',
              color: '#B45309',
              border: '1px solid #F59E0B',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '13px',
              marginTop: '16px',
            }}
          >
            <Clock size={16} /> Status: PENDING (Under Review)
          </div>
        );
      case 'approved':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#A7F3D0',
              color: '#047857',
              border: '1px solid #10B981',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '13px',
              marginTop: '16px',
            }}
          >
            <CheckCircle size={16} /> Status: APPROVED (Confirmed)
          </div>
        );
      case 'cancelled':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#FECACA',
              color: '#B91C1C',
              border: '1px solid #EF4444',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '13px',
              marginTop: '16px',
            }}
          >
            <XCircle size={16} /> Status: CANCELLED
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        border: '1px solid #E2E8F0',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0, 33, 91, 0.04)',
      }}
    >
      <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#00215B', marginBottom: '16px' }}>
        Patient Details
      </h3>

      <form onSubmit={handleSubmit}>
        {/* Patient Name */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#00215B', marginBottom: '4px' }}>
            Patient Name *
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <User size={16} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="text"
              required
              disabled={isDoctorView}
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#00215B',
                backgroundColor: isDoctorView ? '#F1F5F9' : '#FFFFFF',
                cursor: isDoctorView ? 'not-allowed' : 'text',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#00215B', marginBottom: '4px' }}>
            Phone Number *
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Phone size={16} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="tel"
              required
              disabled={isDoctorView}
              placeholder="0300 1234567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#00215B',
                backgroundColor: isDoctorView ? '#F1F5F9' : '#FFFFFF',
                cursor: isDoctorView ? 'not-allowed' : 'text',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Gender Select */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#00215B', marginBottom: '4px' }}>
            Sex / Gender
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Male', 'Female', 'Other'].map((item) => (
              <button
                type="button"
                key={item}
                disabled={isDoctorView}
                onClick={() => setGender(item)}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: gender === item ? '2px solid #1066F8' : '1px solid #CBD5E1',
                  backgroundColor: gender === item ? '#EBF3FE' : '#FFFFFF',
                  color: gender === item ? '#1066F8' : isDoctorView ? '#94A3B8' : '#4A5568',
                  fontWeight: '700',
                  fontSize: '12px',
                  cursor: isDoctorView ? 'not-allowed' : 'pointer',
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Appointment Date */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#00215B', marginBottom: '4px' }}>
            Appointment Date *
          </label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Calendar size={16} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
            <input
              type="date"
              required
              disabled={isDoctorView}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '13px',
                color: '#00215B',
                backgroundColor: isDoctorView ? '#F1F5F9' : '#FFFFFF',
                cursor: isDoctorView ? 'not-allowed' : 'text',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Actions Logic */}
        {isDoctorView ? (
          /* Doctor View: Approve / Cancel Buttons */
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <button
              type="button"
              onClick={() => onStatusChange && onStatusChange('approved')}
              style={{
                flex: 1,
                backgroundColor: '#D1FAE5',
                color: '#065F46',
                border: '1px solid #A7F3D0',
                padding: '10px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <CheckCircle size={16} /> APPROVE
            </button>

            <button
              type="button"
              onClick={() => onStatusChange && onStatusChange('cancelled')}
              style={{
                flex: 1,
                backgroundColor: '#FEE2E2',
                color: '#991B1B',
                border: '1px solid #FCA5A5',
                padding: '10px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <XCircle size={16} /> CANCEL
            </button>
          </div>
        ) : (
          /* Patient View: Submit/Book Button */
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#1066F8',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              marginTop: '10px',
            }}
          >
            BOOK APPOINTMENT
          </button>
        )}
      </form>

      {renderStatusBadge()}
    </div>
  );
};

export default PatientDetailsCard;