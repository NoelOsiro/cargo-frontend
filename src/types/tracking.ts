export type VehicleType = 'ship' | 'truck' | 'plane' | 'train';
export type CargoType = 'container' | 'bulk' | 'breakbulk' | 'liquid' | 'perishable';
export type TemperatureUnit = 'celsius' | 'fahrenheit';

export interface Vehicle {
  id: string;
  type: VehicleType;
  name: string;
  capacity: string;
  currentLocation: string;
}

export interface CargoDetails {
  type: CargoType;
  weight: string;
  volume: string;
  temperature?: {
    current: number;
    required: number;
    unit: TemperatureUnit;
  };
  containerId?: string;
  description: string;
}

export interface ShipmentStatus {
  status: 'pending' | 'in_transit' | 'delivered' | 'exception';
  location: string;
  timestamp: string;
  description: string;
  vehicle?: Vehicle;
}

export interface Shipment {
  trackingNumber: string;
  status: ShipmentStatus['status'];
  origin: string;
  destination: string;
  estimatedDelivery: string;
  cargo: CargoDetails;
  customer: {
    name: string;
    reference: string;
  };
  history: ShipmentStatus[];
}