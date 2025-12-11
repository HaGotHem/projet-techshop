# ⚙️ Fonctionnalités JavaScript - TechShop

## 📋 Vue d'ensemble

Ce document liste toutes les fonctionnalités JavaScript implémentées dans le projet TechShop, classées par priorité et statut d'implémentation.

---

## 🎯 Tableau Récapitulatif

| #   | Fonctionnalité          | Type       | Priorité | Statut      | Temps estimé | Pages concernées         | Dépendances    |
| --- | ----------------------- | ---------- | -------- | ----------- | ------------ | ------------------------ | -------------- |
| 1   | Menu Hamburger          | Obligatoire | HIGH  | ✅ Implémenté |  1h           | Toutes                   | Bootstrap      |
| 2   | Panier d'achat          | Obligatoire | HIGH  | ✅ Implémenté |  2h           | Toutes                   | localStorage   |
| 3   | Validation formulaire   | Obligatoire | HIGH  | ✅ Implémenté |  1h           | Contact                  | Bootstrap      |
| 4   | Filtres produits        | Obligatoire | MED   | ✅ Implémenté |  1h           | Produits                 | -              |
| 5   | Carousel Hero           | Obligatoire | MED   | ✅ Implémenté |  1h           | Accueil                  | Bootstrap      |
| 6   | Scroll to top           | Bonus      |  LOW   | ✅ Implémenté |  30min        | Toutes                   | -              |
| 7   | Dark mode               | Bonus      |  LOW   | ✅ Implémenté |  1h           | Toutes                   | localStorage   |
| 8   | Notifications toast     | Bonus      |  LOW   | ✅ Implémenté |  30min        | Toutes (panier, contact) | Bootstrap      |
| 9   | Animation scroll        | Bonus      |  LOW   | ✅ Implémenté |  1h           | Toutes                   | IntersectionObserver |
| 10  | Pagination produits     | Bonus      |  LOW   | ✅ Implémenté |  1h           | Produits                 | -              |
| 11  | Filtre par prix         | Bonus      |  LOW   | ✅ Implémenté |  1h           | Produits                 | -              |

---

## 📁 Structure des Fichiers JavaScript

```
assets/javascript/
├── bootstrap.min.js          # Framework Bootstrap
├── cart.js                  # Gestionnaire de panier
├── theme-toggle.js          # Gestion du mode sombre
├── script_index.js          # Scripts page d'accueil
├── script_produit.js        # Scripts page produits
├── script_contact.js        # Scripts page contact
├── script_apropos.js        # Scripts page à propos
└── back-to-top.js           # Bouton retour en haut
```

---

## 🔧 Fonctionnalités Détaillées

### 1. Menu Hamburger (Bootstrap)

**Fichier** : Géré par Bootstrap 5

**Fonctionnalité** : Menu responsive qui s'affiche en hamburger sur mobile

**Implémentation** :
- Utilise les classes Bootstrap `navbar-toggler` et `collapse`
- Animation automatique gérée par Bootstrap
- Accessible avec attributs ARIA

---

### 2. Panier d'Achat

**Fichier** : `assets/javascript/cart.js`

**Fonctionnalités** :
- ✅ Ajouter des produits au panier
- ✅ Supprimer des produits du panier
- ✅ Modifier les quantités
- ✅ Calculer le total automatiquement
- ✅ Persistance avec localStorage
- ✅ Compteur dans le header
- ✅ Modal d'affichage du panier
- ✅ Notification lors de l'ajout

**Structure de données** :
```javascript
{
  items: [
    {
      id: 1,
      name: "Smartphone X Pro",
      price: 599,
      quantity: 1
    }
  ],
  total: 599
}
```

**Méthodes principales** :
- `addToCart(product)` : Ajouter un produit
- `removeFromCart(id)` : Supprimer un produit
- `updateQuantity(id, quantity)` : Modifier la quantité
- `calculateTotal()` : Calculer le total
- `displayCart()` : Afficher le panier dans le modal
- `updateCartCount()` : Mettre à jour le badge compteur
- `saveCart()` : Sauvegarder dans localStorage
- `loadCart()` : Charger depuis localStorage

---

### 3. Validation Formulaire Contact

**Fichier** : `assets/javascript/script_contact.js`

**Validations implémentées** :
- ✅ Nom : requis, minimum 2 caractères
- ✅ Email : requis, format valide (regex)
- ✅ Téléphone : optionnel, format 10 chiffres
- ✅ Sujet : requis
- ✅ Message : requis, minimum 10 caractères
- ✅ Compteur de caractères pour le message
- ✅ Validation en temps réel
- ✅ Messages d'erreur personnalisés
- ✅ Message de succès après envoi

**Événements** :
- `input` : Validation en temps réel
- `blur` : Validation au focus out
- `submit` : Validation finale avant envoi

---

### 4. Filtres Produits

**Fichier** : `assets/javascript/script_produit.js`

**Fonctionnalités** :
- ✅ Filtrage par catégorie (Smartphones, Laptops, Accessoires)
- ✅ Bouton "Tous" pour afficher tous les produits
- ✅ Animation lors du changement de filtre
- ✅ Filtrage par prix (tranches prédéfinies)
- ✅ Réinitialisation des filtres

**Méthode** :
- Utilise `data-category` sur les cartes produits
- Utilise `data-filter` sur les boutons de filtre
- Toggle classe `hidden` pour masquer/afficher

**Tranches de prix** :
- 0-50€
- 50-150€
- 150-500€
- 500-1000€
- 1000-2000€
- 2000€+

---

### 5. Carousel Hero

**Fichier** : `assets/javascript/script_index.js`

**Fonctionnalités** :
- ✅ Carousel automatique avec Bootstrap
- ✅ Transitions en fondu (fade)
- ✅ Contrôles précédent/suivant
- ✅ Indicateurs de slide
- ✅ Animations avec anime.js lors du changement de slide
- ✅ Intervalle de 5 secondes entre les slides

**Animations** :
- Titre : translation Y + fade
- Badge promo : scale + rotation
- Texte : translation X + fade
- Bouton : fade in

---

### 6. Scroll to Top

**Fichier** : `assets/javascript/back-to-top.js`

**Fonctionnalités** :
- ✅ Bouton créé dynamiquement
- ✅ Apparition après 300px de scroll
- ✅ Défilement fluide vers le haut
- ✅ Animation d'apparition/disparition
- ✅ Icône SVG animée

**Comportement** :
- Masqué par défaut
- Apparaît après scroll de 300px
- Disparaît quand on remonte en haut
- Animation smooth lors du clic

---

### 7. Dark Mode (Mode Sombre)

**Fichier** : `assets/javascript/theme-toggle.js`

**Fonctionnalités** :
- ✅ Toggle entre mode clair et mode sombre
- ✅ Sauvegarde de la préférence dans localStorage
- ✅ Détection de la préférence système
- ✅ Changement d'icône (soleil/lune)
- ✅ Transitions fluides entre les thèmes
- ✅ Application sur toutes les pages

**Méthode** :
- Utilise l'attribut `data-theme="dark"` sur `<html>`
- Variables CSS adaptées selon le thème
- Préférence sauvegardée pour les visites suivantes

---

### 8. Notifications Toast

**Fichier** : Intégré dans `cart.js` et `script_contact.js`

**Fonctionnalités** :
- ✅ Notification lors de l'ajout au panier
- ✅ Notification lors de l'envoi du formulaire
- ✅ Animation d'apparition/disparition
- ✅ Position fixe en haut à droite
- ✅ Auto-disparition après 3 secondes

**Style** :
- Fond cyan (`#06B6D4`)
- Texte blanc
- Ombre portée
- Animation slide depuis la droite

---

### 9. Animation Scroll (Intersection Observer)

**Fichier** : `assets/javascript/script_produit.js` et autres

**Fonctionnalités** :
- ✅ Animation des cartes produits au scroll
- ✅ Animation des témoignages
- ✅ Animation des cartes équipe
- ✅ Utilise Intersection Observer API
- ✅ Performance optimisée (ne s'anime qu'une fois)

**Comportement** :
- Éléments invisibles par défaut (`opacity: 0`)
- Animation `fadeInUp` quand l'élément entre dans le viewport
- Délais échelonnés pour effet cascade

---

### 10. Pagination Produits

**Fichier** : `assets/javascript/script_produit.js`

**Fonctionnalités** :
- ✅ Affichage de 12 produits par page
- ✅ Navigation avec boutons précédent/suivant
- ✅ Numéros de page cliquables
- ✅ Scroll automatique vers le haut lors du changement
- ✅ Adaptation avec les filtres

**Comportement** :
- Masque les produits non visibles
- Affiche uniquement les produits de la page courante
- Met à jour la pagination selon les filtres actifs

---

### 11. Filtre par Prix

**Fichier** : `assets/javascript/script_produit.js`

**Fonctionnalités** :
- ✅ Filtrage par tranches de prix
- ✅ Sélection multiple possible
- ✅ Checkboxes avec validation
- ✅ Bouton de réinitialisation
- ✅ Animation lors du filtrage

**Tranches disponibles** :
- 0-50€
- 50-150€
- 150-500€
- 500-1000€
- 1000-2000€
- 2000€+

---

## 🎨 Animations et Effets

### Animations CSS
- Transitions sur tous les éléments interactifs (0.3s ease)
- Hover effects sur les cartes (translateY, scale)
- Animations de fade in/out
- Animations de slide

### Animations JavaScript (anime.js)
- Animations du carousel hero
- Animations des éléments au scroll
- Effets de bounce et elastic


