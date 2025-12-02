# Shopify Implementation Guide

## Custom Product Page Setup

This guide explains how to implement the custom product page in your Shopify development store.

## 📋 Prerequisites

- Shopify development store
- Theme with customization access
- Files ready to upload:
  - `shopify/sections/custom-product-page.liquid`
  - `shopify/snippets/product-highlights.liquid`

## 🔧 Installation Steps

### Step 1: Upload the Section File

1. Go to your Shopify Admin → **Online Store** → **Themes**
2. Find your theme and click **Edit code**
3. In the left sidebar under **Sections**, click **Add a new section**
4. Name it `custom-product-page`
5. Replace the content with the code from `shopify/sections/custom-product-page.liquid`
6. Click **Save**

### Step 2: Upload the Snippet File

1. In the theme editor, go to **Snippets** in the left sidebar
2. Click **Add a new snippet**
3. Name it `product-highlights`
4. Replace the content with the code from `shopify/snippets/product-highlights.liquid`
5. Click **Save**

### Step 3: Add Section to Product Template

1. In the theme editor, click on **Templates** in the left sidebar
2. Find and click on **product.json**
3. Click **Add block** and select your "Custom Product Page" section
4. Configure the section settings in the right panel:
   - Select a product
   - Customize heading and description
   - Toggle product highlights, FAQ, and announcement
   - Set announcement text

### Step 4: Configure Section Blocks

In the section editor, add blocks for:
- **Variant Selector** - Let customers choose options
- **Quantity Selector** - Allow quantity input
- **Add to Cart Button** - Main purchase button
- **FAQ Items** (optional) - Add FAQ questions and answers

## 🎨 Customization

### Change Colors

Edit the color values in the `<style>` section of the Liquid files:

```liquid
<style>
  :root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
  }
</style>
```

### Modify Text and Copy

All announcement text, button labels, and descriptions can be:
1. Set via section settings in the theme editor
2. Modified directly in the Liquid code

### Customize Animations

Adjust animation speeds and effects in the CSS:

```css
@keyframes slideText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
```

## 🧪 Testing

### Desktop Testing
1. Add the section to a product page
2. Test on 1920px width
3. Verify all buttons work
4. Check animations smooth

### Mobile Testing
1. Test on 375px width (iPhone SE)
2. Test on 768px width (iPad)
3. Verify sticky bar appears on scroll
4. Test touch interactions

### Functionality Testing
- ✅ Product images load correctly
- ✅ Variant selection works
- ✅ Add to cart functionality
- ✅ FAQ accordion expands/collapses
- ✅ Announcement bar scrolls smoothly
- ✅ Sticky bar appears on scroll
- ✅ Mobile responsive layout

## 🐛 Troubleshooting

### Issue: Styles Not Applying
**Solution:** Clear theme cache and do a hard refresh (Ctrl+Shift+R)

### Issue: Images Not Loading
**Solution:** Verify product has featured images. Check image URLs in theme editor.

### Issue: Animations Choppy
**Solution:** Ensure your store supports CSS animations. Check browser compatibility.

### Issue: Add to Cart Not Working
**Solution:** Verify form is correctly submitted. Check cart functionality in store settings.

## 📊 Analytics Integration

To track user interactions, add analytics events:

```liquid
<script>
  document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
    if(window.gtag) {
      gtag('event', 'add_to_cart', {
        'product_id': '{{ product.id }}',
        'product_name': '{{ product.title }}'
      });
    }
  });
</script>
```

## 🔗 Integration with React App

The React app can be embedded as:

1. **Embedded App** - Iframe on the product page
2. **API Integration** - React app calls your Shopify API
3. **Custom Store Front** - Full React-based store

For full integration, use Shopify's JavaScript Buy SDK:

```javascript
import ShopifyBuy from 'shopify-buy';

const client = ShopifyBuy.buildClient({
  domain: 'your-store.myshopify.com',
  storefrontAccessToken: 'your-token'
});
```

## 📚 Resources

- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [Shopify Theme Development](https://shopify.dev/themes)
- [Shopify CLI](https://shopify.dev/tools/cli)
- [Buy Button JS](https://shopify.dev/api/admin-rest/2024-01/resources/product)

## ✅ Deployment Checklist

- [ ] Section uploaded and tested
- [ ] Snippet uploaded and tested
- [ ] Product images set
- [ ] Announcement text configured
- [ ] FAQ items added
- [ ] Mobile responsive verified
- [ ] Add to cart working
- [ ] Analytics events firing
- [ ] Performance optimized
- [ ] Live on production

## 📞 Support

For Shopify-specific issues:
1. Check Shopify Theme Help
2. Use Shopify Community Forums
3. Contact Shopify Support

---

**Happy selling! 🚀**
