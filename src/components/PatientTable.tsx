
import React from 'react';
import { Eye, Edit, Trash2, Phone, Mail, Calendar } from 'lucide-react';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
}

interface PatientTableProps {
  patients: Patient[];
  onEditPatient: (patientId: number, updatedData: Partial<Patient>) => void;
  onDeletePatient: (patientId: number) => void;
}

const PatientTable: React.FC<PatientTableProps> = ({ patients, onEditPatient, onDeletePatient }) => {
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
                Alamat
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
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                {/* Patient Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {patient.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{patient.name}</div>
                      <div className="text-sm text-gray-500">ID: P{patient.id.toString().padStart(3, '0')}</div>
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

                {/* Address */}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">
                    {patient.address}
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Aktif
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors" title="Lihat Detail">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onEditPatient(patient.id, {})}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors" 
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => onDeletePatient(patient.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors" 
                      title="Hapus"
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

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Menampilkan 1-{patients.length} dari {patients.length} pasien
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              Sebelumnya
            </button>
            <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              1
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
