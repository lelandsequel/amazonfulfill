import { DataGrid } from '@/components/ui/data-grid';
import { mockForecasts, ForecastItem } from '@/lib/mock-data';

export default function ForecastPage() {
    const columns = [
        { header: 'Region', accessorKey: 'region' as keyof ForecastItem },
        { header: 'Facility ID', accessorKey: 'facilityId' as keyof ForecastItem },
        { header: 'Date', accessorKey: 'date' as keyof ForecastItem },
        { header: 'Projected Volume', accessorKey: 'projectedVolume' as keyof ForecastItem, cell: (item: ForecastItem) => item.projectedVolume.toLocaleString() },
        { header: 'Capacity Limit', accessorKey: 'capacityLimit' as keyof ForecastItem, cell: (item: ForecastItem) => item.capacityLimit.toLocaleString() },
        {
            header: 'Risk Level',
            accessorKey: 'riskLevel' as keyof ForecastItem,
            cell: (item: ForecastItem) => {
                const colors = {
                    'Low': 'bg-green-100 text-green-800',
                    'Medium': 'bg-yellow-100 text-yellow-800',
                    'High': 'bg-orange-100 text-orange-800',
                    'Critical': 'bg-red-100 text-red-800'
                };
                return (
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colors[item.riskLevel]}`}>
                        {item.riskLevel}
                    </span>
                );
            }
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#232f3e]">Demand Forecast</h1>
                <button className="px-4 py-2 bg-[#ff9900] text-black font-medium rounded hover:bg-[#ffad33] transition-colors shadow-sm">
                    Run Simulation
                </button>
            </div>

            <DataGrid data={mockForecasts} columns={columns} title="Upcoming Capacity Risks (7 Days)" />
        </div>
    );
}
