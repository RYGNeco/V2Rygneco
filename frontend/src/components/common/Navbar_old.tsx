import { Home, User, LogIn } from "lucide-react";
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-5xl px-2 sm:px-4">
        <nav className="my-2 sm:my-4 bg-white/95 backdrop-blur-sm border border-zinc-200 rounded-full shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)] transition-shadow duration-300">
          <div className="px-3 sm:px-6">
            <div className="flex h-12 sm:h-14 items-center justify-between">
              {/* Left side - Logo */}
              <Link 
                to="/" 
                className="flex items-center space-x-2 hover:opacity-80 transition-all duration-200"
              >
                <img 
                  src="/assets/rygn-eco-logo.png"
                  alt="RYGNeco"
                  className="h-10 sm:h-12 w-auto"
                />
              </Link>

              {/* Right side - Navigation */}
              <div className="flex items-center">
                <div className="flex space-x-1 sm:space-x-4 bg-zinc-50/50 rounded-full p-1 sm:p-0 sm:bg-transparent">
                  {/* <Link 
                    to="/auth/login"
                    className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 text-sm font-medium rounded-full hover:bg-white/50 active:bg-white/80"
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="hidden sm:block">Sign in</span>
                  </Link>

                  <Link 
                    to="/dashboard" 
                    className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 text-sm font-medium rounded-full hover:bg-white/50 active:bg-white/80"
                  >
                    <Home className="w-4 h-4" />
                    <span className="hidden sm:block">Dashboard</span>
                  </Link> */}

                  {/* <button 
                    className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors px-2 sm:px-3 py-1.5 sm:py-2 text-sm font-medium rounded-full hover:bg-white/50 active:bg-white/80"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:block">Profile</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}