import React from 'react';
import { User, Stethoscope, PlusCircle, Image } from 'lucide-react';

const AddDoctorCard = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          maxWidth: '600px',
          width: '100%',
          padding: '32px',
          boxShadow: '0 10px 25px rgba(0, 33, 91, 0.05)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <PlusCircle size={24} color="#1066F8" />
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#00215B', margin: 0 }}>
            Add New Doctor
          </h2>
        </div>
        <p style={{ fontSize: '14px', color: '#4A5568', marginBottom: '24px' }}>
          Naye doctor ki profile hospital system me add karein.
        </p>

        <div>
          {/* Doctor Name */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
              Doctor Name
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <User size={18} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
              <input
                type="text"
                placeholder="e.g. Dr. Ali Ahmed"
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#00215B',
                }}
              />
            </div>
          </div>

          {/* Department / Category */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
              Specialty Category
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Stethoscope size={18} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
              <select
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#00215B',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <option value="Cardiac Surgery">Cardiac Surgery</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dentistry & Oral Surgery">Dentistry & Oral Surgery</option>
                <option value="Psychiatry & Psychotherapy">Psychiatry & Psychotherapy</option>
                <option value="General Surgery">General Surgery</option>
              </select>
            </div>
          </div>

          {/* Designation */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
              Designation
            </label>
            <input
              type="text"
              placeholder="e.g. Consultant Cardiologist"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid #CBD5E1',
                fontSize: '14px',
                outline: 'none',
                color: '#00215B',
              }}
            />
          </div>

          {/* Qualification & Experience Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                Qualification
              </label>
              <input
                type="text"
                placeholder="e.g. M.B.B.S | F.C.P.S"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#00215B',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                Experience (Years)
              </label>
              <input
                type="text"
                placeholder="e.g. 15 YEARS"
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#00215B',
                }}
              />
            </div>
          </div>

          {/* Image URL */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
              Image URL / Path
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Image size={18} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
              <input
                type="text"
                placeholder="https://via.placeholder.com/100"
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 40px',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  color: '#00215B',
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            style={{
              width: '100%',
              backgroundColor: '#1066F8',
              color: '#FFFFFF',
              border: 'none',
              padding: '12px',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
          >
            ADD DOCTOR TO SYSTEM
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctorCard;