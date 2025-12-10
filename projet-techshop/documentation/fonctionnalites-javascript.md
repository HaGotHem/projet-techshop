# ⚙️ Fonctionnalités JavaScript - TechShop

## 📋 Vue d'ensemble

Ce document liste toutes les fonctionnalités JavaScript à implémenter, classées par priorité.

---

## 🎯 Tableau Récapitulatif

| #   | Fonctionnalité          | Type       | Priorité | Complexité | Temps estimé | Pages concernées         | Dépendances    |
| --- | ----------------------- | ---------- | -------- | ---------- | ------------ | ------------------------ | -------------- |
| 1   | Menu Hamburger          | Obligatoire | 🔴 HIGH  | ⭐         | 1h           | Toutes                   | Bootstrap      |
| 2   | Panier d'achat          | Obligatoire | 🔴 HIGH  | ⭐⭐⭐     | 2h           | Toutes                   | localStorage   |
| 3   | Validation formulaire   | Obligatoire | 🔴 HIGH  | ⭐⭐       | 1h           | Contact                  | Bootstrap      |
| 4   | Filtres produits        | Obligatoire | 🟡 MED   | ⭐⭐       | 1h           | Produits                 | -              |
| 5   | Slider produits         | Bonus      | 🟢 LOW   | ⭐⭐       | 1h           | Accueil                  | Bootstrap      |
| 6   | Recherche temps réel    | Bonus      | 🟢 LOW   | ⭐⭐       | 1h           | Produits                 | -              |
| 7   | Scroll to top           | Bonus      | 🟢 LOW   | ⭐         | 30min        | Toutes                   | -              |
| 8   | Wishlist                | Bonus      | 🟢 LOW   | ⭐⭐       | 1h           | Produits                 | localStorage   |
| 9   | Dark mode               | Bonus      | 🟢 LOW   | ⭐⭐       | 1h           | Toutes                   | localStorage   |
| 10  | Notifications toast     | Bonus      | 🟢 LOW   | ⭐         | 30min        | Toutes (panier, contact) | Bootstrap      |
| 11  | Animation scroll        | Bonus      | 🟢 LOW   | ⭐⭐       | 1h           | Toutes                   | IntersectionObserver |

**Légende** :
- ⭐ : Simple
- ⭐⭐ : Moyen
- ⭐⭐⭐ : Complexe

---

## 🔴 Fonctionnalités OBLIGATOIRES (4 fonctionnalités)

### 1️⃣ Menu Hamburger Mobile

**Description** : Menu de navigation responsive qui se transforme en menu hamburger sur mobile avec animation.

**Pages** : Toutes

**Comportement** :
- Desktop (≥992px) : Navigation horizontale visible
- Mobile/Tablette (<992px) : Bouton hamburger qui affiche/masque le menu

**Implémentation** :

```javascript
// === MENU HAMBURGER ===
// Bootstrap gère automatiquement le toggle, mais on peut ajouter des animations custom

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Ajouter une classe pour animation personnalisée (optionnel)
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            // Animation custom si besoin
            this.classList.toggle('active');
        });
    }

    // Fermer le menu en cliquant sur un lien (sur mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});
```

**HTML requis** :
```html
<button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
    <!-- Contenu du menu -->
</div>
```

**Tests** :
- [ ] Le bouton hamburger est visible uniquement sur mobile/tablette
- [ ] Le menu s'ouvre et se ferme au clic
- [ ] L'animation est fluide
- [ ] Le menu se ferme en cliquant sur un lien

**Temps estimé** : 1h

---

### 2️⃣ Panier d'Achat (Fonctionnalité Principale)

**Description** : Système de panier complet permettant d'ajouter/supprimer des produits, afficher le total et persister les données.

**Pages** : Toutes (accessible depuis le header)

**Fonctionnalités** :
1. Ajouter un produit au panier
2. Afficher le nombre d'articles dans le badge du header
3. Ouvrir un modal pour voir le contenu du panier
4. Supprimer un article du panier
5. Calculer et afficher le total
6. Persister le panier dans localStorage

**Structure de données** :

```javascript
// Structure du panier
const cart = {
    items: [
        {
            id: 1,
            name: "Smartphone X Pro",
            price: 599,
            quantity: 1,
            image: "assets/images/product1.webp"
        }
    ]
};
```

**Implémentation** :

```javascript
// === PANIER D'ACHAT ===

// 1. Initialisation
let cart = {
    items: []
};

// 2. Charger le panier depuis localStorage au chargement
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    updateCartUI();
    initCartButtons();
});

// 3. Charger le panier depuis localStorage
function loadCart() {
    const savedCart = localStorage.getItem('techshop-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// 4. Sauvegarder le panier dans localStorage
function saveCart() {
    localStorage.setItem('techshop-cart', JSON.stringify(cart));
}

// 5. Ajouter un produit au panier
function addToCart(productId, productName, productPrice, productImage) {
    // Vérifier si le produit existe déjà
    const existingItem = cart.items.find(item => item.id === productId);

    if (existingItem) {
        // Incrémenter la quantité
        existingItem.quantity++;
    } else {
        // Ajouter nouveau produit
        cart.items.push({
            id: productId,
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1,
            image: productImage
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${productName} ajouté au panier`);
}

// 6. Supprimer un produit du panier
function removeFromCart(productId) {
    cart.items = cart.items.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// 7. Calculer le total
function calculateTotal() {
    return cart.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

// 8. Mettre à jour l'interface (badge + modal)
function updateCartUI() {
    // Mettre à jour le badge du compteur
    const cartCount = cart.items.reduce((total, item) => total + item.quantity, 0);
    const cartBadge = document.getElementById('cart-count');
    if (cartBadge) {
        cartBadge.textContent = cartCount;
    }

    // Mettre à jour le contenu du modal
    displayCartItems();

    // Mettre à jour le total
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.textContent = `${calculateTotal().toFixed(2)}€`;
    }
}

// 9. Afficher les articles dans le modal
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-4">
                <i class="bi bi-cart-x fs-1 text-muted"></i>
                <p class="text-muted mt-3">Votre panier est vide</p>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
            <img src="${item.image}" alt="${item.name}" class="rounded me-3" style="width: 80px; height: 80px; object-fit: cover;">
            <div class="flex-grow-1">
                <h3 class="h6 mb-1">${item.name}</h3>
                <p class="text-muted mb-1">Quantité : ${item.quantity}</p>
                <p class="text-primary fw-bold">${(item.price * item.quantity).toFixed(2)}€</p>
            </div>
            <button class="btn btn-outline-danger btn-sm remove-from-cart"
                    data-id="${item.id}">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `).join('');

    // Ajouter les événements de suppression
    document.querySelectorAll('.remove-from-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            removeFromCart(productId);
        });
    });
}

// 10. Initialiser les boutons "Ajouter au panier"
function initCartButtons() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.dataset.id);
            const productName = this.dataset.name;
            const productPrice = this.dataset.price;
            const productImage = this.dataset.image || 'assets/images/default.webp';

            addToCart(productId, productName, productPrice, productImage);
        });
    });

    // Ouvrir le modal panier
    const cartIcon = document.querySelector('.cart-icon button');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
            cartModal.show();
        });
    }
}

// 11. Notification (simple)
function showNotification(message) {
    // Version simple avec alert (remplacer par toast pour bonus)
    // alert(message);

    // Ou version avec Bootstrap Toast (bonus)
    console.log(message);
}
```

**HTML requis** :

```html
<!-- Badge panier dans le header -->
<button class="btn btn-outline-light position-relative">
    <i class="bi bi-cart3"></i>
    <span class="badge rounded-pill bg-danger" id="cart-count">0</span>
</button>

<!-- Bouton ajouter au panier (sur chaque produit) -->
<button class="btn btn-primary add-to-cart"
        data-id="1"
        data-name="Smartphone X Pro"
        data-price="599"
        data-image="assets/images/smartphone1.webp">
    Ajouter au panier
</button>

<!-- Modal panier -->
<div class="modal fade" id="cartModal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="h5">Votre Panier</h2>
                <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div id="cart-items"></div>
            </div>
            <div class="modal-footer">
                <div>Total : <span id="cart-total">0€</span></div>
                <button class="btn btn-secondary" data-bs-dismiss="modal">Continuer</button>
                <button class="btn btn-primary">Commander</button>
            </div>
        </div>
    </div>
</div>
```

**Tests** :
- [ ] Ajouter un produit met à jour le badge
- [ ] Les produits s'affichent dans le modal
- [ ] Le total est calculé correctement
- [ ] Supprimer un produit fonctionne
- [ ] Le panier persiste après rechargement (localStorage)
- [ ] Le panier est accessible depuis toutes les pages

**Temps estimé** : 2h

---

### 3️⃣ Validation Formulaire Contact

**Description** : Validation en temps réel du formulaire de contact avec messages d'erreur et de succès.

**Pages** : Contact

**Champs à valider** :
- **Nom** : requis, min 2 caractères
- **Email** : requis, format email valide
- **Téléphone** : optionnel, format 10 chiffres si rempli
- **Sujet** : requis, une option doit être sélectionnée
- **Message** : requis, min 10 caractères

**Implémentation** :

```javascript
// === VALIDATION FORMULAIRE CONTACT ===

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        // Validation temps réel sur chaque champ
        const formFields = contactForm.querySelectorAll('input, select, textarea');

        formFields.forEach(field => {
            field.addEventListener('input', function() {
                validateField(this);
            });
        });

        // Validation à la soumission
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            if (validateForm(this)) {
                submitForm(this);
            }
        });
    }
});

// Valider un champ individuel
function validateField(field) {
    const fieldValue = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';

    // Validation selon le type de champ
    switch(fieldName) {
        case 'name':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Le nom est requis.';
            } else if (fieldValue.length < 2) {
                isValid = false;
                errorMessage = 'Le nom doit contenir au moins 2 caractères.';
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'L\'email est requis.';
            } else if (!emailRegex.test(fieldValue)) {
                isValid = false;
                errorMessage = 'Veuillez entrer une adresse email valide.';
            }
            break;

        case 'phone':
            if (fieldValue !== '') {
                const phoneRegex = /^[0-9]{10}$/;
                if (!phoneRegex.test(fieldValue)) {
                    isValid = false;
                    errorMessage = 'Le téléphone doit contenir 10 chiffres (ex: 0612345678).';
                }
            }
            break;

        case 'subject':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Veuillez sélectionner un sujet.';
            }
            break;

        case 'message':
            if (fieldValue === '') {
                isValid = false;
                errorMessage = 'Le message est requis.';
            } else if (fieldValue.length < 10) {
                isValid = false;
                errorMessage = 'Le message doit contenir au moins 10 caractères.';
            }
            break;
    }

    // Appliquer les classes Bootstrap
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');

        // Mettre à jour le message d'erreur
        const feedbackDiv = field.nextElementSibling;
        if (feedbackDiv && feedbackDiv.classList.contains('invalid-feedback')) {
            feedbackDiv.textContent = errorMessage;
        }
    }

    return isValid;
}

// Valider tout le formulaire
function validateForm(form) {
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isFormValid = true;

    fields.forEach(field => {
        const isFieldValid = validateField(field);
        if (!isFieldValid) {
            isFormValid = false;
        }
    });

    return isFormValid;
}

// Soumettre le formulaire
function submitForm(form) {
    // Masquer les messages précédents
    const successMessage = document.getElementById('success-message');

    // Simuler l'envoi (dans un vrai projet, utiliser fetch/AJAX)
    setTimeout(() => {
        // Afficher le message de succès
        if (successMessage) {
            successMessage.classList.remove('d-none');
        }

        // Réinitialiser le formulaire
        form.reset();

        // Retirer les classes de validation
        const fields = form.querySelectorAll('.is-valid, .is-invalid');
        fields.forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });

        // Masquer le message après 5 secondes
        setTimeout(() => {
            if (successMessage) {
                successMessage.classList.add('d-none');
            }
        }, 5000);
    }, 500);
}
```

**HTML requis** :
```html
<form id="contact-form" novalidate>
    <div class="mb-3">
        <label for="name">Nom *</label>
        <input type="text" class="form-control" id="name" name="name" required>
        <div class="invalid-feedback">Veuillez entrer votre nom.</div>
    </div>
    <!-- Autres champs... -->

    <div class="alert alert-success d-none" id="success-message">
        Message envoyé avec succès !
    </div>
</form>
```

**Tests** :
- [ ] Les champs se valident en temps réel
- [ ] Les messages d'erreur s'affichent correctement
- [ ] Les classes Bootstrap (.is-valid, .is-invalid) sont appliquées
- [ ] Le message de succès s'affiche après soumission
- [ ] Le formulaire se réinitialise après succès
- [ ] Le téléphone (optionnel) valide le format uniquement si rempli

**Temps estimé** : 1h

---

### 4️⃣ Filtres Produits par Catégorie

**Description** : Filtrer dynamiquement l'affichage des produits selon la catégorie sélectionnée.

**Pages** : Produits

**Catégories** :
- Tous (affiche tous les produits)
- Smartphones
- Laptops
- Accessoires

**Implémentation** :

```javascript
// === FILTRES PRODUITS ===

document.addEventListener('DOMContentLoaded', function() {
    initProductFilters();
});

function initProductFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const productItems = document.querySelectorAll('.product-item');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Mettre à jour les boutons actifs
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filtrer les produits
            filterProducts(filter, productItems);
        });
    });
}

function filterProducts(category, productItems) {
    productItems.forEach(item => {
        const productCategory = item.dataset.category;

        if (category === 'all' || productCategory === category) {
            // Afficher le produit avec animation
            item.classList.remove('d-none');
            item.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            // Masquer le produit
            item.classList.add('d-none');
        }
    });
}
```

**CSS requis** :
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

**HTML requis** :
```html
<!-- Boutons de filtre -->
<div class="btn-group">
    <button class="btn btn-outline-primary active" data-filter="all">Tous</button>
    <button class="btn btn-outline-primary" data-filter="smartphone">Smartphones</button>
    <button class="btn btn-outline-primary" data-filter="laptop">Laptops</button>
    <button class="btn btn-outline-primary" data-filter="accessoire">Accessoires</button>
</div>

<!-- Produits -->
<div class="product-item" data-category="smartphone">...</div>
<div class="product-item" data-category="laptop">...</div>
```

**Tests** :
- [ ] Cliquer sur "Tous" affiche tous les produits
- [ ] Cliquer sur une catégorie affiche uniquement les produits de cette catégorie
- [ ] Le bouton actif a la classe "active"
- [ ] L'animation de transition est fluide

**Temps estimé** : 1h

---

## 🟢 Fonctionnalités BONUS (7 fonctionnalités)

### 5️⃣ Slider/Carrousel Produits

**Description** : Carrousel automatique des produits phares sur la page d'accueil.

**Pages** : Accueil

**Implémentation** : Utiliser Bootstrap Carousel

```javascript
// Déjà géré par Bootstrap, juste configurer l'autoplay
<div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
    <!-- Slides -->
</div>
```

**Temps estimé** : 1h

---

### 6️⃣ Recherche en Temps Réel

**Description** : Barre de recherche qui filtre les produits dynamiquement.

**Pages** : Produits

**Implémentation** :
```javascript
const searchInput = document.getElementById('search-products');
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    filterProductsBySearch(query);
});
```

**Temps estimé** : 1h

---

### 7️⃣ Bouton Scroll to Top

**Description** : Bouton qui apparaît au scroll et remonte en haut de page.

**Pages** : Toutes

**Temps estimé** : 30min

---

### 8️⃣ Wishlist (Liste de souhaits)

**Description** : Ajouter des produits à une liste de favoris persistante.

**Pages** : Produits

**Implémentation** : Similaire au panier, avec localStorage

**Temps estimé** : 1h

---

### 9️⃣ Dark Mode

**Description** : Toggle pour passer en mode sombre.

**Pages** : Toutes

**Implémentation** : localStorage + classes CSS

**Temps estimé** : 1h

---

### 🔟 Notifications Toast

**Description** : Notifications élégantes pour remplacer les alerts.

**Pages** : Toutes (panier, contact)

**Implémentation** : Bootstrap Toast

**Temps estimé** : 30min

---

### 1️⃣1️⃣ Animation au Scroll

**Description** : Éléments qui apparaissent progressivement au scroll.

**Pages** : Toutes

**Implémentation** : Intersection Observer API

**Temps estimé** : 1h

---

## 📂 Organisation du Code JavaScript

### Structure du fichier `assets/js/script.js`

```javascript
// ===================================
// TECHSHOP - SCRIPT PRINCIPAL
// ===================================

// === 1. INITIALISATION ===
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initCart();
    initContactForm();
    initProductFilters();
    // Bonus
    // initScrollToTop();
    // initDarkMode();
});

// === 2. NAVIGATION ===
function initNavigation() {
    // Code menu hamburger
}

// === 3. PANIER ===
let cart = { items: [] };

function initCart() { }
function loadCart() { }
function saveCart() { }
function addToCart() { }
function removeFromCart() { }
function calculateTotal() { }
function updateCartUI() { }
function displayCartItems() { }

// === 4. FORMULAIRE CONTACT ===
function initContactForm() { }
function validateField() { }
function validateForm() { }
function submitForm() { }

// === 5. FILTRES PRODUITS ===
function initProductFilters() { }
function filterProducts() { }

// === 6. FONCTIONS BONUS ===
// function initScrollToTop() { }
// function initDarkMode() { }
// function showToast() { }
```

---

## ✅ Checklist de Développement JS

### Jour 3 - JavaScript
- [ ] **Menu hamburger**
  - [ ] Animation ouverture/fermeture
  - [ ] Fermeture au clic sur lien (mobile)
  - [ ] Tests responsive

- [ ] **Panier d'achat**
  - [ ] Fonction addToCart()
  - [ ] Fonction removeFromCart()
  - [ ] Calcul du total
  - [ ] Badge compteur
  - [ ] Modal panier
  - [ ] Persistance localStorage
  - [ ] Tests sur toutes les pages

- [ ] **Validation formulaire**
  - [ ] Validation temps réel
  - [ ] Validation à la soumission
  - [ ] Messages d'erreur
  - [ ] Message de succès
  - [ ] Reset formulaire

- [ ] **Filtres produits**
  - [ ] Filtrage par catégorie
  - [ ] Animation transition
  - [ ] Bouton actif

### Bonus (si temps)
- [ ] Slider produits
- [ ] Recherche temps réel
- [ ] Scroll to top
- [ ] Wishlist
- [ ] Dark mode
- [ ] Notifications toast
- [ ] Animation scroll

---

## 🧪 Tests

### Tests Fonctionnels
| Fonctionnalité        | Chrome | Firefox | Safari | Mobile |
| --------------------- | ------ | ------- | ------ | ------ |
| Menu hamburger        | [ ]    | [ ]     | [ ]    | [ ]    |
| Panier - Ajout        | [ ]    | [ ]     | [ ]    | [ ]    |
| Panier - Suppression  | [ ]    | [ ]     | [ ]    | [ ]    |
| Panier - Total        | [ ]    | [ ]     | [ ]    | [ ]    |
| Panier - Persistance  | [ ]    | [ ]     | [ ]    | [ ]    |
| Form - Validation     | [ ]    | [ ]     | [ ]    | [ ]    |
| Form - Soumission     | [ ]    | [ ]     | [ ]    | [ ]    |
| Filtres produits      | [ ]    | [ ]     | [ ]    | [ ]    |

### Tests de Performance
- [ ] Pas de ralentissement lors de l'ajout de produits
- [ ] Animations fluides (60fps)
- [ ] localStorage ne dépasse pas 5MB
- [ ] Pas d'erreurs dans la console

---

## 📚 Ressources

### Documentation
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [localStorage MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)
- [Form Validation API](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)

### Outils
- Chrome DevTools (débogage)
- Lighthouse (performance)
- WAVE (accessibilité)

---

**Date de création** : 10 décembre 2024
**Version** : 1.0
**Complément du document** : `planification-technique.md`
