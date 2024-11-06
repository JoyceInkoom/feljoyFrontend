import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#f7f7f7] text-gray-800 pt-10">
      {/* Upper Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Global Health Observatory</h2>
            <p className="text-sm mb-4">
              Comprehensive data and statistics on global health topics by the World Health Organization.
            </p>
            <Link to="/about" className="text-[#337ab7] hover:underline">
              Learn more
            </Link>
          </div>
          
          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/data" className="text-sm text-gray-600 hover:underline">Data</Link>
              </li>
              <li>
                <Link to="/reports" className="text-sm text-gray-600 hover:underline">Reports</Link>
              </li>
              <li>
                <Link to="/methodologies" className="text-sm text-gray-600 hover:underline">Methodologies</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:underline">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:underline">Terms of Use</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Connect</h2>
            <p className="text-sm mb-4">
              Follow us on social media for the latest updates.
            </p>
            <div className="flex space-x-4">
              {/* Replace these with actual links to your social pages */}
              <a href="#" className="text-[#337ab7] hover:underline">Facebook</a>
              <a href="#" className="text-[#337ab7] hover:underline">Twitter</a>
              <a href="#" className="text-[#337ab7] hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer Section */}
      <div className="bg-[#e6e6e6] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} World Health Organization. All rights reserved.</p>
          <p>
            <Link to="/privacy" className="text-[#337ab7] hover:underline">Privacy Policy</Link> | 
            <Link to="/accessibility" className="text-[#337ab7] hover:underline mx-2">Accessibility</Link> |
            <Link to="/cookies" className="text-[#337ab7] hover:underline">Cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
