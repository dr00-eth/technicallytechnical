import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/images/logo-nobg.png" alt="Technically Technical Logo" className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold text-blue-600">
              Technically Technical
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-600 transition duration-300">About</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition duration-300">Services</a></li>
              <li><a href="#team" className="hover:text-blue-600 transition duration-300">Team</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition duration-300">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-white py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Services</a></li>
              <li><a href="#team" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Team</a></li>
              <li><a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;