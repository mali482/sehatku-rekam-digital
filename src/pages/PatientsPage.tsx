
import React, { useState } from 'react';
import { Users, Search, Filter, Plus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PatientTable from '../components/PatientTable';
import AddPatientForm from '../components/AddPatientForm';

const PatientsPage = () => {
  const [showAddForm, setShowAddForm] = useState(false);

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
              <h1 className="text-3xl font-bold text-gray-900">Manajemen Pasien</h1>
              <p className="text-gray-600">Kelola data semua pasien</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>

        {/* Search and Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Cari pasien berdasarkan nama, ID, atau nomor telepon..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="h-5 w-5 text-gray-500" />
                <span>Filter</span>
              </button>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Tambah Pasien</span>
              </button>
            </div>
          </div>
        </div>

        {/* Patient Table */}
        <PatientTable />

        {/* Add Patient Modal */}
        {showAddForm && (
          <AddPatientForm onClose={() => setShowAddForm(false)} />
        )}
      </div>
    </div>
  );
};

export default PatientsPage;
