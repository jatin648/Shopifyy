import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnnouncementBar from '../components/AnnouncementBar';
import ProductHighlights from '../components/ProductHighlights';
import StickyAddToCart from '../components/StickyAddToCart';
import FAQAccordion from '../components/FAQAccordion';
import '../styles/product-page.css';

interface ProductVariant {
  id: string;
  title: string;
  price: number;
  image?: string;
}

interface ProductData {
  id: string;
  title: string;
  description: string;
  price: number;
  comparePrice?: number;
  image: string;
  images: string[];
  variants: ProductVariant[];
  rating: number;
  reviewCount: number;
}

const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/product/1', {
          timeout: 5000
        });
        setProduct(response.data);
        setSelectedVariant(response.data.variants[0]);
        setError(null);
      } catch (err) {
        setError(null);
        const mockData: ProductData = {
          id: '1',
          title: 'Premium Wireless Headphones',
          description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.',
          price: 199.99,
          comparePrice: 249.99,
          image: 'https://via.placeholder.com/500x500?text=Premium+Headphones',
          images: [
            'https://via.placeholder.com/500x500?text=Premium+Headphones+1',
            'https://via.placeholder.com/500x500?text=Premium+Headphones+2',
            'https://via.placeholder.com/500x500?text=Premium+Headphones+3',
          ],
          variants: [
            { id: 'v1', title: 'Black', price: 199.99 },
            { id: 'v2', title: 'Silver', price: 199.99 },
            { id: 'v3', title: 'Gold', price: 219.99 },
          ],
          rating: 4.5,
          reviewCount: 342
        };
        setProduct(mockData);
        setSelectedVariant(mockData.variants[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = async (quantity: number) => {
    try {
      if (selectedVariant) {
        await axios.post('/api/cart/add', {
          variantId: selectedVariant.id,
          quantity
        });
        alert(`Added ${quantity} item(s) to cart!`);
      }
    } catch (err) {
      alert('Failed to add item to cart');
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="error-container">
        <p>{error || 'Product not found'}</p>
      </div>
    );
  }

  return (
    <div className="product-page">
      <AnnouncementBar text="🎉 Free shipping on orders over $100! Limited time only." />
      
      <div className="product-main-container">
        <div className="product-gallery-section">
          <div className="main-image-container">
            <img 
              src={product.images[selectedImage]} 
              alt={product.title}
              className="main-product-image"
            />
            <div className="sale-badge">
              {product.comparePrice && (
                <span>Save {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%</span>
              )}
            </div>
          </div>
          
          <div className="thumbnail-gallery">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.title} ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info-section">
          <div className="product-header">
            <h1 className="product-title">{product.title}</h1>
            
            <div className="rating-container">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="review-text">({product.reviewCount} reviews)</span>
            </div>

            <div className="price-section">
              {product.comparePrice && (
                <span className="compare-price">${product.comparePrice.toFixed(2)}</span>
              )}
              <span className="current-price">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <p className="product-description">{product.description}</p>

          <ProductHighlights />

          <div className="variant-selector">
            <label className="variant-label">Color:</label>
            <div className="variant-buttons">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`variant-btn ${selectedVariant?.id === variant.id ? 'active' : ''}`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.title}
                </button>
              ))}
            </div>
          </div>

          <div className="add-to-cart-container">
            <button 
              className="main-add-to-cart-btn"
              onClick={() => handleAddToCart(1)}
            >
              Add to Cart
            </button>
            <button className="wishlist-btn" title="Add to wishlist">
              ♡ Wishlist
            </button>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <span className="badge-icon">✓</span>
              <span className="badge-text">30-day Money-Back Guarantee</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🔒</span>
              <span className="badge-text">Secure Checkout</span>
            </div>
            <div className="badge">
              <span className="badge-icon">📦</span>
              <span className="badge-text">Free Shipping Over $100</span>
            </div>
          </div>
        </div>
      </div>

      <StickyAddToCart 
        product={{
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.images[0]
        }}
        onAddToCart={handleAddToCart}
      />

      <div className="faq-section">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default ProductPage;
