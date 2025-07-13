import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiClock, FiHeart, FiSearch } = FiIcons;

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Take Charge of Your Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover Direct Primary Care—transparent, affordable healthcare designed around you, not insurance companies.
            </p>
            <Link
              to="/about"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Explore Direct Primary Care
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Love Direct Primary Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiDollarSign} className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Affordable & Transparent Pricing</h3>
              <p className="text-gray-600">
                Never guess what you'll pay again. Flat monthly fees, no co-pays, no surprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiClock} className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Better Access to Your Doctor</h3>
              <p className="text-gray-600">
                Same-day appointments, longer visits, and direct communication when you need it most.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiHeart} className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Personalized, Preventive Healthcare</h3>
              <p className="text-gray-600">
                Build a real relationship with a doctor who knows you, not just your chart.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/benefits"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Learn More About DPC
            </Link>
          </div>
        </div>
      </section>

      {/* Find a DPC Provider Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SafeIcon icon={FiSearch} className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find a Direct Primary Care Doctor Near You
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Search our nationwide directory to find the right DPC physician for your family.
            </p>
            <Link
              to="/find-provider"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Search Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;