
import React from 'react';
import { BarChart3, ArrowLeft, Download, Calendar, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Laporan</h1>
              <p className="text-gray-600">Analisis dan laporan sistem EMR</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-8 w-8 text-orange-600" />
          </div>
        </div>

        {/* Report Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Laporan Pasien</h3>
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mb-4">Data statistik pasien bulanan</p>
            <Link 
              to="/reports/patients"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Lihat Laporan</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Laporan Keuangan</h3>
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-gray-600 mb-4">Ringkasan pendapatan dan biaya</p>
            <Link 
              to="/reports/financial"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Lihat Laporan</span>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Laporan Medis</h3>
              <BarChart3 className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-gray-600 mb-4">Analisis diagnosis dan treatment</p>
            <Link 
              to="/reports/medical"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Lihat Laporan</span>
            </Link>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Statistik Bulan Ini</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-gray-600">Total Pasien</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">456</div>
              <div className="text-gray-600">Kunjungan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">789</div>
              <div className="text-gray-600">Rekam Medis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">98.5%</div>
              <div className="text-gray-600">Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
