import React from "react";
import { LOGO_URL } from "../../Utils/logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../../Utils/useStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [userstate, setUserstate] = useState("Login");
  const onlinestatus = useStatus();
  const cart=useSelector((store=>store.cart.items))

  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="logo">
        <img className="w-16 h-16 rounded-full" src={LOGO_URL} alt="Logo" />
      </div>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6 text-white font-semibold">
          <li>
            <Link className="hover:text-gray-400 transition duration-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 transition duration-300" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 transition duration-300" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-400 transition duration-300" to="/Cart">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
            onClick={() => {
              setUserstate(userstate === "Login" ? "Logout" : "Login");
            }}
          >
            {userstate}
          </button>
          {onlinestatus === false ? (
            <button className="bg-red-500 text-white py-2 px-4 rounded-full cursor-not-allowed">
              Offline
            </button>
          ) : (
            <button className="bg-green-500 text-white py-2 px-4 rounded-full cursor-not-allowed">
              Online
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
