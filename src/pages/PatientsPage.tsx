
import React, { useState } from 'react';
import { Users, Search, Filter, Plus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PatientTable from '../components/PatientTable';
import AddPatientForm from '../components/AddPatientForm';
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

const PatientsPage = () => {
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
        <PatientTable 
          patients={patients}
          onEditPatient={handleEditPatient}
          onDeletePatient={handleDeletePatient}
        />

        {/* Add Patient Modal */}
        {showAddForm && (
          <AddPatientForm 
            onClose={() => setShowAddForm(false)}
            onSave={handleAddPatient}
          />
        )}
      </div>
    </div>
  );
};

export default PatientsPage;
