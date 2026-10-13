import React, { useState } from 'react';
import { PlusCircle, UserX, Bell, Mail, X } from 'lucide-react';
import AddDoctorCard from '../components/Cards/AddDoctorCard';
import RemoveDoctorCard from '../components/Cards/RemoveDoctorCard';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('add'); // 'add' | 'remove'
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Ali Raza',
      email: 'ali@example.com',
      phone: '03001234567',
      subject: 'Appointment Query',
      message: 'Mujhe Dr. Farooq Khan ki appointment timings maloom karni hain.',
      date: '12 Oct 2026'
    }
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div style={{ padding: '40px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header & Notification Area */}
      <div style={{ maxWidth: '800px', margin: '0 auto 30px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#00215B', margin: 0 }}>Admin Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#4A5568', margin: '4px 0 0 0' }}>Doctor management aur contact inquiries handle karein.</p>
        </div>

        {/* Notification Button */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              position: 'relative',
              backgroundColor: '#FFFFFF',
              border: '1px solid #CBD5E1',
              padding: '10px',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,33,91,0.05)'
            }}
          >
            <Bell size={22} color="#00215B" />
            {messages.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: '#EF4444',
                color: '#FFF',
                fontSize: '11px',
                fontWeight: '800',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {messages.length}
              </span>
            )}
          </button>

          {/* Notifications Dropdown List */}
          {showNotifications && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '50px',
              width: '320px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 25px rgba(0,33,91,0.12)',
              zIndex: 1000,
              padding: '16px'
            }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#00215B', fontWeight: '700' }}>Contact Us Messages</h4>
              {messages.length === 0 ? (
                <p style={{ fontSize: '13px', color: '#718096', margin: 0 }}>Koi naya message nahi hai.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {messages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => {
                        setSelectedMessage(msg);
                        setShowNotifications(false);
                      }}
                      style={{
                        textAlign: 'left',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        padding: '10px',
                        cursor: 'pointer',
                        width: '100%'
                      }}
                    >
                      <div style={{ fontWeight: '700', fontSize: '13px', color: '#00215B' }}>{msg.name}</div>
                      <div style={{ fontSize: '12px', color: '#1066F8' }}>{msg.subject}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Admin Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
        <button
          type="button"
          onClick={() => setActiveTab('add')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: activeTab === 'add' ? '#1066F8' : '#FFFFFF',
            color: activeTab === 'add' ? '#FFFFFF' : '#00215B',
            border: activeTab === 'add' ? 'none' : '1px solid #CBD5E1',
            padding: '12px 24px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 33, 91, 0.05)',
            transition: 'all 0.2s ease'
          }}
        >
          <PlusCircle size={20} /> Add Doctor
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('remove')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: activeTab === 'remove' ? '#EF4444' : '#FFFFFF',
            color: activeTab === 'remove' ? '#FFFFFF' : '#00215B',
            border: activeTab === 'remove' ? 'none' : '1px solid #CBD5E1',
            padding: '12px 24px',
            borderRadius: '10px',
            fontSize: '15px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 33, 91, 0.05)',
            transition: 'all 0.2s ease'
          }}
        >
          <UserX size={20} /> Remove Doctor
        </button>
      </div>

      {/* Dynamic Content Display */}
      <div>
        {activeTab === 'add' && <AddDoctorCard />}
        {activeTab === 'remove' && <RemoveDoctorCard />}
      </div>

      {/* Full Message View Modal */}
      {selectedMessage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 33, 91, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2000
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '28px',
            maxWidth: '500px',
            width: '90%',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            position: 'relative'
          }}>
            <button
              onClick={() => setSelectedMessage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={20} color="#718096" />
            </button>
            <h3 style={{ margin: '0 0 16px 0', color: '#00215B', fontSize: '18px', fontWeight: '800' }}>Message Details</h3>
            <div style={{ fontSize: '14px', color: '#4A5568', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><strong>Name:</strong> {selectedMessage.name}</div>
              <div><strong>Email:</strong> {selectedMessage.email}</div>
              <div><strong>Phone:</strong> {selectedMessage.phone}</div>
              <div><strong>Subject:</strong> {selectedMessage.subject}</div>
              <div style={{
                marginTop: '8px',
                padding: '12px',
                backgroundColor: '#F8FAFC',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                color: '#00215B',
                lineHeight: '1.5'
              }}>
                <strong>Message:</strong><br />
                {selectedMessage.message}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;