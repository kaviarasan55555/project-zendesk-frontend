import React, { useState } from 'react';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  );
}

export default Login;
