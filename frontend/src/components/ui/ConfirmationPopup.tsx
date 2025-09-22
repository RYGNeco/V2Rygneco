import React from 'react';
import { Button } from "@/components/ui/button";

interface ConfirmationPopupProps {
    isVisible: boolean;
    email: string;
    isLoading: boolean;
    onConfirm: () => void;
    onReject: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
    isVisible,
    email,
    isLoading,
    onConfirm,
    onReject
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-[2px]"
                onClick={onReject}
            />
            
            {/* Popup Card */}
            <div className="relative bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-md border border-green-200/50 rounded-xl shadow-xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#236DE2] to-[#15B2AA] rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800" style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}>
                        Confirm Subscription
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}>
                        I confirm that I want to receive updates, newsletters, and notifications about RYGNeco's launch and services at <span className="font-medium text-gray-800">{email}</span>
                    </p>
                    
                    <div className="flex gap-3 pt-2">
                        <Button
                            onClick={onReject}
                            className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={onConfirm}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2 bg-gradient-to-r from-[#236DE2] to-[#15B2AA] hover:from-[#1e5bc7] hover:to-[#129a94] text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                            style={{ fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif" }}
                        >
                            {isLoading ? 'Confirming...' : 'Yes, Subscribe'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;

