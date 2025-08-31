export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-2 sm:mb-0">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="ml-2 text-sm font-medium text-gray-900">Rygneco</span>
          </div>
          <p className="text-xs text-gray-500">
            © 2024 Rygneco. Making e-waste recycling simple and sustainable.
          </p>
        </div>
      </div>
    </footer>
  );
}