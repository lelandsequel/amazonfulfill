import { DataGrid } from '@/components/ui/data-grid';
import { mockRoutes, RouteRecommendation } from '@/lib/mock-data';

export default function RoutingPage() {
    const columns = [
        { header: 'Origin', accessorKey: 'origin' as keyof RouteRecommendation },
        { header: 'Destination', accessorKey: 'destination' as keyof RouteRecommendation },
        { header: 'Current Carrier', accessorKey: 'currentCarrier' as keyof RouteRecommendation },
        { header: 'Recommended', accessorKey: 'recommendedCarrier' as keyof RouteRecommendation, cell: (item: RouteRecommendation) => <span className="font-semibold text-[#007185]">{item.recommendedCarrier}</span> },
        {
            header: 'Est. Savings',
            accessorKey: 'costSavings' as keyof RouteRecommendation,
            cell: (item: RouteRecommendation) => (
                <span className={item.costSavings > 0 ? 'text-green-600' : 'text-red-500'}>
                    {item.costSavings > 0 ? `+$${item.costSavings}` : `-$${Math.abs(item.costSavings)}`}
                </span>
            )
        },
        { header: 'SLA Impact', accessorKey: 'slaImpact' as keyof RouteRecommendation },
        {
            header: 'Action',
            accessorKey: 'id' as keyof RouteRecommendation,
            cell: () => (
                <button className="text-sm text-[#007185] hover:underline font-medium">
                    Review
                </button>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-[#232f3e]">Routing Optimizer</h1>
                <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 font-medium rounded hover:bg-gray-50 transition-colors shadow-sm">
                    Export Report
                </button>
            </div>

            <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-md text-sm flex items-start">
                <span className="font-bold mr-1">AI Insight:</span>
                rerouting Midwest volume to &quot;Amazon Logistics&quot; could save $1,500/day while maintaining SLA.
            </div>

            <DataGrid data={mockRoutes} columns={columns} title="Optimization Recommendations" />
        </div>
    );
}
