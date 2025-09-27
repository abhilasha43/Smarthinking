// app.js

// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetElement = document.getElementById(targetId);

        // Smoothly scroll to the section
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Optional: Add hover effects to products
const productImages = document.querySelectorAll('.product img');
productImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)'; // Slight zoom effect
        img.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)'; // Reset to normal size
    });
});

// Optional: Add dynamic behavior in Hero Section
const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        heroSection.style.opacity = 0.8; // Change opacity when you scroll down
    } else {
        heroSection.style.opacity = 1; // Restore opacity when at the top
    }
});
