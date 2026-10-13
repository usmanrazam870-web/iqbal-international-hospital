import React, { useState } from 'react';
import imageLogo from '../assets/favicon.png';
import { User, Stethoscope, Settings, Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const Login = () => {
  // --- States ---
  const [activeRole, setActiveRole] = useState('Patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // --- Back Button Handler ---
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // --- Submit Handler with Role Passwords ---
  const handleSubmit = (e) => {
    e.preventDefault();

    if (activeRole === 'Patient') {
      if (password === 'patient123') {
        navigate('/patient');
      } else {
        alert('Incorrect Patient Password! Use: patient123');
      }
    } else if (activeRole === 'Doctor') {
      if (password === 'doctor123') {
        navigate('/doctor');
      } else {
        alert('Incorrect Doctor Password! Use: doctor123');
      }
    } else if (activeRole === 'Admin') {
      if (password === 'admin123') {
        navigate('/admin');
      } else {
        alert('Incorrect Admin Password! Use: admin123');
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#F4F7FE',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        position: 'relative',
      }}
    >
      {/* Top Back Button Bar */}
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
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

      {/* Main Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '32px 28px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
          border: '1px solid #E2E8F0',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <img style={{ height: '55px', objectFit: 'contain' }} src={imageLogo} alt="Logo" />
        </div>

        <h1 style={{ color: '#00215B', fontSize: '22px', fontWeight: '700', margin: '0 0 6px 0' }}>
          Login to Your Account
        </h1>
        <p style={{ color: '#6D84A8', fontSize: '13px', margin: '0 0 20px 0' }}>
          Access your dashboard, appointments and more.
        </p>

        {/* Role Selector Tabs */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F8FAFC',
            padding: '4px',
            borderRadius: '10px',
            gap: '4px',
            marginBottom: '20px',
            border: '1px solid #E2E8F0',
          }}
        >
          {['Patient', 'Doctor', 'Admin'].map((role) => {
            const isActive = activeRole === role;
            const Icon = role === 'Patient' ? User : role === 'Doctor' ? Stethoscope : Settings;

            return (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '8px 0',
                  borderRadius: '7px',
                  border: 'none',
                  backgroundColor: isActive ? '#1066F8' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#6D84A8',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={16} />
                {role}
              </button>
            );
          })}
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
          {/* Email Input */}
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                color: '#00215B',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '6px',
              }}
            >
              Email Address
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Mail style={{ position: 'absolute', left: '12px', color: '#A0AEC0' }} size={16} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 38px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  fontSize: '13px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                color: '#00215B',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '6px',
              }}
            >
              Password
            </label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Lock style={{ position: 'absolute', left: '12px', color: '#A0AEC0' }} size={16} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '10px 38px 10px 38px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  fontSize: '13px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {/* Eye Toggle Icon */}
              {showPassword ? (
                <Eye
                  onClick={() => setShowPassword(false)}
                  style={{ position: 'absolute', right: '12px', color: '#A0AEC0', cursor: 'pointer' }}
                  size={16}
                />
              ) : (
                <EyeOff
                  onClick={() => setShowPassword(true)}
                  style={{ position: 'absolute', right: '12px', color: '#A0AEC0', cursor: 'pointer' }}
                  size={16}
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#1066F8',
              color: '#FFFFFF',
              padding: '12px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00215B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1066F8')}
          >
            <ArrowRight size={16} /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;