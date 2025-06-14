
import React from 'react';
import { FileText, UserCheck, Calendar, BarChart3, Lock, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const FeaturesSection = () => {
  const { toast } = useToast();

  const handleDemoGratis = () => {
    toast({
      title: "Demo Gratis",
      description: "Mengarahkan ke halaman demo gratis sistem EMR.",
    });
  };

  const handleHubungiSales = () => {
    toast({
      title: "Hubungi Sales",
      description: "Mengarahkan ke halaman kontak sales.",
    });
  };

  const features = [
    {
      icon: FileText,
      title: 'Rekam Medis Digital',
      description: 'Kelola riwayat kesehatan pasien secara digital dengan sistem yang terorganisir dan mudah diakses.',
      color: 'blue'
    },
    {
      icon: UserCheck,
      title: 'Manajemen Pasien',
      description: 'Daftarkan pasien baru, update informasi, dan pantau status kesehatan secara real-time.',
      color: 'green'
    },
    {
      icon: Calendar,
      title: 'Penjadwalan',
      description: 'Atur jadwal konsultasi, kontrol, dan treatment dengan sistem kalender terintegrasi.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Laporan & Analytics',
      description: 'Dapatkan insight mendalam melalui dashboard analytics dan laporan komprehensif.',
      color: 'orange'
    },
    {
      icon: Lock,
      title: 'Keamanan Data',
      description: 'Perlindungan maksimal dengan enkripsi tingkat enterprise dan compliance HIPAA.',
      color: 'red'
    },
    {
      icon: Clock,
      title: 'Akses 24/7',
      description: 'Akses sistem kapan saja dan di mana saja dengan performa tinggi dan uptime 99.9%.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fitur Unggulan Sistem EMR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk manajemen rekam medis elektronik dengan teknologi terdepan 
            yang dirancang khusus untuk kebutuhan fasilitas kesehatan modern.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Pelajari Lebih Lanjut →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Siap Meningkatkan Sistem Kesehatan Anda?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Bergabung dengan ribuan fasilitas kesehatan yang telah mempercayai sistem EMR kami 
              untuk mengelola data pasien dan meningkatkan kualitas pelayanan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDemoGratis}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Demo Gratis
              </button>
              <button 
                onClick={handleHubungiSales}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hubungi Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
