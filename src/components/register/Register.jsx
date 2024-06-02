import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../register/register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    course: '',
    year: '',
    track: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 className='heading2'>Registration Form</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Current Course of Study</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year of Study</label>
          <input
            type="number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="track">Desired Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">select course</option>
            <option value="course">Cyber Security</option>
            <option value="course">UI/UX design</option>
            <option value="course">Web development</option>
            <option value="course">Mobile apps development </option>
            <option value="course">Cloud engineering</option>
            <option value="course">Power Platform</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
