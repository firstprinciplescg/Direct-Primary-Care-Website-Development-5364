import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiHeart} className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">DirectPrimaryCare.ai</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Discover Direct Primary Care—transparent, affordable healthcare designed around you, not insurance companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <SafeIcon icon={FiFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <SafeIcon icon={FiTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <SafeIcon icon={FiInstagram} className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400">About DPC</Link></li>
              <li><Link to="/benefits" className="text-gray-400 hover:text-primary-400">Benefits</Link></li>
              <li><Link to="/find-provider" className="text-gray-400 hover:text-primary-400">Find a Provider</Link></li>
              <li><Link to="/cost-tools" className="text-gray-400 hover:text-primary-400">Cost Tools</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-primary-400">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-400">Find a DPC Doctor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">Compare Traditional vs. DPC</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">Download Free DPC Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DirectPrimaryCare.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;