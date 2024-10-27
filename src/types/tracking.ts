export interface ShipmentStatus {
  status: 'pending' | 'in_transit' | 'delivered' | 'exception';
  location: string;
  timestamp: string;
  description: string;
}

export interface Shipment {
  trackingNumber: string;
  status: ShipmentStatus['status'];
  origin: string;
  destination: string;
  estimatedDelivery: string;
  history: ShipmentStatus[];
}