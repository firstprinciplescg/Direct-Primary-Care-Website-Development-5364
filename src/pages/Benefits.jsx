import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiClock, FiCalendar, FiVideo, FiHeart, FiTrendingDown } = FiIcons;

const Benefits = () => {
  const benefits = [
    {
      icon: FiDollarSign,
      title: "Transparent Pricing",
      description: "Always know exactly what you'll pay, with no hidden fees or surprise bills."
    },
    {
      icon: FiClock,
      title: "Extended Doctor Visits",
      description: "Spend more quality time with your doctor, addressing all your health concerns."
    },
    {
      icon: FiCalendar,
      title: "Same-Day or Next-Day Appointments",
      description: "Get immediate care when you're sick—no more waiting weeks for appointments."
    },
    {
      icon: FiVideo,
      title: "Virtual & After-Hours Care",
      description: "Access your doctor through telehealth visits, emails, texts, or phone calls outside typical office hours."
    },
    {
      icon: FiHeart,
      title: "Preventive Health Focus",
      description: "Your doctor proactively helps you stay healthy, preventing illness before it occurs."
    },
    {
      icon: FiTrendingDown,
      title: "Reduced Overall Health Costs",
      description: "Enjoy reduced prices for labs, medications, and imaging through special negotiated rates."
    }
  ];

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
              The Benefits You Deserve from Your Healthcare
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              See how Direct Primary Care prioritizes your health, convenience, and financial peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <SafeIcon icon={benefit.icon} className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DPC vs. Traditional Healthcare
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Direct Primary Care</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Healthcare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Monthly Cost</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">$50-$100</td>
                  <td className="px-6 py-4 text-sm text-center text-red-600">$300-$500+</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Appointment Wait Time</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Same/Next Day</td>
                  <td className="px-6 py-4 text-sm text-center text-red-600">2-4 Weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Visit Duration</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">30-60 minutes</td>
                  <td className="px-6 py-4 text-sm text-center text-red-600">10-15 minutes</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">After-Hours Access</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">Yes</td>
                  <td className="px-6 py-4 text-sm text-center text-red-600">Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Billing Transparency</td>
                  <td className="px-6 py-4 text-sm text-center text-green-600">100% Clear</td>
                  <td className="px-6 py-4 text-sm text-center text-red-600">Confusing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/find-provider"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Find a DPC Doctor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;