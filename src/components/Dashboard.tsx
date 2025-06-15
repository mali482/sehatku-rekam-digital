
import React, { useState } from 'react';
import { Users, FileText, Calendar, TrendingUp, Plus, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import PatientTable from './PatientTable';
import AddPatientForm from './AddPatientForm';
import StatsCards from './StatsCards';
import { useToast } from '@/hooks/use-toast';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email: string;
  address: string;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddForm, setShowAddForm] = useState(false);
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: 'Budi Santoso',
      age: 45,
      gender: 'Laki-laki',
      phone: '+62 812-3456-7890',
      email: 'budi@email.com',
      address: 'Jakarta'
    },
    {
      id: 2,
      name: 'Siti Rahayu',
      age: 38,
      gender: 'Perempuan',
      phone: '+62 813-4567-8901',
      email: 'siti@email.com',
      address: 'Bandung'
    }
  ]);
  const { toast } = useToast();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'patients', label: 'Pasien', icon: Users },
    { id: 'records', label: 'Rekam Medis', icon: FileText },
    { id: 'schedule', label: 'Jadwal', icon: Calendar }
  ];

  const handleAddPatient = (patientData: Omit<Patient, 'id'>) => {
    const newPatient: Patient = {
      id: patients.length + 1,
      ...patientData
    };
    setPatients([...patients, newPatient]);
    
    toast({
      title: "Pasien Ditambahkan",
      description: `${patientData.name} berhasil ditambahkan ke sistem`,
    });
  };

  const handleEditPatient = (patientId: number, updatedData: Partial<Patient>) => {
    const updatedPatients = patients.map(patient => 
      patient.id === patientId 
        ? { ...patient, ...updatedData }
        : patient
    );
    setPatients(updatedPatients);
    
    toast({
      title: "Data Pasien Diperbarui",
      description: "Informasi pasien berhasil diperbarui",
    });
  };

  const handleDeletePatient = (patientId: number) => {
    const patientToDelete = patients.find(p => p.id === patientId);
    const updatedPatients = patients.filter(patient => patient.id !== patientId);
    setPatients(updatedPatients);
    
    toast({
      title: "Pasien Dihapus",
      description: `${patientToDelete?.name} telah dihapus dari sistem`,
      variant: "destructive",
    });
  };

  return (
    <section id="dashboard" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Sistem Rekam Medis Elektronik</h2>
          <p className="text-gray-600">Pengelola semua data pasien dan rekam medis dalam satu platform</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-lg shadow-sm">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <StatsCards />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setShowAddForm(true)}
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Plus className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Tambah Pasien</div>
                    <div className="text-sm text-gray-600">Daftarkan pasien baru</div>
                  </div>
                </button>
                
                <Link 
                  to="/records"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Rekam Medis Baru</div>
                    <div className="text-sm text-gray-600">Buat catatan medis</div>
                  </div>
                </Link>
                
                <Link 
                  to="/schedule"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all group"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Jadwal Konsultasi</div>
                    <div className="text-sm text-gray-600">Atur jadwal baru</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Tambah Pasien
                  </button>
                </div>
              </div>
            </div>
            
            <PatientTable 
              patients={patients}
              onEditPatient={handleEditPatient}
              onDeletePatient={handleDeletePatient}
            />
          </div>
        )}

        {activeTab === 'records' && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Rekam Medis</h3>
            <p className="text-gray-600 mb-6">Kelola semua rekam medis pasien di sini</p>
            <Link 
              to="/records"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Buat Rekam Medis Baru
            </Link>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Jadwal Konsultasi</h3>
            <p className="text-gray-600 mb-6">Atur dan kelola jadwal konsultasi pasien</p>
            <Link 
              to="/schedule"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Tambah Jadwal Baru
            </Link>
          </div>
        )}

        {/* Add Patient Modal */}
        {showAddForm && (
          <AddPatientForm 
            onClose={() => setShowAddForm(false)} 
            onSave={handleAddPatient}
          />
        )}
      </div>
    </section>
  );
};

export default Dashboard;
