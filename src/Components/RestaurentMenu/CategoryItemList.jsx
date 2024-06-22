import React from "react";

const CategoryItemList = (props) => {
  return (
    props.arrayofcard.map((ele, index) => (
      <div key={index} className="flex items-center p-6 border-b border-gray-200 bg-white shadow-sm rounded-lg mb-4 transition-transform transform hover:scale-105">
        <div className="img flex-shrink-0 mr-6">
          <img className="w-32 h-32 object-cover rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele.card.info.imageId}`} alt={ele.card.info.name} />
        </div>
        <div className="textpart flex-1">
          <span className="itemname block text-2xl font-bold text-gray-900">{ele.card.info.name}</span>
          <h2 className="itemprice text-xl text-green-600 mt-2">₹{((ele.card.info.price || ele.card.info.defaultPrice) / 100).toFixed(2)}</h2>
          <p className="itemdescription text-gray-700 mt-2">{ele.card.info.description}</p>
        </div>
      </div>
    ))
  );
};

export default CategoryItemList;
