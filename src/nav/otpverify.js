import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState(null);

  async function sendOtp() {
    try {
      // Make a request to your backend API to send OTP
      // Example: await fetch('/api/send-otp', { method: 'POST', body: { phoneNumber } });
      setIsOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Error sending OTP. Please try again.');
    }
  }

  async function verifyOtp() {
    try {
      // Make a request to your backend API to verify OTP
      // Example: await fetch('/api/verify-otp', { method: 'POST', body: { phoneNumber, otp } });
      // Handle success/failure accordingly
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Error verifying OTP. Please try again.');
    }
  }

  return (
    <div>
      <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={sendOtp}>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          {isOtpSent && (
            <div className="form-group">
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          )}

          {!isOtpSent ? (
            <button type="submit" className="send-otp-button">
              Send OTP
            </button>
          ) : (
            <button type="button" onClick={verifyOtp} className="verify-otp-button">
              Verify OTP
            </button>
          )}

          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
