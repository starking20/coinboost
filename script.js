// Simulated crypto price updates
function updateCryptoPrices() {
    const cryptos = {
        btc: { min: 30000, max: 35000 },
        eth: { min: 1800, max: 2200 },
        sol: { min: 20, max: 30 },
        ada: { min: 0.3, max: 0.5 },
        dot: { min: 5, max: 8 },
        avax: { min: 12, max: 18 },
        matic: { min: 0.6, max: 0.9 },
        xrp: { min: 0.5, max: 0.7 }
    };
    
    for (const [key, value] of Object.entries(cryptos)) {
        const price = (Math.random() * (value.max - value.min) + value.min).toFixed(2);
        document.getElementById(`${key}-price`).textContent = `$${price}`;
    }
}

// Initial update
updateCryptoPrices();

// Update prices every 5 seconds
setInterval(updateCryptoPrices, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});