import logo from "../Assets/logo.png";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="flex flex-wrap justify-between text-sm">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <img src={logo} alt="Movelia Logo" className="h-10 mb-4" />
            <p className="text-gray-400">
              Dive into the world of movies and find your next adventure with
              Movelia.
            </p>
          </div>

        
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0">
            <h5 className="uppercase mb-6 font-bold text-gray-200">
              Follow Us
            </h5>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <FaFacebookF /> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <FaTwitter /> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2024 Movelia. All rights reserved.</p>
          <p className="text-gray-400 text-xs">
            <a
              href="/privacy-policy"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms-of-service"
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;