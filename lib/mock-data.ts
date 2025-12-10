export interface ForecastItem {
    id: string;
    region: string;
    facilityId: string;
    date: string;
    projectedVolume: number;
    capacityLimit: number;
    riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface RouteRecommendation {
    id: string;
    origin: string;
    destination: string;
    currentCarrier: string;
    recommendedCarrier: string;
    costSavings: number;
    slaImpact: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

export const mockForecasts: ForecastItem[] = [
    { id: '1', region: 'Northeast', facilityId: 'EWR4', date: '2025-12-12', projectedVolume: 45000, capacityLimit: 42000, riskLevel: 'High' },
    { id: '2', region: 'Midwest', facilityId: 'ORD5', date: '2025-12-12', projectedVolume: 38000, capacityLimit: 50000, riskLevel: 'Low' },
    { id: '3', region: 'South', facilityId: 'DFW7', date: '2025-12-12', projectedVolume: 62000, capacityLimit: 60000, riskLevel: 'Medium' },
    { id: '4', region: 'West', facilityId: 'LAX9', date: '2025-12-13', projectedVolume: 55000, capacityLimit: 55000, riskLevel: 'Medium' },
    { id: '5', region: 'Northeast', facilityId: 'JFK8', date: '2025-12-13', projectedVolume: 70000, capacityLimit: 65000, riskLevel: 'Critical' },
];

export const mockRoutes: RouteRecommendation[] = [
    { id: '1', origin: 'EWR4', destination: 'NY-METRO', currentCarrier: 'Amazon Logistics', recommendedCarrier: 'UPS', costSavings: -200, slaImpact: 'Avoid Delay', status: 'Pending' },
    { id: '2', origin: 'ORD5', destination: 'CHI-LOOP', currentCarrier: 'FedEx', recommendedCarrier: 'Amazon Logistics', costSavings: 1500, slaImpact: 'Neutral', status: 'Approved' },
    { id: '3', origin: 'DFW7', destination: 'DAL-NORTH', currentCarrier: 'USPS', recommendedCarrier: 'Amazon Logistics', costSavings: 800, slaImpact: 'Improved', status: 'Pending' },
];
