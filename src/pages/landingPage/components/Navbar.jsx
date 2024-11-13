import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faClipboard, faEnvelope, faChevronDown, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch languages from the REST Countries API
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const languageSet = new Set();
        response.data.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => languageSet.add(lang));
          }
        });
        setLanguages(Array.from(languageSet).sort());
      })
      .catch(error => {
        console.error('Error fetching languages:', error);
      });
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-indigo-800 p-4 flex justify-between items-center z-10 relative">
      {/* Logo */}
      <Link to="/" className="text-white text-2xl font-bold">
        Feljoy
      </Link>
      
      {/* Nav Links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" /> About
          </Link>
        </li>
        <li>
          <Link to="/resources" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faClipboard} className="mr-1" /> Resources
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-300 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
          </Link>
        </li>
      </ul>

      {/* Language Selector */}
      <div className="relative inline-block">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-white text-black px-4 py-2 rounded inline-flex items-center"
        >
          <span>{selectedLanguage}</span>
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>

        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 p-2 w-40 bg-white border border-gray-300 rounded shadow max-h-60 overflow-auto">
            {languages.map((language, index) => (
              <li
                key={index}
                onClick={() => handleLanguageSelect(language)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {language}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Signup Button */}
      <Link to="/signup" className="bg-white text-black px-4 py-2 rounded ml-4 hover:bg-blue-600 flex items-center">
        <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
