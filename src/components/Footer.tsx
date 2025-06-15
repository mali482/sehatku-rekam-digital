
import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Klinik Cinta Abadi</h3>
                <p className="text-sm text-gray-400">Rekam Medis Elektronik</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sistem Rekam Medis Elektronik yang terdepan untuk fasilitas kesehatan modern. 
              Kami berkomitmen untuk meningkatkan kualitas pelayanan kesehatan melalui teknologi 
              yang inovatif dan aman.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@klinikcintaabadi.co.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+62 21 5555-000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Rekam Medis Digital
                </Link>
              </li>
              <li>
                <Link 
                  to="/patients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Manajemen Pasien
                </Link>
              </li>
              <li>
                <Link 
                  to="/schedule"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sistem Penjadwalan
                </Link>
              </li>
              <li>
                <Link 
                  to="/reports"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Analytics & Reporting
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Integrasi Lab
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Telemedicine
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Dukungan</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dokumentasi
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tutorial
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hubungi Support
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <Link 
                  to="/social"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  to="/social"
                  className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link 
                  to="/social"
                  className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  to="/social"
                  className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-r-lg hover:from-blue-700 hover:to-green-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Klinik Cinta Abadi.  Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6">
              <p 
                
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </p>
              <p
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </p>
              <p 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
