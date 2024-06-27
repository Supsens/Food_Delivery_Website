import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementItemQuantity, decrementItemQuantity } from "../../Utils/cartSlice";
import { Swiggy_MENU } from "../../Utils/logo";


const CategoryItemList = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart.items);

  const handleAddItem = (item) => {
    const itemIndex = cart.findIndex(cartItem => cartItem.card.info.id === item.card.info.id);
    if (itemIndex !== -1) {
      dispatch(incrementItemQuantity(item.card.info.id));
    } else {
      dispatch(addItem(item));
    }
  };

  const handleDecrementItem = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.card.info.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    props.arrayofcard.map((ele, index) => (
      <div key={index} className="flex items-center p-6 border-b border-gray-200 bg-white shadow-sm rounded-lg mb-4 transition-transform transform hover:scale-105">
        <div className="img flex-shrink-0 mr-6 relative">
          <img className="w-32 h-32 object-cover rounded-lg" src={ Swiggy_MENU+`${ele.card.info.imageId}`} alt={ele.card.info.name} />
          <div className="absolute top-0 left-0 mt-2 ml-2 bg-black text-white px-3 py-1 rounded flex items-center">
            <button onClick={() => handleDecrementItem(ele.card.info.id)}>-</button>
            <span className="mx-2">{getItemQuantity(ele.card.info.id)}</span>
            <button onClick={() => handleAddItem(ele)}>+</button>
          </div>
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
