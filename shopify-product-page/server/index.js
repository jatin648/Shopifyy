import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const mockProducts = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for all-day wear. Perfect for music lovers and professionals.',
    price: 199.99,
    comparePrice: 249.99,
    image: 'https://via.placeholder.com/500x500?text=Premium+Headphones',
    images: [
      'https://via.placeholder.com/500x500?text=Premium+Headphones+1',
      'https://via.placeholder.com/500x500?text=Premium+Headphones+2',
      'https://via.placeholder.com/500x500?text=Premium+Headphones+3',
      'https://via.placeholder.com/500x500?text=Premium+Headphones+4',
    ],
    variants: [
      { id: 'v1', title: 'Midnight Black', price: 199.99 },
      { id: 'v2', title: 'Silver', price: 199.99 },
      { id: 'v3', title: 'Rose Gold', price: 219.99 },
    ],
    rating: 4.5,
    reviewCount: 342,
    highlights: [
      'Active Noise Cancellation',
      '30-Hour Battery Life',
      'Premium Comfort Design',
      'Wireless Connectivity',
      'Built-in Microphone',
      'Foldable Design'
    ]
  },
  {
    id: '2',
    title: 'Ultra Pro Smart Watch',
    description: 'Stay connected with our ultra-premium smartwatch. Features include fitness tracking, heart rate monitoring, and 7-day battery life.',
    price: 349.99,
    comparePrice: 449.99,
    image: 'https://via.placeholder.com/500x500?text=Smart+Watch',
    images: [
      'https://via.placeholder.com/500x500?text=Smart+Watch+1',
      'https://via.placeholder.com/500x500?text=Smart+Watch+2',
    ],
    variants: [
      { id: 'v4', title: 'Black', price: 349.99 },
      { id: 'v5', title: 'Silver', price: 349.99 },
    ],
    rating: 4.7,
    reviewCount: 215
  }
];

let cart = [];

app.get('/api/products', (req, res) => {
  res.json(mockProducts);
});

app.get('/api/product/:id', (req, res) => {
  const product = mockProducts.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.post('/api/cart/add', (req, res) => {
  const { variantId, quantity } = req.body;

  if (!variantId || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const existingItem = cart.find(item => item.variantId === variantId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      variantId,
      quantity,
      addedAt: new Date()
    });
  }

  res.json({
    success: true,
    message: `Added ${quantity} item(s) to cart`,
    cartSize: cart.length,
    totalItems: cart.reduce((sum, item) => sum + item.quantity, 0)
  });
});

app.post('/api/cart/clear', (req, res) => {
  cart = [];
  res.json({ success: true, message: 'Cart cleared' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📱 API endpoints:`);
  console.log(`   - GET  /api/products - Get all products`);
  console.log(`   - GET  /api/product/:id - Get specific product`);
  console.log(`   - GET  /api/cart - Get cart items`);
  console.log(`   - POST /api/cart/add - Add item to cart`);
  console.log(`   - POST /api/cart/clear - Clear cart`);
  console.log(`   - GET  /api/health - Health check`);
});
