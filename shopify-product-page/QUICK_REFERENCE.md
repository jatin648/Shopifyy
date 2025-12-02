# 🚀 Quick Reference Guide

## Installation & Setup

```bash
# Navigate to project
cd e:\Campus\shopify-product-page

# Install all dependencies
npm install

# Create .env file (already included)
# PORT=3001
# VITE_API_URL=http://localhost:3001
```

## Running the Application

```bash
# Start both servers (recommended)
npm start

# Or run individually:

# Terminal 1 - React Dev Server (Port 5173)
npm run dev

# Terminal 2 - Node.js API Server (Port 3001)
npm run server
```

## Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run production build locally
npm run server
```

## 📂 Important Files

| File | Purpose | Location |
|------|---------|----------|
| Liquid Section | Main product page | `shopify/sections/custom-product-page.liquid` |
| Liquid Snippet | Product highlights | `shopify/snippets/product-highlights.liquid` |
| Main Page | React product component | `src/pages/ProductPage.tsx` |
| API Server | Express backend | `server/index.js` |
| Styles | All CSS files | `src/styles/` |
| Components | React components | `src/components/` |

## 🎯 Component Usage

### AnnouncementBar
```typescript
<AnnouncementBar text="Your announcement here" />
```

### ProductHighlights
```typescript
<ProductHighlights items={highlightItems} />
```

### StickyAddToCart
```typescript
<StickyAddToCart 
  product={product}
  onAddToCart={handleAddToCart}
/>
```

### FAQAccordion
```typescript
<FAQAccordion items={faqItems} />
```

### ProductPage
```typescript
<ProductPage />
```

## 🔌 API Endpoints

```bash
# Get all products
curl http://localhost:3001/api/products

# Get single product
curl http://localhost:3001/api/product/1

# Get cart
curl http://localhost:3001/api/cart

# Add to cart
curl -X POST http://localhost:3001/api/cart/add \
  -H "Content-Type: application/json" \
  -d '{"variantId":"v1","quantity":1}'

# Clear cart
curl -X POST http://localhost:3001/api/cart/clear

# Health check
curl http://localhost:3001/api/health
```

## 🎨 Customization Shortcuts

### Change Primary Color
Find and replace in all CSS files:
```
#667eea → your-color
```

### Change Secondary Color
Find and replace:
```
#764ba2 → your-color
```

### Update Announcement Text
**Option 1:** Props
```typescript
<AnnouncementBar text="New text" />
```

**Option 2:** Default
Edit `src/components/AnnouncementBar.tsx` line 16

### Update FAQ Items
Edit `src/components/FAQAccordion.tsx` default items (lines 14-35)

### Update Product Highlights
Edit `src/components/ProductHighlights.tsx` default items (lines 14-33)

## 🧪 Testing URLs

After running `npm start`, visit:

```
http://localhost:5173              # React App
http://localhost:5173/api/health   # API Health
http://localhost:3001/api/products # Products API
```

## 📊 Project Structure

```
shopify-product-page/
├── src/
│   ├── components/         ← React components
│   ├── pages/              ← Page components
│   ├── styles/             ← CSS files
│   ├── App.tsx             ← Main app
│   ├── main.tsx            ← Entry point
│   └── index.css
├── server/
│   └── index.js            ← Express server
├── shopify/
│   ├── sections/           ← Liquid sections
│   └── snippets/           ← Liquid snippets
├── public/                 ← Static files
├── README.md               ← Main documentation
├── DEVELOPMENT.md          ← Dev guide
├── SHOPIFY_SETUP.md        ← Shopify setup
└── package.json
```

## 🔧 Common Tasks

### Add New Product
Edit `server/index.js` `mockProducts` array

### Change Animation Speed
Announcement Bar: Edit `announcement-bar.css` line 36
```css
animation: slideInfinite 40s linear infinite;  /* Change 40s */
```

### Modify FAQ Accordion
Edit `FAQAccordion.tsx` items prop

### Update Product Images
Update product images in mock data (server/index.js)

### Change Button Styling
Edit relevant CSS files in `src/styles/`

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3001
# Windows: 
netstat -ano | findstr :3001

# macOS/Linux:
lsof -i :3001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -r node_modules
npm install
```

### Styles Not Showing
```bash
# Clear browser cache
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### API Not Responding
1. Check server is running on port 3001
2. Verify `.env` PORT=3001
3. Check no other services on port 3001

## 📱 Testing on Mobile

### Local Network Testing
```bash
# Get your IP
ipconfig (Windows)
ifconfig (Mac/Linux)

# Access from mobile (replace XXX.XXX.X.X)
http://XXX.XXX.X.X:5173
```

### Mobile Chrome DevTools
```
F12 → Toggle Device Toolbar → Select device
```

## 🎯 Next Steps

1. ✅ Install and run locally
2. ✅ Test all components
3. ✅ Customize colors and text
4. ✅ Upload to Shopify (see SHOPIFY_SETUP.md)
5. ✅ Deploy frontend and backend
6. ✅ Add Google Analytics
7. ✅ Test on production

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project overview |
| DEVELOPMENT.md | Architecture & guides |
| SHOPIFY_SETUP.md | Shopify integration |
| IMPLEMENTATION_COMPLETE.md | Features summary |
| QUICK_REFERENCE.md | This file |

## 🎓 Learning Resources

- React: https://react.dev/learn
- TypeScript: https://www.typescriptlang.org/docs
- Express: https://expressjs.com/en/starter/basic-routing.html
- Shopify Liquid: https://shopify.dev/api/liquid
- Vite: https://vitejs.dev/guide

## 💡 Tips & Tricks

1. Use React DevTools browser extension for debugging
2. Use Shopify Theme Kit for faster theme deployment
3. Enable source maps for easier debugging
4. Use CSS Grid Inspector in browser DevTools
5. Test on multiple devices/screen sizes

## 🔐 Security Checklist

- [ ] Don't commit `.env` with secrets
- [ ] Update dependencies regularly
- [ ] Validate all API inputs
- [ ] Use HTTPS in production
- [ ] Set CORS properly for production
- [ ] Never expose API keys
- [ ] Use environment variables

## 📞 Quick Links

- Shopify Admin: https://admin.shopify.com
- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- Express Docs: https://expressjs.com
- Liquid Docs: https://shopify.dev/api/liquid

---

**Happy coding! 🎉**

For more detailed information, see the other documentation files.
