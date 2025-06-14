
import React from 'react';
import { ArrowLeft, Book, Video, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const supportOptions = [
    {
      name: 'Dokumentasi',
      icon: Book,
      description: 'Panduan lengkap penggunaan sistem EMR',
      action: 'Baca Dokumentasi'
    },
    {
      name: 'Tutorial',
      icon: Video,
      description: 'Video tutorial step-by-step',
      action: 'Tonton Tutorial'
    },
    {
      name: 'FAQ',
      icon: HelpCircle,
      description: 'Pertanyaan yang sering diajukan',
      action: 'Lihat FAQ'
    },
    {
      name: 'Hubungi Support',
      icon: Phone,
      description: 'Bantuan langsung dari tim support',
      action: 'Hubungi Sekarang'
    },
    {
      name: 'Training',
      icon: Video,
      description: 'Pelatihan untuk tim Anda',
      action: 'Daftar Training'
    },
    {
      name: 'Community',
      icon: MessageCircle,
      description: 'Forum diskusi pengguna',
      action: 'Gabung Community'
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
              <h1 className="text-3xl font-bold text-gray-900">Dukungan</h1>
              <p className="text-gray-600">Bantuan dan dukungan untuk pengguna MedRecord</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {supportOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{option.name}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kontak Langsung</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+62 21 5555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span>support@medrecord.co.id</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Hubungi Support
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Jam Operasional</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Senin - Jumat</span>
                <span>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between">
                <span>Minggu</span>
                <span>Tutup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
