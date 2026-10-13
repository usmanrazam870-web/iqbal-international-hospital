import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import CardiologyCard from '../components/Cards/CardiologyCard';
import DentistCard from '../components/Cards/DentistCard';
import PsychotherapistCard from '../components/Cards/PsychotherapistCard';
import SurgeryCard from '../components/Cards/SurgeryCard';
import DoctorBioCard from '../components/Cards/DoctorBioCard';
import PatientDetailsCard from '../components/Cards/PatientDetailsCard';

const Patient = () => {
  // Step State: 1 = Doctor List, 2 = Doctor Bio, 3 = Patient Details Form
  const [step, setStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Jab Doctor List me Book Appointment click ho
  const handleSelectDoctor = (doctorData) => {
    setSelectedDoctor(doctorData);
    setStep(2); // Step 2 (Bio Detail) par le jao
  };

  // Jab Bio Card me Book Appointment click ho
  const handleProceedToBooking = () => {
    setStep(3); // Step 3 (Patient Form) par le jao
  };

  // Back Button Handler (Previous step ya Home navigation)
  const handleBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 2) {
      setStep(1);
    } else {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = '/';
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '30px 40px', paddingBottom: '40px' }}>
      
      {/* Top Back Button (Hamesha Top Par Baaki Pages Ki Tarah) */}
      <div style={{ marginBottom: '20px' }}>
        <button
          type="button"
          onClick={handleBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFFFFF',
            color: '#00215B',
            border: '1px solid #CBD5E1',
            padding: '8px 16px',
            borderRadius: '10px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0, 33, 91, 0.03)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#EBF3FE';
            e.currentTarget.style.borderColor = '#1066F8';
            e.currentTarget.style.color = '#1066F8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#CBD5E1';
            e.currentTarget.style.color = '#00215B';
          }}
        >
          <ArrowLeft size={18} />
          <span>BACK</span>
        </button>
      </div>

      {/* Top Header Section */}
      <div
        style={{
          textAlign: 'center',
          paddingBottom: '20px',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <span
          style={{
            backgroundColor: '#EBF3FE',
            color: '#1066F8',
            fontSize: '12px',
            fontWeight: '700',
            padding: '4px 14px',
            borderRadius: '6px',
            display: 'inline-block',
            marginBottom: '12px',
            letterSpacing: '0.5px',
          }}
        >
          PATIENT PORTAL & MEDICAL DIRECTORY
        </span>
        <h1
          style={{
            fontSize: '32px',
            fontWeight: '800',
            color: '#00215B',
            margin: '0 0 10px 0',
            lineHeight: '1.2',
          }}
        >
          {step === 1 && 'Our Specialist Doctors & Patient Services'}
          {step === 2 && 'Doctor Profile & Overview'}
          {step === 3 && 'Book Your Appointment'}
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: '#4A5568',
            margin: 0,
          }}
        >
          {step === 1 && 'Apne pasandida doctor ko select karein aur appointment book karein.'}
          {step === 2 && 'Doctor ki complete detail check karein aur appointment proceed karein.'}
          {step === 3 && 'Apni details enter karke appointment confirm karein.'}
        </p>
      </div>

      {/* STEP 1: Tamam Doctor Categories & Cards */}
      {step === 1 && (
        <div>
          <CardiologyCard onSelectDoctor={handleSelectDoctor} />
          <DentistCard onSelectDoctor={handleSelectDoctor} />
          <PsychotherapistCard onSelectDoctor={handleSelectDoctor} />
          <SurgeryCard onSelectDoctor={handleSelectDoctor} />
        </div>
      )}

      {/* STEP 2: Selected Doctor Bio Card */}
      {step === 2 && (
        <DoctorBioCard
          doctor={selectedDoctor}
          onBookAppointment={handleProceedToBooking}
        />
      )}

      {/* STEP 3: Patient Appointment Details Form */}
      {step === 3 && (
        <PatientDetailsCard doctor={selectedDoctor} isDoctorView={false} />
      )}
    </div>
  );
};

export default Patient;