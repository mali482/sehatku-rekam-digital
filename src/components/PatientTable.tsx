
import React from 'react';
import { Eye, Edit, Trash2, Phone, Mail, Calendar } from 'lucide-react';

const PatientTable = () => {
  const patients = [
    {
      id: 'P001',
      name: 'Ahmad Hidayat',
      age: 35,
      gender: 'Laki-laki',
      phone: '+62 812-3456-7890',
      email: 'ahmad.hidayat@email.com',
      lastVisit: '2024-06-10',
      status: 'Aktif',
      bloodType: 'A+'
    },
    {
      id: 'P002',
      name: 'Siti Nurhaliza',
      age: 28,
      gender: 'Perempuan',
      phone: '+62 813-4567-8901',
      email: 'siti.nurhaliza@email.com',
      lastVisit: '2024-06-12',
      status: 'Aktif',
      bloodType: 'O+'
    },
    {
      id: 'P003',
      name: 'Budi Santoso',
      age: 42,
      gender: 'Laki-laki',
      phone: '+62 814-5678-9012',
      email: 'budi.santoso@email.com',
      lastVisit: '2024-06-08',
      status: 'Tidak Aktif',
      bloodType: 'B+'
    },
    {
      id: 'P004',
      name: 'Maya Sari',
      age: 31,
      gender: 'Perempuan',
      phone: '+62 815-6789-0123',
      email: 'maya.sari@email.com',
      lastVisit: '2024-06-14',
      status: 'Aktif',
      bloodType: 'AB+'
    },
    {
      id: 'P005',
      name: 'Rizki Pratama',
      age: 25,
      gender: 'Laki-laki',
      phone: '+62 816-7890-1234',
      email: 'rizki.pratama@email.com',
      lastVisit: '2024-06-11',
      status: 'Aktif',
      bloodType: 'O-'
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'Aktif' 
      ? 'bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'
      : 'bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium';
  };

  const getGenderColor = (gender: string) => {
    return gender === 'Laki-laki' ? 'text-blue-600' : 'text-pink-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900">Daftar Pasien</h3>
        <p className="text-sm text-gray-600 mt-1">Kelola informasi pasien dan riwayat medis</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Pasien
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kontak
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Info Medis
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kunjungan Terakhir
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                {/* Patient Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {patient.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">ID: {patient.id}</div>
                      <div className={`text-sm font-medium ${getGenderColor(patient.gender)}`}>
                        {patient.gender}, {patient.age} tahun
                      </div>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span className="truncate max-w-32">{patient.email}</span>
                    </div>
                  </div>
                </td>

                {/* Medical Info */}
                <td className="px-6 py-4">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Golongan Darah</div>
                    <div className="text-red-600 font-semibold">{patient.bloodType}</div>
                  </div>
                </td>

                {/* Last Visit */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(patient.lastVisit).toLocaleDateString('id-ID')}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className={getStatusBadge(patient.status)}>
                    {patient.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Lihat Detail">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" title="Hapus">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Menampilkan 1-5 dari 1,234 pasien
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              Sebelumnya
            </button>
            <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              2
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              3
            </button>
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
