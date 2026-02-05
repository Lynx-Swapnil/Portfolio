# Portfolio Website - Didarul Alam Swapnil

A modern, responsive portfolio website showcasing frontend development skills with enhanced SEO, accessibility, and user experience features.

## ✨ Features

### 🎨 Design & UX
- **Dark/Light Mode**: Toggle between themes with preference saved in localStorage
- **Fully Responsive**: Mobile-first design optimized for all screen sizes
- **Smooth Animations**: Fade-in effects, scroll animations, and interactive elements
- **Modern UI**: Clean design with custom components and hover effects

### 🚀 Performance & SEO
- **Image Lazy Loading**: Optimized loading for better performance
- **Structured Data**: JSON-LD schema for search engines
- **SEO Meta Tags**: Complete Open Graph and Twitter Card integration
- **Favicon**: Custom SVG favicon with fallback support
- **Scroll Progress Bar**: Visual indicator of page scroll progress

### ♿ Accessibility
- **Skip to Content**: Keyboard navigation support
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Indicators**: Clear visual focus states
- **Semantic HTML**: Proper heading hierarchy and structure
- **Form Validation**: Real-time validation with error messages

### 📧 Contact Form
- **Live Validation**: Real-time field validation
- **Error Handling**: Clear error messages for users
- **Loading States**: Visual feedback during submission
- **Success/Error Messages**: Informative status updates
- **Formspree Ready**: Easy integration with contact form backend

### 📱 Sections
- **Hero Banner**: Animated typing effect with professional photo
- **Statistics**: Animated counters with intersection observer
- **About**: Personal information and background
- **Projects**: Portfolio showcase with technology tags
- **Skills**: Visual skill cards and progress bars
- **Technologies**: Icon grid of tech stack
- **Testimonials**: Client feedback and reviews ⭐ NEW
- **Resume**: Education and experience timeline
- **Contact**: Multi-channel contact information and form

## 🚀 Setup Instructions

### 1. Contact Form Setup (Formspree)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your Form ID
5. In `index.html`, replace `YOUR_FORM_ID` with your actual Form ID:
   ```html
   <form class="form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 2. Add Your CV
1. Create a PDF version of your resume
2. Create a `files` folder in your project
3. Save your CV as `files/Didarul-Alam-Swapnil-CV.pdf`
4. In `index.html`, update the Download CV buttons:
   ```html
   <a href="files/Didarul-Alam-Swapnil-CV.pdf" download>
       <button class="btn">Download CV</button>
   </a>
   ```

### 3. Add Project Images
1. Add project screenshot images to the `images` folder
2. Name them: `project-1.jpg`, `project-2.jpg`, `project-3.jpg`
3. Recommended size: 800x600px or similar aspect ratio

### 4. Update Project Links
In `index.html`, replace the `#` in project cards with:
- Live demo URLs
- GitHub repository URLs

Example:
```html
<a href="https://your-project-demo.com" class="project-link">
    <i class="fa-solid fa-external-link"></i>
</a>
<a href="https://github.com/yourusername/project-name" class="project-link">
    <i class="fa-brands fa-github"></i>
</a>
```

### 5. Add Social Media Links
In `index.html`, replace the `#` in social icons with your actual profile URLs:
```html
<a href="https://facebook.com/yourprofile" aria-label="Visit my Facebook profile">
<a href="https://twitter.com/yourhandle" aria-label="Visit my Twitter profile">
<a href="https://instagram.com/yourhandle" aria-label="Visit my Instagram profile">
```

### 6. Add Favicon (Optional but Recommended)
1. Create or generate a favicon (16x16, 32x32, 48x48 px)
2. Save it as `favicon.ico` in the root folder
3. Add to `<head>` in `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="favicon.ico">
   ```

## 📁 File Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── images/                 # Images folder
│   ├── icons/              # Social media icons
│   ├── swapnil-professional-photo-no-bg.png
│   ├── developer.png
│   ├── header_bg.png
│   └── project-*.jpg       # Add your project screenshots here
│
├── styles/
│   └── portfolio.css       # Main stylesheet with dark mode support
│
├── scripts/
│   └── main.js            # JavaScript for dark mode, animations, etc.
│
└── files/                  # Create this folder
    └── your-cv.pdf        # Add your CV here
```

## 🎨 Color Scheme

### Light Mode
- Primary Background: #ffffff
- Secondary Background: #FFF8F3
- Accent Color: #FD6E0A
- Text: #181818, #474747, #757575

### Dark Mode
- Primary Background: #1a1a1a
- Secondary Background: #242424
- Accent Color: #FD6E0A
- Text: #ffffff, #e0e0e0, #b0b0b0

## 🛠️ Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, CSS Variables, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 7.0.1 (Icons)
- Google Fonts (Open Sans)

## 📝 Next Steps / Suggestions

1. **Add Real Projects**: Replace placeholder project content with your actual work
2. **Create CV PDF**: Design and add a downloadable resume
3. **Get Project Screenshots**: Take high-quality screenshots of your projects
4. **Add Blog Section**: Share your learning journey and tutorials
5. **Add Testimonials**: If you have client/peer testimonials
6. **Analytics**: Add Google Analytics to track visitors
7. **Performance**: Optimize images and add lazy loading
8. **PWA**: Convert to Progressive Web App for offline access

## 🌐 Deployment

You can deploy this portfolio to:
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Automatic deployments from Git
- **Vercel**: Fast and free for static sites
- **Render**: Free tier available

## 📧 Contact

For any questions about this portfolio setup:
- Email: lynxswapnil@gmail.com
- GitHub: [Add your GitHub username]

## 📄 License

This project is open source and available for personal use.
