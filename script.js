// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    
    // Reset form
    contactForm.reset();
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .team-member, .advantage-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .team-member, .advantage-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements in view
animateOnScroll(); 