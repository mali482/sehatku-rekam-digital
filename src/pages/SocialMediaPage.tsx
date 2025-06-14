
import React from 'react';
import { ArrowLeft, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaPage = () => {
  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/medrecord',
      color: 'bg-blue-600',
      description: 'Ikuti update terbaru dan tips kesehatan'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/medrecord',
      color: 'bg-sky-500',
      description: 'Dapatkan berita kesehatan terkini'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/medrecord',
      color: 'bg-pink-600',
      description: 'Lihat konten visual dan infografis kesehatan'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/company/medrecord',
      color: 'bg-blue-700',
      description: 'Jaringan profesional kesehatan'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/medrecord',
      color: 'bg-red-600',
      description: 'Tutorial dan webinar kesehatan'
    }
  ];

  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Media Sosial</h1>
              <p className="text-gray-600">Terhubung dengan kami di platform media sosial</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div key={platform.name} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <button
                  onClick={() => handleSocialClick(platform.name, platform.url)}
                  className={`w-full ${platform.color} text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium`}
                >
                  Kunjungi {platform.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPage;
