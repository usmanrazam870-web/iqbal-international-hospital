import React, { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, Users, ArrowLeft } from 'lucide-react';
import PatientDetailsCard from '../components/Cards/PatientDetailsCard';

// Dummy initial appointments data
const initialAppointments = [
  { id: 1, name: 'Muhammad Ali', phone: '0300 1234567', gender: 'Male', date: '2026-10-20', status: 'pending' },
  { id: 2, name: 'Sara Khan', phone: '0321 9876543', gender: 'Female', date: '2026-10-21', status: 'pending' },
  { id: 3, name: 'Usman Ahmed', phone: '0333 4567890', gender: 'Male', date: '2026-10-22', status: 'pending' },
  { id: 4, name: 'Ayesha Raza', phone: '0312 3456789', gender: 'Female', date: '2026-10-18', status: 'approved' },
  { id: 5, name: 'Tariq Mehmood', phone: '0301 7654321', gender: 'Male', date: '2026-10-19', status: 'cancelled' },
];

const Doctor = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pending' | 'approved' | 'cancelled'
  const [searchQuery, setSearchQuery] = useState('');

  // Back button handler function
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  // Status Change Handler (Approve / Cancel action)
  const handleStatusChange = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  // Live Count Calculations
  const counts = {
    all: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    approved: appointments.filter((a) => a.status === 'approved').length,
    cancelled: appointments.filter((a) => a.status === 'cancelled').length,
  };

  // Filtered Appointments based on Tab & Search Query
  const filteredAppointments = appointments.filter((item) => {
    const matchesTab = activeTab === 'all' || item.status === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      item.id.toString().includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', padding: '30px 40px' }}>
      
      {/* Back Button Added at the Top */}
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

      {/* 1. Top Navigation Filter Tabs (Jesa Image Me Hai) */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '10px 16px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 12px rgba(0, 33, 91, 0.03)',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        {/* All Requests Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('all')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: activeTab === 'all' ? '#EBF3FE' : 'transparent',
            color: activeTab === 'all' ? '#00215B' : '#64748B',
            fontWeight: activeTab === 'all' ? '800' : '600',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          <span>All Requests</span>
          <span
            style={{
              backgroundColor: '#00215B',
              color: '#FFFFFF',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
            }}
          >
            {counts.all}
          </span>
        </button>

        {/* Pending Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('pending')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: activeTab === 'pending' ? '#FEF3C7' : 'transparent',
            color: activeTab === 'pending' ? '#B45309' : '#64748B',
            fontWeight: activeTab === 'pending' ? '800' : '600',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          <Clock size={16} color={activeTab === 'pending' ? '#B45309' : '#64748B'} />
          <span>Pending</span>
          <span
            style={{
              backgroundColor: '#FDE68A',
              color: '#B45309',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
            }}
          >
            {counts.pending}
          </span>
        </button>

        {/* Approved Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('approved')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: activeTab === 'approved' ? '#D1FAE5' : 'transparent',
            color: activeTab === 'approved' ? '#047857' : '#64748B',
            fontWeight: activeTab === 'approved' ? '800' : '600',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          <CheckCircle size={16} color={activeTab === 'approved' ? '#047857' : '#64748B'} />
          <span>Approved</span>
          <span
            style={{
              backgroundColor: '#A7F3D0',
              color: '#047857',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
            }}
          >
            {counts.approved}
          </span>
        </button>

        {/* Cancelled Tab */}
        <button
          type="button"
          onClick={() => setActiveTab('cancelled')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: activeTab === 'cancelled' ? '#FEE2E2' : 'transparent',
            color: activeTab === 'cancelled' ? '#B91C1C' : '#64748B',
            fontWeight: activeTab === 'cancelled' ? '800' : '600',
            fontSize: '14px',
            cursor: 'pointer',
          }}
        >
          <XCircle size={16} color={activeTab === 'cancelled' ? '#B91C1C' : '#64748B'} />
          <span>Cancelled</span>
          <span
            style={{
              backgroundColor: '#FECACA',
              color: '#B91C1C',
              borderRadius: '50%',
              width: '22px',
              height: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
            }}
          >
            {counts.cancelled}
          </span>
        </button>
      </div>

      {/* 2. Search & Info Counter Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <div style={{ position: 'relative', width: '360px' }}>
          <Search size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '11px' }} />
          <input
            type="text"
            placeholder="Search by Patient Name, Phone or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px 10px 40px',
              borderRadius: '10px',
              border: '1px solid #CBD5E1',
              fontSize: '13px',
              outline: 'none',
              backgroundColor: '#FFFFFF',
            }}
          />
        </div>

        <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>
          Showing <strong style={{ color: '#00215B' }}>{filteredAppointments.length}</strong> appointments
        </span>
      </div>

      {/* 3. Patient Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((patient) => (
            <PatientDetailsCard
              key={patient.id}
              patientData={patient}
              isDoctorView={true}
              onStatusChange={(newStatus) => handleStatusChange(patient.id, newStatus)}
            />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', backgroundColor: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '15px', color: '#64748B', margin: 0, fontWeight: '600' }}>
              No appointment request.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctor;