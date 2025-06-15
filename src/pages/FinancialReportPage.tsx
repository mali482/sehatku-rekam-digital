
import React from 'react';
import { ArrowLeft, Download, DollarSign, TrendingUp, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const FinancialReportPage = () => {
  const { toast } = useToast();

  const handleDownloadExcel = () => {
    toast({
      title: "Download Laporan",
      description: "Laporan keuangan sedang diunduh dalam format Excel...",
    });
    // Simulate Excel download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'data:application/vnd.ms-excel;base64,'; // In real app, this would be actual Excel data
      link.download = 'laporan-keuangan.xlsx';
      link.click();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/reports" className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Laporan Keuangan</h1>
              <p className="text-gray-600">Analisis pendapatan dan pengeluaran</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pendapatan</h3>
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">Rp 125.5M</div>
            <p className="text-gray-600">+12% dari bulan lalu</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pengeluaran</h3>
              <CreditCard className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">Rp 78.2M</div>
            <p className="text-gray-600">-5% dari bulan lalu</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Keuntungan</h3>
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600">Rp 47.3M</div>
            <p className="text-gray-600">+25% dari bulan lalu</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Laporan Keuangan Detail</h3>
            <button 
              onClick={handleDownloadExcel}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Excel</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Periode</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pendapatan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Pengeluaran</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Keuntungan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Juni 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Rp 125.5M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">Rp 78.2M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">Rp 47.3M</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mei 2024</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Rp 112.1M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">Rp 82.3M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">Rp 29.8M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportPage;
