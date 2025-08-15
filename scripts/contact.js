document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('formSuccess');

    // Validate on Submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Message Validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        // Submit if Valid
        if (isValid) {
            // Simulate form submission (replace with actual fetch/AJAX)
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            }, 1000);
        }
    });

    // Replace the map initialization with:
    const map = L.map('map').setView([-1.270104, 36.808140], 17); // GTC Towers zoomed in

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Kenyan-themed marker (green instead of blue)
    const kenyaIcon = L.icon({
        iconUrl: '../assets/location-pin-ke.svg', // Green pin SVG
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    L.marker([-1.270104, 36.808140], { icon: kenyaIcon }).addTo(map)
        .bindPopup(`
    <b>Lynqiq Nairobi</b><br>
    <img src="assets/gtc-towers-thumb.jpg" width="120"><br>
    GTC Towers, 5th Floor
  `);
    // Custom Marker Icon
    const customIcon = L.icon({
        iconUrl: 'assets/location-pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    L.marker([37.7749, -122.4194], { icon: customIcon }).addTo(map)
        .bindPopup('<b>Lynqiq HQ</b><br>GTC Towers, Nairobi');

    // Add click animation to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.style.transform = 'scale(0.9)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 300);
            // In a real scenario, this would link to your social profiles
            console.log(`Navigating to ${link.getAttribute('aria-label')}`);
        });
    });
});