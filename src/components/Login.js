// LoginForm.js
import React from 'react';
import './Login.css';

const LoginForm = () => {

  return (
    <div className="wrapper">
      <form action="#">
        <h2>Login</h2>
        <div className="input-field">
          <input type="text" required />
          <label>Enter your username</label>
        </div>
        <div className="input-field">
          <input type="password" required />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <button type="button" className="link-button">Forgot password?</button>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>Don't have an account? <button type="button" className="link-button">Register</button></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
