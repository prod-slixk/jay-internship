import React from 'react';
import './Topsellerskeleton.css';

const TopSellerSkeleton = () => {
  return (
    <div className="top-seller-skeleton">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-info">
        <div className="skeleton-name"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  );
};

export default TopSellerSkeleton;