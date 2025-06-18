import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon, 
  ShoppingBagIcon, 
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';
import GetQuoteForm from './GetQuoteForm';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <GlobeAltIcon className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-xl font-bold hover:text-amber-200 transition-colors duration-300">
              PR Varthagam Limited
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-amber-600 focus:outline-none transition-all duration-300 transform hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 animate-spin-in" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="relative group hover:text-amber-200 transition-colors duration-300"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/about" 
            className="relative group hover:text-amber-200 transition-colors duration-300"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/services" 
            className="relative group hover:text-amber-200 transition-colors duration-300"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            to="/contact" 
            className="relative group hover:text-amber-200 transition-colors duration-300"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link 
            to="/getquoteform" 
            className="relative bg-white text-amber-700 px-4 py-2 rounded-md font-medium hover:bg-amber-100 transition-all duration-300 flex items-center group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <ShoppingBagIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-125" />
              Get Quote
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
        </div>
      </div>

      {/* Mobile Navigation */}
 {/* Mobile Navigation */}
{mobileMenuOpen && (
  <div className="md:hidden bg-amber-600 px-4 py-2 animate-slide-down">
    <div className="flex flex-col space-y-3">
      <Link 
        to="/" 
        className="py-2 hover:text-amber-200 transition-all duration-300 hover:pl-2 hover:bg-amber-700 rounded"
        onClick={() => setMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="py-2 hover:text-amber-200 transition-all duration-300 hover:pl-2 hover:bg-amber-700 rounded"
        onClick={() => setMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="py-2 hover:text-amber-200 transition-all duration-300 hover:pl-2 hover:bg-amber-700 rounded"
        onClick={() => setMobileMenuOpen(false)}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        className="py-2 hover:text-amber-200 transition-all duration-300 hover:pl-2 hover:bg-amber-700 rounded"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </div>
    <div className="mt-4 pt-4 border-t border-amber-500">
      <Link 
        to="/contact" 
        className="bg-white text-amber-700 px-4 py-3 rounded-md font-medium hover:bg-amber-100 transition-all duration-300 flex items-center justify-center mb-3 group overflow-hidden"
        onClick={() => setMobileMenuOpen(false)}
      >
        <span className="relative z-10 flex items-center">
          <ShoppingBagIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:scale-125" />
          Get Quote
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-amber-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Link>
      
    </div>
  </div>
)}
    </nav>
  );
}