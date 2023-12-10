import React, { useState } from 'react';

function Register({ onRegister }) {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onRegister(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default Register;
