import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

interface KPICardProps {
    title: string;
    value: string | number;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
    subtext?: string;
    icon?: React.ReactNode;
}

export function KPICard({ title, value, trend, trendValue, subtext, icon }: KPICardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">{title}</h3>
                    <div className="mt-2 flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-[#232f3e]">{value}</span>
                        {trend && (
                            <span className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-green-600' :
                                    trend === 'down' ? 'text-red-500' : 'text-gray-500'
                                }`}>
                                {trend === 'up' && <ArrowUp size={14} className="mr-1" />}
                                {trend === 'down' && <ArrowDown size={14} className="mr-1" />}
                                {trend === 'neutral' && <Minus size={14} className="mr-1" />}
                                {trendValue}
                            </span>
                        )}
                    </div>
                </div>
                {icon && (
                    <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
                        {icon}
                    </div>
                )}
            </div>
            {subtext && (
                <p className="mt-2 text-sm text-gray-400">{subtext}</p>
            )}
        </div>
    );
}
