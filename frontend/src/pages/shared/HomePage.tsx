import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-sky-100">
      {/* Logo in top left */}
      <div className="fixed top-4 sm:top-8 left-4 sm:left-8 lg:left-12 z-50">
        <img
          src="/assets/rygn-eco-logo.png"
          alt="RYGNeco Logo"
          className="h-16 sm:h-20 w-auto object-contain"
        />
      </div>

      <div className="w-full min-h-screen flex flex-col justify-center px-4 sm:px-0 sm:pl-8 lg:pl-12 pt-22 sm:pt-32">
        {/* Content Container */}
        <div className="max-w-xl space-y-8 sm:space-y-12">
          {/* Coming Soon Text */}
          <div className="space-y-4 sm:space-y-6">

            <div className="space-y-0">
            <h3 className="text-base sm:text-2xl text-zinc-900 font-lightbold tracking-wide leading-none mb-0 ml-2">
              We're almost there
            </h3>
            <h1 className="text-7xl sm:text-9xl md:text-8xl text-zinc-900 tracking-tight leading-[0.95]">
              Coming<br className="sm:hidden" /> Soon</h1>
            </div>
            {/* Description */}
            <p className="text-lg sm:text-1xl text-zinc-600 leading-relaxed max-w-lg font-extralight">
              We're building something special. RYGNeco is transforming e-waste recycling
              to create a more sustainable future.
            </p>
          </div>

          {/* Email Signup */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 sm:px-5 py-3 rounded-lg border border-zinc-200 text-base placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400"
                />
              </div>
              <button className="sm:flex-none px-5 sm:px-6 py-3 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 text-base whitespace-nowrap">
                Notify Me
              </button>
            </div>
            <p className="text-sm text-zinc-700">
              Be the first to know when we launch.
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-6 sm:pt-8">
            <p className="text-sm sm:text-base text-zinc-500 mb-1.5">Questions? Contact us at</p>
            <a
              href="mailto:info@rygneco.com"
              className="text-zinc-800 hover:text-zinc-600 text-sm sm:text-base inline-block"
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