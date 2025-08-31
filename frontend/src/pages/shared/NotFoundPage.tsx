import { Link } from 'react-router-dom';
import { RiHome2Line, RiErrorWarningLine } from 'react-icons/ri';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4">
                <div className="flex justify-center mb-4">
                    <RiErrorWarningLine className="text-gray-400" size={64} />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">404</h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    <RiHome2Line size={20} />
                    <span>Back to Home</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;