// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Smooth Scroll for Navigation Links (backup for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just a hash
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation - Fade in elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        'section, .skill-card, .project-card, .resume-card, .about-info'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});

// Download CV functionality (placeholder - replace with actual CV file path)
const downloadCvButtons = document.querySelectorAll('#download-cv');
downloadCvButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Please add your CV PDF file to the project and update the link in the code.\n\nTo do this:\n1. Add your CV PDF to the project folder\n2. Update the href attribute to point to your CV file\n3. Example: href="files/Didarul-Alam-Swapnil-CV.pdf"');
        // When you have a CV file, replace the alert with:
        // window.open('files/your-cv.pdf', '_blank');
    });
});

// Form submission handling
const contactForm = document.querySelector('.form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Note: Form will submit to Formspree when you add your form ID
        // For now, we'll just show a message
        const formAction = contactForm.getAttribute('action');
        if (formAction.includes('YOUR_FORM_ID')) {
            e.preventDefault();
            alert('Please set up Formspree:\n\n1. Go to https://formspree.io/\n2. Sign up for free\n3. Create a new form\n4. Replace YOUR_FORM_ID in the form action with your actual Form ID');
        }
    });
}

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav .menu a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
