// Smooth scrolling and interactive features for Threads & Tales

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class for header styling
        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 30px rgba(107, 79, 79, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 20px rgba(107, 79, 79, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Order form submission
    const orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(orderForm);
            const data = Object.fromEntries(formData);
            
            // Create WhatsApp message
            const message = `New Order from Threads & Tales!%0A%0A` +
                `*Name:* ${data.name}%0A` +
                `*Phone:* ${data.phone}%0A` +
                `*Product:* ${data.product}%0A` +
                `*Quantity:* ${data.quantity}%0A` +
                `*Address:* ${data.address}`;
            
            // Open WhatsApp with pre-filled message
            const whatsappUrl = `https://wa.me/923001234567?text=${message}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            orderForm.reset();
        });
    }

    // Product card animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe order cards
    const orderCards = document.querySelectorAll('.order-card');
    orderCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(card);
    });

    // Observe about section
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        aboutContent.style.opacity = '0';
        aboutContent.style.transform = 'translateY(30px)';
        aboutContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(aboutContent);
    }
});

// Prefill product name when clicking "Order Now" from product card
function prefillProduct(productName) {
    const productInput = document.getElementById('product');
    if (productInput) {
        productInput.value = productName;
        // Smooth scroll to order section
        document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    }
}
