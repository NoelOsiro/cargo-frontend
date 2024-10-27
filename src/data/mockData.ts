import { Shipment } from '../types/tracking';

export const mockShipments: Record<string, Shipment> = {
  'TRK123456789': {
    trackingNumber: 'TRK123456789',
    status: 'in_transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    estimatedDelivery: '2024-03-25',
    history: [
      {
        status: 'in_transit',
        location: 'Pacific Ocean',
        timestamp: '2024-03-20T10:30:00Z',
        description: 'Vessel in transit'
      },
      {
        status: 'in_transit',
        location: 'Shanghai Port',
        timestamp: '2024-03-18T08:15:00Z',
        description: 'Cargo loaded onto vessel'
      },
      {
        status: 'pending',
        location: 'Shanghai Warehouse',
        timestamp: '2024-03-17T14:20:00Z',
        description: 'Package received at origin facility'
      }
    ]
  }
};