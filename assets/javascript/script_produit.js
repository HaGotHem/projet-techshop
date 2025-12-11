// === PAGE PRODUITS ===
// Gestion des filtres et intégration du panier

document.addEventListener('DOMContentLoaded', function() {
    // Attendre que le panier soit chargé (il est chargé dans le HTML avant ce script)
    setTimeout(() => {
        initProductFilters();
        initAddToCartButtons();
    }, 100);

    // Initialiser les filtres de produits
    function initProductFilters() {
        const filterButtons = document.querySelectorAll('.btn-filter');
        const productItems = document.querySelectorAll('.product-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;

                // Mettre à jour l'état actif des boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filtrer les produits
                productItems.forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.classList.remove('hidden');
                        // Animation d'apparition
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.transition = 'all 0.4s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    // Initialiser les boutons "Ajouter au panier"
    function initAddToCartButtons() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = {
                    id: parseInt(this.dataset.id),
                    name: this.dataset.name,
                    price: parseFloat(this.dataset.price)
                };

                // Ajouter au panier via le gestionnaire global
                if (typeof cartManager !== 'undefined') {
                    cartManager.addToCart(product);
                    
                    // Animation du bouton
                    const originalText = this.innerHTML;
                    this.innerHTML = '✓ Ajouté !';
                    this.style.backgroundColor = '#28a745';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 1500);
                } else {
                    // Fallback si le panier n'est pas encore chargé
                    setTimeout(() => {
                        if (typeof cartManager !== 'undefined') {
                            cartManager.addToCart(product);
                        }
                    }, 100);
                }
            });
        });
    }

    // Animation au scroll pour les produits
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const productObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const productCard = entry.target.querySelector('.product-card');
                if (productCard) {
                    productCard.style.opacity = '1';
                    productCard.style.transform = 'translateY(0)';
                }
                productObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les produits
    document.querySelectorAll('.product-item').forEach(item => {
        productObserver.observe(item);
    });
});

