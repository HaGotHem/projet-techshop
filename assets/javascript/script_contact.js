/* ========================================
   SCRIPT PAGE CONTACT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Éléments du formulaire
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const messageCount = document.getElementById('message-count');
    const successMessage = document.getElementById('success-message');

    if (!contactForm) return;

    // Compteur de caractères
    if (messageTextarea && messageCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            messageCount.textContent = length;
            
            if (length < 10) {
                messageCount.style.color = '#dc3545';
            } else if (length > 900) {
                messageCount.style.color = '#ffc107';
            } else {
                messageCount.style.color = '#06B6D4';
            }
        });
    }

    // Validation temps réel
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    // Validation champ
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            errorMessage = 'Ce champ est obligatoire.';
        }

        if (value !== '') {
            switch (field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer une adresse email valide.';
                    }
                    break;

                case 'tel':
                    const phoneRegex = /^[0-9+\s\-\(\)]{10,20}$/;
                    if (field.value && !phoneRegex.test(field.value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
                    }
                    break;

                case 'text':
                    if (field.id === 'name') {
                        const nameRegex = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
                        if (!nameRegex.test(value)) {
                            isValid = false;
                            errorMessage = 'Le nom doit contenir entre 2 et 50 caractères (lettres uniquement).';
                        }
                    }
                    break;
            }

            if (field.tagName === 'TEXTAREA') {
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères.';
                } else if (value.length > 1000) {
                    isValid = false;
                    errorMessage = 'Le message ne doit pas dépasser 1000 caractères.';
                }
            }

            if (field.tagName === 'SELECT' && value === '') {
                isValid = false;
                errorMessage = 'Veuillez sélectionner un sujet.';
            }
        }

        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }

        return isValid;
    }

    // Validation formulaire
    function validateForm() {
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }

    // Soumission formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if (validateForm()) {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            successMessage.classList.remove('d-none');
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            setTimeout(() => {
                contactForm.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                if (messageCount) messageCount.textContent = '0';
                successMessage.classList.add('d-none');
            }, 5000);

            console.log('Formulaire soumis:', data);
        } else {
            const firstInvalid = contactForm.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
        }

        contactForm.classList.add('was-validated');
    });
});
