/* ========================================
   SCRIPTS GLOBAUX - TechShop
   ========================================
 */

(function() {
    'use strict';

    // ========================================
    // GESTIONNAIRE DE THÈME
    // ========================================

    // Récupérer le thème sauvegardé ou utiliser le thème système
    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Détecter la préférence système
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    }

    // Appliquer le thème
    function setTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateToggleIcon('dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateToggleIcon('light');
        }
    }

    // Mettre à jour l'icône du bouton toggle
    function updateToggleIcon(theme) {
        const toggleBtn = document.getElementById('theme-toggle-btn');
        if (!toggleBtn) return;

        const icon = toggleBtn.querySelector('svg');
        if (!icon) return;

        // Supprimer l'ancienne icône
        icon.remove();

        // Créer la nouvelle icône
        const newIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        newIcon.setAttribute('width', '20');
        newIcon.setAttribute('height', '20');
        newIcon.setAttribute('viewBox', '0 0 24 24');
        newIcon.setAttribute('fill', 'none');
        newIcon.setAttribute('stroke', 'currentColor');
        newIcon.setAttribute('stroke-width', '2');
        newIcon.setAttribute('stroke-linecap', 'round');
        newIcon.setAttribute('stroke-linejoin', 'round');

        if (theme === 'dark') {
            // Icône soleil pour passer en mode clair
            newIcon.innerHTML = `
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            `;
        } else {
            // Icône lune pour passer en mode sombre
            newIcon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `;
        }

        toggleBtn.appendChild(newIcon);
    }

    // Initialiser le thème au chargement
    function initTheme() {
        const theme = getInitialTheme();
        setTheme(theme);
    }

    // Gérer le clic sur le bouton toggle
    function handleThemeToggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Écouter les changements de préférence système
    function watchSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    // ========================================
    // SYSTÈME DE PANIER
    // ========================================

    class CartManager {
        constructor() {
            this.cart = this.loadCart();
            this.init();
        }

        // Chargement du panier
        loadCart() {
            const savedCart = localStorage.getItem('techshop_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        }

        // Sauvegarde du panier
        saveCart() {
            localStorage.setItem('techshop_cart', JSON.stringify(this.cart));
            this.updateCartUI();
        }

        // Initialisation
        init() {
            this.updateCartUI();
            this.renderCartModal();
            
            const cartModal = document.getElementById('cartModal');
            if (cartModal) {
                cartModal.addEventListener('show.bs.modal', () => {
                    this.renderCartModal();
                });
            }
        }

        // Ajouter au panier
        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                });
            }
            
            this.saveCart();
            this.showNotification(`${product.name} ajouté au panier !`);
        }

        // Retirer du panier
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveCart();
            this.renderCartModal();
        }

        // Modifier quantité
        updateQuantity(productId, quantity) {
            const item = this.cart.find(item => item.id === productId);
            
            if (item) {
                if (quantity <= 0) {
                    this.removeFromCart(productId);
                } else {
                    item.quantity = quantity;
                    this.saveCart();
                    this.renderCartModal();
                }
            }
        }

        // Vider le panier
        clearCart() {
            this.cart = [];
            this.saveCart();
            this.renderCartModal();
        }

        // Calculer total
        getTotal() {
            return this.cart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
        }

        // Nombre total d'articles
        getTotalItems() {
            return this.cart.reduce((total, item) => {
                return total + item.quantity;
            }, 0);
        }

        // Mise à jour UI
        updateCartUI() {
            const cartCount = document.getElementById('cart-count');
            
            if (cartCount) {
                const totalItems = this.getTotalItems();
                cartCount.textContent = totalItems;
                cartCount.style.display = totalItems > 0 ? 'block' : 'none';
            }
        }

        // Rendu modal panier
        renderCartModal() {
            const cartItemsContainer = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            
            if (!cartItemsContainer) return;

            if (this.cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-muted text-center">Votre panier est vide</p>';
                if (cartTotal) cartTotal.textContent = '0€';
                return;
            }

            let html = '';
            this.cart.forEach(item => {
                html += `
                    <div class="cart-item" data-id="${item.id}">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${item.price}€ × ${item.quantity}</div>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <button class="btn btn-sm btn-outline-secondary quantity-btn" 
                                    data-id="${item.id}" 
                                    data-action="decrease">-</button>
                            <span class="quantity-display">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-secondary quantity-btn" 
                                    data-id="${item.id}" 
                                    data-action="increase">+</button>
                            <button class="cart-item-remove" 
                                    data-id="${item.id}" 
                                    aria-label="Retirer du panier">×</button>
                        </div>
                    </div>
                `;
            });

            cartItemsContainer.innerHTML = html;
            if (cartTotal) cartTotal.textContent = `${this.getTotal().toFixed(2)}€`;

            this.attachCartEventListeners();
        }

        // Événements panier
        attachCartEventListeners() {
            // Boutons quantité
            document.querySelectorAll('.quantity-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.dataset.id);
                    const action = btn.dataset.action;
                    const item = this.cart.find(item => item.id === productId);
                    
                    if (item) {
                        if (action === 'increase') {
                            this.updateQuantity(productId, item.quantity + 1);
                        } else if (action === 'decrease') {
                            this.updateQuantity(productId, item.quantity - 1);
                        }
                    }
                });
            });

            // Boutons suppression
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const productId = parseInt(btn.dataset.id);
                    this.removeFromCart(productId);
                });
            });

            // Bouton validation
            const checkoutBtn = document.getElementById('checkout-btn');
            if (checkoutBtn) {
                const newCheckoutBtn = checkoutBtn.cloneNode(true);
                checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
                
                newCheckoutBtn.addEventListener('click', () => {
                    if (this.cart.length > 0) {
                        alert('Merci pour votre commande ! Total : ' + this.getTotal().toFixed(2) + '€');
                        this.clearCart();
                        
                        const modalElement = document.getElementById('cartModal');
                        if (modalElement) {
                            const modal = bootstrap.Modal.getInstance(modalElement);
                            if (modal) modal.hide();
                        }
                    }
                });
            }
        }

        // Notification
        showNotification(message) {
            const existingNotifications = document.querySelectorAll('.cart-notification');
            existingNotifications.forEach(n => n.remove());

            const notification = document.createElement('div');
            notification.className = 'cart-notification notification show';
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }
    }

    // ========================================
    // BOUTON RETOUR EN HAUT
    // ========================================

    function initBackToTop() {
        // Création du bouton
        if (!document.getElementById('back-to-top')) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.id = 'back-to-top';
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.setAttribute('aria-label', 'Retour en haut de la page');
            backToTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>';
            document.body.appendChild(backToTopBtn);
        }
        
        const backToTopButton = document.getElementById('back-to-top');
        
        // Afficher/Masquer selon scroll
        function toggleBackToTop() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
        
        // Scroll vers le haut
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Événements
        window.addEventListener('scroll', toggleBackToTop);
        backToTopButton.addEventListener('click', scrollToTop);
        
        toggleBackToTop();
    }

    // ========================================
    // INITIALISATION
    // ========================================

    // Initialiser le thème immédiatement (avant DOMContentLoaded pour éviter le flash)
    initTheme();
    watchSystemTheme();

    // Initialiser le reste quand le DOM est prêt
    function init() {
        // Thème toggle button
        const toggleBtn = document.getElementById('theme-toggle-btn');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', handleThemeToggle);
        }

        // Panier (accessible globalement)
        window.cartManager = new CartManager();

        // Bouton retour en haut
        initBackToTop();
    }

    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export pour compatibilité module (si nécessaire)
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { CartManager };
    }
})();

