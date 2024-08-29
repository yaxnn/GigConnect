import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">GigConnect</h3>
            <p className="text-gray-400">Connecting talent with opportunities worldwide.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Freelancers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find Work</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Create Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Find Freelancers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Enterprise Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GigConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;