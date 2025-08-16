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
                statNumber.innerText = count < 10 ? Math.ceil(count + increment) :
                    count < 100 ? Math.ceil(count + increment * 5) :
                        Math.ceil(count + increment * 10);
                setTimeout(animateCounters, 1);
            } else {
                statNumber.innerText = target;
                if (target === 99.99) {
                    statNumber.innerText = target.toFixed(2);
                }
            }
        });
    }

    // Intersection Observer for counter animation
    const statsSection = document.querySelector('.cloud-stats');
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

    // Floating nodes animation
    const floatingNodes = document.querySelectorAll('.floating-node');

    floatingNodes.forEach(node => {
        // Randomize initial position and animation delay
        const randomX = Math.random() * 50 - 25;
        const randomY = Math.random() * 50 - 25;
        const randomDelay = Math.random() * 3;

        node.style.transform = `translate(${randomX}px, ${randomY}px)`;
        node.style.animationDelay = `${randomDelay}s`;
    });

    // Cloud icons animation
    const cloudIcons = document.querySelectorAll('.cloud-icon');

    cloudIcons.forEach(icon => {
        // Randomize animation duration
        const duration = 4 + Math.random() * 4;
        icon.style.animationDuration = `${duration}s`;
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