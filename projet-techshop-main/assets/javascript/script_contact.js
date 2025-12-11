// ============================================
// PAGE CONTACT - script_contact.js
// ============================================
// Gère la validation du formulaire de contact
// Niveau BTS SIO 1ère Année
// ============================================

/**
 * Attendre que le DOM soit chargé avant d'exécuter le code
 */
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner les éléments du formulaire
    const contactForm = document.getElementById('contact-form');
    const messageTextarea = document.getElementById('message');
    const messageCount = document.getElementById('message-count');
    const successMessage = document.getElementById('success-message');

    // Si le formulaire n'existe pas, arrêter l'exécution
    if (!contactForm) return;

    // ============================================
    // COMPTEUR DE CARACTÈRES POUR LE MESSAGE
    // ============================================
    if (messageTextarea && messageCount) {
        // Écouter chaque frappe dans le textarea
        messageTextarea.addEventListener('input', function() {
            // Récupérer la longueur du texte saisi
            const length = this.value.length;
            // Afficher le nombre de caractères
            messageCount.textContent = length;
            
            // Changer la couleur selon la longueur du message
            if (length < 10) {
                // Rouge si moins de 10 caractères (minimum requis)
                messageCount.style.color = '#dc3545'; // Rouge Bootstrap
            } else if (length > 900) {
                // Jaune si proche de la limite (1000 caractères max)
                messageCount.style.color = '#ffc107'; // Jaune Bootstrap
            } else {
                // Cyan si dans la plage valide
                messageCount.style.color = '#06B6D4'; // Couleur principale du site
            }
        });
    }

    // ============================================
    // VALIDATION EN TEMPS RÉEL DES CHAMPS
    // ============================================
    // Sélectionner tous les champs du formulaire
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validation quand l'utilisateur quitte le champ (événement 'blur')
        input.addEventListener('blur', function() {
            validateField(this);
        });

        // Re-valider pendant la saisie si le champ était invalide
        // Cela permet de corriger les erreurs en temps réel
        input.addEventListener('input', function() {
            // Si le champ avait une erreur, re-valider
            if (this.classList.contains('is-invalid')) {
                validateField(this);
            }
        });
    });

    /**
     * Valide un champ du formulaire
     * @param {HTMLElement} field - L'élément HTML du champ à valider
     * @returns {boolean} true si le champ est valide, false sinon
     */
    function validateField(field) {
        // Récupérer la valeur et supprimer les espaces au début/fin
        const value = field.value.trim();
        let isValid = true;  // Par défaut, le champ est valide
        let errorMessage = '';

        // ===== VÉRIFICATION DU CHAMP REQUIS =====
        // Si le champ est obligatoire et vide
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
            errorMessage = 'Ce champ est obligatoire.';
        }

        // ===== VALIDATION SPÉCIFIQUE SELON LE TYPE =====
        // Ne valider que si le champ n'est pas vide
        if (value !== '') {
            // Utiliser switch pour gérer différents types de champs
            switch (field.type) {
                case 'email':
                    // Expression régulière pour valider un email
                    // Format : texte@texte.texte
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer une adresse email valide.';
                    }
                    break;

                case 'tel':
                    // Expression régulière pour valider un téléphone
                    // Entre 10 et 20 caractères : chiffres, +, espaces, tirets, parenthèses
                    const phoneRegex = /^[0-9+\s\-\(\)]{10,20}$/;
                    if (field.value && !phoneRegex.test(field.value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer un numéro de téléphone valide.';
                    }
                    break;

                case 'text':
                    // Validation spécifique pour le champ nom
                    if (field.id === 'name') {
                        // Expression régulière : lettres (avec accents) et espaces uniquement
                        // Entre 2 et 50 caractères
                        const nameRegex = /^[A-Za-zÀ-ÿ\s]{2,50}$/;
                        if (!nameRegex.test(value)) {
                            isValid = false;
                            errorMessage = 'Le nom doit contenir entre 2 et 50 caractères (lettres uniquement).';
                        }
                    }
                    break;
            }

            // ===== VALIDATION DU TEXTAREA (MESSAGE) =====
            // tagName retourne le nom de la balise en majuscules
            if (field.tagName === 'TEXTAREA') {
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères.';
                } else if (value.length > 1000) {
                    isValid = false;
                    errorMessage = 'Le message ne doit pas dépasser 1000 caractères.';
                }
            }

            // ===== VALIDATION DU SELECT (SUJET) =====
            if (field.tagName === 'SELECT' && value === '') {
                isValid = false;
                errorMessage = 'Veuillez sélectionner un sujet.';
            }
        }

        // ===== MISE À JOUR DE L'ÉTAT VISUEL =====
        // Ajouter/retirer les classes Bootstrap pour l'affichage
        if (isValid) {
            // Champ valide : retirer la classe d'erreur, ajouter la classe de succès
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            // Champ invalide : retirer la classe de succès, ajouter la classe d'erreur
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
        }

        return isValid;
    }

    /**
     * Valide tous les champs du formulaire
     * @returns {boolean} true si tous les champs sont valides
     */
    function validateForm() {
        let isFormValid = true;
        
        // Valider chaque champ
        inputs.forEach(input => {
            // Si un champ est invalide, le formulaire entier est invalide
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }

    // ============================================
    // SOUMISSION DU FORMULAIRE
    // ============================================
    contactForm.addEventListener('submit', function(e) {
        // Empêcher l'envoi par défaut du formulaire (rechargement de page)
        e.preventDefault();
        // Empêcher la propagation de l'événement
        e.stopPropagation();

        // Valider tous les champs avant l'envoi
        if (validateForm()) {
            // ===== FORMULAIRE VALIDE =====
            
            // Récupérer les données du formulaire
            // FormData : objet natif pour récupérer les valeurs
            const formData = new FormData(contactForm);
            // Convertir FormData en objet JavaScript simple
            const data = Object.fromEntries(formData);

            // Afficher le message de succès
            successMessage.classList.remove('d-none');
            // Faire défiler jusqu'au message de succès
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Réinitialiser le formulaire après 5 secondes
            setTimeout(() => {
                // Réinitialiser tous les champs
                contactForm.reset();
                // Retirer toutes les classes de validation
                inputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                // Remettre le compteur de caractères à 0
                if (messageCount) messageCount.textContent = '0';
                // Masquer le message de succès
                successMessage.classList.add('d-none');
            }, 5000);

            // Afficher les données dans la console (pour debug)
            // Dans un vrai projet, on enverrait ces données à un serveur
            console.log('Formulaire soumis:', data);
        } else {
            // ===== FORMULAIRE INVALIDE =====
            
            // Trouver le premier champ invalide
            const firstInvalid = contactForm.querySelector('.is-invalid');
            if (firstInvalid) {
                // Faire défiler jusqu'au champ invalide
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // Mettre le focus sur ce champ pour que l'utilisateur puisse le corriger
                firstInvalid.focus();
            }
        }

        // Ajouter la classe Bootstrap pour activer le style de validation
        contactForm.classList.add('was-validated');
    });
});

