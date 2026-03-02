import React, { useState } from 'react';
import Card from '../../../../components/ui/card';

const PRODUCTS = [
  {
    id: 1,
    image: 'https://www.brailleskateboarding.com/cdn/shop/products/BambooBlankdeck_2048x2048.jpg?v=1633238474',
    title: 'Bamboo Blank Skateboard Decks',
    category: 'Decks',
    price: 89.99,
    rating: 4.5,
    reviews: 124,
    tag: 'NEW ARRIVALS'
  },
  {
    id: 2,
    image: 'https://www.kidrobot.com/cdn/shop/products/wood-kidrobot-bomb-skateboard-deck-1.jpg?v=1594553303&width=2000',
    title: 'Kidrobot Bomb Skateboard Deck',
    category: 'Decks',
    price: 110.00,
    rating: 4.8,
    reviews: 85,
    tag: 'LIMITED EDITION'
  },
  {
    id: 3,
    image: 'https://www.hawaiisurf.com/cdn/shop/products/classic-planche-de-skate-775-172538.jpg?v=1708074580&width=1500',
    title: 'Classic Skateboard Deck',
    category: 'Decks',
    price: 100.00,
    rating: 4.9,
    reviews: 210,
    tag: 'TOP RATED'
  },
  {
    id: 4,
    image: 'https://baselineskateshop.com/cdn/shop/products/149_hollow_truck_grande_grande_grande_grande_8a3f708e-53cd-4f26-9441-477c8e931d60_570x.jpg?v=1528373616',
    title: 'Mason Silva Edition',
    category: 'Trucks',
    price: 45.00,
    rating: 4.7,
    reviews: 67,
    tag: 'NEW ARRIVALS'
  },
  {
    id: 5,
    image: 'https://www.tablassurfshop.com/media/catalog/product/cache/15d0a4de533b1e2d2a7c737cc087380b/A/R/ART000100853001.jpg',
    title: 'Hollow Chris Joslin',
    category: 'Trucks',
    price: 25.00,
    rating: 4.6,
    reviews: 156,
    tag: 'BEST SELLER'
  },
  {
    id: 6,
    image: 'https://m.media-amazon.com/images/I/71Fnq2F8QgL._AC_SL400_.jpg',
    title: 'Professional Grade 52mmX30mm Skateboard Wheels 4 Pcs Set with 100A Hardness and ABEC-7 Bearing',
    category: 'Wheels',
    price: 35.00,
    rating: 4.4,
    reviews: 92,
    tag: 'TOP RATED'
  },
  {
    id: 7,
    image: 'https://www.west-site.com/cdn/shop/files/9-all-over-bang-skateboard-griptape.jpg?v=1720995271&width=900',
    title: 'All Over Bang Skateboard Griptape',
    category: 'Accessories',
    price: 12.00,
    rating: 4.9,
    reviews: 45,
    tag: 'NEW ARRIVALS'
  },
  {
    id: 8,
    image: 'https://m.media-amazon.com/images/I/61g0DGqxg7S._AC_SX679_.jpg',
    title: 'Skate Tool T-Shape',
    category: 'Tools',
    price: 15.00,
    rating: 4.8,
    reviews: 112,
    tag: 'BEST SELLER'
  }
];

const CardList = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const tabs = ['ALL', 'NEW ARRIVALS', 'BEST SELLER', 'TOP RATED'];

  const filteredProducts = activeTab === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(product => product.tag === activeTab);

  return (
    <div className="trendy-products-section">
      <h2 className="section-title">OUR TRENDY PRODUCTS</h2>
      
      <ul className="product-tabs">
        {tabs.map(tab => (
          <li 
            key={tab} 
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <Card 
            key={product.id}
            {...product}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
          />
        ))}
      </div>

      <button className="hero-btn">Discover More</button>
    </div>
  );
};

export default CardList;
