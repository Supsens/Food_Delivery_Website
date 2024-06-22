import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://wallup.net/wp-content/uploads/2018/10/04/355094-cat-meme-quote-funny-humor-grumpy-2.jpg" 
        alt="Cute Cat"
        className="w-64 h-64 rounded-lg mb-6"
      />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {error?.status ? error.status : 404} - Oops! Page Not Found
      </h1>
      {error?.message ? (
        <p className="text-gray-600 mb-6">{error.message}</p>
      ) : (
        <p className="text-gray-600 mb-6">
          Sorry, something went wrong. Please try again later.
        </p>
      )}

      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
