import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-16 text-center">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img 
            src="/assets/rygn-eco-logo.png" 
            alt="RYGNeco Logo" 
            className="h-24 sm:h-32 mx-auto"
          />
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-zinc-800 mb-6 sm:mb-8 tracking-tight leading-[1.1]">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-zinc-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          We're building something special. RYGNeco is transforming e-waste recycling 
          to create a more sustainable future.
        </p>

        {/* Email Signup */}
        <div className="max-w-md mx-auto px-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent text-base"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 active:bg-zinc-900 transition-colors text-base font-medium">
              Notify Me
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-3">
            Be the first to know when we launch.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 text-zinc-600">
          <p className="text-sm sm:text-base">Questions? Contact us at</p>
          <a 
            href="mailto:info@rygneco.com" 
            className="text-zinc-800 hover:text-zinc-600 transition-colors text-sm sm:text-base font-medium"
          >
            info@rygneco.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;