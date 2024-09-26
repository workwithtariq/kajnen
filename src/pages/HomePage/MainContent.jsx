import React from "react";

const MainContent = () => {
  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to MyApp</h1>
      <p className="text-gray-600 mt-4">
        We are glad to have you here! Explore our features and enjoy the experience.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
        Get Started
      </button>
    </main>
  );
};

export default MainContent;
