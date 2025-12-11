// === SYSTÈME DE PANIER PARTAGÉ ===
// Ce fichier gère le panier d'achat pour toutes les pages

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    // Charger le panier depuis localStorage
    loadCart() {
        const savedCart = localStorage.getItem('techshop_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // Sauvegarder le panier dans localStorage
    saveCart() {
        localStorage.setItem('techshop_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }

    // Initialiser le panier
    init() {
        this.updateCartUI();
        this.renderCartModal();
        
        // Re-rendre le modal quand il s'ouvre
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            cartModal.addEventListener('show.bs.modal', () => {
                this.renderCartModal();
            });
        }
    }

    // Ajouter un produit au panier
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

    // Retirer un produit du panier
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCartModal();
    }

    // Modifier la quantité d'un produit
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

    // Calculer le total du panier
    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Calculer le nombre total d'articles
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    // Mettre à jour l'UI du panier (badge compteur)
    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = this.getTotalItems();
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    // Rendre le modal du panier
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

        // Ajouter les event listeners
        this.attachCartEventListeners();
    }

    // Attacher les event listeners au panier
    attachCartEventListeners() {
        // Boutons de quantité
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

        // Boutons de suppression
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(btn.dataset.id);
                this.removeFromCart(productId);
            });
        });

        // Bouton de validation
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            // Retirer les anciens listeners
            const newCheckoutBtn = checkoutBtn.cloneNode(true);
            checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
            
            newCheckoutBtn.addEventListener('click', () => {
                if (this.cart.length > 0) {
                    alert('Merci pour votre commande ! Total : ' + this.getTotal().toFixed(2) + '€');
                    this.clearCart();
                    // Fermer le modal
                    const modalElement = document.getElementById('cartModal');
                    if (modalElement) {
                        const modal = bootstrap.Modal.getInstance(modalElement);
                        if (modal) modal.hide();
                    }
                }
            });
        }
    }

    // Afficher une notification
    showNotification(message) {
        // Supprimer les notifications existantes
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(n => n.remove());

        // Créer la notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification notification show';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Retirer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialiser le gestionnaire de panier
const cartManager = new CartManager();

// Exporter pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}

