// script.js

// Function to show the selected section and hide others
function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(sectionElement) {
        sectionElement.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';

    // Highlight the active link in the navbar
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    event.target.classList.add('active');
}

// Event listener to ensure the Home section is shown by default on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
