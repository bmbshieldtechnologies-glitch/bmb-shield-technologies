document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation Header
    const header = document.querySelector('header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on init

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scrolling when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'initial';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'initial';
            });
        });
    }

    // 3. Active Page Navigation Indicator
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (pageName === linkHref || (pageName === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 4. Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            // Reset previous errors
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => group.classList.remove('has-error'));
            
            // Name validation
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Name is required');
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim()) {
                showError(emailInput, 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Subject validation
            if (!subjectInput.value.trim()) {
                showError(subjectInput, 'Subject is required');
                isValid = false;
            }
            
            // Message validation
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Message is required');
                isValid = false;
            }
            
            if (isValid) {
                // Form is valid! Show success modal.
                if (successModal) {
                    successModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
                
                // Clear the form fields
                contactForm.reset();
                
                // For textareas/inputs with floating label styling, reset labels
                const inputs = contactForm.querySelectorAll('.form-input');
                inputs.forEach(input => {
                    input.blur();
                });
            }
        });

        // Hide Error helper
        const inputs = contactForm.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                const group = input.closest('.form-group');
                if (group.classList.contains('has-error')) {
                    group.classList.remove('has-error');
                }
            });
        });
    }

    function showError(inputElement, errorMessage) {
        const group = inputElement.closest('.form-group');
        const errorText = group.querySelector('.error-message span');
        if (errorText) {
            errorText.textContent = errorMessage;
        }
        group.classList.add('has-error');
    }

    // Close Modal event listeners
    if (closeModalBtn && successModal) {
        const closeModal = () => {
            successModal.classList.remove('active');
            document.body.style.overflow = 'initial';
        };
        
        closeModalBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking on overlay background
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeModal();
            }
        });
    }

    // 5. Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const checkReveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                el.classList.add('revealed');
            }
        });
    };
    
    // Initial reveal class check and scroll event
    if (revealElements.length > 0) {
        // Inject keyframe style for fade-in animations
        const style = document.createElement('style');
        style.innerHTML = `
            .reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            }
            .reveal.revealed {
                opacity: 1;
                transform: translateY(0);
            }
            .reveal-delay-1 { transition-delay: 0.15s; }
            .reveal-delay-2 { transition-delay: 0.3s; }
            .reveal-delay-3 { transition-delay: 0.45s; }
        `;
        document.head.appendChild(style);
        
        window.addEventListener('scroll', checkReveal);
        checkReveal(); // Initial check
    }
});
