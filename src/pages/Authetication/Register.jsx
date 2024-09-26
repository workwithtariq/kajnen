import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRedirectIfAuthenticated } from '../../hooks/useRedirectIfAuthenticated'; // Import new hook

const Register = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState({ district: '', upazila: '', union: '', village: '' });
  
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if user is already authenticated
  useRedirectIfAuthenticated();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, phone, email, password, picture, address };
    const result = await registerUser(userData);

    if (result.success) {
      toast.success("Registration successful!");
      navigate('/dashboard');
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md h-full max-h-[90%] overflow-y-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Picture Input */}
          <div className="flex flex-col">
            <label className="text-gray-700">Profile Picture URL</label>
            <input
              type="text"
              placeholder="Enter picture URL"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          {/* Address Inputs */}
          <div className="flex flex-col">
            <label className="text-gray-700">Address</label>
            <input
              type="text"
              placeholder="District"
              value={address.district}
              onChange={(e) => setAddress({ ...address, district: e.target.value })}
              className="mt-1 p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Upazila"
              value={address.upazila}
              onChange={(e) => setAddress({ ...address, upazila: e.target.value })}
              className="mt-1 p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Union"
              value={address.union}
              onChange={(e) => setAddress({ ...address, union: e.target.value })}
              className="mt-1 p-3 border rounded-md"
            />
            <input
              type="text"
              placeholder="Village"
              value={address.village}
              onChange={(e) => setAddress({ ...address, village: e.target.value })}
              className="mt-1 p-3 border rounded-md"
            />
          </div>

          <button type="submit" className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-md">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
