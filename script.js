// You can add JavaScript functionality here if needed
// For example, smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Or you could add form handling if you add a contact form later
// This is just a placeholder for future JavaScript functionality
console.log("Website loaded successfully!");
