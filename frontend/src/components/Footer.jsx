import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

import {
  FaSmile,
  FaTwitter,
  FaInstagram,
  FaUniversity
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-13 pb-6">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GlobeAltIcon className="h-8 w-8 text-amber-500 mr-2" />
              <span className="text-2xl font-bold text-white">PRP Varthagam</span>
            </div>
            <p className="text-gray-400">
              Connecting the world's finest spices with global markets through ethical and sustainable trade practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaSmile className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaUniversity className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Spices</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products#pepper" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Black Pepper
                </Link>
              </li>
              <li>
                <Link to="/products#cardamom" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Cardamom
                </Link>
              </li>
              <li>
                <Link to="/products#turmeric" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Turmeric
                </Link>
              </li>
              <li>
                <Link to="/products#cinnamon" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Cinnamon
                </Link>
              </li>
              <li>
                <Link to="/products#others" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Other Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-5">
              
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-amber-500 mr-3" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-amber-500 mr-3" />
                <span className="text-gray-400">kissmerestauran1101@gmail.com</span>
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-amber-500 mr-3" />
                <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} PRP Varthagam Spices. All rights reserved. | 
            <Link to="/privacy" className="hover:text-amber-500 ml-2">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-amber-500 ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
