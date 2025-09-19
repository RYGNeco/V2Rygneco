import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full bg-white relative bg-gradient-to-br from-indigo-100 via-white to-sky-100 flex flex-col"
      style={{
        minHeight: '100dvh', // Use min-height instead of fixed height
        width: '100%', // Use 100% instead of 100vw to avoid horizontal scroll
      }}
    >
      {/* Logo positioned at top */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10">
        <img
          src="/assets/rygneco-logo.png"
          alt="RYGNeco Logo"
          className="h-16 sm:h-20 w-auto object-contain"
        />
      </div>

      {/* Main content area with proper spacing */}
      <div className="flex-1 w-full flex flex-col justify-center items-center px-4 py-16 sm:py-20">
        {/* Content Container with better responsive design */}
        <div className="w-full max-w-2xl space-y-4 sm:space-y-6 md:space-y-8 text-center">
          {/* Coming Soon Text */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-zinc-900 tracking-tight leading-[0.9] font-bold break-words">
              <span className="block sm:inline">Coming</span> <span className="block sm:inline">Soon</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-700 leading-relaxed max-w-xl sm:max-w-2xl mx-auto font-light px-2">
              We're transforming how communities and businesses handle e-waste. RYGNeco makes recycling smarter, greener, and easier for everyone.
            </p>
          </div>

          {/* Email Signup */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-stretch gap-3 justify-center max-w-lg mx-auto">
              <div className="relative flex-1 min-w-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-base placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-0"
                />
              </div>
              <button className="flex-shrink-0 font-semibold px-6 py-3 bg-gradient-to-r from-[#236DE2] to-[#15B2AA] text-white rounded-lg hover:from-[#1e5bc7] hover:to-[#129a94] text-base transition-all duration-200 shadow-lg hover:shadow-xl min-w-fit">
                Join the Movement
              </button>
            </div>
            <p className="text-sm text-zinc-600">
              Be the first to experience the future of sustainable tech
            </p>
          </div>
        </div>
      </div>

      {/* Footer positioned at bottom */}
      <div className="mt-auto pt-8 pb-4">
        <div className="text-center px-4">
          <p className="text-sm text-zinc-500 mb-1">Questions? Contact us at</p>
          <a
            href="mailto:info@rygneco.com"
            className="text-zinc-700 hover:text-zinc-900 text-sm font-medium transition-colors duration-200 break-all sm:break-normal"
          >
            info@rygneco.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;