# 🚀 STARTUP GUIDE - Get Running in 5 Minutes

## ⚡ Quick Start (Copy & Paste)

```bash
# Navigate to project
cd e:\Campus\shopify-product-page

# Install dependencies (first time only)
npm install

# Start both servers
npm start
```

**Done!** Open http://localhost:5173 in your browser 🎉

---

## 📋 Step-by-Step Setup

### Step 1: Prerequisites Check ✅
- [ ] Node.js 16+ installed
- [ ] npm installed
- [ ] 5 minutes free time

Check versions:
```bash
node --version
npm --version
```

### Step 2: Navigate to Project
```bash
cd e:\Campus\shopify-product-page
```

### Step 3: Install Dependencies
```bash
npm install
```

This installs everything from `package.json`

### Step 4: Start Development
```bash
npm start
```

This starts:
- React dev server on port 5173
- Express API on port 3001

### Step 5: Open in Browser
```
http://localhost:5173
```

---

## 🎯 What You'll See

### ✅ Working Features
1. **Announcement Bar** - Purple bar at top with scrolling text
2. **Product Gallery** - Large image with 4 thumbnails
3. **Product Details** - Title, price, rating, description
4. **Highlights** - 4 benefit cards in a grid
5. **Add to Cart** - Main purple button
6. **FAQ Section** - Expandable Q&A
7. **Sticky Bar** - Appears when you scroll down

---

## 🧪 Testing Checklist

After starting, verify:

- [ ] Page loads without errors
- [ ] Images display correctly
- [ ] Announcement bar scrolls smoothly
- [ ] Buttons are clickable
- [ ] FAQ accordion expands/collapses
- [ ] Sticky bar appears on scroll
- [ ] Layout is responsive on mobile
- [ ] No console errors (F12 → Console)

---

## ⚙️ Alternative Startup Methods

### Method 1: Separate Servers (Recommended for Debugging)

```bash
# Terminal 1: React Dev Server
npm run dev

# Terminal 2: Express API Server
npm run server
```

### Method 2: Production Build

```bash
# Build project
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Troubleshooting

### Issue: Port Already in Use
```bash
# Find process on port 3001
netstat -ano | findstr :3001

# Kill it (replace PID)
taskkill /PID <PID> /F
```

### Issue: Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rmdir /s node_modules

# Reinstall
npm install
```

### Issue: Styles Not Loading
```bash
# Hard refresh browser
Ctrl + Shift + R
```

### Issue: API Not Responding
1. Check port 3001 is running
2. Check console errors (F12)
3. Restart with `npm start`

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/pages/ProductPage.tsx` | Main page |
| `server/index.js` | API server |
| `package.json` | Dependencies |
| `vite.config.ts` | Build config |
| `.env` | Environment vars |

---

## 🎨 Customizing Right Away

### Change Colors
All CSS files have `#667eea` for primary color

Find & Replace:
- `#667eea` → Your color
- `#764ba2` → Your secondary color

### Update Announcement Text
Edit `src/components/AnnouncementBar.tsx` line 16:
```typescript
text = "Your text here"
```

### Change Product Data
Edit `server/index.js` `mockProducts` array

---

## 📊 Project Dashboard

After running `npm start`:

```
Frontend:  http://localhost:5173
Backend:   http://localhost:3001
API:       http://localhost:3001/api/health
Products:  http://localhost:3001/api/products
```

---

## 🚀 Next Milestones

After successful startup:

### Day 1
- ✅ Run locally
- ✅ Test all features
- ✅ Explore code

### Day 2-3
- ✅ Customize branding
- ✅ Update product data
- ✅ Test on mobile

### Day 4-5
- ✅ Deploy frontend
- ✅ Deploy backend
- ✅ Set up Shopify

---

## 📚 Documentation

After running, explore:

1. **README.md** - Full documentation
2. **QUICK_REFERENCE.md** - Common commands
3. **UI_UX_GUIDE.md** - Design details
4. **SHOPIFY_SETUP.md** - Shopify integration

---

## 🎯 Success Indicators

### ✅ Everything is Working If:
- [ ] No errors in terminal
- [ ] Page loads in browser
- [ ] Buttons respond to clicks
- [ ] Announcement bar animates
- [ ] Images display
- [ ] Console has no errors

### ❌ Something's Wrong If:
- [ ] Page won't load
- [ ] Terminal shows errors
- [ ] Buttons don't work
- [ ] No animation

### 🆘 If Issues Persist:
1. Check prerequisites (Node, npm)
2. Clear cache: `npm cache clean --force`
3. Reinstall: `rm -r node_modules && npm install`
4. Restart: `npm start`

---

## 💡 Pro Tips

### Tip 1: Use Developer Tools
```
F12 → Toggle keyboard shortcut
```

### Tip 2: Check Network
F12 → Network Tab → See API calls

### Tip 3: Use React DevTools
Install React DevTools browser extension for debugging

### Tip 4: Inspect Elements
F12 → Inspector → Click on elements to inspect

### Tip 5: Console Logging
Open console (F12) to see debug messages

---

## 🔗 Quick Links

- Frontend: http://localhost:5173
- API: http://localhost:3001/api/health
- Docs: See README.md
- Help: Check QUICK_REFERENCE.md

---

## ⏱️ Expected Times

| Task | Time |
|------|------|
| Install dependencies | 2-3 min |
| Start server | 5 sec |
| Page load | 1-2 sec |
| First interaction | Instant |

---

## 📞 Need Help?

### Before Asking:
1. Check browser console (F12)
2. Check terminal output
3. Verify all commands typed correctly
4. Try restarting

### Then Check:
1. README.md
2. QUICK_REFERENCE.md
3. DEVELOPMENT.md

---

## 🎉 You're Ready!

```
npm start → Press Enter → Done! 🚀
```

**Enjoy your Shopify product page!** 🛍️✨

---

## 📝 Checklist

- [ ] Node.js installed
- [ ] Project downloaded
- [ ] `npm install` completed
- [ ] `npm start` running
- [ ] Browser opened
- [ ] Page loading
- [ ] Features working
- [ ] Ready to customize

---

**Version:** 1.0.0  
**Updated:** December 2024  
**Status:** ✅ Ready to Deploy
