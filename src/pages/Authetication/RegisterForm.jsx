// components/RegisterForm.jsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState({ district: '', upazila: '', union: '', village: '' });

  const { registerUser } = useAuth();
  const navigate = useNavigate();

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
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <InputField label="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone" />
      <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <InputField label="Profile Picture URL" value={picture} onChange={(e) => setPicture(e.target.value)} placeholder="Enter picture URL" />
      
      <InputField label="District" value={address.district} onChange={(e) => setAddress({ ...address, district: e.target.value })} placeholder="Enter district" />
      <InputField label="Upazila" value={address.upazila} onChange={(e) => setAddress({ ...address, upazila: e.target.value })} placeholder="Enter upazila" />
      <InputField label="Union" value={address.union} onChange={(e) => setAddress({ ...address, union: e.target.value })} placeholder="Enter union" />
      <InputField label="Village" value={address.village} onChange={(e) => setAddress({ ...address, village: e.target.value })} placeholder="Enter village" />
      
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
