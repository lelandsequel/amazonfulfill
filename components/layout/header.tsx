import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center w-96">
                <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <Search size={16} />
                    </span>
                    <input
                        type="text"
                        placeholder="Search fulfillment centers, regions, or shipments..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9900] focus:border-transparent"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-500 hover:text-[#232f3e] transition-colors rounded-full hover:bg-gray-100">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                        <User size={18} />
                    </div>
                    <span className="text-sm font-medium text-[#232f3e]">Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
