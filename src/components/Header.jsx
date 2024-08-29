import React from 'react';
import { Link } from 'react-router-dom';

const HeadColor = {
  if () {
    
  }
}

function Header() {
  return (
    <header className=" bg-white shadow-sm:  ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          GigConnect
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-600">
            Home
          </Link>
          <Link to="/findwork" className="text-gray-600 hover:text-purple-600">
            Find Work
          </Link>
          <Link to="/findtalent" className="text-gray-600 hover:text-purple-600">
            Find Talent
          </Link>
        </nav>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition-colors">
            Log In
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;