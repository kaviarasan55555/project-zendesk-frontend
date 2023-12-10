
import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    category: 'zenclass',
    title: '',
    description: '',
    availableTime: '9am to 7pm',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await onSubmit(formData);
      
      setSuccessMessage('Ticket was created successfully!');
      
      setFormData({ category: 'zenclass', title: '', description: '', availableTime: '9am to 7pm' });
    } catch (error) {
      console.error('Error submitting query:', error);
      
      setSuccessMessage('Ticket creation failed. Please try again.');
    }
  };

  return (

  
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Select Category</label>
        <select className="form-select" id="category" name="category" value={formData.category} onChange={handleChange} required>
          <option value="zenclass">Zenclass</option>
          <option value="placement">Placement</option>
          <option value="coordination">Coordination</option>
          <option value="prebootcamp">Pre Bootcamp</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Query Title</label>
        <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Query Description</label>
        <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="availableTime" className="form-label">Create Your Available Time</label>
        <input type="text" className="form-control" id="availableTime" name="availableTime" value={formData.availableTime} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </form>
  );
}

export default Form;

