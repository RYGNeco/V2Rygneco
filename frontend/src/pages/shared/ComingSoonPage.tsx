import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from 'axios';

const HomePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setMessage('Please enter a valid email address');
            setIsSuccess(false);
            return;
        }

        setIsLoading(true);
        setMessage('');

        try {
            const response = await axios.post('/api/email/subscribe', {
                email: email.trim().toLowerCase()
            });

            if (response.data.success) {
                setMessage('Thank you! You\'ll be notified when we launch.');
                setIsSuccess(true);
                setEmail('');
            } else {
                setMessage(response.data.message || 'Something went wrong. Please try again.');
                setIsSuccess(false);
            }
        } catch (error: any) {
            setMessage(error.response?.data?.message || 'Failed to subscribe. Please try again.');
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="h-screen w-full bg-white relative bg-gradient-to-br from-blue-100 via-white to-teal-100 flex flex-col overflow-hidden font-['Segoe_UI']"
            style={{
                height: '100vh', // Use fixed height instead of min-height
                width: '100%',
            }}
        >
            {/* These are not actual images, they are just placeholders */}
            {/* Logo positioned at top */}
            <div className="absolute top-24 sm:top-32 2xl:top-36 3xl:top-40 left-1/2 -translate-x-1/2 z-10 max-w-[90vw] sm:max-w-none logo-container">
                <img
                    src="/assets/rygneco-logo.png"
                    alt="RYGNeco Logo"
                    className="h-16 sm:h-20 w-auto object-contain max-w-full"
                />
            </div>


            {/* Hand Images positioned from screen edges aligned with Coming Soon text */}
            <img
                src="/assets/landing/left-hand-gesture_1.png"
                alt="Left Hand"
                className="fixed left-0 top-[35%] sm:top-[40%] md:top-[45%] lg:top-[44%] -translate-y-1/2 h-48 sm:h-64 md:h-64 lg:h-52 xl:h-[26rem] 2xl:h-[28rem] w-auto object-contain opacity-80 z-5 hidden sm:block"
            />

            <img
                src="/assets/landing/right-hand-gesture_1.png"
                alt="Right Hand"
                className="fixed right-0 top-[35%] sm:top-[40%] md:top-[45%] lg:top-[40%] -translate-y-1/2 h-48 sm:h-64 md:h-64 lg:h-52 xl:h-[26rem] 2xl:h-[28rem] w-auto object-contain opacity-80 z-5 hidden sm:block"
            />

            {/* Main content area with proper spacing */}
            <div className="w-full flex flex-col justify-center items-center px-4 py-4 h-full">
                {/* Content Container with better responsive design */}
                <div className="w-full max-w-2xl space-y-2 sm:space-y-4 text-center -mt-24 sm:mt-0">
                    {/* Coming Soon Text */}
                    <div className="space-y-0 sm:space-y-3">
                        <h1 className="text-[3.75rem] xs:text-[1.8rem] sm:text-[3.2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6.3rem] 2xl:text-[6.15rem] pb-3 mb-0 text-zinc-900 tracking-tight leading-[0.9] font-bold coming-soon-text -mt-8 mb-4 px-4 sm:mt-0 sm:mb-0 sm:px-0">
                            Coming Soon
                        </h1>

                        {/* Description */}
                        <div className="space-y-0 -mt-4 sm:mt-2">
                            <p className="text-xs font-normal sm:text-sm sm:font-light md:text-lg md:font-normal lg:text-lg lg:font-light xl:text-xl xl:font-normal text-zinc-700 leading-tight max-w-2xl mx-auto px-2">
                                We're <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-bold">transforming</span> how communities and businesses handle used<br />
                                electronics — making it smarter, greener, and easier for everyone.
                            </p>
                        </div>
                    </div>

                    {/* Email Signup */}
                    <div className="space-y-2 pt-36 sm:pt-6 mt-16 sm:mt-12">
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
                        <p className="text-xs text-zinc-600 pt-2">
                            Be the first to experience the future of sustainable tech
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer positioned at bottom */}
            <div className="absolute bottom-36 sm:bottom-4 left-0 right-0 px-4">
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