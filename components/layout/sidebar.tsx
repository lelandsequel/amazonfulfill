import Link from 'next/link';
import { Home, TrendingUp, Truck, Settings, HelpCircle, FileText } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className="w-64 bg-[#232f3e] text-white h-screen flex flex-col fixed left-0 top-0 overflow-y-auto">
            <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
                <div className="w-8 h-8 bg-[#ff9900] rounded flex items-center justify-center font-bold text-black">
                    A
                </div>
                <span className="font-bold text-lg tracking-tight">FFRO</span>
            </div>

            <nav className="flex-1 py-4">
                <div className="px-4 mb-2 text-xs text-gray-400 uppercase font-semibold">Operations</div>
                <ul className="space-y-1">
                    <li>
                        <Link href="/" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <Home size={18} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/forecast" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <TrendingUp size={18} />
                            <span>Forecast</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/routing" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <Truck size={18} />
                            <span>Routing Optimizer</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/case-study" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <FileText size={18} />
                            <span>Case Study</span>
                        </Link>
                    </li>
                </ul>

                <div className="px-4 mt-8 mb-2 text-xs text-gray-400 uppercase font-semibold">System</div>
                <ul className="space-y-1">
                    <li>
                        <Link href="/settings" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <Settings size={18} />
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-700 hover:text-white text-gray-300 transition-colors">
                            <HelpCircle size={18} />
                            <span>Help & Support</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs">US</div>
                    <div className="text-sm">
                        <div className="font-medium">User Admin</div>
                        <div className="text-xs text-gray-400">Ops Manager</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
