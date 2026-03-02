import React from 'react';

const Card = ({ image, title, category, price, rating, reviews, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="card-image-wrapper">
        {image && <img src={image} alt={title} className="card-image" />}
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      
      <div className="card-content">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
        
        <div className="card-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>
                {i < Math.floor(rating) ? '★' : '☆'}
              </span>
            ))}
          </div>
          <span className="review-count">{reviews} reviews</span>
        </div>
        
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="add-to-cart-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
