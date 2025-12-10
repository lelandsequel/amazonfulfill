import { KPICard } from '@/components/ui/kpi-card';
import { Package, AlertTriangle, Truck } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#232f3e]">Operations Dashboard</h1>
        <div className="text-sm text-gray-500">Last updated: Just now</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="Network Capacity Usage"
          value="87.4%"
          trend="up"
          trendValue="+2.1%"
          subtext="High utilization in NE Region"
          icon={<Package size={20} />}
        />
        <KPICard
          title="At-Risk Shipments"
          value="1,240"
          trend="down"
          trendValue="-5.3%"
          subtext="Mainly due to weather in Midwest"
          icon={<AlertTriangle size={20} />}
        />
        <KPICard
          title="Active Routes"
          value="452"
          trend="neutral"
          trendValue="0%"
          subtext="On schedule"
          icon={<Truck size={20} />}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 min-h-[400px] flex items-center justify-center text-gray-400">
        Dashboard content placeholder
      </div>
    </div>
  );
}
