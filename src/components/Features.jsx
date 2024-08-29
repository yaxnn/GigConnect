import React from 'react';
import { FaGlobe, FaShieldAlt, FaBolt, FaCheckCircle } from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaGlobe className="h-12 w-12 text-purple-500" />,
      title: "Global Talent Pool",
      description: "Access skilled professionals from around the world.",
    },
    {
      icon: <FaShieldAlt className="h-12 w-12 text-purple-500" />,
      title: "Secure Payments",
      description: "Your transactions are protected and guaranteed.",
    },
    {
      icon: <FaBolt className="h-12 w-12 text-purple-500" />,
      title: "Fast Turnaround",
      description: "Get your projects completed quickly and efficiently.",
    },
    {
      icon: <FaCheckCircle className="h-12 w-12 text-purple-500" />,
      title: "Quality Work",
      description: "Only the best freelancers with verified skills and experience.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose GigConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;