// components/InputField.jsx
import React from "react";

const InputField = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 border rounded-md"
      />
    </div>
  );
};

export default InputField;
