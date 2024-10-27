import React from 'react';
import { Package, MapPin, Calendar } from 'lucide-react';
import { Shipment } from '../types/tracking';

interface ShipmentDetailsProps {
  shipment: Shipment;
}

export default function ShipmentDetails({ shipment }: ShipmentDetailsProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_transit: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    exception: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <Package className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Tracking Number</h3>
            <p className="text-lg font-semibold">{shipment.trackingNumber}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Route</h3>
            <p className="text-lg font-semibold">{shipment.origin}</p>
            <p className="text-lg font-semibold">{shipment.destination}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Calendar className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Estimated Delivery</h3>
            <p className="text-lg font-semibold">
              {new Date(shipment.estimatedDelivery).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
        <div className="space-y-4">
          {shipment.history.map((event, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="min-w-[2px] h-full bg-gray-200" />
              <div className="flex-1">
                <span className={`inline-block px-2 py-1 rounded-full text-sm ${statusColors[event.status]}`}>
                  {event.status.replace('_', ' ').toUpperCase()}
                </span>
                <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>{event.location}</span>
                  <span>•</span>
                  <span>{new Date(event.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}