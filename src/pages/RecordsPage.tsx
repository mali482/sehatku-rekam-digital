
import React, { useState } from 'react';
import { FileText, Search, Plus, ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface MedicalRecord {
  id: number;
  patientName: string;
  diagnosis: string;
  treatment: string;
  date: string;
  doctor: string;
}

const RecordsPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState<MedicalRecord | null>(null);
  const [formData, setFormData] = useState({
    patientName: '',
    diagnosis: '',
    treatment: '',
    doctor: ''
  });
  const { toast } = useToast();

  const [records, setRecords] = useState<MedicalRecord[]>([
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
  ]);

  const handleSaveRecord = () => {
    if (!formData.patientName || !formData.diagnosis || !formData.treatment || !formData.doctor) {
      toast({
        title: "Error",
        description: "Semua field harus diisi",
        variant: "destructive",
      });
      return;
    }

    const newRecord: MedicalRecord = {
      id: records.length + 1,
      patientName: formData.patientName,
      diagnosis: formData.diagnosis,
      treatment: formData.treatment,
      date: new Date().toISOString().split('T')[0],
      doctor: formData.doctor
    };

    setRecords([...records, newRecord]);
    setFormData({ patientName: '', diagnosis: '', treatment: '', doctor: '' });
    setShowAddForm(false);
    
    toast({
      title: "Rekam Medis Tersimpan",
      description: "Rekam medis baru berhasil ditambahkan",
    });
  };

  const handleEditRecord = (record: MedicalRecord) => {
    setEditingRecord(record);
    setFormData({
      patientName: record.patientName,
      diagnosis: record.diagnosis,
      treatment: record.treatment,
      doctor: record.doctor
    });
    setShowEditForm(true);
  };

  const handleUpdateRecord = () => {
    if (!editingRecord) return;

    if (!formData.patientName || !formData.diagnosis || !formData.treatment || !formData.doctor) {
      toast({
        title: "Error",
        description: "Semua field harus diisi",
        variant: "destructive",
      });
      return;
    }

    const updatedRecords = records.map(record => 
      record.id === editingRecord.id 
        ? { ...record, ...formData }
        : record
    );

    setRecords(updatedRecords);
    setShowEditForm(false);
    setEditingRecord(null);
    setFormData({ patientName: '', diagnosis: '', treatment: '', doctor: '' });

    toast({
      title: "Rekam Medis Diperbarui",
      description: `Rekam medis ${formData.patientName} berhasil diperbarui`,
    });
  };

  const handleDeleteRecord = (recordId: number) => {
    const recordToDelete = records.find(r => r.id === recordId);
    const updatedRecords = records.filter(record => record.id !== recordId);
    setRecords(updatedRecords);

    toast({
      title: "Rekam Medis Dihapus",
      description: `Rekam medis ${recordToDelete?.patientName} telah dihapus`,
      variant: "destructive",
    });
  };

  const resetForm = () => {
    setFormData({ patientName: '', diagnosis: '', treatment: '', doctor: '' });
    setShowAddForm(false);
    setShowEditForm(false);
    setEditingRecord(null);
  };

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
                {records.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{record.patientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.diagnosis}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.treatment}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{record.doctor}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditRecord(record)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit Rekam Medis"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteRecord(record.id)}
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
                  <select 
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Pilih Pasien</option>
                    <option value="Budi Santoso">Budi Santoso</option>
                    <option value="Siti Rahayu">Siti Rahayu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                  <input 
                    type="text" 
                    value={formData.diagnosis}
                    onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                    placeholder="Masukkan diagnosis" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                  <textarea 
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                    rows={3} 
                    placeholder="Masukkan treatment"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dokter</label>
                  <select 
                    value={formData.doctor}
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Pilih Dokter</option>
                    <option value="Dr. Ahmad">Dr. Ahmad</option>
                    <option value="Dr. Sarah">Dr. Sarah</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={resetForm}
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

        {/* Edit Record Modal */}
        {showEditForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Rekam Medis</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pasien</label>
                  <select 
                    value={formData.patientName}
                    onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Pilih Pasien</option>
                    <option value="Budi Santoso">Budi Santoso</option>
                    <option value="Siti Rahayu">Siti Rahayu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Diagnosis</label>
                  <input 
                    type="text" 
                    value={formData.diagnosis}
                    onChange={(e) => setFormData({...formData, diagnosis: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                    placeholder="Masukkan diagnosis" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                  <textarea 
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                    rows={3} 
                    placeholder="Masukkan treatment"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dokter</label>
                  <select 
                    value={formData.doctor}
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  >
                    <option value="">Pilih Dokter</option>
                    <option value="Dr. Ahmad">Dr. Ahmad</option>
                    <option value="Dr. Sarah">Dr. Sarah</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  onClick={resetForm}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button 
                  onClick={handleUpdateRecord}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Update
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
