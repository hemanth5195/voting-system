
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LogIn.css';

function LogIn() {
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [securityPin, setSecurityPin] = useState('');
  const [voterId, setVoterId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  async function submit(e) {
    e.preventDefault();

    if (type === 'admin') {
      if (!phoneNumber || !securityPin) {
        setError('Please fill in all fields');
        return;
      }
      navigate('/Onlinevoting');
    } else if (type === 'voter') {
      if (!voterId || !password) {
        setError('Please fill in all fields');
        return;
      }
      navigate('/Voting');
      // Handle voter login logic
    }else {
      setError('Please select a user type');
    }
  }

  return (
    <div>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="type">Select User Type:</label>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select</option>
              <option value="admin">Admin</option>
              <option value="voter">Voter</option>
            </select>
          </div>
          {type === 'admin' && (
            <div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="securityPin">Security Pin:</label>
                <input
                  type="password"
                  id="securityPin"
                  value={securityPin}
                  onChange={(e) => setSecurityPin(e.target.value)}
                />
              </div>
            </div>
          )}
          {type === 'voter' && (
            <div>
              <div className="form-group">
                <label htmlFor="voterId">Voter ID:</label>
                <input
                  type="text"
                  id="voterId"
                  value={voterId}
                  onChange={(e) => setVoterId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="ac">
            <button type="submit" className="login-button">Sign In</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
      <footer className="footer">
        <div>
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 section2">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 app-icons">
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 copy-info"> 
                <h6 className='version'>Version: Coming Soon</h6>
                <h6 className='last'>Available Soon </h6>
                <h6 className="copyright">© Copyright 2026 VoteForChange. All Rights Reserved.</h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LogIn;