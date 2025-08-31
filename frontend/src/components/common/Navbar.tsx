import { Home, User, LogIn } from "lucide-react";
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="bg-white shadow-lg rounded-2xl border border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo */}
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
              <span className="text-green-600 font-bold text-2xl">R</span>
              <span className="ml-2 text-lg font-bold text-gray-900">Rygneco</span>
            </Link>

            {/* Center - Navigation Options */}
            <div className="flex items-center space-x-6">
              {/* Login/Signup */}
              <Link to="/auth/login"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 fill-none">
                <LogIn className="w-5 h-5" />
                <span className="hidden sm:block">Login/Signup</span>
              </Link>

              {/* Dashboard/Homepage Icon */}
              <Link to="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                <Home className="w-5 h-5" />
                <span className="hidden sm:block">Dashboard</span>
              </Link>
            </div>

            {/* Right side - Profile Icon */}
            <div className="flex items-center">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-200">
                <User className="w-5 h-5" />
                <span className="hidden sm:block">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}