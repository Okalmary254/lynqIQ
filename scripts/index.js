document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Sticky Header
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
            }
        });
    });

    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const count = +stat.innerText;
            const increment = target / (animationDuration / frameDuration);
            
            if (count < target) {
                stat.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, frameDuration);
            } else {
                stat.innerText = target;
                if (target === 99.9) {
                    stat.innerText = target.toFixed(1);
                }
            }
        });
    }
    
    // Intersection Observer for Counter Animation
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        currentTestimonial = index;
    }
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);

    // Animated Elements in Hero Section
    const animatedNodes = document.querySelectorAll('[data-animation]');
    
    function animateNodes() {
        animatedNodes.forEach(node => {
            const animationType = node.getAttribute('data-animation');
            
            switch(animationType) {
                case 'float':
                    node.style.animation = `float 6s ease-in-out infinite`;
                    break;
                case 'pulse':
                    node.style.animation = `pulse 4s ease-in-out infinite`;
                    break;
                case 'rotate':
                    node.style.animation = `rotate 8s linear infinite`;
                    break;
            }
            
            // Random delay for each animation
            const randomDelay = Math.random() * 5;
            node.style.animationDelay = `${randomDelay}s`;
        });
    }
    
    animateNodes();

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const serviceTheme = this.getAttribute('data-service');
            let hoverColor;
            
            switch(serviceTheme) {
                case 'data-science':
                    hoverColor = 'rgba(106, 76, 147, 0.1)';
                    break;
                case 'it-support':
                    hoverColor = 'rgba(78, 205, 196, 0.1)';
                    break;
                case 'software':
                    hoverColor = 'rgba(255, 107, 107, 0.1)';
                    break;
                default:
                    hoverColor = 'rgba(106, 76, 147, 0.1)';
            }
            
            this.style.backgroundColor = hoverColor;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // Form Validation for Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value && emailInput.checkValidity()) {
                // Here you would typically send the data to your server
                this.querySelector('button').innerHTML = '<i class="fas fa-check"></i>';
                emailInput.value = '';
                
                setTimeout(() => {
                    this.querySelector('button').innerHTML = '<i class="fas fa-paper-plane"></i>';
                }, 2000);
            }
        });
    }

    // Initialize animations when elements come into view
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .case-study-card, .process-step').forEach(element => {
        animateOnScroll.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const menuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');

        // Change icon between bars and times
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            document.body.style.overflow = '';
        }
    });
});