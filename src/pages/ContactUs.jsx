import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Shukriya! Aap ka message moosool ho gaya hai.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div>
      <NavBar />
      <div style={{ padding: '40px 60px', backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              backgroundColor: '#EBF3FE',
              color: '#1066F8',
              fontSize: '12px',
              fontWeight: '700',
              padding: '4px 12px',
              borderRadius: '6px',
              display: 'inline-block',
              marginBottom: '10px',
              letterSpacing: '0.5px',
            }}
          >
            WE ARE HERE TO HELP
          </span>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#00215B', margin: '0 0 10px 0' }}>
            Get In Touch With Us
          </h1>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* Left Side: Contact Information Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 4px 12px rgba(0, 33, 91, 0.03)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#EBF3FE',
                  padding: '12px',
                  borderRadius: '12px',
                  color: '#1066F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00215B', margin: '0 0 4px 0' }}>
                  Emergency & Helpline
                </h3>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: '0 0 2px 0' }}>
                  +92 (51) 1234-567
                </p>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: 0 }}>
                  +92 (300) 9876-543
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 4px 12px rgba(0, 33, 91, 0.03)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#EBF3FE',
                  padding: '12px',
                  borderRadius: '12px',
                  color: '#1066F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00215B', margin: '0 0 4px 0' }}>
                  Email Address
                </h3>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: '0 0 2px 0' }}>
                  info@iqbalhospital.com
                </p>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: 0 }}>
                  appointments@iqbalhospital.com
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 4px 12px rgba(0, 33, 91, 0.03)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#EBF3FE',
                  padding: '12px',
                  borderRadius: '12px',
                  color: '#1066F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00215B', margin: '0 0 4px 0' }}>
                  Hospital Location
                </h3>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: 0, lineHeight: '1.5' }}>
                  Iqbal International Hospital, Main Boulevard, Sector F-8, Islamabad, Pakistan.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                boxShadow: '0 4px 12px rgba(0, 33, 91, 0.03)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#EBF3FE',
                  padding: '12px',
                  borderRadius: '12px',
                  color: '#1066F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Clock size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#00215B', margin: '0 0 4px 0' }}>
                  OPD & Emergency Hours
                </h3>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: '0 0 2px 0' }}>
                  Emergency Service: <strong>24/7 Available</strong>
                </p>
                <p style={{ fontSize: '13px', color: '#4A5568', margin: 0 }}>
                  OPD Timings: Mon - Sat (08:00 AM - 10:00 PM)
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact / Inquiry Form */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              padding: '32px',
              boxShadow: '0 10px 25px rgba(0, 33, 91, 0.04)',
            }}
          >
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#00215B', marginBottom: '8px' }}>
              Send Us A Message
            </h2>
            <p style={{ fontSize: '13px', color: '#4A5568', marginBottom: '24px' }}>
              Aap ka koi bhi sawal ho, niche form fill karke hum se rabta karein.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <User size={18} color="#1066F8" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
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

              {/* Email & Phone Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0300 1234567"
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

              {/* Subject */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Appointment Query / General Inquiry"
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

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#00215B', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #CBD5E1',
                    fontSize: '14px',
                    outline: 'none',
                    color: '#00215B',
                    resize: 'none',
                    fontFamily: 'inherit',
                  }}
                ></textarea>
              </div>

              {/* Send Button */}
              <button
                type="submit"
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
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
              >
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;