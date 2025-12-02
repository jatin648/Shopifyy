# Shopify Product Page - React & Node.js

A customized Shopify product page built with React, TypeScript, and Node.js featuring modern UI/UX best practices and company branding.

## ✨ Features

### React Components
- **Product Page** - Main product display with image gallery and details
- **Announcement Bar** - Animated scrolling announcement with custom text
- **Product Highlights** - Grid layout showcasing key product benefits
- **Sticky Add to Cart** - Fixed bar that appears when scrolling past main CTA
- **FAQ Accordion** - Expandable Q&A section with smooth animations

### Shopify Integration
- **Custom Liquid Section** - `custom-product-page.liquid` with full schema support
- **Reusable Snippet** - `product-highlights.liquid` for product benefits
- **Responsive Design** - Works seamlessly on desktop and mobile

### API Endpoints
- `GET /api/products` - Fetch all products
- `GET /api/product/:id` - Fetch single product
- `GET /api/cart` - Get current cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/clear` - Clear cart

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   This runs both the React dev server (port 5173) and Node.js backend (port 3001) concurrently.

   Or run separately:
   ```bash
   # Terminal 1 - Start React dev server
   npm run dev

   # Terminal 2 - Start Node.js server
   npm run server
   ```

3. **Open browser:**
   ```
   http://localhost:5173
   ```

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🎨 Design & Branding

### Color Scheme
- Primary: `#667eea` (Purple)
- Secondary: `#764ba2` (Dark Purple)
- Accent: `#ff6b6b` (Red)
- Background: `#ffffff`

### Typography
- Headlines: Bold, Large (20px-32px)
- Body: Regular (14px-16px)
- Font: System fonts with fallback to sans-serif

### Animations
- Announcement bar: Sliding text animation
- Accordion: Smooth expand/collapse
- Buttons: Hover effects with scale and shadow
- Sticky bar: Slide-up animation on appearance

## 📂 Project Structure

```
shopify-product-page/
├── src/
│   ├── components/          # React components
│   │   ├── AnnouncementBar.tsx
│   │   ├── ProductHighlights.tsx
│   │   ├── StickyAddToCart.tsx
│   │   └── FAQAccordion.tsx
│   ├── pages/              # Page components
│   │   └── ProductPage.tsx
│   ├── styles/             # CSS files
│   │   ├── product-page.css
│   │   ├── announcement-bar.css
│   │   ├── product-highlights.css
│   │   ├── sticky-add-to-cart.css
│   │   └── faq-accordion.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server/
│   └── index.js            # Express server
├── shopify/
│   ├── sections/           # Liquid sections
│   │   └── custom-product-page.liquid
│   └── snippets/           # Liquid snippets
│       └── product-highlights.liquid
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=3001
VITE_API_URL=http://localhost:3001
```

### Vite Config
The `vite.config.ts` includes a proxy for API calls to the backend server.

## 💻 Technologies Used

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Axios** - HTTP client

### Backend
- **Express** - Web framework
- **CORS** - Cross-origin support
- **Node.js** - Runtime

### Styling
- **CSS3** - Modern layouts with Grid and Flexbox
- **Animations** - Keyframe animations and transitions
- **Responsive Design** - Mobile-first approach

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🎯 Shopify Implementation

### Using the Custom Section

1. **Upload Files to Shopify Theme:**
   - Copy `custom-product-page.liquid` to `theme/sections/`
   - Copy `product-highlights.liquid` to `theme/snippets/`

2. **Add Section to Product Page:**
   - In Shopify Admin → Online Store → Themes
   - Edit theme → Product template
   - Add custom section "Custom Product Page"
   - Configure section settings in theme editor

3. **Section Schema Includes:**
   - Product selector
   - Heading and description
   - Toggle for highlights, FAQ, announcement
   - Announcement text customization
   - Block definitions for variants, quantity, add to cart, FAQ items

## 🚀 Performance

- Lazy loading for images
- CSS animations (GPU-accelerated)
- Optimized component rendering
- Efficient state management
- Code splitting with Vite

## ✅ Testing

### Manual Testing
1. Test on different screen sizes
2. Test hover effects on all buttons
3. Test accordion expand/collapse
4. Test add to cart functionality
5. Test announcement bar animation
6. Test sticky bar scroll behavior

### Unit Testing
To add unit tests, install Jest and React Testing Library:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

## 📄 License

MIT License - Feel free to use this project for your Shopify store.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Made with ❤️ for Shopify developers**
