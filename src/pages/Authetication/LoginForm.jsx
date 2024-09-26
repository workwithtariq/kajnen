// components/LoginForm.jsx
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const LoginForm = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(phone, password);

    if (result.success) {
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <InputField
        label="ফোন"
        placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <InputField
        label="পাস্‌ওয়ার্ড"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full">
      লগ-ইন করুন
      </Button>
    </form>
  );
};

export default LoginForm;
