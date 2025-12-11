/* ========================================
   SYSTÈME DE PANIER
   ======================================== */

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

// Initialisation globale
const cartManager = new CartManager();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}
