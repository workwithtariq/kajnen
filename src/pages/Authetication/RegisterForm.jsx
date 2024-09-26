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
      <InputField label="নাম" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <InputField label="ফোন" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone" />
      <InputField label="ইমেইল" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
      <InputField label="পাস্‌ওয়ার্ড" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
      <InputField label="ছবি" value={picture} onChange={(e) => setPicture(e.target.value)} placeholder="Enter picture URL" />
      
      <InputField label="জেলা" value={address.district} onChange={(e) => setAddress({ ...address, district: e.target.value })} placeholder="Enter district" />
      <InputField label="উপজেলা" value={address.upazila} onChange={(e) => setAddress({ ...address, upazila: e.target.value })} placeholder="Enter upazila" />
      <InputField label="ইউনিয়ন" value={address.union} onChange={(e) => setAddress({ ...address, union: e.target.value })} placeholder="Enter union" />
      <InputField label="গ্রাম" value={address.village} onChange={(e) => setAddress({ ...address, village: e.target.value })} placeholder="Enter village" />
      
      <Button type="submit" className="w-full">
      নিবন্ধন করুন
      </Button>
    </form>
  );
};

export default RegisterForm;
