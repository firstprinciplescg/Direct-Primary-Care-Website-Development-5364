import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Have questions or need help finding a Direct Primary Care provider near you? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <SafeIcon icon={FiSend} className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiMail} className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">info@directprimarycare.ai</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiPhone} className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">(555) 555-5555</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className="h-6 w-6 text-primary-600 mr-3" />
                    <span className="text-gray-700">Nationwide Service</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiFacebook} className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiTwitter} className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="bg-primary-600 text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <SafeIcon icon={FiInstagram} className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="bg-primary-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary-800 mb-4">
                  Quick Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/find-provider" className="text-primary-600 hover:text-primary-700">
                      Find a DPC Doctor
                    </a>
                  </li>
                  <li>
                    <a href="/benefits" className="text-primary-600 hover:text-primary-700">
                      Compare Traditional Care vs. DPC
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Download Free DPC Guide
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;