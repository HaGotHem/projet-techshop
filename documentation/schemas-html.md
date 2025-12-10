# 📐 Schémas Structure HTML - TechShop

## 🏛️ Structure Globale (Toutes les pages)

```
┌─────────────────────────────────────────────────┐
│                   <html>                        │
│  ┌───────────────────────────────────────────┐  │
│  │              <head>                       │  │
│  │  - meta charset, viewport                │  │
│  │  - title                                  │  │
│  │  - Bootstrap CSS                          │  │
│  │  - CSS custom                             │  │
│  └───────────────────────────────────────────┘  │
│                                                  │
│  ┌───────────────────────────────────────────┐  │
│  │              <body>                       │  │
│  │                                           │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │         <header>                    │  │  │
│  │  │  ┌───────────────────────────────┐  │  │  │
│  │  │  │         <nav>                 │  │  │  │
│  │  │  │  - Logo                       │  │  │  │
│  │  │  │  - Menu hamburger (mobile)    │  │  │  │
│  │  │  │  - Liens navigation           │  │  │  │
│  │  │  │  - Icône panier + badge       │  │  │  │
│  │  │  └───────────────────────────────┘  │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │                                           │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │         <main>                      │  │  │
│  │  │  (Contenu spécifique à chaque page) │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │                                           │  │
│  │  ┌─────────────────────────────────────┐  │  │
│  │  │         <footer>                    │  │  │
│  │  │  - Informations entreprise          │  │  │
│  │  │  - Liens utiles                     │  │  │
│  │  │  - Newsletter                       │  │  │
│  │  │  - Copyright                        │  │  │
│  │  └─────────────────────────────────────┘  │  │
│  │                                           │  │
│  │  <!-- Scripts -->                         │  │
│  │  - Bootstrap JS                           │  │
│  │  - Script custom                          │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

---

## 🏠 Page Accueil (index.html)

```
<main>
  │
  ├── <section class="hero-section">
  │   │   (Section Promo / Hero)
  │   │
  │   └── <div class="container">
  │       └── <div class="row">
  │           ├── <div class="col-lg-6">
  │           │   ├── <h1>Titre principal</h1>
  │           │   ├── <p>Description</p>
  │           │   └── <a>CTA Button</a>
  │           │
  │           └── <div class="col-lg-6">
  │               └── <img>Hero image</img>
  │
  ├── <section class="services-section">
  │   │   (Section Services)
  │   │
  │   └── <div class="container">
  │       ├── <h2>Nos Services</h2>
  │       └── <div class="row">
  │           ├── <div class="col-md-4">
  │           │   └── <div class="card">
  │           │       ├── <i>Icône</i>
  │           │       ├── <h3>Titre service</h3>
  │           │       └── <p>Description</p>
  │           │
  │           ├── <div class="col-md-4">
  │           │   └── <div class="card">...</div>
  │           │
  │           └── <div class="col-md-4">
  │               └── <div class="card">...</div>
  │
  ├── <section class="collage-section">
  │   │   (Section Collage / Galerie)
  │   │
  │   └── <div class="container">
  │       ├── <h2>Produits Phares</h2>
  │       └── <div class="row">
  │           ├── <div class="col-md-6 col-lg-3">
  │           │   └── <img>Produit 1</img>
  │           │
  │           ├── <div class="col-md-6 col-lg-3">
  │           │   └── <img>Produit 2</img>
  │           │
  │           ├── <div class="col-md-6 col-lg-3">
  │           │   └── <img>Produit 3</img>
  │           │
  │           └── <div class="col-md-6 col-lg-3">
  │               └── <img>Produit 4</img>
  │
  └── <section class="testimonials-section">
      │   (Section Avis Clients)
      │
      └── <div class="container">
          ├── <h2>Avis Clients</h2>
          └── <div class="row">
              ├── <div class="col-md-6 col-lg-4">
              │   └── <div class="card">
              │       ├── <div>Rating (étoiles)</div>
              │       ├── <p>Témoignage</p>
              │       └── <footer>Nom client</footer>
              │
              ├── <div class="col-md-6 col-lg-4">
              │   └── <div class="card">...</div>
              │
              └── <div class="col-md-6 col-lg-4">
                  └── <div class="card">...</div>
```

**Balises sémantiques utilisées** :
- `<main>` : Contenu principal
- `<section>` : Sections thématiques
- `<h1>`, `<h2>`, `<h3>` : Hiérarchie des titres
- `<footer>` : Pied de page des cartes d'avis

---

## 🛍️ Page Produits (produits.html)

```
<main>
  │
  └── <section class="products-section">
      │   (Section Produits avec Filtres)
      │
      └── <div class="container">
          │
          ├── <h1>Nos Produits</h1>
          │
          ├── <div class="filters">
          │   │   (Filtres par catégorie)
          │   │
          │   └── <div class="btn-group" role="group">
          │       ├── <button data-filter="all">Tous</button>
          │       ├── <button data-filter="smartphone">Smartphones</button>
          │       ├── <button data-filter="laptop">Laptops</button>
          │       └── <button data-filter="accessoire">Accessoires</button>
          │
          ├── <div class="row" id="products-grid">
          │   │   (Grille de produits)
          │   │
          │   ├── <div class="col-sm-6 col-md-4 col-lg-3 product-item" data-category="smartphone">
          │   │   └── <article class="card">
          │   │       ├── <span class="badge">Promo -20%</span>
          │   │       ├── <img>Image produit</img>
          │   │       └── <div class="card-body">
          │   │           ├── <h3>Nom produit</h3>
          │   │           ├── <p>Description</p>
          │   │           ├── <div>
          │   │           │   ├── <span>Prix actuel</span>
          │   │           │   └── <span>Prix barré</span>
          │   │           └── <button class="add-to-cart">Ajouter au panier</button>
          │   │
          │   ├── <div class="col-sm-6 col-md-4 col-lg-3 product-item">
          │   │   └── <article class="card">...</article>
          │   │
          │   └── ... (répéter 8-12 produits)
          │
          └── <div class="modal" id="cartModal">
              │   (Modal Panier)
              │
              └── <div class="modal-dialog">
                  └── <div class="modal-content">
                      ├── <div class="modal-header">
                      │   ├── <h2>Votre Panier</h2>
                      │   └── <button class="btn-close"></button>
                      │
                      ├── <div class="modal-body">
                      │   └── <div id="cart-items">
                      │       (Articles du panier - généré par JS)
                      │
                      └── <div class="modal-footer">
                          ├── <div>Total : <span id="cart-total">0€</span></div>
                          └── <div>
                              ├── <button>Continuer mes achats</button>
                              └── <button>Valider la commande</button>
```

**Balises sémantiques utilisées** :
- `<article>` : Chaque carte produit est un article autonome
- `<h1>` : Titre principal de la page
- `<h2>` : Titre du modal panier
- `<h3>` : Nom de chaque produit

**Attributs data-*** :
- `data-filter` : Sur les boutons de filtre
- `data-category` : Sur les produits
- `data-id`, `data-name`, `data-price` : Sur les boutons "Ajouter au panier"

---

## 📧 Page Contact (contact.html)

```
<main>
  │
  └── <section class="contact-section">
      │   (Section Contact)
      │
      └── <div class="container">
          │
          ├── <h1>Contactez-nous</h1>
          │
          └── <div class="row">
              │
              ├── <div class="col-lg-7">
              │   │   (Formulaire de contact)
              │   │
              │   └── <form id="contact-form" novalidate>
              │       │
              │       ├── <div class="mb-3">
              │       │   ├── <label for="name">Nom complet *</label>
              │       │   ├── <input type="text" id="name" required>
              │       │   └── <div class="invalid-feedback">Message erreur</div>
              │       │
              │       ├── <div class="mb-3">
              │       │   ├── <label for="email">Email *</label>
              │       │   ├── <input type="email" id="email" required>
              │       │   └── <div class="invalid-feedback">Message erreur</div>
              │       │
              │       ├── <div class="mb-3">
              │       │   ├── <label for="phone">Téléphone</label>
              │       │   ├── <input type="tel" id="phone">
              │       │   └── <div class="invalid-feedback">Message erreur</div>
              │       │
              │       ├── <div class="mb-3">
              │       │   ├── <label for="subject">Sujet *</label>
              │       │   ├── <select id="subject" required>
              │       │   │   ├── <option>Demande d'information</option>
              │       │   │   ├── <option>Question sur une commande</option>
              │       │   │   └── ...
              │       │   └── <div class="invalid-feedback">Message erreur</div>
              │       │
              │       ├── <div class="mb-3">
              │       │   ├── <label for="message">Message *</label>
              │       │   ├── <textarea id="message" required></textarea>
              │       │   └── <div class="invalid-feedback">Message erreur</div>
              │       │
              │       ├── <button type="submit">Envoyer</button>
              │       │
              │       └── <div class="alert alert-success d-none" id="success-message">
              │           Message envoyé avec succès !
              │
              └── <div class="col-lg-5">
                  │   (Informations de contact)
                  │
                  └── <div class="card">
                      └── <div class="card-body">
                          ├── <h2>Nos Coordonnées</h2>
                          │
                          ├── <div>
                          │   ├── <h3>Adresse</h3>
                          │   └── <p>123 Rue...</p>
                          │
                          ├── <div>
                          │   ├── <h3>Téléphone</h3>
                          │   └── <p><a href="tel:+33...">+33 1...</a></p>
                          │
                          ├── <div>
                          │   ├── <h3>Email</h3>
                          │   └── <p><a href="mailto:...">contact@...</a></p>
                          │
                          └── <div>
                              ├── <h3>Horaires</h3>
                              └── <p>Lun-Ven : 9h-18h...</p>
```

**Balises sémantiques utilisées** :
- `<form>` : Formulaire de contact
- `<label>` + `<input>` : Association label/champ
- `<h1>`, `<h2>`, `<h3>` : Hiérarchie des titres

**Accessibilité** :
- Attributs `for` et `id` pour associer labels et inputs
- Attributs `required` pour champs obligatoires
- Attribut `pattern` pour validation format
- Attribut `aria-label` si nécessaire
- Messages `invalid-feedback` pour retours utilisateur

---

## ℹ️ Page À propos (apropos.html)

```
<main>
  │
  ├── <section class="about-intro">
  │   │   (Introduction)
  │   │
  │   └── <div class="container">
  │       ├── <h1>À propos de TechShop</h1>
  │       └── <div class="row">
  │           ├── <div class="col-lg-6">
  │           │   └── <img>Image équipe</img>
  │           │
  │           └── <div class="col-lg-6">
  │               ├── <h2>Notre Mission</h2>
  │               ├── <p class="lead">Texte mission</p>
  │               └── <p>Description</p>
  │
  ├── <section class="history-section">
  │   │   (Histoire)
  │   │
  │   └── <div class="container">
  │       ├── <h2>Notre Histoire</h2>
  │       └── <div class="row">
  │           └── <div class="col-lg-8">
  │               └── <div class="timeline">
  │                   ├── <div>
  │                   │   ├── <h3>2020 - Les Débuts</h3>
  │                   │   └── <p>Description</p>
  │                   │
  │                   ├── <div>
  │                   │   ├── <h3>2021 - Expansion</h3>
  │                   │   └── <p>Description</p>
  │                   │
  │                   └── ... (autres étapes)
  │
  ├── <section class="team-section">
  │   │   (Équipe)
  │   │
  │   └── <div class="container">
  │       ├── <h2>Notre Équipe</h2>
  │       └── <div class="row">
  │           ├── <div class="col-sm-6 col-md-4 col-lg-3">
  │           │   └── <div class="card">
  │           │       ├── <img>Photo membre</img>
  │           │       └── <div class="card-body">
  │           │           ├── <h3>Nom</h3>
  │           │           └── <p>Poste</p>
  │           │
  │           ├── <div class="col-sm-6 col-md-4 col-lg-3">
  │           │   └── <div class="card">...</div>
  │           │
  │           └── ... (4 membres minimum)
  │
  └── <section class="values-section">
      │   (Valeurs)
      │
      └── <div class="container">
          ├── <h2>Nos Valeurs</h2>
          └── <div class="row">
              ├── <div class="col-md-4">
              │   └── <div>
              │       ├── <i>Icône</i>
              │       ├── <h3>Passion</h3>
              │       └── <p>Description</p>
              │
              ├── <div class="col-md-4">
              │   └── <div>...</div>
              │
              └── <div class="col-md-4">
                  └── <div>...</div>
```

**Balises sémantiques utilisées** :
- `<section>` : Sections thématiques (intro, histoire, équipe, valeurs)
- `<h1>`, `<h2>`, `<h3>` : Hiérarchie des titres
- `<p class="lead">` : Paragraphe d'introduction mis en avant

---

## 🧩 Composant Footer (Commun à toutes les pages)

```
<footer class="footer-site">
  │
  └── <div class="container">
      │
      ├── <div class="row">
      │   │
      │   ├── <div class="col-md-4">
      │   │   │   (Colonne 1 : À propos)
      │   │   │
      │   │   ├── <h3>TechShop</h3>
      │   │   ├── <p>Description courte</p>
      │   │   └── <div class="social-links">
      │   │       ├── <a href="#" aria-label="Facebook">Icône</a>
      │   │       ├── <a href="#" aria-label="Twitter">Icône</a>
      │   │       ├── <a href="#" aria-label="Instagram">Icône</a>
      │   │       └── <a href="#" aria-label="LinkedIn">Icône</a>
      │   │
      │   ├── <div class="col-md-4">
      │   │   │   (Colonne 2 : Liens utiles)
      │   │   │
      │   │   ├── <h3>Liens Utiles</h3>
      │   │   └── <ul>
      │   │       ├── <li><a href="index.html">Accueil</a></li>
      │   │       ├── <li><a href="produits.html">Produits</a></li>
      │   │       ├── <li><a href="contact.html">Contact</a></li>
      │   │       └── <li><a href="apropos.html">À propos</a></li>
      │   │
      │   └── <div class="col-md-4">
      │       │   (Colonne 3 : Newsletter)
      │       │
      │       ├── <h3>Newsletter</h3>
      │       ├── <p>Description</p>
      │       └── <form class="newsletter-form">
      │           └── <div class="input-group">
      │               ├── <input type="email" placeholder="Votre email">
      │               └── <button type="submit">S'abonner</button>
      │
      ├── <hr>
      │
      └── <div class="text-center">
          └── <p>&copy; 2024 TechShop. Tous droits réservés.</p>
```

**Balises sémantiques utilisées** :
- `<footer>` : Pied de page
- `<h3>` : Titres des colonnes
- `<ul>` + `<li>` : Liste de liens
- `<form>` : Formulaire newsletter

**Accessibilité** :
- `aria-label` sur les liens sociaux (pour lecteurs d'écran)

---

## 📊 Récapitulatif des Balises Sémantiques

### Balises Structurelles Principales
| Balise      | Usage                                    | Pages concernées |
| ----------- | ---------------------------------------- | ---------------- |
| `<header>`  | En-tête du site (navigation)             | Toutes           |
| `<nav>`     | Navigation principale                    | Toutes           |
| `<main>`    | Contenu principal                        | Toutes           |
| `<section>` | Sections thématiques                     | Toutes           |
| `<article>` | Contenu autonome (produits, avis)        | Accueil, Produits |
| `<footer>`  | Pied de page                             | Toutes           |
| `<form>`    | Formulaires                              | Contact, Footer  |

### Hiérarchie des Titres
| Balise | Usage                          | Nombre par page |
| ------ | ------------------------------ | --------------- |
| `<h1>` | Titre principal de la page     | 1               |
| `<h2>` | Titres de sections principales | 3-5             |
| `<h3>` | Sous-titres, cartes, produits  | 5-15            |

### Balises de Contenu
| Balise       | Usage                          |
| ------------ | ------------------------------ |
| `<p>`        | Paragraphes de texte           |
| `<ul>` / `<li>` | Listes non ordonnées        |
| `<a>`        | Liens hypertextes              |
| `<img>`      | Images                         |
| `<button>`   | Boutons interactifs            |

### Formulaires
| Balise       | Usage                   |
| ------------ | ----------------------- |
| `<form>`     | Conteneur formulaire    |
| `<label>`    | Étiquette de champ      |
| `<input>`    | Champ de saisie         |
| `<textarea>` | Zone de texte multilignes |
| `<select>`   | Liste déroulante        |

---

## ✅ Validation & Bonnes Pratiques

### ✔️ Checklist HTML Sémantique
- [ ] Une seule balise `<h1>` par page
- [ ] Hiérarchie logique des titres (h1 → h2 → h3)
- [ ] Utilisation de `<nav>` pour la navigation
- [ ] Utilisation de `<section>` pour les sections thématiques
- [ ] Utilisation de `<article>` pour les contenus autonomes
- [ ] Tous les `<img>` ont un attribut `alt` descriptif
- [ ] Tous les `<label>` sont associés à un `<input>` (via `for`/`id`)
- [ ] Pas de `<div>` inutiles (remplacer par balises sémantiques)
- [ ] Les formulaires ont des messages d'erreur clairs
- [ ] Les liens externes ont `rel="noopener"` si `target="_blank"`

### ✔️ Checklist Accessibilité
- [ ] Attributs `aria-label` sur les icônes sans texte
- [ ] `role="navigation"` sur le `<nav>`
- [ ] `role="group"` sur les groupes de boutons
- [ ] Contraste des couleurs ≥ 4.5:1
- [ ] Navigation au clavier fonctionnelle (Tab, Enter, Espace)
- [ ] Focus visible sur tous les éléments interactifs
- [ ] Messages d'erreur associés aux champs (`aria-describedby`)

---

**Date de création** : 10 décembre 2024
**Version** : 1.0
**Complément du document** : `planification-technique.md`
