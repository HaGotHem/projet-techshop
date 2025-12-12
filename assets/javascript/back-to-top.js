// ============================================
// BOUTON RETOUR EN HAUT - back-to-top.js
// ============================================

(function() {
    'use strict'; // Mode strict JavaScript (meilleures pratiques)
    
    // ============================================
    // CRÉATION DU BOUTON
    // ============================================
    if (!document.getElementById('back-to-top')) {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'back-to-top';
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.setAttribute('aria-label', 'Retour en haut de la page');
        backToTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
        document.body.appendChild(backToTopBtn);
    }
    const backToTopButton = document.getElementById('back-to-top');
    
    // ============================================
    // AFFICHER/MASQUER LE BOUTON SELON LE SCROLL
    // ============================================
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    // ============================================
    // SCROLL VERS LE HAUT DE LA PAGE
    // ============================================
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // ============================================
    // ÉCOUTEURS D'ÉVÉNEMENTS
    // ============================================
    window.addEventListener('scroll', toggleBackToTop);
    backToTopButton.addEventListener('click', scrollToTop);
    toggleBackToTop();
})();

