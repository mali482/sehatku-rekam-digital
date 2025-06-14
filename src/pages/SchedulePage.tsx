
import React, { useState } from 'react';
import { Calendar, Plus, ArrowLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchedulePage = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const mockSchedules = [
    {
      id: 1,
      patientName: 'Budi Santoso',
      time: '09:00',
      date: '2024-01-15',
      type: 'Konsultasi Rutin',
      status: 'Terjadwal'
    },
    {
      id: 2,
      patientName: 'Siti Rahayu',
      time: '10:30',
      date: '2024-01-15',
      type: 'Kontrol Diabetes',
      status: 'Selesai'
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
              <h1 className="text-3xl font-bold text-gray-900">Jadwal Konsultasi</h1>
              <p className="text-gray-600">Kelola jadwal konsultasi pasien</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">Jadwal Hari Ini</h3>
            <button 
              onClick={() => setShowAddForm(true)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Tambah Jadwal</span>
            </button>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Waktu</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Nama Pasien</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Tanggal</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Jenis Konsultasi</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockSchedules.map((schedule) => (
                  <tr key={schedule.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-purple-600" />
                        <span>{schedule.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{schedule.patientName}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{schedule.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{schedule.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        schedule.status === 'Selesai' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {schedule.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-800">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Schedule Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tambah Jadwal Baru</h3>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
                  <input type="date" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Waktu</label>
                  <input type="time" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Konsultasi</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Konsultasi Rutin</option>
                    <option>Kontrol Diabetes</option>
                    <option>Pemeriksaan Kesehatan</option>
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
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
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

export default SchedulePage;
