import React from 'react';
import { FaUserPlus, FaSearch, FaHandshake, FaStar } from 'react-icons/fa';

function HowItWorks() {
  const steps = [
    { icon: <FaUserPlus />, title: "Create an Account", description: "Sign up and complete your profile" },
    { icon: <FaSearch />, title: "Browse or Post", description: "Find projects or post your job" },
    { icon: <FaHandshake />, title: "Collaborate", description: "Work together to complete the project" },
    { icon: <FaStar />, title: "Review and Pay", description: "Rate the experience and process payment" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How GigConnect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-4xl text-purple-500 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;