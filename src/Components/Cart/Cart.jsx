import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearItems, incrementItemQuantity, decrementItemQuantity } from '../../Utils/cartSlice';

const Cart = () => {
  const cart = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const handleIncrementItem = (itemId) => {
    dispatch(incrementItemQuantity(itemId));
  };

  const handleDecrementItem = (itemId) => {
    dispatch(decrementItemQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + ((item.card.info.price || item.card.info.defaultPrice) * item.quantity), 0) / 100;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((ele, index) => (
              <div key={index} className="flex items-center p-6 border-b border-gray-200 bg-white shadow-sm rounded-lg mb-4 transition-transform transform hover:scale-105">
                <div className="img flex-shrink-0 mr-6">
                  <img
                    className="w-32 h-32 object-cover rounded-lg"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${ele.card.info.imageId}`}
                    alt={ele.card.info.name}
                  />
                </div>
                <div className="textpart flex-1">
                  <span className="itemname block text-2xl font-bold text-gray-900">{ele.card.info.name}</span>
                  <h2 className="itemprice text-xl text-green-600 mt-2">
                    ₹{((ele.card.info.price || ele.card.info.defaultPrice) / 100).toFixed(2)} x {ele.quantity}
                  </h2>
                  <p className="itemdescription text-gray-700 mt-2">{ele.card.info.description}</p>
                  <div className="mt-2 flex items-center">
                    <button
                      className="bg-gray-300 text-black px-3 py-1 rounded-l"
                      onClick={() => handleDecrementItem(ele.card.info.id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{ele.quantity}</span>
                    <button
                      className="bg-gray-300 text-black px-3 py-1 rounded-r"
                      onClick={() => handleIncrementItem(ele.card.info.id)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handleRemoveItem(ele.card.info.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-bold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-green-600">₹{calculateTotal().toFixed(2)}</span>
            </div>
            <button
              className="mt-4 bg-red-700 text-white px-6 py-2 rounded w-full"
              onClick={handleClearItems}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
