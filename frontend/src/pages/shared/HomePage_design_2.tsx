import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-stone-50/30 to-warm-gray-100/40 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_50%)]" />
      {/* Logo in top left */}
      <div className="fixed top-4 sm:top-8 left-6 sm:left-12 lg:left-16 xl:left-24 z-50">
        <img
          src="/assets/rygn-eco-logo.png"
          alt="RYGNeco Logo"
          className="h-10 sm:h-14 w-auto object-contain"
        />
      </div>

      <div className="w-full min-h-screen flex flex-col justify-center px-6 sm:px-0 sm:pl-12 lg:pl-16 xl:pl-24">
        {/* Content Container */}
        <div className="max-w-xl space-y-8 sm:space-y-12 -mt-16 sm:mt-0">
          {/* Coming Soon Text */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight text-zinc-900 tracking-tight leading-[0.95] select-none">
              Coming<br className="sm:hidden" /> Soon</h1>

            {/* Description */}
            <p className="text-lg sm:text-2xl text-zinc-600 leading-relaxed max-w-lg font-extralight">
              We're building something special. RYGNeco is transforming e-waste recycling
              to create a more sustainable future.
            </p>
          </div>

          {/* Email Signup */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
              <div className="relative flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 sm:px-5 py-3 rounded-lg border border-zinc-200 
                           text-base placeholder:text-zinc-400 font-light
                           focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-transparent
                           transition-all duration-200"
                />
              </div>
              <button className="sm:flex-none px-5 sm:px-6 py-3 bg-zinc-900 text-white rounded-lg 
                               hover:bg-zinc-800 active:bg-zinc-950 
                               transition-colors duration-200 text-base font-light
                               shadow-sm hover:shadow-md whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <p className="text-sm text-zinc-500 font-light">
              Be the first to know when we launch.
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-6 sm:pt-8">
            <p className="text-sm sm:text-base text-zinc-500 mb-1.5 font-light">Questions? Contact us at</p>
            <a
              href="mailto:info@rygneco.com"
              className="text-zinc-800 hover:text-zinc-600 transition-colors duration-200 
                       text-sm sm:text-base font-normal inline-block"
            >
              info@rygneco.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;