import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with top freelancers for your next project
          </h1>
          <p className="text-xl mb-6">
            Find skilled professionals or exciting opportunities on GigConnect
          </p>
          <div className="flex space-x-4">
            <Link to={'/findtalent'}>
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Find Talent
            </button>
            </Link>
            <Link to={'/findwork'}>
            <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              Find Work
            </button>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;