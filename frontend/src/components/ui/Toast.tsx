// components/ui/Toast.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';

interface Toast {
    id: string;
    type: 'success' | 'error' | 'warning';
    message: string;
}

interface ToastContextType {
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const addToast = (type: Toast['type'], message: string) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts(prev => [...prev, { id, type, message }]);
        setTimeout(() => removeToast(id), 5000);
    };

    const showSuccess = (message: string) => addToast('success', message);
    const showError = (message: string) => addToast('error', message);
    const showWarning = (message: string) => addToast('warning', message);

    const getIcon = (type: Toast['type']) => {
        switch (type) {
            case 'success': return <CheckCircle className="w-5 h-5" />;
            case 'error': return <XCircle className="w-5 h-5" />;
            case 'warning': return <AlertTriangle className="w-5 h-5" />;
        }
    };

    const getStyles = (type: Toast['type']) => {
        switch (type) {
            case 'success': return 'bg-green-50 text-green-800 border-green-200';
            case 'error': return 'bg-red-50 text-red-800 border-red-200';
            case 'warning': return 'bg-yellow-50 text-yellow-800 border-yellow-200';
        }
    };

    return (
        <ToastContext.Provider value={{ showSuccess, showError, showWarning }}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`flex items-center p-4 rounded-lg border shadow-lg ${getStyles(toast.type)}`}
                    >
                        {getIcon(toast.type)}
                        <span className="ml-3 text-sm font-medium">{toast.message}</span>
                        <button
                            onClick={() => removeToast(toast.id)}
                            className="ml-auto text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};