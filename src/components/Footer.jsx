import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Technically Technical</h3>
            <p className="text-gray-400">If you've scrolled this far, you must really like us. Technically, the feeling's mutual!</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links (No 404s, We Promise)</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Our Shenanigans</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300">Our Techy Magic Tricks</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition duration-300">Meet the Geek Squad</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Drop Us a Line (of Code)</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Us (If You Dare)</h4>
            <p className="text-gray-400">Email: wizards@technicallytechnical.com</p>
            <p className="text-gray-400">Text: 844-787-8232</p>
          </div>
          {/* <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Follow Our Digital Footprints</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram size={24} /></a>
            </div>
          </div> */}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Technically Technical - You've technically reached the end... or is it just the beginning?</p>
          <a href="https://liftlabstx.com" className="flex items-center justify-center mt-4 text-gray-400 hover:text-white transition duration-300">
              <img src="/images/ll-logo.png" alt="Lift Labs Logo" className="h-6 w-auto mr-2" />
              <span>a Lift Labs Company</span>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;