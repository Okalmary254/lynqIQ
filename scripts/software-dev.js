document.addEventListener('DOMContentLoaded', function () {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Animated counter for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;

    function animateCounters() {
        statNumbers.forEach(statNumber => {
            const target = +statNumber.getAttribute('data-count');
            const count = +statNumber.innerText;
            const increment = target / speed;

            if (count < target) {
                statNumber.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                statNumber.innerText = target;
            }
        });
    }

    // Intersection Observer for counter animation
    const statsSection = document.querySelector('.dev-stats');
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

    // Floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');

    floatingIcons.forEach(icon => {
        // Randomize initial position and animation delay
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        const randomDelay = Math.random() * 5;

        icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
        icon.style.animationDelay = `${randomDelay}s`;
    });

    // Code typing animation
    const codeLines = document.querySelectorAll('.code-line');

    codeLines.forEach((line, index) => {
        // Set custom property for animation width
        const width = line.offsetWidth;
        line.style.setProperty('--width', `${width}px`);

        // Randomize animation duration slightly
        const duration = 3 + Math.random() * 2;
        line.style.animationDuration = `${duration}s`;
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