import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../Utils/useRestaurentMenu';
import Category from './Category';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(0); // Start with the recommended card open (assuming it's the first one)

  if (!resInfo) {
    return (
      <div className="flex items-center justify-center h-screen">
           <Shimmer/>
      </div>
    );
  }

  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  const ItemCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  if (!restaurantInfo) {
    return <div className="text-center text-2xl">Restaurant information not found.</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">{restaurantInfo.name}</h1>
        <p className="text-gray-600 text-xl mb-6 text-center">{restaurantInfo.costForTwoMessage}</p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl space-y-4">
          {ItemCategory.map((ele, index) => (
            <Category
              key={index}
              title={ele.card.card.title}
              total={ele.card.card.itemCards.length}
              menu_items={ele.card.card.itemCards}
              isOpen={openCategoryIndex === index}
              onClick={() => setOpenCategoryIndex(openCategoryIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
