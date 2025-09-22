import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ConfirmationPopup from "../../components/ui/ConfirmationPopup";
import axios from 'axios';

const HomePage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const handleJoinClick = () => {
        if (!email || !email.includes('@')) {
            setMessage('Please enter a valid email address');
            setIsSuccess(false);
            return;
        }
        setShowConfirmPopup(true);
    };

    const handleConfirmSubscription = async () => {
        setIsLoading(true);
        setMessage('');
        setShowConfirmPopup(false);

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

    const handleRejectSubscription = () => {
        setShowConfirmPopup(false);
        setMessage('');
    };

    return (
        <div
            className="h-screen w-full bg-white relative bg-gradient-to-br from-blue-100 via-white to-teal-100 flex flex-col overflow-hidden font-['Segoe_UI'] transition-all"
            style={{
                height: '100vh',
                width: '100%',
                fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
            }}
        >
            {/* These are not actual images, they are just placeholders */}
            {/* Logo positioned closer to Coming Soon text - zoom-safe */}
            <div className="absolute top-[20vh] sm:top-[15vh] md:top-[18vh] lg:top-[20vh] xl:top-[18vh] 2xl:top-[20vh] left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
                <div className="flex justify-center">
                    <img
                        src="/assets/rygneco-logo.png"
                        alt="RYGNeco Logo"
                        className="h-[4rem] sm:h-[3.5rem] md:h-[4rem] lg:h-[4.5rem] xl:h-[5rem] w-auto object-contain max-w-[80vw] transition-all"
                        style={{
                            imageRendering: 'crisp-edges',
                        }}
                    />
                </div>
            </div>


            {/* Hand Images positioned from screen edges - cross-browser compatible */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <img
                    src="/assets/landing/left-hand-gesture.png"
                    alt="Left Hand"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] max-h-80 w-auto object-contain opacity-80 z-5 transition-all"
                    style={{
                        imageRendering: 'crisp-edges',
                    }}
                />
                
                <img
                    src="/assets/landing/right-hand-gesture_1.png"
                    alt="Right Hand"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[18vh] sm:h-[25vh] md:h-[36vh] lg:h-[40vh] xl:h-[60vh] 2xl:h-[56vh] 3xl:h-[48vh] w-auto object-contain opacity-80 z-5 transition-all"
                    style={{
                        imageRendering: 'crisp-edges',
                    }}
                />
            </div>

            {/* Main content area with proper spacing */}
            <div className="w-full flex flex-col justify-center items-center px-4 py-8 min-h-screen">
                {/* Content Container with better responsive design */}
                <div className="w-full max-w-4xl space-y-4 sm:space-y-6 text-center pt-2 sm:pt-20 md:pt-28 lg:pt-20">
                    {/* Coming Soon Text */}
                    <div className="space-y-2 sm:space-y-4">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-900 tracking-tight leading-[0.9] font-bold px-4 sm:px-6 transition-all"
                                style={{
                                    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                                    fontWeight: 700,
                                    letterSpacing: '-0.025em',
                                }}>
                                Coming Soon
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="space-y-0 mt-4 sm:mt-6">
                            <div className="max-w-2xl mx-auto">
                                <p className="text-xs sm:text-base md:text-lg lg:text-xl text-zinc-700 leading-relaxed px-4 sm:px-6 description-responsive transition-all"
                                   style={{
                                       fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                                   }}>
                                    We're <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-bold">transforming</span> how communities and businesses handle used electronics — making it smarter, greener, and easier for everyone.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Email Signup */}
                    <div className="space-y-4 pt-8 sm:pt-12 md:pt-16 lg:pt-20">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 justify-center max-w-2xl mx-auto px-4">
                            <div className="w-full sm:flex-1 max-w-sm">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border-2 border-zinc-400 text-base placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-zinc-500 transition-all duration-200 bg-white"
                                    style={{
                                        fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                                        fontSize: '16px', // Prevents zoom on iOS
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                        borderColor: '#9ca3af', // zinc-400
                                    }}
                                />
                            </div>
                            <Button 
                                onClick={handleJoinClick}
                                disabled={isLoading}
                                className="w-full sm:w-auto flex-shrink-0 font-semibold px-6 py-3 bg-gradient-to-r from-[#236DE2] to-[#15B2AA] text-white rounded-lg hover:from-[#1e5bc7] hover:to-[#129a94] text-base transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{
                                    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                                }}
                            >
                                {isLoading ? 'Joining...' : 'Join the Movement'}
                            </Button>
                        </div>
                        {message && (
                            <p className={`text-sm px-4 transition-all ${isSuccess ? 'text-green-600' : 'text-red-600'}`}
                               style={{
                                   fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                               }}>
                                {message}
                            </p>
                        )}
                        <p className="text-sm text-zinc-600 px-4 transition-all"
                           style={{
                               fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                           }}>
                            Be the first to experience the future of sustainable tech
                        </p>
                    </div>
                </div>
            </div>

            {/* Confirmation Popup */}
            <ConfirmationPopup
                isVisible={showConfirmPopup}
                email={email}
                isLoading={isLoading}
                onConfirm={handleConfirmSubscription}
                onReject={handleRejectSubscription}
            />

            {/* Footer positioned at bottom */}
            <div className="absolute bottom-36 sm:bottom-4 left-0 right-0 px-4">
                <div className="text-center">
                    <p className="text-sm text-zinc-500 mb-2 transition-all"
                       style={{
                           fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                       }}>
                        Questions? Contact us at
                    </p>
                    <a
                        href="mailto:info@rygneco.com"
                        className="text-zinc-700 hover:text-zinc-900 text-sm font-medium transition-all duration-200 break-all sm:break-normal underline hover:no-underline"
                        style={{
                            fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                        }}
                    >
                        info@rygneco.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;