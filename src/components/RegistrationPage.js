// src/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationPage.css';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your registration logic here
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Gender:', gender);
  };

  return (
    <div className="container">
      <div className="title">Registration</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="gender-details">
            <input
              type="radio"
              name="gender"
              id="dot-1"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="radio"
              name="gender"
              id="dot-2"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="radio"
              name="gender"
              id="dot-3"
              value="Prefer not to say"
              checked={gender === 'Prefer not to say'}
              onChange={(e) => setGender(e.target.value)}
            />
            <span className="gender-title">Gender</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="gender">Male</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="gender">Female</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
