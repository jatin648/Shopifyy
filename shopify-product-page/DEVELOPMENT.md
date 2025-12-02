# Shopify Product Page - Development Guide

## Project Overview

This is a full-stack Shopify product page application combining:
- **Frontend:** React + TypeScript with Vite
- **Backend:** Express.js REST API
- **Shopify Integration:** Custom Liquid section and snippet

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│      Browser / React App (Port 5173)    │
├─────────────────────────────────────────┤
│  - AnnouncementBar Component            │
│  - ProductPage Component                │
│  - ProductHighlights Component          │
│  - StickyAddToCart Component            │
│  - FAQAccordion Component               │
└──────────────┬──────────────────────────┘
               │
               ▼ Axios HTTP Requests
┌─────────────────────────────────────────┐
│    Express.js API Server (Port 3001)    │
├─────────────────────────────────────────┤
│  - Product Endpoints                    │
│  - Cart Management                      │
│  - Mock Database                        │
└─────────────────────────────────────────┘
               │
               ▼ Shopify Integration
┌─────────────────────────────────────────┐
│         Shopify Theme Files             │
├─────────────────────────────────────────┤
│  - custom-product-page.liquid           │
│  - product-highlights.liquid            │
└─────────────────────────────────────────┘
```

## 📁 File Structure Deep Dive

### Frontend Components

**AnnouncementBar.tsx**
- Animated scrolling text
- Customizable announcement message
- Gradient background with branding colors
- Responsive design

**ProductHighlights.tsx**
- Grid layout of 4 product benefits
- Icons and descriptions
- Hover animations
- Mobile responsive

**StickyAddToCart.tsx**
- Appears when scrolling past main CTA
- Product image, title, price
- Quantity selector
- Add to cart button
- Smooth slide-up animation

**FAQAccordion.tsx**
- Expandable Q&A sections
- 5 default FAQs included
- Smooth animations
- Accessibility features (aria-expanded)

**ProductPage.tsx**
- Main page component
- Image gallery with thumbnails
- Product details and pricing
- Variant selection
- Integrates all sub-components
- Axios calls to API

### Backend API

**server/index.js**
- Express server with CORS
- Mock database with 2 products
- 6 REST endpoints
- Error handling middleware

### Liquid Files

**custom-product-page.liquid**
- Main section with full schema
- Product rendering
- JavaScript for interactions
- Inline CSS styling
- Block definitions

**product-highlights.liquid**
- Reusable snippet
- Product benefits display
- Styling included

## 🎯 Key Features Explained

### 1. Announcement Bar
- **Animation:** Text slides from right to left continuously
- **Customization:** Set via component prop or theme settings
- **Mobile:** Reduced speed on mobile for readability
- **Colors:** Purple gradient with white text

### 2. Product Highlights
- **Grid:** 4-column grid, responsive to 2x2 on mobile
- **Icons:** Emoji for visual appeal
- **Hover:** Scale and shadow effects
- **Colors:** Light purple background with border

### 3. Sticky Add to Cart
- **Trigger:** Appears when main button scrolls out of view
- **Content:** Product image (80px), name, price
- **Actions:** Quantity selector + add to cart button
- **Animation:** Slides up from bottom with opacity fade

### 4. FAQ Accordion
- **Interaction:** Click to expand, click to collapse
- **Animation:** Max-height transition for smooth open/close
- **Icons:** Rotating chevron indicating state
- **Responsive:** Full width on mobile

### 5. Product Gallery
- **Main Image:** Large display with zoom on hover
- **Thumbnails:** Grid of 4-6 selectable images
- **Sale Badge:** Shows discount percentage
- **Sticky:** Stays in view while scrolling on desktop

## 🛠️ Development Workflow

### Adding a New Component

1. **Create Component File:**
   ```typescript
   // src/components/NewComponent.tsx
   import React from 'react';
   import '../styles/new-component.css';

   interface Props {
     // Define props
   }

   const NewComponent: React.FC<Props> = (props) => {
     return <div>Component</div>;
   };

   export default NewComponent;
   ```

2. **Create Styles:**
   ```css
   /* src/styles/new-component.css */
   .new-component {
     /* styling */
   }
   ```

3. **Import and Use:**
   ```typescript
   // In ProductPage.tsx
   import NewComponent from '../components/NewComponent';
   
   // In JSX
   <NewComponent />
   ```

### Adding a New API Endpoint

1. **Add Route in server/index.js:**
   ```javascript
   app.get('/api/new-endpoint', (req, res) => {
     res.json({ data: 'response' });
   });
   ```

2. **Call from React:**
   ```typescript
   const response = await axios.get('/api/new-endpoint');
   ```

### Customizing Colors

**Option 1: CSS Variables**
```css
:root {
  --primary: #667eea;
  --secondary: #764ba2;
}

.button {
  background: var(--primary);
}
```

**Option 2: Direct Values**
```css
.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🚀 Deployment

### Deploy Frontend to Netlify

```bash
# Build
npm run build

# Deploy
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy Backend to Heroku

```bash
# Create Heroku app
heroku create shopify-product-api

# Deploy
git push heroku main

# Set environment variables
heroku config:set PORT=3001
```

### Deploy to Shopify

See `SHOPIFY_SETUP.md` for detailed instructions.

## 🧪 Testing Checklist

### Component Testing
- [ ] AnnouncementBar animates smoothly
- [ ] ProductHighlights display correctly
- [ ] FAQAccordion expands/collapses
- [ ] StickyAddToCart appears on scroll
- [ ] ProductPage loads with mock data

### API Testing
```bash
# Test endpoints
curl http://localhost:3001/api/health
curl http://localhost:3001/api/products
curl http://localhost:3001/api/product/1
```

### Mobile Testing
- [ ] Responsive layout works
- [ ] Touch events functional
- [ ] Animations smooth on mobile
- [ ] Sticky bar doesn't obstruct view

### Performance
- [ ] Images lazy load
- [ ] Animations use GPU (transform, opacity)
- [ ] No layout thrashing
- [ ] Bundle size < 100kb (gzipped)

## 📊 Performance Metrics

**Target Metrics:**
- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔐 Security Considerations

- ✅ CORS enabled for localhost (restrict in production)
- ✅ Input validation on API endpoints
- ✅ No sensitive data in frontend
- ✅ Environment variables for sensitive config

## 🐛 Common Issues & Solutions

### React Component Not Updating
**Cause:** State immutability issues
**Solution:** Always create new objects/arrays

### Styling Not Applied
**Cause:** CSS specificity or media queries
**Solution:** Check browser dev tools, verify CSS loads

### API 404 Errors
**Cause:** Server not running or route not defined
**Solution:** Start server on port 3001, check proxy config

### Sticky Bar Not Appearing
**Cause:** Scroll trigger threshold
**Solution:** Adjust scroll distance threshold in component

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Vite Documentation](https://vitejs.dev/guide)
- [Shopify Liquid](https://shopify.dev/api/liquid)

---

**Last Updated:** December 2024
**Version:** 1.0.0
