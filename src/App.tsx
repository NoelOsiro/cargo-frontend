import React, { useState } from 'react';
import { Package } from 'lucide-react';
import TrackingSearch from './components/TrackingSearch';
import ShipmentDetails from './components/ShipmentDetails';
import { mockShipments } from './data/mockData';
import { Shipment } from './types/tracking';

function App() {
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = (trackingNumber: string) => {
    setError('');
    const foundShipment = mockShipments[trackingNumber];
    
    if (foundShipment) {
      setShipment(foundShipment);
    } else {
      setError('No shipment found with this tracking number');
      setShipment(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Package className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cargo Tracking</h1>
          <p className="text-gray-600">Track your shipment with ease</p>
        </div>

        <div className="flex justify-center mb-8">
          <TrackingSearch onSearch={handleSearch} />
        </div>

        {error && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          </div>
        )}

        {shipment && <ShipmentDetails shipment={shipment} />}

        {!shipment && !error && (
          <div className="text-center text-gray-600 mt-8">
            <p>Try searching with tracking number: TRK123456789</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;