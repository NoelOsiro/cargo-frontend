import { Shipment } from '../types/tracking';

export const mockShipments: Record<string, Shipment> = {
  'TRK123456789': {
    trackingNumber: 'TRK123456789',
    status: 'in_transit',
    origin: 'Shanghai, China',
    destination: 'Los Angeles, USA',
    estimatedDelivery: '2024-03-25',
    cargo: {
      type: 'container',
      weight: '25,000 kg',
      volume: '33.2 m³',
      containerId: 'CNTR98765',
      description: 'Electronic Components'
    },
    customer: {
      name: 'Tech Solutions Inc.',
      reference: 'PO-2024-0123'
    },
    history: [
      {
        status: 'in_transit',
        location: 'Pacific Ocean',
        timestamp: '2024-03-20T10:30:00Z',
        description: 'Vessel in transit',
        vehicle: {
          id: 'VSL001',
          type: 'ship',
          name: 'Pacific Voyager',
          capacity: '10,000 TEU',
          currentLocation: '31.4532° N, 123.4832° W'
        }
      },
      {
        status: 'in_transit',
        location: 'Shanghai Port',
        timestamp: '2024-03-18T08:15:00Z',
        description: 'Cargo loaded onto vessel',
        vehicle: {
          id: 'TRK002',
          type: 'truck',
          name: 'Port Carrier 2',
          capacity: '40ft container',
          currentLocation: 'Shanghai Port Terminal 3'
        }
      },
      {
        status: 'pending',
        location: 'Shanghai Warehouse',
        timestamp: '2024-03-17T14:20:00Z',
        description: 'Package received at origin facility'
      }
    ]
  },
  'TRK987654321': {
    trackingNumber: 'TRK987654321',
    status: 'in_transit',
    origin: 'Hamburg, Germany',
    destination: 'New York, USA',
    estimatedDelivery: '2024-03-28',
    cargo: {
      type: 'perishable',
      weight: '2,000 kg',
      volume: '8.5 m³',
      temperature: {
        current: 2.5,
        required: 2.0,
        unit: 'celsius'
      },
      description: 'Fresh Produce'
    },
    customer: {
      name: 'Fresh Foods Market',
      reference: 'FFM-2024-789'
    },
    history: [
      {
        status: 'in_transit',
        location: 'Atlantic Ocean',
        timestamp: '2024-03-21T15:45:00Z',
        description: 'Temperature-controlled container in transit',
        vehicle: {
          id: 'VSL003',
          type: 'ship',
          name: 'Atlantic Runner',
          capacity: '8,000 TEU',
          currentLocation: '40.7128° N, 74.0060° W'
        }
      },
      {
        status: 'in_transit',
        location: 'Hamburg Port',
        timestamp: '2024-03-19T11:30:00Z',
        description: 'Refrigerated container loaded',
        vehicle: {
          id: 'TRK005',
          type: 'truck',
          name: 'Reefer Transport 5',
          capacity: '40ft reefer',
          currentLocation: 'Hamburg Port Terminal 2'
        }
      }
    ]
  }
};