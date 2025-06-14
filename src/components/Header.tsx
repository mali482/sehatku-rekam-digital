
import React, { useState } from 'react';
import { Menu, X, Stethoscope, User, Settings, LogOut } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MedRecord</h1>
              <p className="text-xs text-gray-500">Electronic Medical Records</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#patients" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pasien
            </a>
            <a href="#records" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Rekam Medis
            </a>
            <a href="#reports" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Laporan
            </a>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">Dr. Ahmad</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
              <LogOut className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 font-medium">
                Dashboard
              </a>
              <a href="#patients" className="text-gray-700 hover:text-blue-600 font-medium">
                Pasien
              </a>
              <a href="#records" className="text-gray-700 hover:text-blue-600 font-medium">
                Rekam Medis
              </a>
              <a href="#reports" className="text-gray-700 hover:text-blue-600 font-medium">
                Laporan
              </a>
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Dr. Ahmad</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
