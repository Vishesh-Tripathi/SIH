import Navbar from '@/Components/Navbar/Navbar';
import React, { useState } from 'react';
import { FaUser, FaCity, FaPhone, FaMapMarkerAlt, FaTag } from 'react-icons/fa';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    state: '',
    category: ''
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
    // Handle form submission logic
    console.log('Form Data:', formData);
  };

  return (
    <>
    <Navbar />
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }} // Replace with your image path
      />
      
      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

      {/* Form Container */}
      <div className="relative w-full max-w-lg bg-white bg-opacity-80 shadow-lg rounded-lg p-8 z-10">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaUser className="text-green-600 mr-3" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaCity className="text-green-600 mr-3" />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaPhone className="text-green-600 mr-3" />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone No"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaMapMarkerAlt className="text-green-600 mr-3" />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaTag className="text-green-600 mr-3" />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Category</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Dals">Dals</option>
              <option value="Spices">Spices</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already  have an account?{' '}
              <a href="/login" className="text-green-600 font-medium hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignupPage;
