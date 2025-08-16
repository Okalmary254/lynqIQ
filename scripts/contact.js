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
            // Simulate form submission 
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
            }, 1000);
        }
    });

    // Function to show popup for 5 seconds
    function showSuccessMessage() {
        const popup = document.getElementById("formSuccess");

        // Show it
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 3000);
    }



    // Add click animation to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.style.transform = 'scale(0.9)';
            setTimeout(() => {
                link.style.transform = 'scale(1)';
            }, 300);
            console.log(`Navigating to ${link.getAttribute('aria-label')}`);
        });
    });
});