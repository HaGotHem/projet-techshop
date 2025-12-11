// ============================================
// SYSTÈME DE PANIER D'ACHAT - cart.js
// ============================================
// Ce fichier gère le panier d'achat pour toutes les pages du site
// Niveau BTS SIO 1ère Année
// ============================================

/**
 * Classe CartManager : Gère toutes les opérations du panier
 * Utilise la programmation orientée objet (POO)
 */
class CartManager {
    /**
     * Constructeur : Fonction appelée automatiquement à la création de l'objet
     * Initialise le panier en chargeant les données sauvegardées
     */
    constructor() {
        // Charger le panier depuis le stockage local du navigateur
        this.cart = this.loadCart();
        // Initialiser l'interface utilisateur
        this.init();
    }

    /**
     * Charge le panier depuis localStorage (stockage local du navigateur)
     * @returns {Array} Tableau des produits dans le panier
     */
    loadCart() {
        // Récupérer les données sauvegardées avec la clé 'techshop_cart'
        const savedCart = localStorage.getItem('techshop_cart');
        
        // Si des données existent, les convertir de JSON en objet JavaScript
        // Sinon, retourner un tableau vide []
        // Opérateur ternaire : condition ? valeur_si_vrai : valeur_si_faux
        return savedCart ? JSON.parse(savedCart) : [];
    }

    /**
     * Sauvegarde le panier dans localStorage
     * Met aussi à jour l'affichage du compteur de panier
     */
    saveCart() {
        // Convertir le tableau JavaScript en chaîne JSON et le sauvegarder
        localStorage.setItem('techshop_cart', JSON.stringify(this.cart));
        // Mettre à jour le compteur d'articles dans l'interface
        this.updateCartUI();
    }

    /**
     * Initialise le panier au chargement de la page
     * Met à jour l'affichage et prépare les événements
     */
    init() {
        // Mettre à jour le compteur d'articles
        this.updateCartUI();
        // Afficher le contenu du panier dans le modal
        this.renderCartModal();
        
        // Écouter l'événement d'ouverture du modal Bootstrap
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            // Quand le modal s'ouvre, mettre à jour son contenu
            cartModal.addEventListener('show.bs.modal', () => {
                this.renderCartModal();
            });
        }
    }

    /**
     * Ajoute un produit au panier
     * Si le produit existe déjà, augmente sa quantité
     * Sinon, ajoute le produit avec une quantité de 1
     * @param {Object} product - Objet contenant id, name, price du produit
     */
    addToCart(product) {
        // Chercher si le produit existe déjà dans le panier
        // find() : méthode qui retourne le premier élément correspondant
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            // Si le produit existe, augmenter sa quantité de 1
            existingItem.quantity += 1;
        } else {
            // Sinon, ajouter un nouveau produit au panier
            // push() : ajoute un élément à la fin du tableau
            this.cart.push({
                id: product.id,           // Identifiant unique du produit
                name: product.name,       // Nom du produit
                price: product.price,      // Prix unitaire
                quantity: 1                // Quantité initiale
            });
        }
        
        // Sauvegarder les modifications
        this.saveCart();
        // Afficher une notification à l'utilisateur
        // Template literal avec backticks `` pour insérer des variables
        this.showNotification(`${product.name} ajouté au panier !`);
    }

    /**
     * Retire un produit du panier
     * @param {number} productId - Identifiant du produit à retirer
     */
    removeFromCart(productId) {
        // filter() : crée un nouveau tableau avec seulement les éléments qui passent le test
        // On garde tous les produits SAUF celui avec l'id correspondant
        this.cart = this.cart.filter(item => item.id !== productId);
        // Sauvegarder et mettre à jour l'affichage
        this.saveCart();
        this.renderCartModal();
    }

    /**
     * Modifie la quantité d'un produit dans le panier
     * @param {number} productId - Identifiant du produit
     * @param {number} quantity - Nouvelle quantité
     */
    updateQuantity(productId, quantity) {
        // Trouver le produit dans le panier
        const item = this.cart.find(item => item.id === productId);
        
        if (item) {
            // Si la quantité est 0 ou négative, retirer le produit
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                // Sinon, mettre à jour la quantité
                item.quantity = quantity;
                // Sauvegarder et mettre à jour l'affichage
                this.saveCart();
                this.renderCartModal();
            }
        }
    }

    /**
     * Vide complètement le panier
     */
    clearCart() {
        // Réinitialiser le panier à un tableau vide
        this.cart = [];
        // Sauvegarder et mettre à jour l'affichage
        this.saveCart();
        this.renderCartModal();
    }

    /**
     * Calcule le total du panier en euros
     * @returns {number} Total en euros
     */
    getTotal() {
        // reduce() : réduit un tableau à une seule valeur
        // Pour chaque produit : total + (prix × quantité)
        // 0 : valeur initiale du total
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    /**
     * Calcule le nombre total d'articles dans le panier
     * (somme de toutes les quantités)
     * @returns {number} Nombre total d'articles
     */
    getTotalItems() {
        // Pour chaque produit, ajouter sa quantité au total
        return this.cart.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    }

    /**
     * Met à jour l'affichage du compteur de panier dans le header
     * Affiche le nombre d'articles et masque le badge si le panier est vide
     */
    updateCartUI() {
        // Sélectionner l'élément qui affiche le compteur
        const cartCount = document.getElementById('cart-count');
        
        if (cartCount) {
            // Calculer le nombre total d'articles
            const totalItems = this.getTotalItems();
            // Afficher le nombre dans le badge
            cartCount.textContent = totalItems;
            // Afficher ou masquer le badge selon s'il y a des articles
            // Opérateur ternaire : condition ? valeur_si_vrai : valeur_si_faux
            cartCount.style.display = totalItems > 0 ? 'block' : 'none';
        }
    }

    /**
     * Génère et affiche le contenu HTML du modal du panier
     * Crée dynamiquement les éléments pour chaque produit
     */
    renderCartModal() {
        // Sélectionner les conteneurs HTML
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        // Si le conteneur n'existe pas, arrêter la fonction
        if (!cartItemsContainer) return;

        // Si le panier est vide, afficher un message
        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="text-muted text-center">Votre panier est vide</p>';
            if (cartTotal) cartTotal.textContent = '0€';
            return;
        }

        // Construire le HTML pour chaque produit
        let html = '';
        // forEach() : parcourt chaque élément du tableau
        this.cart.forEach(item => {
            // Template literal (backticks) pour créer du HTML avec des variables
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

        // Insérer le HTML généré dans la page
        cartItemsContainer.innerHTML = html;
        // Afficher le total avec 2 décimales
        if (cartTotal) cartTotal.textContent = `${this.getTotal().toFixed(2)}€`;

        // Attacher les événements aux boutons créés
        this.attachCartEventListeners();
    }

    /**
     * Attache les événements (clics) aux boutons du panier
     * Cette fonction est appelée après chaque mise à jour du modal
     */
    attachCartEventListeners() {
        // ===== BOUTONS DE QUANTITÉ (+ et -) =====
        // Sélectionner tous les boutons de quantité
        document.querySelectorAll('.quantity-btn').forEach(btn => {
            // Ajouter un écouteur d'événement 'click'
            btn.addEventListener('click', (e) => {
                // Récupérer l'ID du produit depuis l'attribut data-id
                // parseInt() : convertit une chaîne en nombre entier
                const productId = parseInt(btn.dataset.id);
                // Récupérer l'action (increase ou decrease)
                const action = btn.dataset.action;
                // Trouver le produit dans le panier
                const item = this.cart.find(item => item.id === productId);
                
                if (item) {
                    // Augmenter ou diminuer la quantité selon le bouton cliqué
                    if (action === 'increase') {
                        this.updateQuantity(productId, item.quantity + 1);
                    } else if (action === 'decrease') {
                        this.updateQuantity(productId, item.quantity - 1);
                    }
                }
            });
        });

        // ===== BOUTONS DE SUPPRESSION (×) =====
        // Sélectionner tous les boutons de suppression
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Récupérer l'ID et retirer le produit
                const productId = parseInt(btn.dataset.id);
                this.removeFromCart(productId);
            });
        });

        // ===== BOUTON DE VALIDATION DE COMMANDE =====
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            // Cloner le bouton pour éviter les doublons d'événements
            const newCheckoutBtn = checkoutBtn.cloneNode(true);
            checkoutBtn.parentNode.replaceChild(newCheckoutBtn, checkoutBtn);
            
            // Ajouter l'événement au nouveau bouton
            newCheckoutBtn.addEventListener('click', () => {
                // Vérifier que le panier n'est pas vide
                if (this.cart.length > 0) {
                    // Afficher un message de confirmation
                    alert('Merci pour votre commande ! Total : ' + this.getTotal().toFixed(2) + '€');
                    // Vider le panier
                    this.clearCart();
                    
                    // Fermer le modal Bootstrap
                    const modalElement = document.getElementById('cartModal');
                    if (modalElement) {
                        // Récupérer l'instance Bootstrap du modal
                        const modal = bootstrap.Modal.getInstance(modalElement);
                        if (modal) modal.hide(); // Fermer le modal
                    }
                }
            });
        }
    }

    /**
     * Affiche une notification temporaire à l'utilisateur
     * @param {string} message - Message à afficher
     */
    showNotification(message) {
        // Supprimer les notifications existantes pour éviter les doublons
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(n => n.remove());

        // Créer un nouvel élément div pour la notification
        const notification = document.createElement('div');
        // Ajouter les classes CSS
        notification.className = 'cart-notification notification show';
        // Définir le texte de la notification
        notification.textContent = message;
        // Ajouter la notification au body de la page
        document.body.appendChild(notification);

        // Retirer la notification après 3 secondes
        setTimeout(() => {
            // Retirer la classe 'show' pour l'animation de disparition
            notification.classList.remove('show');
            // Supprimer complètement l'élément après l'animation (300ms)
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// ============================================
// INITIALISATION GLOBALE
// ============================================

// Créer une instance de CartManager accessible dans tout le site
// Cette variable est utilisée dans les autres fichiers JavaScript
const cartManager = new CartManager();

// Export pour utilisation dans d'autres fichiers (si module système utilisé)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CartManager;
}

