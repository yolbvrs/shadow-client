import React, { useState } from 'react';
import { AppProvider } from '@/contexts/AppContext';
import { ProviderCard } from '@/components/ProviderCard';
import { Header } from '@/components/Header';
import { mockProviders } from '@/data/mockData';

const AvailableProviders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = mockProviders
    .filter(p => p.available)
    .filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onPostJob={() => {}} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map(provider => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </AppProvider>
  );
};

export default AvailableProviders;
