import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sustainable E-Waste
            <span className="text-green-600"> Recycling</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in creating a greener future by responsibly recycling your electronic waste. 
            We make e-waste disposal simple, secure, and environmentally friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Schedule Pickup
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-700 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Free Pickup</h4>
              <p className="text-gray-600">Convenient pickup service for businesses and households</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure Recycling</h4>
              <p className="text-gray-600">Data destruction and environmentally safe processing</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Certification</h4>
              <p className="text-gray-600">Compliance certificates for your records</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">About Rygneco</h3>
              <p className="text-gray-600 mb-4">
                We are a leading e-waste recycling company committed to environmental sustainability 
                and responsible electronic waste management.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities ensure that your electronic devices are processed 
                safely while recovering valuable materials for reuse.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">1000+</div>
                  <div className="text-sm text-gray-500">Businesses Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-500">Devices Recycled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">99%</div>
                  <div className="text-sm text-gray-500">Recovery Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-green-600 h-64 rounded-lg flex items-center justify-center">
              <span className="text-white text-4xl font-bold">Rygneco</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h3>
          <p className="text-gray-600 mb-8">
            Ready to recycle your e-waste responsibly? Contact us for a free consultation.
          </p>
         
        </div>
      </section>


    </div>
  );
};

export default HomePage;