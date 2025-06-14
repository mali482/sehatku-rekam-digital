
import React, { useState } from 'react';
import { Users, Search, Filter, Plus, ArrowLeft, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const UsersPage = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'Dr. Ahmad Wijaya',
      email: 'ahmad@medrecord.com',
      role: 'Dokter',
      status: 'Aktif',
      lastLogin: '2024-06-14 09:30',
      avatar: 'AW'
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      email: 'siti@medrecord.com',
      role: 'Perawat',
      status: 'Aktif',
      lastLogin: '2024-06-14 08:15',
      avatar: 'SN'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      email: 'budi@medrecord.com',
      role: 'Admin',
      status: 'Aktif',
      lastLogin: '2024-06-13 16:45',
      avatar: 'BS'
    },
    {
      id: 4,
      name: 'Maya Sari',
      email: 'maya@medrecord.com',
      role: 'Perawat',
      status: 'Tidak Aktif',
      lastLogin: '2024-06-10 14:20',
      avatar: 'MS'
    }
  ]);

  const { toast } = useToast();

  const handleAddUser = () => {
    toast({
      title: "Tambah Pengguna",
      description: "Form tambah pengguna akan dibuka.",
    });
  };

  const handleViewUser = (userName: string) => {
    toast({
      title: "Detail Pengguna",
      description: `Melihat detail ${userName}`,
    });
  };

  const handleEditUser = (userName: string) => {
    toast({
      title: "Edit Pengguna",
      description: `Mengedit data ${userName}`,
    });
  };

  const handleDeleteUser = (userName: string) => {
    toast({
      title: "Hapus Pengguna",
      description: `Konfirmasi hapus ${userName}`,
      variant: "destructive",
    });
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
              <h1 className="text-3xl font-bold text-gray-900">Manajemen Pengguna</h1>
              <p className="text-gray-600">Kelola pengguna sistem EMR</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari pengguna berdasarkan nama, email, atau role..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-5 w-5 text-gray-500" />
                <span>Filter</span>
              </button>
              <button 
                onClick={handleAddUser}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Tambah Pengguna</span>
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pengguna
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Login Terakhir
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'Aktif' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.lastLogin}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleViewUser(user.name)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Lihat Detail"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleEditUser(user.name)}
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Edit Pengguna"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteUser(user.name)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Hapus Pengguna"
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

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-gray-600">Total Pengguna</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-gray-600">Pengguna Aktif</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-gray-600">Dokter</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-2xl font-bold text-orange-600">8</div>
            <div className="text-gray-600">Perawat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
