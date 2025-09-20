import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HomePage: React.FC = () => {
    return (
        <div
            className="min-h-screen w-full bg-white relative bg-gradient-to-br from-blue-100 via-white to-teal-100 flex flex-col zoom-safe"
            style={{
                minHeight: '100vh', // Use min-height to allow content to flow naturally
                width: '100%', // Use 100% instead of 100vw to avoid horizontal scroll
            }}
        >
            {/* These are not actual images, they are just placeholders */}
            {/* Logo positioned at top */}
            <div className="absolute top-8 sm:top-20 left-1/2 -translate-x-1/2 z-10 max-w-[90vw] sm:max-w-none logo-container">
                <img
                    src="/assets/rygneco-logo.png"
                    alt="RYGNeco Logo"
                    className="h-16 sm:h-20 w-auto object-contain max-w-full"
                />
            </div>


            {/* Hand Images positioned from screen edges aligned with Coming Soon text */}
            <img
                src="/assets/landing/left-hand-gesture.png"
                alt="Left Hand"
                className="fixed left-0 top-[35%] sm:top-[40%] md:top-[45%] lg:top-[30%] -translate-y-1/2 h-32 sm:h-40 md:h-48 lg:h-32 xl:h-64 2xl:h-96 w-auto object-contain opacity-80 z-5 hidden sm:block"
            />

            <img
                src="/assets/landing/right-hand-gesture.png"
                alt="Right Hand"
                className="fixed right-0 top-[35%] sm:top-[40%] md:top-[45%] lg:top-[34%] -translate-y-1/2 h-32 sm:h-40 md:h-48 lg:h-32 xl:h-64 2xl:h-96 w-auto object-contain opacity-80 z-5 hidden sm:block"
            />

            {/* Main content area with proper spacing */}
            <div className="w-full flex flex-col justify-start sm:justify-center items-center px-4 py-2 sm:py-20 pt-20 sm:pt-36 high-zoom-safe">
                {/* Content Container with better responsive design */}
                <div className="w-full max-w-2xl space-y-2 sm:space-y-6 md:space-y-8 text-center pt-24 sm:pt-2">
                    {/* Coming Soon Text */}
                    <div className="space-y-1 sm:space-y-4 md:space-y-6">
                        <h1 className="font-space text-[3rem] xs:text-[2rem] sm:text-[3.85rem] md:text-[4.125rem] lg:text-[4.95rem] xl:text-[5.5rem] 2xl:text-[6.6rem] pb-3 sm:pb-1 text-zinc-900 tracking-tight leading-[0.9] font-bold coming-soon-text">
                            Coming Soon
                        </h1>

                        {/* Description */}
                        <div className="space-y-3">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-zinc-900 leading-tight max-w-3xl mx-auto font-bold px-2">
                                We're <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">transforming</span> how communities and businesses handle e-waste.
                            </p>
                            {/* <p className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed max-w-2xl mx-auto font-medium px-2">
                                RYGNeco makes recycling smarter, greener, and easier for everyone.
                            </p> */}
                        </div>
                    </div>

                    {/* Email Signup */}
                    <div className="space-y-2 pt-12 sm:pt-12 sm:mt-8">
                            <div className="flex flex-col sm:flex-row sm:items-stretch gap-6 sm:gap-3 justify-center max-w-lg mx-auto">
                                <div className="relative flex-1 min-w-0">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 text-base placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-w-0"
                                    />
                                </div>
                                <Button className="flex-shrink-0 font-semibold px-6 py-3 bg-gradient-to-r from-[#236DE2] to-[#15B2AA] text-white rounded-lg hover:from-[#1e5bc7] hover:to-[#129a94] text-base transition-all duration-200 shadow-lg hover:shadow-xl min-w-fit">
                                    Join the Movement
                                </Button>
                            </div>
                        <p className="text-sm text-zinc-600 pt-2 sm:pt-2">
                            Be the first to experience the future of sustainable tech
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer positioned at 80% height on mobile, normal flow on desktop */}
            <div className="absolute bottom-[20vh] left-0 right-0 sm:relative sm:bottom-auto sm:left-auto sm:right-auto px-4 sm:px-20 pb-1 sm:mt-auto sm:pt-8 sm:pb-4">
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