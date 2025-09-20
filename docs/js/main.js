// Main JavaScript file for additional functionality

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to main content
    const mainContent = document.querySelector('.max-w-4xl');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Console message (Easter egg)
    console.log('%cSafe Superintelligence Inc.', 'color: #00ff00; font-size: 20px; font-weight: bold;');
    console.log('%cSupsuperintelligence is within reach.', 'color: #ffffff; font-size: 14px;');
});

// Function to handle contact form (if added later)
function handleContactForm(event) {
    event.preventDefault();
    // Add contact form logic here
    console.log('Contact form submitted');
}

// Function to toggle theme (if needed)
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        html.classList.add('light');
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
    }
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Load saved theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    
    if (savedTheme) {
        html.classList.remove('dark', 'light');
        html.classList.add(savedTheme);
    }
}

// Initialize theme on load
loadThemePreference();


