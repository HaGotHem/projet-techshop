// === PAGE CONTACT ===
// Validation du formulaire de contact

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const messageCount = document.getElementById('message-count');
    const successMessage = document.getElementById('success-message');

    if (!contactForm) return;

    // Compteur de caractères pour le message
    if (messageTextarea && messageCount) {
        messageTextarea.addEventListener('input', function() {
            const length = this.value.length;
            messageCount.textContent = length;
            
            // Changer la couleur selon la longueur
            if (length < 10) {
                messageCount.style.color = '#dc3545';
            } else if (length > 900) {
                messageCount.style.color = '#ffc107';
            } else {
                messageCount.style.color = '#06B6D4';
            }
        });
    }

    // Validation en temps réel
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        // Validation au blur
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Supprimer les erreurs au focus
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    // Fonction de validation d'un champ
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Vérifier si le champ est requis
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            errorMessage = 'Ce champ est obligatoire.';
        }

        // Validation spécifique selon le type
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

            // Validation pour le textarea
            if (field.tagName === 'TEXTAREA') {
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères.';
                } else if (value.length > 1000) {
                    isValid = false;
                    errorMessage = 'Le message ne doit pas dépasser 1000 caractères.';
                }
            }

            // Validation pour le select
            if (field.tagName === 'SELECT' && value === '') {
                isValid = false;
                errorMessage = 'Veuillez sélectionner un sujet.';
            }
        }

        // Mettre à jour l'état visuel
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }

        return isValid;
    }

    // Validation de tout le formulaire
    function validateForm() {
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    // Soumission du formulaire
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        // Valider tous les champs
        if (validateForm()) {
            // Simuler l'envoi du formulaire
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Afficher le message de succès
            successMessage.classList.remove('d-none');
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Réinitialiser le formulaire après 2 secondes
            setTimeout(() => {
                contactForm.reset();
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                if (messageCount) messageCount.textContent = '0';
                successMessage.classList.add('d-none');
            }, 5000);

            // Log des données (à remplacer par un vrai envoi)
            console.log('Formulaire soumis:', data);
        } else {
            // Faire défiler vers le premier champ invalide
            const firstInvalid = contactForm.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
        }

        contactForm.classList.add('was-validated');
    });
});

