
import React, { useState } from 'react';
import { FileText, Search, Plus, ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const RecordsPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const handleSaveRecord = () => {
    toast({
      title: "Rekam Medis Tersimpan",
      description: "Rekam medis baru berhasil ditambahkan",
    });
    setShowAddForm(false);
  };

  const handleEditRecord = (patientName: string) => {
    toast({
      title: "Edit Rekam Medis",
      description: `Mengedit rekam medis ${patientName}`,
    });
  };

  const handleDeleteRecord = (patientName: string) => {
    toast({
      title: "Hapus Rekam Medis",
      description: `Rekam medis ${patientName} telah dihapus`,
      variant: "destructive",
    });
  };

  const mockRecords = [
    {
      id: 1,
      patientName: 'Budi Santoso',
      diagnosis: 'Hipertensi',
      treatment: 'Obat antihipertensi',
      date: '2024-01-15',
      doctor: 'Dr. Ahmad'
    },
    {
      id: 2,
      patientName: 'Siti Rahayu',
      diagnosis: 'Diabetes Tipe 2',
      treatment: 'Metformin',
      date: '2024-01-14',
      doctor: 'Dr. Sarah'
    }
  ];

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
              <h1 className="text-3xl font-bold text-gray-900">Rekam Medis</h1>
              <p className="text-gray-600">Kelola rekam medis pasien</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-green-600" />
          </div>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari rekam medis berdasarkan nama pasien atau diagnosis..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Tambah Rekam Medis</span>
            </button>
          </div>
        </div>

        {/* Records Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Nama Pasien</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Diagnosis</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Treatment</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Tanggal</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Dokter</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.patientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.diagnosis}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.treatment}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.doctor}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditRecord(record.patientName)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit Rekam Medis"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteRecord(record.patientName)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Hapus Rekam Medis"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Record Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tambah Rekam Medis Baru</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pasien</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Pilih Pasien</option>
                    <option>Budi Santoso</option>
                    <option>Siti Rahayu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Masukkan diagnosis" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                  <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2" rows={3} placeholder="Masukkan treatment"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dokter</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Pilih Dokter</option>
                    <option>Dr. Ahmad</option>
                    <option>Dr. Sarah</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  onClick={handleSaveRecord}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecordsPage;
