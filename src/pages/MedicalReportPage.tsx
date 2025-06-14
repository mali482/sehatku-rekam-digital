
import React from 'react';
import { ArrowLeft, Download, Activity, Pill, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalReportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/reports" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Laporan Medis</h1>
              <p className="text-gray-600">Analisis diagnosis dan treatment</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Diagnosis</h3>
              <Stethoscope className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">2,345</div>
            <p className="text-gray-600">Bulan ini</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Treatment</h3>
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600">1,876</div>
            <p className="text-gray-600">Selesai</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Resep Obat</h3>
              <Pill className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">3,456</div>
            <p className="text-gray-600">Diberikan</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Laporan Medis Detail</h3>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Diagnosis</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Jumlah Kasus</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tingkat Kesembuhan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Hipertensi</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">245</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">85%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Stabil</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Diabetes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">187</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">78%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Monitoring</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalReportPage;
