import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">About This Project</h1>
        <p className="text-gray-800 mb-6">
          Welcome to our food delivery app! We're passionate about connecting
          hungry people with delicious food from the best local restaurants. Our
          mission is to make ordering food online as easy and enjoyable as
          possible.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Created By</h2>
            <p className="text-gray-700">Supriyo</p> 
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Technology</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Tailwind CSS</li>
             
            </ul>
          </div>
        </div>

        <p className="text-gray-800 mt-8 text-center">
          We hope you enjoy using our app!
        </p>
      </div>
    </div>
  );
};

export default About;