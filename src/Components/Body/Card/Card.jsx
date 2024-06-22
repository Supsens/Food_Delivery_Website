import React from "react";

const Card = ({ name, rating, price, description, image, onImageError }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="relative h-48">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image}`}
          alt={name}
          onError={onImageError}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>
        <div className="flex items-center mb-2">
          <span>
            <img src="https://cdn.pixabay.com/photo/2012/04/18/15/59/star-37412_640.png" className="w-5 h-5" alt="" />
          </span>
          <span className="ml-1 text-gray-600">{rating}</span>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-semibold">Price:</span> {price}
        </p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export const withratinglable=(Card)=>{
  return (props)=>
    {
      return (
        <div className="relative bg-white shadow-lg rounded-lg">
        <label className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded z-10">
          Highly Recommended
        </label>
          <Card {...props}/>
        </div>
      )

    }
}

export default Card;


//hyerorder component

