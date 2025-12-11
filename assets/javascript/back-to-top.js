// ============================================
// BOUTON RETOUR EN HAUT - back-to-top.js
// ============================================
// Crée un bouton flottant pour remonter en haut de la page
// Niveau BTS SIO 1ère Année
// ============================================

/**
 * IIFE (Immediately Invoked Function Expression)
 * Fonction anonyme exécutée immédiatement
 * Évite de polluer l'espace de noms global
 */
(function() {
    'use strict'; // Mode strict JavaScript (meilleures pratiques)
    
    // ============================================
    // CRÉATION DU BOUTON
    // ============================================
    // Vérifier si le bouton n'existe pas déjà
    if (!document.getElementById('back-to-top')) {
        // Créer un nouvel élément button
        const backToTopBtn = document.createElement('button');
        // Définir l'ID
        backToTopBtn.id = 'back-to-top';
        // Ajouter la classe CSS
        backToTopBtn.className = 'back-to-top';
        // Ajouter un attribut d'accessibilité
        backToTopBtn.setAttribute('aria-label', 'Retour en haut de la page');
        // Ajouter l'icône SVG (flèche vers le haut)
        backToTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
        // Ajouter le bouton au body de la page
        document.body.appendChild(backToTopBtn);
    }
    
    // Sélectionner le bouton créé
    const backToTopButton = document.getElementById('back-to-top');
    
    // ============================================
    // AFFICHER/MASQUER LE BOUTON SELON LE SCROLL
    // ============================================
    /**
     * Affiche le bouton si l'utilisateur a scrollé de plus de 300px
     * Sinon, le masque
     */
    function toggleBackToTop() {
        // window.pageYOffset : position de défilement verticale en pixels
        if (window.pageYOffset > 300) {
            // Si scrollé de plus de 300px, afficher le bouton
            backToTopButton.classList.add('show');
        } else {
            // Sinon, masquer le bouton
            backToTopButton.classList.remove('show');
        }
    }
    
    // ============================================
    // SCROLL VERS LE HAUT DE LA PAGE
    // ============================================
    /**
     * Fait défiler la page vers le haut avec une animation fluide
     */
    function scrollToTop() {
        // window.scrollTo() : méthode pour faire défiler la page
        window.scrollTo({
            top: 0,                    // Position en haut (0px)
            behavior: 'smooth'          // Animation fluide
        });
    }
    
    // ============================================
    // ÉCOUTEURS D'ÉVÉNEMENTS
    // ============================================
    // Écouter l'événement de défilement de la page
    window.addEventListener('scroll', toggleBackToTop);
    
    // Écouter le clic sur le bouton
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Initialiser l'état du bouton au chargement de la page
    toggleBackToTop();
})();

