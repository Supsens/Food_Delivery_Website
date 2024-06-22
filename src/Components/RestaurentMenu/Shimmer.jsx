import React from 'react';

const SkeletonPulse = ({ className }) => (
  <div className={`animate-pulse bg-gray-300 rounded-md ${className}`}>
    <div className="h-full w-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
  </div>
);

const SkeletonCategoryCard = () => (
  <div className="border border-gray-300 rounded-lg shadow-md mb-4">
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <SkeletonPulse className="h-6 w-3/4" />
      <SkeletonPulse className="h-6 w-6" />
    </div>
  </div>
);

const SkeletonMenuItem = () => (
  <div className="flex items-center p-4 border-b border-gray-200 bg-white shadow-sm rounded-lg mb-4">
    <div className="flex-shrink-0 mr-4">
      <SkeletonPulse className="w-24 h-24 rounded-lg" />
    </div>
    <div className="flex-1">
      <SkeletonPulse className="h-6 w-3/4 mb-2" />
      <SkeletonPulse className="h-4 w-1/4 mb-2" />
      <SkeletonPulse className="h-4 w-full" />
    </div>
  </div>
);

const Shimmer = () => {
  return (
    <div className="mt-16 container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <SkeletonPulse className="h-8 w-3/4 mx-auto mb-4" />
        <SkeletonPulse className="h-6 w-1/2 mx-auto" />
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl space-y-4">
          {[...Array(3)].map((_, index) => (
            <React.Fragment key={index}>
              <SkeletonCategoryCard />
              {index === 0 && (
                <div className="pl-4">
                  {[...Array(3)].map((_, itemIndex) => (
                    <SkeletonMenuItem key={itemIndex} />
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;