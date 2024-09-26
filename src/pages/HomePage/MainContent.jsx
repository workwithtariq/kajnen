// components/MainContent.jsx
import React from "react";
import Button from "../../components/Button";

const MainContent = () => (
  <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 text-center p-6">
    <h1 className="text-4xl font-bold text-gray-800">সব ধরনের কাজ নেন</h1>
    <p className="text-gray-600 mt-4">We are glad to have you here! Explore our features and enjoy the experience.</p>
    <Button to="/category">কাজ খুঁজুন</Button>
   
  </main>
);

export default MainContent;
