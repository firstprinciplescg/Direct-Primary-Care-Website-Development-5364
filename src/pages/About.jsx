import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiShield, FiUsers, FiArrowRight } = FiIcons;

const About = () => {
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
              What is Direct Primary Care?
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Direct Primary Care (DPC) is healthcare simplified. Pay one affordable monthly membership fee directly to your doctor and receive unlimited, personalized care without insurance complications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How DPC Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding the DPC Model
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <SafeIcon icon={FiDollarSign} className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Flat Monthly Fees</h3>
              <p className="text-gray-600">
                One predictable membership fee covers your regular primary care visits, preventive care, and basic procedures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <SafeIcon icon={FiShield} className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">No Insurance Hassles</h3>
              <p className="text-gray-600">
                Forget confusing bills and copays. Your doctor works directly for you, not your insurance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <SafeIcon icon={FiUsers} className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Smaller Patient Panels</h3>
              <p className="text-gray-600">
                Your doctor sees fewer patients, providing longer appointments and higher-quality care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Consider DPC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is DPC Right for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              DPC is great if you prefer predictable healthcare costs, a close relationship with your doctor, or are self-employed, uninsured, or underinsured.
            </p>
            <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">DPC is ideal for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Self-employed individuals</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Uninsured or underinsured people</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Those seeking predictable costs</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Patients wanting closer doctor relationships</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Families with chronic conditions</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiArrowRight} className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Those frustrated with traditional healthcare</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/benefits"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Compare DPC vs. Traditional Care
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;