import { RiRefreshLine, RiAlertLine } from 'react-icons/ri';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4">
                <div className="flex justify-center mb-4">
                    <RiAlertLine className="text-red-500" size={64} />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
                <p className="text-gray-600 mb-8">
                    We're sorry, but there was an error processing your request.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    <RiRefreshLine size={20} />
                    <span>Refresh Page</span>
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;