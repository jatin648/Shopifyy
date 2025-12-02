import React from 'react';
import '../styles/product-highlights.css';

interface HighlightItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface ProductHighlightsProps {
  items?: HighlightItem[];
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ 
  items = [
    {
      id: '1',
      icon: '⚡',
      title: 'Premium Quality',
      description: 'Crafted with the finest materials for superior durability'
    },
    {
      id: '2',
      icon: '🚀',
      title: 'Advanced Technology',
      description: 'Featuring cutting-edge technology for optimal performance'
    },
    {
      id: '3',
      icon: '♻️',
      title: 'Eco-Friendly',
      description: 'Made from sustainable materials. Good for you and the planet'
    },
    {
      id: '4',
      icon: '✨',
      title: 'Award Winning',
      description: 'Recognized by industry experts for innovation and design'
    }
  ]
}) => {
  return (
    <div className="product-highlights">
      <h3 className="highlights-title">Why Choose This Product?</h3>
      <div className="highlights-grid">
        {items.map((item) => (
          <div key={item.id} className="highlight-card">
            <div className="highlight-icon">{item.icon}</div>
            <h4 className="highlight-item-title">{item.title}</h4>
            <p className="highlight-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
