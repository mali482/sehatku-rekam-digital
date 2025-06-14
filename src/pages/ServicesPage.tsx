
import React from 'react';
import { ArrowLeft, FileText, Users, Calendar, BarChart3, Microscope, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      name: 'Rekam Medis Digital',
      icon: FileText,
      description: 'Sistem penyimpanan rekam medis elektronik yang aman dan terintegrasi'
    },
    {
      name: 'Manajemen Pasien',
      icon: Users,
      description: 'Pengelolaan data pasien secara komprehensif dan mudah diakses'
    },
    {
      name: 'Sistem Penjadwalan',
      icon: Calendar,
      description: 'Penjadwalan appointment dan konsultasi yang efisien'
    },
    {
      name: 'Analytics & Reporting',
      icon: BarChart3,
      description: 'Laporan dan analisis data kesehatan yang mendalam'
    },
    {
      name: 'Integrasi Lab',
      icon: Microscope,
      description: 'Integrasi dengan sistem laboratorium untuk hasil yang akurat'
    },
    {
      name: 'Telemedicine',
      icon: Video,
      description: 'Konsultasi jarak jauh dengan teknologi video call'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Layanan Kami</h1>
              <p className="text-gray-600">Solusi lengkap untuk kebutuhan sistem kesehatan</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Butuh Konsultasi?</h2>
          <p className="text-gray-600 mb-6">
            Tim ahli kami siap membantu Anda memilih solusi yang tepat untuk kebutuhan fasilitas kesehatan Anda.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Hubungi Kami
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Download Brosur
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
