import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiDollarSign, FiList, FiClock, FiStar, FiExternalLink } = FiIcons;

const FindProvider = () => {
  const [zipCode, setZipCode] = useState('');

  const resources = [
    {
      name: "DPC Frontier Mapper",
      url: "https://mapper.dpcfrontier.com",
      description: "Interactive U.S. map of 2,600-plus direct-primary-care practices; plug in your ZIP code to see clinics near you."
    },
    {
      name: "DPC Alliance Member Directory",
      url: "https://dpcalliance.org/member-directory-map/",
      description: "Map & list of alliance-member practices; filters by state, city, or ZIP and flags direct-specialty physicians as well."
    },
    {
      name: "Find My Direct Doctor",
      url: "https://www.findmydirectdoctor.com",
      description: "Consumer directory that matches patients with subscription-based primary-care or specialty clinicians nationwide."
    }
  ];

  const tips = [
    {
      icon: FiDollarSign,
      title: "Membership Costs",
      description: "Understand what's included in your monthly fee."
    },
    {
      icon: FiList,
      title: "Scope of Services",
      description: "Confirm which services, labs, or procedures are covered."
    },
    {
      icon: FiClock,
      title: "After-hours & Telehealth",
      description: "Verify availability of remote and urgent care services."
    },
    {
      icon: FiStar,
      title: "Patient Reviews & Testimonials",
      description: "See how others rate the doctor's care."
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would perform the search
    alert(`Searching for DPC providers near ${zipCode}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your DPC Doctor Today
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Use our easy search tool to find Direct Primary Care physicians near you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Tool */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Search Our DPC Directory
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Enter your location below to view Direct Primary Care providers in your area.
            </p>

            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-r-lg hover:bg-primary-700 transition-colors"
                >
                  <SafeIcon icon={FiSearch} className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* DPC Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              DPC Provider Directories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-3">{resource.name}</h4>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Visit Directory
                    <SafeIcon icon={FiExternalLink} className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips for Choosing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips for Choosing Your Provider
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <SafeIcon icon={tip.icon} className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Get a Free Guide to Choosing a DPC Provider
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindProvider;