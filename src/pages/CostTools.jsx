import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiSearch, FiFileText, FiExternalLink, FiDownload } = FiIcons;

const CostTools = () => {
  const tools = [
    {
      name: "FAIR Health Consumer Cost-Lookup",
      url: "https://www.fairhealthconsumer.org/",
      description: "See typical medical costs by procedure in your area.",
      icon: FiSearch
    },
    {
      name: "Healthcare Bluebook",
      url: "https://www.healthcarebluebook.com/",
      description: "Find \"fair prices\" and quality ratings for medical services near you.",
      icon: FiFileText
    },
    {
      name: "CMS Medicare Fee Schedule",
      url: "https://www.cms.gov/medicare/physician-fee-schedule/search",
      description: "Access baseline pricing used by Medicare for thousands of procedures.",
      icon: FiDollarSign
    }
  ];

  const additionalResources = [
    {
      name: "Plain-language explainer (HealthInsurance.org)",
      url: "https://www.healthinsurance.org/glossary/direct-primary-care/",
      description: "Breakdown of how DPC works, what the monthly fee covers, and where it fits alongside major-medical insurance."
    },
    {
      name: "AAFP overview & FAQs",
      url: "https://www.aafp.org/family-physician/practice-and-career/delivery-payment-models/direct-primary-care.html",
      description: "American Academy of Family Physicians page that answers common patient questions and links to additional resources."
    },
    {
      name: "Direct Primary Care Coalition",
      url: "https://www.dpcare.org/",
      description: "Advocacy group site with news, policy updates, and consumer-oriented primers on the model's benefits and growth."
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
              Know Your Costs Upfront
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              We've gathered the best tools and resources to help you understand the true cost of medical services with DPC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tools to Estimate and Compare Healthcare Costs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <SafeIcon icon={tool.icon} className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{tool.name}</h3>
                <p className="text-gray-600 mb-6">{tool.description}</p>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Visit Tool
                  <SafeIcon icon={FiExternalLink} className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Care Pricing Explained */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Medical Procedure Costs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Clear up confusion about medical pricing. Learn about bundled fees, cash-pay discounts, and transparent billing practices.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Key Cost Concepts in DPC:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">Monthly Membership</h4>
                  <p className="text-gray-600">Fixed fee covering routine care, preventive services, and basic procedures.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">Cash-Pay Discounts</h4>
                  <p className="text-gray-600">Significant savings on labs, imaging, and medications through direct negotiation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">Transparent Billing</h4>
                  <p className="text-gray-600">No hidden fees, surprise bills, or insurance claim complications.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">Bundled Services</h4>
                  <p className="text-gray-600">Many services included in membership fee, reducing per-visit costs.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center">
              <SafeIcon icon={FiDownload} className="h-5 w-5 mr-2" />
              Download Cost Transparency Guide
            </button>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional DPC Resources
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3">{resource.name}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn More
                  <SafeIcon icon={FiExternalLink} className="h-4 w-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostTools;