import React from 'react';
import CategoryItemList from './CategoryItemList';

const Category = (props) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md mb-4">
      <div
        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors duration-300"
        onClick={props.onClick}
      >
        <span className="font-semibold text-xl">{props.title} <span>({props.total})</span></span>
        <span className="text-2xl">{props.isOpen ? '🔼' : '🔽'}</span>
      </div>
      {props.isOpen && (
        <CategoryItemList arrayofcard={props.menu_items} />
      )}
    </div>
  );
};

export default Category;
