import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Swiggy One
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Swiggy Instamart
              </a>
            </li>
          </ul>
        </div>
       
        <div>
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
               Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Delivery Information
              </a>
            </li>
          
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
              Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
               Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Cookie Policy
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;