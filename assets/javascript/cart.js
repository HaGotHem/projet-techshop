// ============================================
// SYSTÈME DE PANIER D'ACHAT - cart.js
// ============================================

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.init();
    }

    loadCart() {
        const savedCart = localStorage.getItem('techshop_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem('techshop_cart', JSON.stringify(this.cart));
        this.updateCartUI();
    }
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

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCartModal();
    }

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

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.renderCartModal();
    }

    getTotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }

    updateCartUI() {
        const cartCount = document.getElementById('cart-count');
        
        if (cartCount) {
            const totalItems = this.getTotalItems();
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

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

    attachCartEventListeners() {
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

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(btn.dataset.id);
                this.removeFromCart(productId);
            });
        });
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

// ============================================
// INITIALISATION GLOBALE
// ============================================

const cartManager = new CartManager();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}

