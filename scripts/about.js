document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Tech Particles Background
    const techParticles = document.getElementById('techParticles');
    if (techParticles) {
        createParticles();
    }

    // Mobile Menu Toggle (Reuse from main JS)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
});

// Particle Animation for Tech Background
function createParticles() {
    const particles = [];
    const colors = ['#8a2be2', '#4b0082', '#9370db', '#6a5acd'];
    const particleCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-particle';

        // Random properties
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
            opacity: ${Math.random() * 0.5 + 0.1};
        `;

        techParticles.appendChild(particle);
        particles.push(particle);
    }
}

// Add to styles.css or about.css:
/*
@keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    25% { transform: translateY(-20px) translateX(10px); }
    50% { transform: translateY(10px) translateX(-10px); }
    75% { transform: translateY(-10px) translateX(15px); }
}
*/