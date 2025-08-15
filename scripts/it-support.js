// document.addEventListener('DOMContentLoaded', function() {
//     // Tab Switching Functionality
//     const tabButtons = document.querySelectorAll('.tab-btn');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             // Remove active class from all buttons/contents
//             tabButtons.forEach(btn => btn.classList.remove('active'));
//             tabContents.forEach(content => content.classList.remove('active'));

//             // Add active class to clicked button
//             button.classList.add('active');

//             // Show corresponding content
//             const tabId = button.getAttribute('data-tab');
//             document.getElementById(tabId).classList.add('active');
//         });
//     });

//     // Animated Counter for Stats
//     const statNumbers = document.querySelectorAll('.stat-number');

//     function animateCounters() {
//         statNumbers.forEach(stat => {
//             const target = parseInt(stat.getAttribute('data-count'));
//             const duration = 2000; // Animation duration in ms
//             const step = target / (duration / 16); // 60fps

//             let current = 0;
//             const increment = () => {
//                 current += step;
//                 if (current < target) {
//                     stat.textContent = Math.floor(current);
//                     requestAnimationFrame(increment);
//                 } else {
//                     stat.textContent = target;
//                     // Add % for uptime stat
//                     if (stat.textContent === "99.9") {
//                         stat.textContent += "%";
//                     }
//                 }
//             };

//             increment();
//         });
//     }

//     // Animate when stats section is in view
//     const statsSection = document.querySelector('.it-stats');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 animateCounters();
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(statsSection);

//     // Animate service cards on scroll
//     const serviceCards = document.querySelectorAll('.tab-content');

//     const animateCards = () => {
//         serviceCards.forEach((card, index) => {
//             const cardPosition = card.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.3;

//             if (cardPosition < screenPosition) {
//                 card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`;
//             }
//         });
//     };

//     // Set initial state
//     serviceCards.forEach(card => {
//         card.style.opacity = '0';
//         card.style.transform = 'translateY(20px)';
//     });

//     window.addEventListener('scroll', animateCards);
//     animateCards(); // Trigger on load
// });

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps

    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            const start = 0;
            const frames = Math.floor(animationDuration / frameDuration);
            const increment = target / frames;

            let current = start;
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(counter);
                    if (target === 99.99) {
                        stat.textContent = target.toFixed(2);
                    } else {
                        stat.textContent = Math.floor(target);
                    }
                } else {
                    if (target === 99.99) {
                        stat.textContent = current.toFixed(2);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }
            }, frameDuration);
        });
    }

    // Intersection Observer for Counter Animation
    const statsSection = document.querySelector('.it-stats');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

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

    // Network Diagram Animation
    const networkElements = document.querySelectorAll('.server-blade, .port, .network-connection, .screen');

    function animateNetwork() {
        networkElements.forEach((element, index) => {
            // Random delay for each element
            const delay = index * 100 + Math.random() * 500;

            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        });
    }

    // Initialize network elements with hidden state
    networkElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Animate when hero section is in view
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNetwork();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const heroSection = document.querySelector('.it-hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dropdown Menu Functionality for Mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('active');
            }
        });
    });
});