import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card, { withratinglable } from "./Card/Card";
import { useSwiggyApi } from "../../Utils/useSwiggyApi";
import useStatus from "../../Utils/useStatus";
import RestaurantListSkeleton from "../RestaurantShimmerUi/RestaurantListSkeleton";

const Body = () => {
  const { data, loading } = useSwiggyApi();
  const [filterdata, setFilterData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const onlineStatus = useStatus();
 const RestaurantCardWithratting=withratinglable(Card);
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleSearch = () => {
    const filteredData = data.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const handleReset = () => {
    setFilterData(data);
    setSearchInput("");
  };

  const handleImageError = (index) => {
    setFilterData((prevData) => prevData.filter((_, i) => i !== index));
  };

  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-red-400 to-red-600">
        <h1 className="text-3xl font-bold mb-2 text-white">
          YOU ARE OFFLINE
        </h1>
        <h1 className="text-xl text-white">CHECK YOUR CONNECTION</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <RestaurantListSkeleton/>
    )
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center mb-8 space-x-4">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search here"
            className="border border-gray-300 rounded-full py-2 pl-10 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full transition duration-300"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full shadow-md transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filterdata.map((restaurant, index) => (
          <Link key={index} to={`/restaurant/${restaurant.info.id}`}>
            {
              restaurant.info.avgRating>=4.5?
              <RestaurantCardWithratting
              key={index}
              name={restaurant.info.name}
              rating={restaurant.info.avgRating}
              price={restaurant.info.costForTwo}
              description={restaurant.info.areaName}
              image={restaurant.info.cloudinaryImageId}
              onImageError={() => handleImageError(index)}
            /> : <Card
              key={index}
              name={restaurant.info.name}
              rating={restaurant.info.avgRating}
              price={restaurant.info.costForTwo}
              description={restaurant.info.areaName}
              image={restaurant.info.cloudinaryImageId}
              onImageError={() => handleImageError(index)}
            />
            }
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;