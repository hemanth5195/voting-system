import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [voterName, setVoterName] = useState('');
  const [voterId, setVoterId] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [voterOtp, setVoterOtp] = useState('');

  const sendOtp = async () => {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP');
      }

      setOtpSent(true);
    } catch (error) {
      setError('Error sending OTP');
      console.error('Error sending OTP:', error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          name,
          securityCode,
          voterName,
          voterId,
          email,
          phone,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // Redirect to login page after successful signup
      window.location.href = '/login'; // Change '/login' to your actual login page URL
    } catch (error) {
      setError('Error during signup');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div>
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="type">Select User Type:</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select</option>
              <option value="voter">Voter</option>
            </select>
          </div>

          {/* Voter Form Fields */}
          {type === 'voter' && (
            <div>
              {/* Display voter-specific fields */}
              <div className="form-group">
                <label htmlFor="voterName">Voter's Name:</label>
                <input
                  type="text"
                  id="voterName"
                  placeholder="Enter Voter's Name"
                  value={voterName}
                  onChange={(e) => setVoterName(e.target.value)}
                />
              </div>
              {/* Other input fields */}
              <div className="form-group">
                <label htmlFor="voterId">Voter ID:</label>
                <input
                  type="text"
                  id="voterId"
                  placeholder="Enter Voter ID"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter the Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter the Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reenterPassword">Re-enter Password:</label>
                <input
                  type="password"
                  id="reenterPassword"
                  placeholder="Re-enter the Password"
                  value={reenterPassword}
                  onChange={(e) => setReenterPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter the Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

            </div>
          )}
          {/* Submit Button */}
          <button type="submit">Create Account</button>

          {/* Display Error Message */}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
