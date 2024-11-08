import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10">
      {/* Upper Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Feljoy by Felicity and Joyce</h2>
            <p className="text-sm mb-4">
              Mental health support for everyone.
            </p>
            <Link to="/about" className="text-white hover:underline">
              Learn more
            </Link>
          </div>
          
          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li><Link to="/data" className="text-white hover:underline">About Us</Link></li>
              <li><Link to="/reports" className="text-white hover:underline">Resources</Link></li>
              <li><Link to="/methodologies" className="text-white hover:underline">Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-white hover:underline">FAQ</Link></li>
              <li><Link to="/contact" className="text-white hover:underline">Contact Us</Link></li>
              <li><Link to="/terms" className="text-white hover:underline">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <p className="text-sm mb-4">
              Follow us on social media for the latest updates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:underline"><FaFacebookF /></a>
              <a href="#" className="text-white hover:underline"><FaTwitter /></a>
              <a href="#" className="text-white hover:underline"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="bg-black py-4 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Feljoy. All rights reserved.</p>
          <p>
            <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link> | 
            <Link to="/accessibility" className="text-white hover:underline mx-2">Accessibility</Link> |
            <Link to="/cookies" className="text-white hover:underline">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
