import React from 'react';

const SkeletonPulse = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded-md ${className}`}>
    <div className="h-full w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
  </div>
);

const RestaurantCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <SkeletonPulse className="w-full h-48" />
    <div className="p-4">
      <SkeletonPulse className="h-6 w-3/4 mb-2" />
      <div className="flex items-center mb-2">
        <SkeletonPulse className="h-4 w-8 mr-2" />
        <SkeletonPulse className="h-4 w-16" />
      </div>
      <SkeletonPulse className="h-4 w-full mb-2" />
      <SkeletonPulse className="h-4 w-1/2" />
    </div>
  </div>
);

const RestaurantListSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <SkeletonPulse className="h-10 w-64 mx-auto mb-4" />
        <div className="flex justify-center">
          <SkeletonPulse className="h-10 w-1/2 mr-4" />
          <SkeletonPulse className="h-10 w-24 mr-2" />
          <SkeletonPulse className="h-10 w-24" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <RestaurantCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantListSkeleton;