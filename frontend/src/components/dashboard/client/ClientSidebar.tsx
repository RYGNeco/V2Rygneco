import { Link, useLocation } from 'react-router-dom';
import {
    RiHistoryLine,
    RiFileList3Line,
    RiUserSettingsLine,
    RiMenuFoldLine,
    RiMenuUnfoldLine,
    RiUserLine,
    RiHome2Line
} from 'react-icons/ri';
import { useSidebar } from '../../../context/SidebarContext';

const ClientSidebar = () => {
    const { isCollapsed, setIsCollapsed } = useSidebar();
    const location = useLocation();

    const menuItems = [
        { path: '/client', label: 'History', icon: RiHistoryLine },
        { path: '/client/requests', label: 'Requests', icon: RiFileList3Line },
        { path: '/client/profile', label: 'User Management', icon: RiUserSettingsLine },
    ];

    const isActiveRoute = (path: string) => {
        return location.pathname === path;
    };

    return (
        <div
            className={`bg-white h-screen fixed left-0 top-0 transition-all duration-300 ease-in-out shadow-lg flex flex-col
      ${isCollapsed ? 'w-20' : 'w-64'}`}
        >
            {/* Sidebar Header */}
            <div className="h-16 px-4 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center min-w-0 flex-1">
                    <h2
                        className={`text-gray-800 font-semibold text-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[160px]
            ${isCollapsed ? 'w-0 opacity-0 mr-0' : 'w-full opacity-100 mr-2'}`}
                    >
                        Client Panel
                    </h2>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-gray-800 ml-auto flex-shrink-0"
                    >
                        {isCollapsed ? <RiMenuUnfoldLine size={20} /> : <RiMenuFoldLine size={20} />}
                    </button>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 mt-6 px-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center h-11 px-3 rounded-lg mb-1 transition-all duration-200
                ${isActiveRoute(item.path)
                                    ? 'bg-blue-50 text-blue-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <div className="flex items-center min-w-0 flex-1">
                                <Icon size={20} className="flex-shrink-0" />
                                <span
                                    className={`ml-3 font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
                  ${isCollapsed ? 'w-0 opacity-0' : 'w-32 opacity-100'}`}
                                >
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </nav>

            {/* Back to Home Button */}
            <div className="px-2 mb-4">
                <Link
                    to="/"
                    className="flex items-center h-11 px-3 rounded-lg transition-all duration-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                    <div className="flex items-center min-w-0 flex-1">
                        <RiHome2Line size={20} className="flex-shrink-0" />
                        <span
                            className={`ml-3 font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
              ${isCollapsed ? 'w-0 opacity-0' : 'w-32 opacity-100'}`}
                        >
                            Back to Home
                        </span>
                    </div>
                </Link>
            </div>

            {/* User Profile Section */}
            <div className="border-t border-gray-100">
                <div className="p-4">
                    <div className="flex items-center min-w-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <RiUserLine className="text-gray-600" />
                        </div>
                        <div className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out min-w-0
              ${isCollapsed ? 'w-0 opacity-0' : 'w-40 opacity-100'}`}>
                            <p className="text-sm font-medium text-gray-800 whitespace-nowrap truncate">Client User</p>
                            <p className="text-xs text-gray-500 whitespace-nowrap truncate">client@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSidebar;