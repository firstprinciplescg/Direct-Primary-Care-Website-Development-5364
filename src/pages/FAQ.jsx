import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown, FiChevronUp, FiMessageCircle } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Direct Primary Care?",
      answer: "Direct Primary Care (DPC) is a healthcare model where patients pay a monthly membership fee directly to their primary care doctor. In exchange, they get unlimited access to routine care, preventive services, and often discounts on labs and medications—without insurance hassles, copays, or hidden fees."
    },
    {
      question: "How much does DPC typically cost?",
      answer: "Monthly DPC memberships typically range from about $50 to $100 per adult, and often less for children. Fees depend on your location, age, and the provider's offerings, but most practices clearly display pricing upfront, ensuring no surprises."
    },
    {
      question: "Can I use DPC if I have insurance?",
      answer: "Absolutely! Many people use DPC alongside traditional insurance. While your DPC membership covers routine and preventive care, insurance can be used for specialists, hospital stays, surgeries, or other major medical needs. Think of DPC as a complement to insurance, not necessarily a replacement."
    },
    {
      question: "What happens if I need a specialist or hospitalization?",
      answer: "While your DPC membership covers primary care, specialists and hospitals are usually separate. However, your DPC doctor can coordinate specialist referrals, recommend trusted providers, and often negotiate discounted rates for specialist visits or procedures. You'd typically use insurance or pay negotiated cash rates for these additional services."
    },
    {
      question: "Is there a commitment or contract required?",
      answer: "Most DPC practices don't require a long-term commitment, though some may ask for an initial sign-up period (e.g., three months or six months). After that, memberships usually operate month-to-month, allowing flexibility if your circumstances change. Always check with the individual practice regarding their policies."
    },
    {
      question: "Are prescriptions and lab tests included in the monthly fee?",
      answer: "This varies by practice. Many DPC memberships include basic labs and offer common generic medications at wholesale cost or deeply discounted rates. More complex medications or specialized tests typically come at transparent, discounted cash prices. Your provider will clearly outline what's included during your initial enrollment discussion."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Quick, clear answers to common questions about Direct Primary Care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <SafeIcon
                    icon={openIndex === index ? FiChevronUp : FiChevronDown}
                    className="h-5 w-5 text-gray-500"
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <SafeIcon icon={FiMessageCircle} className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need More Answers?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Reach out directly, and we'll help you understand if DPC is right for you.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;