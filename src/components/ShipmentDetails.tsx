import React from 'react';
import { Package, MapPin, Calendar, Truck, Thermometer, Box, User } from 'lucide-react';
import { Shipment, Vehicle } from '../types/tracking';

interface ShipmentDetailsProps {
  shipment: Shipment;
}

const VehicleInfo = ({ vehicle }: { vehicle: Vehicle }) => {
  const vehicleIcons = {
    ship: '🚢',
    truck: '🚛',
    plane: '✈️',
    train: '🚂'
  };

  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <span className="text-xl">{vehicleIcons[vehicle.type]}</span>
        <div>
          <p className="font-medium">{vehicle.name}</p>
          <p className="text-sm text-gray-600">Capacity: {vehicle.capacity}</p>
          <p className="text-sm text-gray-600">Location: {vehicle.currentLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default function ShipmentDetails({ shipment }: ShipmentDetailsProps) {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_transit: 'bg-blue-100 text-blue-800',
    delivered: 'bg-green-100 text-green-800',
    exception: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

      <div className="border-t border-gray-200 pt-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Box className="w-5 h-5 mr-2" />
          Cargo Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Type: {shipment.cargo.type}</p>
            <p className="text-sm text-gray-600">Weight: {shipment.cargo.weight}</p>
            <p className="text-sm text-gray-600">Volume: {shipment.cargo.volume}</p>
            {shipment.cargo.containerId && (
              <p className="text-sm text-gray-600">Container ID: {shipment.cargo.containerId}</p>
            )}
          </div>
          {shipment.cargo.temperature && (
            <div className="flex items-start space-x-3">
              <Thermometer className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">
                  Current Temperature: {shipment.cargo.temperature.current}°{shipment.cargo.temperature.unit === 'celsius' ? 'C' : 'F'}
                </p>
                <p className="text-sm text-gray-600">
                  Required Temperature: {shipment.cargo.temperature.required}°{shipment.cargo.temperature.unit === 'celsius' ? 'C' : 'F'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <User className="w-5 h-5 mr-2" />
          Customer Information
        </h3>
        <p className="text-sm text-gray-600">Customer: {shipment.customer.name}</p>
        <p className="text-sm text-gray-600">Reference: {shipment.customer.reference}</p>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold mb-4">Tracking History</h3>
        <div className="space-y-6">
          {shipment.history.map((event, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-4">
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
                  {event.vehicle && (
                    <div className="mt-3">
                      <VehicleInfo vehicle={event.vehicle} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}