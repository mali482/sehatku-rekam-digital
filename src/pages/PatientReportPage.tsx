
import React from 'react';
import { ArrowLeft, Download, Calendar, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PatientReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/reports" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Laporan Pasien</h1>
              <p className="text-gray-600">Data statistik dan analisis pasien</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Pasien</h3>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600">1,234</div>
            <p className="text-gray-600">+15% dari bulan lalu</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pasien Baru</h3>
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">156</div>
            <p className="text-gray-600">Bulan ini</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Kunjungan</h3>
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">2,567</div>
            <p className="text-gray-600">Total kunjungan</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Laporan Detail</h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Periode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Pasien</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pasien Baru</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kunjungan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Juni 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,234</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">156</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2,567</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mei 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,078</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">132</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2,234</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReportPage;
