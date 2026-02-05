# Quick Setup Guide

## 🎯 Priority Tasks

### 1. Configure Contact Form (5 minutes)
Your contact form is ready but needs a backend service:

**Option A: Formspree (Recommended - Free)**
1. Visit [formspree.io](https://formspree.io/)
2. Sign up for free
3. Create a new form
4. Copy your form ID (looks like: `mXXXXXXX`)
5. In `index.html` line ~738, replace:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   with:
   ```html
   action="https://formspree.io/f/mXXXXXXX"
   ```

**Option B: Other Services**
- [Web3Forms](https://web3forms.com/) - No registration required
- [EmailJS](https://www.emailjs.com/) - More features
- [Netlify Forms](https://www.netlify.com/products/forms/) - If hosting on Netlify

### 2. Add Real Project Links (10 minutes)
Replace placeholder links in the Projects section:

In `index.html`, find each project card and update:
```html
<a href="#" class="project-link">  <!-- Change # to your actual URL -->
```

Example:
```html
<a href="https://github.com/yourusername/project-name" class="project-link">
<a href="https://yourproject.netlify.app" class="project-link">
```

### 3. Update Personal Information
- [ ] Replace `images/swapnil-professional-photo-no-bg.png` with your photo
- [ ] Add your project screenshots to `images/` folder:
  - `project-1.jpg`
  - `project-2.jpg`
  - `project-3.jpg`
- [ ] Update CV file in `assets/Didarul_Alam_Swapnil_CV.pdf`
- [ ] Update social media links (GitHub, LinkedIn, Twitter)
- [ ] Update website URL in structured data (line ~59 in index.html)

### 4. Create Favicon.ico (Optional)
The site has an SVG favicon, but for older browser support:
1. Use [favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload the `images/favicon.svg` or create from text "S"
3. Download the generated `favicon.ico`
4. Place it in `images/` folder

## 🎨 Customization Tips

### Change Color Scheme
Edit `styles/portfolio.css` lines 1-24:
```css
:root {
  --accent-color: #fd6e0a;  /* Your brand color */
  --accent-hover: #e55f04;  /* Darker shade */
}
```

### Update Typing Animation
Edit `scripts/main.js` line 113:
```javascript
const phrases = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
    'Your Title 4'
];
```

### Modify Statistics
Edit `index.html` lines ~161-182, update `data-target` values:
```html
<h3 class="stat-number" data-target="25">0</h3>  <!-- Your number -->
```

## 📦 Deployment

### Option 1: Netlify (Easiest)
1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your portfolio folder
3. Your site is live! Get a custom domain or use the free subdomain

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select your branch and save
5. Visit `yourusername.github.io/repository-name`

### Option 3: Vercel
1. Sign up at [vercel.com](https://vercel.com/)
2. Import your Git repository
3. Deploy with one click

## ✅ Pre-Launch Checklist

- [ ] Contact form configured and tested
- [ ] All project links working
- [ ] Personal photo added
- [ ] Project screenshots added
- [ ] CV file uploaded
- [ ] Social media links updated
- [ ] Testimonials updated with real reviews (or remove section)
- [ ] Website URL updated in meta tags
- [ ] All images optimized (use [TinyPNG](https://tinypng.com/))
- [ ] Tested on mobile devices
- [ ] Tested in different browsers
- [ ] Checked for spelling/grammar
- [ ] Analytics added (Google Analytics, Plausible, etc.)

## 🐛 Troubleshooting

**Contact form not working?**
- Check if you replaced `YOUR_FORM_ID`
- Ensure you're using POST method
- Check browser console for errors

**Images not loading?**
- Check file paths are correct
- Ensure images are in `images/` folder
- Check file extensions match (jpg vs jpeg)

**Dark mode not persisting?**
- Check if localStorage is enabled
- Clear browser cache and try again

**Mobile menu not working?**
- Ensure JavaScript file is loaded
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tricks
- [Can I Use](https://caniuse.com/) - Browser compatibility checker
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance testing
- [WAVE](https://wave.webaim.org/) - Accessibility checker

## 🎉 You're All Set!

Your portfolio is now enhanced with:
✅ Improved SEO and accessibility
✅ Better form validation
✅ Lazy loading images
✅ Testimonials section
✅ Skip to content link
✅ Structured data for search engines

Need help? Check the main [README.md](README.md) for more details!
