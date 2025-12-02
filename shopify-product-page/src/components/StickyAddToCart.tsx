import React, { useState, useEffect } from 'react';
import '../styles/sticky-add-to-cart.css';

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

interface StickyAddToCartProps {
  product?: Product;
  isVisible?: boolean;
  onAddToCart?: (quantity: number) => void;
}

const StickyAddToCart: React.FC<StickyAddToCartProps> = ({ 
  product = {
    id: '1',
    title: 'Premium Product',
    price: 99.99,
    image: 'https://via.placeholder.com/80'
  },
  isVisible = true,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const addToCartButton = document.querySelector('.main-add-to-cart-btn');
      if (addToCartButton) {
        const rect = addToCartButton.getBoundingClientRect();
        setShowSticky(rect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      if (onAddToCart) {
        onAddToCart(quantity);
      }
      setQuantity(1);
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible || !showSticky) return null;

  return (
    <div className="sticky-add-to-cart-bar">
      <div className="sticky-content">
        <div className="sticky-product-info">
          <img 
            src={product.image} 
            alt={product.title} 
            className="sticky-product-image"
          />
          <div className="sticky-product-details">
            <p className="sticky-product-title">{product.title}</p>
            <p className="sticky-product-price">${product.price.toFixed(2)}</p>
          </div>
        </div>

        <div className="sticky-actions">
          <div className="quantity-selector">
            <button 
              className="qty-btn minus"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={isLoading}
            >
              −
            </button>
            <input 
              type="number" 
              className="qty-input"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              disabled={isLoading}
            />
            <button 
              className="qty-btn plus"
              onClick={() => setQuantity(quantity + 1)}
              disabled={isLoading}
            >
              +
            </button>
          </div>

          <button 
            className="sticky-add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;
