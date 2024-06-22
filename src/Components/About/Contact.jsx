import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <p className="text-gray-800 mb-4">
          Have questions? We'd love to hear from you!
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p className="text-gray-700">
              <a href="mailto:your-email@example.com" className="hover:underline">
                supriyo2k5@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Linkedin</h2>
            <p className="text-gray-700">
              <a href="https://www.linkedin.com/in/supriyo-senapati-835917280/" target='_blank'  className="hover:underline">
              Supriyo Senapati 
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;