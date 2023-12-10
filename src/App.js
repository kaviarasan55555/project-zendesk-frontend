import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Form from './components/Form';
import QueryList from './components/QueryList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);
  const [queries, setQueries] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const handleFormSubmit = async (formData) => {
    try {
      // the backend with react information
      await axios.post('http://localhost:5000/api/queries', { ...formData, userId: user._id });
      // Fetch updated queries after submission
      const response = await axios.get('http://localhost:5000/api/queries');
      setQueries(response.data);
      // success message
      setSuccessMessage('Ticket was created successfully!');
    } catch (error) {
      console.error('Error submitting query:', error);
      //error message 
      setSuccessMessage('Ticket creation failed. Please try again.');
    }
  };

  const handleLogin = async (credentials) => {
    try {
      // login request to the backend
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      setUser(response.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      // register request to the backend
      const response = await axios.post('http://localhost:5000/api/register', userData);
      setUser(response.data.user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container mt-5">
      <header>
        <h1>Zenclass Helpdesk</h1>
      </header>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <Form onSubmit={handleFormSubmit} />
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
          <h3>Queries</h3>
          <QueryList queries={queries} />
        </>
      ) : (
        <>
          <Login onLogin={handleLogin} />
          <hr />
          <Register onRegister={handleRegister} />
        </>
      )}
      <footer className="mt-5">
        <p>&copy; 2023 Zenclass Helpdesk</p>
      </footer>
    </div>
  );
}

export default App;

