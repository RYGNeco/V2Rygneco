import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
    // OR navigate to specific route: navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Back Arrow Button - Top Left */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-200 group"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-green-600 transition-colors" />
      </button>

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          
          <h1 className="text-2xl font-bold text-gray-900">Rygneco</h1>
          <p className="text-gray-600 text-sm mt-2">Sustainable E-Waste Recycling</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © 2024 Rygneco. Making e-waste recycling simple and sustainable.
        </p>
      </div>
    </div>
  );
}