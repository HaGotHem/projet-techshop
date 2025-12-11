// ============================================
// PAGE PRODUITS - script_produit.js
// ============================================
// Gère les filtres de produits et l'ajout au panier
// Niveau BTS SIO 1ère Année
// ============================================

/**
 * Attendre que le DOM (Document Object Model) soit complètement chargé
 * avant d'exécuter le code JavaScript
 */
document.addEventListener('DOMContentLoaded', function() {
    // Attendre 100ms pour s'assurer que le panier est chargé
    // Le panier est chargé dans le HTML avant ce script
    setTimeout(() => {
        initProductFilters();      // Initialiser les filtres
        initAddToCartButtons();    // Initialiser les boutons d'ajout au panier
    }, 100);

    /**
     * Initialise le système de filtres par catégorie
     * Permet d'afficher/masquer les produits selon leur catégorie
     */
    function initProductFilters() {
        // Sélectionner tous les boutons de filtre
        const filterButtons = document.querySelectorAll('.btn-filter');
        // Sélectionner tous les produits
        const productItems = document.querySelectorAll('.product-item');

        // Pour chaque bouton de filtre, ajouter un écouteur d'événement
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Récupérer la valeur du filtre depuis l'attribut data-filter
                // Exemple : data-filter="smartphone" ou data-filter="all"
                const filter = this.dataset.filter;

                // ===== MISE À JOUR DE L'ÉTAT ACTIF =====
                // Retirer la classe 'active' de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe 'active' au bouton cliqué
                this.classList.add('active');

                // ===== FILTRAGE DES PRODUITS =====
                productItems.forEach(item => {
                    // Récupérer la catégorie du produit depuis data-category
                    const category = item.dataset.category;
                    
                    // Si le filtre est "all" OU si la catégorie correspond au filtre
                    if (filter === 'all' || category === filter) {
                        // Afficher le produit
                        item.classList.remove('hidden');
                        
                        // Animation d'apparition
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)'; // Décalage vers le bas
                        
                        // Après 50ms, animer l'apparition
                        setTimeout(() => {
                            item.style.transition = 'all 0.4s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)'; // Position normale
                        }, 50);
                    } else {
                        // Masquer le produit avec animation
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)'; // Réduire la taille
                        
                        // Après l'animation, ajouter la classe hidden
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    /**
     * Initialise les boutons "Ajouter au panier"
     * Récupère les informations du produit et les ajoute au panier
     */
    function initAddToCartButtons() {
        // Sélectionner tous les boutons "Ajouter au panier"
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        // Pour chaque bouton, ajouter un écouteur d'événement
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Créer un objet produit avec les données du bouton
                // Les données sont stockées dans les attributs data-*
                const product = {
                    id: parseInt(this.dataset.id),        // Convertir en nombre entier
                    name: this.dataset.name,              // Nom du produit
                    price: parseFloat(this.dataset.price) // Convertir en nombre décimal
                };

                // Vérifier que le gestionnaire de panier existe
                // typeof vérifie le type de la variable
                if (typeof cartManager !== 'undefined') {
                    // Ajouter le produit au panier
                    cartManager.addToCart(product);
                    
                    // ===== ANIMATION DE FEEDBACK VISUEL =====
                    // Sauvegarder le texte original du bouton
                    const originalText = this.innerHTML;
                    // Changer le texte et la couleur
                    this.innerHTML = '✓ Ajouté !';
                    this.style.backgroundColor = '#28a745'; // Vert Bootstrap
                    
                    // Après 1.5 secondes, remettre le texte original
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = ''; // Remettre la couleur par défaut
                    }, 1500);
                } else {
                    // Si le panier n'est pas encore chargé, réessayer après 100ms
                    setTimeout(() => {
                        if (typeof cartManager !== 'undefined') {
                            cartManager.addToCart(product);
                        }
                    }, 100);
                }
            });
        });
    }

    // ============================================
    // ANIMATION AU SCROLL (Intersection Observer)
    // ============================================
    // Anime les produits quand ils entrent dans la zone visible
    
    // Options pour l'Intersection Observer
    const observerOptions = {
        threshold: 0.1,                    // Déclenche quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px'    // Marge de déclenchement
    };

    // Créer un observer pour détecter quand les produits sont visibles
    const productObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Si l'élément est visible dans le viewport
            if (entry.isIntersecting) {
                // Sélectionner la carte produit à l'intérieur
                const productCard = entry.target.querySelector('.product-card');
                if (productCard) {
                    // Animer l'apparition
                    productCard.style.opacity = '1';
                    productCard.style.transform = 'translateY(0)';
                }
                // Ne plus observer cet élément (optimisation)
                productObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les produits pour les animer au scroll
    document.querySelectorAll('.product-item').forEach(item => {
        productObserver.observe(item);
    });
});

