
import React from 'react';
import { Users, FileText, Calendar, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Pasien',
      value: '1,234',
      change: '+12%',
      changeType: 'increase',
      icon: Users,
      color: 'blue',
      description: 'Bulan ini'
    },
    {
      title: 'Rekam Medis',
      value: '2,567',
      change: '+8%',
      changeType: 'increase',
      icon: FileText,
      color: 'green',
      description: 'Total records'
    },
    {
      title: 'Konsultasi Hari Ini',
      value: '45',
      change: '-3%',
      changeType: 'decrease',
      icon: Calendar,
      color: 'purple',
      description: 'Dari 48 kemarin'
    },
    {
      title: 'Tingkat Kepuasan',
      value: '98.5%',
      change: '+2%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'orange',
      description: 'Rating pasien'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        text: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100 text-green-600',
        text: 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100 text-purple-600',
        text: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-100 text-orange-600',
        text: 'text-orange-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const colors = getColorClasses(stat.color);
        
        return (
          <div 
            key={index}
            className={`${colors.bg} rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className={`flex items-center space-x-1 text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.changeType === 'increase' ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                <span>{stat.change}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.title}</p>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
