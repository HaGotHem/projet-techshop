# Documentation Complète du Code - TechShop

## Niveau BTS SIO 1ère Année

---

## 📋 Table des Matières

1. [Structure du Projet](#structure-du-projet)
2. [Page d'Accueil (index.html)](#page-daccueil-indexhtml)
3. [Page Produits (produit.html)](#page-produits-produithtml)
4. [Page Contact (contact.html)](#page-contact-contacthtml)
5. [Page À Propos (apropos.html)](#page-à-propos-aproposhtml)
6. [JavaScript - Gestion du Panier (cart.js)](#javascript---gestion-du-panier-cartjs)
7. [JavaScript - Page d'Accueil (script_index.js)](#javascript---page-daccueil-script_indexjs)
8. [JavaScript - Page Produits (script_produit.js)](#javascript---page-produits-script_produitjs)
9. [JavaScript - Page Contact (script_contact.js)](#javascript---page-contact-script_contactjs)
10. [JavaScript - Page À Propos (script_apropos.js)](#javascript---page-à-propos-script_aproposjs)
11. [JavaScript - Bouton Retour en Haut (back-to-top.js)](#javascript---bouton-retour-en-haut-back-to-topjs)

---

## Structure du Projet

```
projet-techshop/
├── index.html                    # Page d'accueil
├── assets/
│   ├── html/                    # Pages HTML supplémentaires
│   │   ├── produit.html         # Page des produits
│   │   ├── contact.html         # Page de contact
│   │   └── apropos.html         # Page à propos
│   ├── css/                     # Fichiers de style
│   │   ├── style_general.css   # Styles communs à toutes les pages
│   │   ├── style_index.css      # Styles spécifiques à l'accueil
│   │   ├── style_produit.css    # Styles spécifiques aux produits
│   │   ├── style_contact.css    # Styles spécifiques au contact
│   │   └── style_apropos.css    # Styles spécifiques à propos
│   └── javascript/              # Fichiers JavaScript
│       ├── cart.js              # Gestion du panier
│       ├── script_index.js      # Scripts de la page d'accueil
│       ├── script_produit.js    # Scripts de la page produits
│       ├── script_contact.js    # Scripts de la page contact
│       ├── script_apropos.js    # Scripts de la page à propos
│       └── back-to-top.js       # Bouton retour en haut
└── documentation/               # Documentation du projet
```

---

## Page d'Accueil (index.html)

### 📄 Description

La page d'accueil est la première page que voit l'utilisateur. Elle présente le site, les promotions et les services.

### 🔍 Structure HTML Détaillée

#### 1. En-tête (HEAD)

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <!-- Encodage des caractères (UTF-8 = support international) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Responsive design -->
    <title>TechShop - Accueil</title>
    <!-- Titre affiché dans l'onglet du navigateur -->

    <!-- Liens vers les fichiers CSS -->
    <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
    <!-- Framework CSS Bootstrap -->
    <link rel="stylesheet" href="./assets/css/style_general.css" />
    <!-- Styles communs -->
    <link rel="stylesheet" href="./assets/css/style_index.css" />
    <!-- Styles spécifiques -->
  </head>
</html>
```

**Explication :**

- `<!DOCTYPE html>` : Déclare que c'est un document HTML5
- `<meta charset="UTF-8">` : Permet d'afficher les caractères spéciaux (é, è, à, etc.)
- `<meta name="viewport">` : Rend le site adaptatif aux écrans mobiles
- Les `<link>` chargent les fichiers CSS dans l'ordre (Bootstrap d'abord, puis nos styles)

#### 2. Header (En-tête du site)

```html
<header class="header-site">
  <nav class="navbar navbar-expand-lg navbar-dark">
    <!-- Logo du site -->
    <a class="navbar-brand" href="index.html">
      <strong>TechShop</strong>
    </a>

    <!-- Menu hamburger pour mobile -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Liens de navigation -->
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link active" href="index.html">Accueil</a>
      </li>
      <!-- ... autres liens ... -->
    </ul>

    <!-- Bouton panier avec compteur -->
    <button
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#cartModal"
    >
      <span>Panier</span>
      <span id="cart-count">0</span>
      <!-- Compteur d'articles -->
    </button>
  </nav>
</header>
```

**Explication :**

- `header` : Balise sémantique HTML5 pour l'en-tête
- `navbar` : Classe Bootstrap pour créer une barre de navigation
- `navbar-expand-lg` : Le menu s'étend sur les grands écrans (≥992px)
- `data-bs-toggle="collapse"` : Attribut Bootstrap pour activer le menu mobile
- `data-bs-target="#navbarNav"` : Cible l'élément à afficher/masquer
- `ms-auto` : Classe Bootstrap qui pousse le contenu à droite (margin-start: auto)

#### 3. Section Hero (Carrousel de promotion)

```html
<section class="hero-section">
  <div
    id="heroCarousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <!-- Indicateurs (petits points en bas) -->
    <div class="carousel-indicators">
      <button
        data-bs-target="#heroCarousel"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>

    <!-- Slides (les images du carrousel) -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- active = première slide visible -->
        <h1>Smartphones Premium</h1>
        <p>Découvrez notre sélection...</p>
        <a href="assets/html/produit.html" class="btn-animated btn-primary">
          Voir les offres
        </a>
      </div>
      <!-- ... autres slides ... -->
    </div>

    <!-- Boutons précédent/suivant -->
    <button class="carousel-control-prev" data-bs-slide="prev">...</button>
    <button class="carousel-control-next" data-bs-slide="next">...</button>
  </div>
</section>
```

**Explication :**

- `carousel` : Composant Bootstrap pour créer un diaporama
- `carousel-fade` : Transition en fondu entre les slides
- `data-bs-ride="carousel"` : Démarre automatiquement le carrousel
- `data-bs-interval="5000"` : Change de slide toutes les 5 secondes
- `carousel-item active` : La slide active (visible)
- `data-bs-slide-to="0"` : Aller à la slide numéro 0 (première)

#### 4. Section Services

```html
<section class="services-section py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Nos Services</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <!-- 3 colonnes sur écran moyen+ -->
        <div class="card text-center">
          <div class="service-icon mb-3">🚚</div>
          <h3>Livraison Rapide</h3>
          <p>Livraison gratuite dès 50€</p>
        </div>
      </div>
      <!-- ... autres services ... -->
    </div>
  </div>
</section>
```

**Explication :**

- `container` : Classe Bootstrap qui centre le contenu et ajoute des marges
- `row` : Crée une ligne Bootstrap
- `col-md-4` : Colonne qui prend 4/12 de la largeur sur écran moyen+ (soit 1/3)
- `g-4` : Espacement (gap) de 4 unités entre les colonnes
- `py-5` : Padding vertical (haut et bas) de 5 unités
- `bg-light` : Fond clair

#### 5. Section Produits Phares

```html
<section class="collage-section py-5">
  <div class="container">
    <h2 class="text-center mb-5">Produits Phares</h2>
    <div class="row g-3">
      <div class="col-md-6 col-lg-3">
        <!-- 2 colonnes sur moyen, 4 sur grand -->
        <div class="collage-item">
          <div class="product-placeholder">
            <p>Produit 1</p>
          </div>
        </div>
      </div>
      <!-- ... autres produits ... -->
    </div>
  </div>
</section>
```

**Explication :**

- `col-md-6` : 2 colonnes sur écran moyen (6/12 = 1/2)
- `col-lg-3` : 4 colonnes sur écran large (3/12 = 1/4)
- Système de grille Bootstrap : 12 colonnes au total

#### 6. Section Avis Clients

```html
<section class="testimonials-section py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Avis Clients</h2>
    <div class="row g-4">
      <div class="col-md-6 col-lg-4">
        <!-- 2 colonnes sur moyen, 3 sur grand -->
        <div class="card h-100 testimonial-card">
          <div class="rating mb-2">
            <span class="star">★</span>
            <!-- Étoile pleine -->
            <span class="star">★</span>
            <span class="star empty">★</span>
            <!-- Étoile vide -->
          </div>
          <p class="testimonial-text">"Excellent service..."</p>
          <footer class="testimonial-author">Marie D.</footer>
        </div>
      </div>
      <!-- ... autres avis ... -->
    </div>
  </div>
</section>
```

**Explication :**

- `h-100` : Hauteur 100% (les cartes ont toutes la même hauteur)
- `testimonial-card` : Classe personnalisée pour styliser les avis
- `rating` : Conteneur pour les étoiles de notation

#### 7. Footer (Pied de page)

```html
<footer class="footer-site bg-dark text-white py-5">
  <div class="container">
    <div class="row g-4">
      <!-- Colonne 1 : À propos -->
      <div class="col-md-4">
        <h3 class="h5 mb-3">TechShop</h3>
        <p>Votre partenaire technologie depuis 2020...</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook">Facebook</a>
          <!-- ... autres réseaux sociaux ... -->
        </div>
      </div>

      <!-- Colonne 2 : Liens utiles -->
      <div class="col-md-4">
        <h3 class="h5 mb-3">Liens Utiles</h3>
        <ul class="list-unstyled">
          <li><a href="index.html">Accueil</a></li>
          <!-- ... autres liens ... -->
        </ul>
      </div>

      <!-- Colonne 3 : Newsletter -->
      <div class="col-md-4">
        <h3 class="h5 mb-3">Newsletter</h3>
        <form class="newsletter-form">
          <input type="email" placeholder="Votre email" />
          <button type="submit">S'abonner</button>
        </form>
      </div>
    </div>

    <!-- Copyright -->
    <div class="text-center text-white-50">
      <p>&copy; 2024 TechShop. Tous droits réservés.</p>
    </div>
  </div>
</footer>
```

**Explication :**

- `bg-dark` : Fond sombre
- `text-white` : Texte blanc
- `list-unstyled` : Supprime les puces de la liste
- `aria-label` : Attribut d'accessibilité pour les lecteurs d'écran
- `&copy;` : Code HTML pour le symbole copyright ©

#### 8. Scripts JavaScript

```html
<script src="./assets/javascript/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"></script>
<script src="./assets/javascript/cart.js"></script>
<script src="./assets/javascript/script_index.js"></script>
<script src="./assets/javascript/back-to-top.js"></script>
```

**Explication :**

- Les scripts sont chargés à la fin du `<body>` pour ne pas bloquer l'affichage
- Ordre important : Bootstrap d'abord, puis nos scripts
- `anime.js` : Bibliothèque externe pour les animations (chargée depuis un CDN)

---

## Page Produits (produit.html)

### 📄 Description

Page qui affiche tous les produits disponibles avec un système de filtres par catégorie.

### 🔍 Structure HTML Détaillée

#### 1. Sidebar Filtres

```html
<div class="col-lg-3 mb-4 mb-lg-0">
  <div class="filters-sidebar">
    <h2 class="h5 mb-3">Filtres</h2>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-filter active" data-filter="all">
        Tous
      </button>
      <button type="button" class="btn btn-filter" data-filter="smartphone">
        Smartphones
      </button>
      <button type="button" class="btn btn-filter" data-filter="laptop">
        Laptops
      </button>
      <button type="button" class="btn btn-filter" data-filter="accessoire">
        Accessoires
      </button>
    </div>
  </div>
</div>
```

**Explication :**

- `col-lg-3` : Prend 3/12 de la largeur sur grand écran (soit 1/4)
- `mb-4 mb-lg-0` : Marge en bas sur petit écran, aucune sur grand écran
- `data-filter="all"` : Attribut personnalisé pour identifier le filtre
- `active` : Classe Bootstrap pour indiquer le bouton sélectionné
- `role="group"` : Attribut d'accessibilité pour les lecteurs d'écran

#### 2. Grille de Produits

```html
<div class="col-lg-9">
  <div class="row g-4" id="products-grid">
    <div
      class="col-sm-6 col-md-4 col-lg-3 product-item"
      data-category="smartphone"
    >
      <article class="card product-card h-100">
        <!-- Badge promotion -->
        <span class="badge badge-promo">Promo -20%</span>

        <!-- Image du produit -->
        <img
          src="https://placehold.co/300x300/1E3A8A/FFFFFF?text=Smartphone+Pro"
          class="card-img-top"
          alt="Smartphone Pro"
        />

        <!-- Corps de la carte -->
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5">Smartphone Pro</h3>
          <p class="card-text text-muted small">Écran 6.7", 128GB...</p>

          <!-- Prix -->
          <div class="price-container mb-3">
            <span class="price-current">799€</span>
            <span class="price-old">999€</span>
            <!-- Prix barré -->
          </div>

          <!-- Bouton ajouter au panier -->
          <button
            class="btn btn-primary add-to-cart mt-auto"
            data-id="1"
            data-name="Smartphone Pro"
            data-price="799"
          >
            Ajouter au panier
          </button>
        </div>
      </article>
    </div>
    <!-- ... autres produits ... -->
  </div>
</div>
```

**Explication :**

- `col-sm-6` : 2 colonnes sur petit écran (6/12)
- `col-md-4` : 3 colonnes sur écran moyen (4/12)
- `col-lg-3` : 4 colonnes sur grand écran (3/12)
- `data-category="smartphone"` : Attribut pour le filtrage
- `data-id`, `data-name`, `data-price` : Attributs pour stocker les infos du produit
- `mt-auto` : Marge-top automatique (pousse le bouton en bas)
- `d-flex flex-column` : Flexbox vertical pour aligner le contenu
- `article` : Balise sémantique HTML5 pour un contenu autonome

#### 3. Modal Panier

```html
<div class="modal fade" id="cartModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title h4">Votre Panier</h2>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <div class="modal-body">
        <div id="cart-items">
          <!-- Contenu généré par JavaScript -->
        </div>
      </div>
      <div class="modal-footer">
        <strong>Total : <span id="cart-total">0€</span></strong>
        <button type="button" class="btn btn-primary" id="checkout-btn">
          Valider la commande
        </button>
      </div>
    </div>
  </div>
</div>
```

**Explication :**

- `modal` : Composant Bootstrap pour créer une fenêtre popup
- `fade` : Animation de fondu à l'ouverture/fermeture
- `modal-dialog-scrollable` : Permet le défilement si le contenu est long
- `data-bs-dismiss="modal"` : Ferme le modal au clic
- `tabindex="-1"` : Empêche la navigation au clavier sur le modal fermé

---

## Page Contact (contact.html)

### 📄 Description

Page avec un formulaire de contact et les informations de l'entreprise.

### 🔍 Structure HTML Détaillée

#### 1. Formulaire de Contact

```html
<form id="contact-form" novalidate>
  <!-- Champ Nom -->
  <div class="mb-3">
    <label for="name" class="form-label">
      Nom complet <span class="text-danger">*</span>
    </label>
    <input
      type="text"
      class="form-control"
      id="name"
      name="name"
      required
      pattern="[A-Za-zÀ-ÿ\s]{2,50}"
      aria-describedby="name-feedback"
    />
    <div class="invalid-feedback" id="name-feedback">
      Veuillez entrer un nom valide...
    </div>
  </div>

  <!-- Champ Email -->
  <div class="mb-3">
    <label for="email" class="form-label">
      Email <span class="text-danger">*</span>
    </label>
    <input type="email" class="form-control" id="email" name="email" required />
    <div class="invalid-feedback" id="email-feedback">
      Veuillez entrer une adresse email valide.
    </div>
  </div>

  <!-- Champ Téléphone -->
  <div class="mb-3">
    <label for="phone" class="form-label">Téléphone</label>
    <input
      type="tel"
      class="form-control"
      id="phone"
      name="phone"
      pattern="[0-9+\s\-\(\)]{10,20}"
    />
  </div>

  <!-- Champ Sujet (Select) -->
  <div class="mb-3">
    <label for="subject" class="form-label"
      >Sujet <span class="text-danger">*</span></label
    >
    <select class="form-select" id="subject" name="subject" required>
      <option value="">Sélectionnez un sujet</option>
      <option value="info">Demande d'information</option>
      <option value="order">Question sur une commande</option>
      <option value="product">Question sur un produit</option>
      <option value="support">Support technique</option>
      <option value="other">Autre</option>
    </select>
  </div>

  <!-- Champ Message (Textarea) -->
  <div class="mb-4">
    <label for="message" class="form-label">
      Message <span class="text-danger">*</span>
    </label>
    <textarea
      class="form-control"
      id="message"
      name="message"
      rows="6"
      required
      minlength="10"
      maxlength="1000"
    ></textarea>
    <small class="form-text text-muted">
      <span id="message-count">0</span> / 1000 caractères
    </small>
  </div>

  <!-- Bouton Submit -->
  <button type="submit" class="btn btn-primary btn-lg w-100">
    Envoyer le message
  </button>

  <!-- Message de succès (caché par défaut) -->
  <div class="alert alert-success d-none mt-3" id="success-message">
    <strong>Message envoyé avec succès !</strong>
  </div>
</form>
```

**Explication :**

- `novalidate` : Désactive la validation HTML5 native (on fait notre propre validation)
- `required` : Champ obligatoire
- `pattern="[A-Za-zÀ-ÿ\s]{2,50}"` : Expression régulière pour valider le format
  - `[A-Za-zÀ-ÿ\s]` : Lettres (majuscules, minuscules, accents) et espaces
  - `{2,50}` : Entre 2 et 50 caractères
- `type="email"` : Type HTML5 pour email (validation automatique)
- `type="tel"` : Type HTML5 pour téléphone
- `minlength="10"` : Minimum 10 caractères
- `maxlength="1000"` : Maximum 1000 caractères
- `invalid-feedback` : Message d'erreur Bootstrap
- `d-none` : Classe Bootstrap pour masquer un élément
- `w-100` : Largeur 100%

#### 2. Informations de Contact

```html
<div class="col-lg-5">
  <div class="contact-info-card card h-100">
    <div class="card-body">
      <h2 class="h4 mb-4">Nos Coordonnées</h2>

      <!-- Adresse -->
      <div class="contact-info-item mb-4">
        <div class="contact-icon mb-2">📍</div>
        <h3 class="h6 mb-2">Adresse</h3>
        <p>123 Rue de la Technologie<br />75001 Paris<br />France</p>
      </div>

      <!-- Téléphone -->
      <div class="contact-info-item mb-4">
        <div class="contact-icon mb-2">📞</div>
        <h3 class="h6 mb-2">Téléphone</h3>
        <p>
          <a href="tel:+33123456789" class="contact-link">
            +33 1 23 45 67 89
          </a>
        </p>
      </div>

      <!-- Email -->
      <div class="contact-info-item mb-4">
        <div class="contact-icon mb-2">✉️</div>
        <h3 class="h6 mb-2">Email</h3>
        <p>
          <a href="mailto:contact@techshop.fr" class="contact-link">
            contact@techshop.fr
          </a>
        </p>
      </div>

      <!-- Horaires -->
      <div class="contact-info-item">
        <div class="contact-icon mb-2">🕒</div>
        <h3 class="h6 mb-2">Horaires d'ouverture</h3>
        <p>
          <strong>Lundi - Vendredi :</strong> 9h - 18h<br />
          <strong>Samedi :</strong> 10h - 16h<br />
          <strong>Dimanche :</strong> Fermé
        </p>
      </div>
    </div>
  </div>
</div>
```

**Explication :**

- `tel:+33123456789` : Lien pour appeler directement depuis un mobile
- `mailto:contact@techshop.fr` : Lien pour ouvrir le client email
- `<br>` : Saut de ligne
- `<strong>` : Texte en gras (sémantique)

---

## Page À Propos (apropos.html)

### 📄 Description

Page qui présente l'entreprise, son histoire, son équipe et ses valeurs.

### 🔍 Structure HTML Détaillée

#### 1. Section Introduction

```html
<section class="about-intro py-5">
  <div class="container">
    <h1 class="text-center mb-5">À propos de TechShop</h1>
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <img
          src="https://placehold.co/600x400/1E3A8A/FFFFFF?text=Équipe+TechShop"
          alt="Équipe TechShop"
          class="img-fluid rounded shadow"
        />
      </div>
      <div class="col-lg-6">
        <h2 class="mb-4">Notre Mission</h2>
        <p class="lead mb-4">Rendre la technologie accessible à tous...</p>
        <p>Depuis notre création en 2020...</p>
      </div>
    </div>
  </div>
</section>
```

**Explication :**

- `align-items-center` : Aligne verticalement les colonnes au centre
- `img-fluid` : Image responsive (s'adapte à la taille de l'écran)
- `rounded` : Coins arrondis
- `shadow` : Ombre portée
- `lead` : Classe Bootstrap pour un texte d'introduction plus grand

#### 2. Section Histoire (Timeline)

```html
<section class="history-section py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Notre Histoire</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-year">2020</div>
        <div class="timeline-content">
          <h3>Les Débuts</h3>
          <p>TechShop voit le jour...</p>
        </div>
      </div>
      <!-- ... autres années ... -->
    </div>
  </div>
</section>
```

**Explication :**

- `timeline` : Structure personnalisée pour créer une frise chronologique
- `timeline-item` : Chaque événement de l'histoire
- `timeline-year` : L'année de l'événement
- `timeline-content` : Le contenu descriptif

#### 3. Section Équipe

```html
<section class="team-section py-5">
  <div class="container">
    <h2 class="text-center mb-5">Notre Équipe</h2>
    <div class="row g-4">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card team-card h-100">
          <img
            src="https://placehold.co/300x300/06B6D4/FFFFFF?text=Marie+D."
            class="card-img-top"
            alt="Marie Dubois"
          />
          <div class="card-body text-center">
            <h3 class="card-title h5">Marie Dubois</h3>
            <p class="card-text text-muted">Directrice Générale</p>
            <p class="card-text small">15 ans d'expérience...</p>
          </div>
        </div>
      </div>
      <!-- ... autres membres ... -->
    </div>
  </div>
</section>
```

**Explication :**

- `text-center` : Centre le texte
- `text-muted` : Texte en gris (moins important)
- `small` : Texte plus petit

#### 4. Section Valeurs

```html
<section class="values-section py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5">Nos Valeurs</h2>
    <div class="row g-4">
      <div class="col-md-4">
        <div class="value-card text-center h-100">
          <div class="value-icon mb-3">💡</div>
          <h3 class="h5 mb-3">Passion</h3>
          <p>Nous sommes passionnés par la technologie...</p>
        </div>
      </div>
      <!-- ... autres valeurs ... -->
    </div>
  </div>
</section>
```

**Explication :**

- Structure similaire aux autres sections avec des cartes
- Utilisation d'emojis pour les icônes (💡 🤝 🚀)

---

## JavaScript - Gestion du Panier (cart.js)

### 📄 Description

Ce fichier gère le panier d'achat pour toutes les pages du site. Il utilise le localStorage pour sauvegarder les articles.

### 🔍 Code Détaillé

#### 1. Classe CartManager

```javascript
class CartManager {
    constructor() {
        this.cart = this.loadCart();  // Charge le panier depuis localStorage
        this.init();  // Initialise l'interface
    }
```

**Explication :**

- `class` : Mot-clé JavaScript pour créer une classe (programmation orientée objet)
- `constructor()` : Fonction appelée automatiquement quand on crée un objet
- `this.cart` : Propriété qui stocke les articles du panier
- `this.loadCart()` : Appelle la méthode pour charger le panier
- `this.init()` : Appelle la méthode d'initialisation

#### 2. Charger le Panier

```javascript
loadCart() {
    const savedCart = localStorage.getItem('techshop_cart');
    return savedCart ? JSON.parse(savedCart) : [];
}
```

**Explication :**

- `localStorage.getItem('techshop_cart')` : Récupère les données sauvegardées
- `localStorage` : Stockage local du navigateur (persiste après fermeture)
- `JSON.parse()` : Convertit une chaîne JSON en objet JavaScript
- `? ... : ...` : Opérateur ternaire (si condition vraie, retourne première valeur, sinon la deuxième)
- Si `savedCart` existe, on le parse, sinon on retourne un tableau vide `[]`

#### 3. Sauvegarder le Panier

```javascript
saveCart() {
    localStorage.setItem('techshop_cart', JSON.stringify(this.cart));
    this.updateCartUI();
}
```

**Explication :**

- `JSON.stringify()` : Convertit un objet JavaScript en chaîne JSON
- `localStorage.setItem()` : Sauvegarde dans le localStorage
- `this.updateCartUI()` : Met à jour l'affichage du panier

#### 4. Ajouter un Produit

```javascript
addToCart(product) {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;  // Augmente la quantité
    } else {
        this.cart.push({  // Ajoute un nouveau produit
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    this.saveCart();
    this.showNotification(`${product.name} ajouté au panier !`);
}
```

**Explication :**

- `find()` : Méthode de tableau qui cherche un élément
- `item => item.id === product.id` : Fonction fléchée (arrow function)
  - Équivalent à `function(item) { return item.id === product.id; }`
- `if (existingItem)` : Si le produit existe déjà dans le panier
- `existingItem.quantity += 1` : Augmente la quantité de 1
- `push()` : Ajoute un élément à la fin du tableau
- Template literals : `` `${product.name} ajouté...` `` (backticks)
  - Permet d'insérer des variables dans une chaîne

#### 5. Calculer le Total

```javascript
getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}
```

**Explication :**

- `reduce()` : Méthode qui réduit un tableau à une seule valeur
- `(total, item) => total + (item.price * item.quantity)` : Fonction de réduction
  - `total` : Accumulateur (valeur courante)
  - `item` : Élément courant du tableau
  - Retourne `total + prix × quantité`
- `0` : Valeur initiale de l'accumulateur

#### 6. Mettre à Jour l'Interface

```javascript
updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = this.getTotalItems();
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}
```

**Explication :**

- `document.getElementById()` : Sélectionne un élément par son ID
- `textContent` : Propriété pour modifier le texte d'un élément
- `style.display` : Propriété pour afficher/masquer un élément
- Opérateur ternaire : `totalItems > 0 ? 'block' : 'none'`
  - Si totalItems > 0, affiche ('block'), sinon masque ('none')

#### 7. Rendre le Modal du Panier

```javascript
renderCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');

    if (this.cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Votre panier est vide</p>';
        return;
    }

    let html = '';
    this.cart.forEach(item => {
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price}€ × ${item.quantity}</div>
                <button class="cart-item-remove" data-id="${item.id}">×</button>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = html;
    this.attachCartEventListeners();
}
```

**Explication :**

- `innerHTML` : Propriété pour modifier le contenu HTML d'un élément
- `forEach()` : Méthode qui exécute une fonction pour chaque élément
- Template literals avec plusieurs lignes (backticks)
- Concaténation de chaînes avec `+=`
- `attachCartEventListeners()` : Attache les événements aux boutons créés

#### 8. Initialisation Globale

```javascript
const cartManager = new CartManager();
```

**Explication :**

- `const` : Déclare une constante (ne peut pas être réassignée)
- `new CartManager()` : Crée une nouvelle instance de la classe
- Cette variable est accessible dans tous les autres fichiers JavaScript

---

## JavaScript - Page d'Accueil (script_index.js)

### 📄 Description

Gère les animations de la page d'accueil avec la bibliothèque anime.js.

### 🔍 Code Détaillé

#### 1. Attendre le Chargement de la Page

```javascript
document.addEventListener("DOMContentLoaded", function () {
  // Code ici
});
```

**Explication :**

- `document` : Représente le document HTML
- `addEventListener()` : Ajoute un écouteur d'événement
- `'DOMContentLoaded'` : Événement déclenché quand le HTML est chargé
- `function() { ... }` : Fonction anonyme (callback)

#### 2. Animation du Carrousel

```javascript
const carousel = document.getElementById("heroCarousel");
if (carousel) {
  carousel.addEventListener("slid.bs.carousel", function (event) {
    const activeSlide = event.relatedTarget;
    const title = activeSlide.querySelector("h1");

    // Animation avec anime.js
    anime({
      targets: title,
      translateY: [-20, 0], // Déplace de -20px à 0px
      opacity: [0, 1], // Fait apparaître
      duration: 400, // Durée 400ms
      easing: "easeOutExpo", // Type d'animation
    });
  });
}
```

**Explication :**

- `const` : Déclare une constante
- `getElementById()` : Sélectionne un élément par ID
- `if (carousel)` : Vérifie que l'élément existe
- `addEventListener('slid.bs.carousel')` : Écoute l'événement Bootstrap
- `event.relatedTarget` : La slide qui vient d'être activée
- `querySelector()` : Sélectionne le premier élément correspondant
- `anime()` : Fonction de la bibliothèque anime.js
- `targets` : Élément(s) à animer
- `translateY` : Déplacement vertical
- `opacity` : Opacité (0 = transparent, 1 = opaque)
- `duration` : Durée en millisecondes
- `easing` : Type d'animation (easeOutExpo = décélération exponentielle)

#### 3. Animation au Scroll (Intersection Observer)

```javascript
const observerOptions = {
  threshold: 0.1, // Déclenche quand 10% visible
  rootMargin: "0px 0px -100px 0px", // Marge de déclenchement
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Si l'élément est visible
      // Animer l'élément
      anime({
        targets: entry.target,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
      });

      // Ne plus observer cet élément
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer les éléments
const elementsToAnimate = document.querySelectorAll(".card, .collage-item");
elementsToAnimate.forEach((el) => {
  observer.observe(el);
});
```

**Explication :**

- `IntersectionObserver` : API native pour détecter quand un élément entre dans le viewport
- `threshold: 0.1` : Déclenche quand 10% de l'élément est visible
- `rootMargin` : Marge pour ajuster la zone de déclenchement
- `entries` : Tableau des éléments observés
- `entry.isIntersecting` : Booléen indiquant si l'élément est visible
- `entry.target` : L'élément observé
- `querySelectorAll()` : Sélectionne tous les éléments correspondants
- `unobserve()` : Arrête d'observer un élément (optimisation)

#### 4. Animation au Hover

```javascript
testimonialCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    anime({
      targets: stars,
      rotate: function () {
        return anime.random(-15, 15); // Rotation aléatoire
      },
      scale: [1, 1.3], // Agrandit de 1 à 1.3
      duration: 600,
      delay: anime.stagger(50), // Délai entre chaque étoile
    });
  });

  card.addEventListener("mouseleave", function () {
    // Réinitialiser les animations
    anime({
      targets: stars,
      rotate: 0,
      scale: 1,
    });
  });
});
```

**Explication :**

- `forEach()` : Parcourt chaque élément
- `addEventListener('mouseenter')` : Événement quand la souris entre
- `addEventListener('mouseleave')` : Événement quand la souris sort
- `anime.random()` : Génère un nombre aléatoire
- `anime.stagger()` : Crée un délai progressif entre les éléments
- `scale` : Agrandissement (1 = taille normale)

---

## JavaScript - Page Produits (script_produit.js)

### 📄 Description

Gère les filtres de produits et l'ajout au panier.

### 🔍 Code Détaillé

#### 1. Initialisation des Filtres

```javascript
function initProductFilters() {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const productItems = document.querySelectorAll(".product-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter; // Récupère la valeur de data-filter

      // Mettre à jour l'état actif
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Filtrer les produits
      productItems.forEach((item) => {
        if (filter === "all" || item.dataset.category === filter) {
          item.classList.remove("hidden");
          // Animation d'apparition
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.opacity = "1";
          }, 50);
        } else {
          item.style.opacity = "0";
          setTimeout(() => {
            item.classList.add("hidden");
          }, 300);
        }
      });
    });
  });
}
```

**Explication :**

- `querySelectorAll()` : Sélectionne tous les boutons filtres
- `dataset.filter` : Accède à l'attribut `data-filter`
- `classList.remove()` : Retire une classe
- `classList.add()` : Ajoute une classe
- `this` : Référence à l'élément qui a déclenché l'événement
- `setTimeout()` : Exécute une fonction après un délai (en millisecondes)
- `style.opacity` : Modifie l'opacité directement

#### 2. Ajouter au Panier

```javascript
function initAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const product = {
        id: parseInt(this.dataset.id), // Convertit en nombre
        name: this.dataset.name,
        price: parseFloat(this.dataset.price), // Convertit en décimal
      };

      // Ajouter au panier
      if (typeof cartManager !== "undefined") {
        cartManager.addToCart(product);

        // Animation du bouton
        const originalText = this.innerHTML;
        this.innerHTML = "✓ Ajouté !";
        this.style.backgroundColor = "#28a745";

        setTimeout(() => {
          this.innerHTML = originalText;
          this.style.backgroundColor = "";
        }, 1500);
      }
    });
  });
}
```

**Explication :**

- `parseInt()` : Convertit une chaîne en nombre entier
- `parseFloat()` : Convertit une chaîne en nombre décimal
- `typeof` : Opérateur qui retourne le type d'une variable
- `!== 'undefined'` : Vérifie que la variable existe
- `innerHTML` : Modifie le contenu HTML du bouton
- Animation de feedback visuel pour l'utilisateur

---

## JavaScript - Page Contact (script_contact.js)

### 📄 Description

Gère la validation du formulaire de contact.

### 🔍 Code Détaillé

#### 1. Compteur de Caractères

```javascript
const messageTextarea = document.getElementById("message");
const messageCount = document.getElementById("message-count");

messageTextarea.addEventListener("input", function () {
  const length = this.value.length;
  messageCount.textContent = length;

  // Changer la couleur selon la longueur
  if (length < 10) {
    messageCount.style.color = "#dc3545"; // Rouge
  } else if (length > 900) {
    messageCount.style.color = "#ffc107"; // Jaune
  } else {
    messageCount.style.color = "#06B6D4"; // Cyan
  }
});
```

**Explication :**

- `addEventListener('input')` : Événement déclenché à chaque frappe
- `this.value.length` : Longueur du texte saisi
- `textContent` : Modifie le texte affiché
- Conditions `if/else if/else` : Change la couleur selon la longueur

#### 2. Validation d'un Champ

```javascript
function validateField(field) {
  const value = field.value.trim(); // Enlève les espaces
  let isValid = true;
  let errorMessage = "";

  // Vérifier si requis
  if (field.hasAttribute("required") && value === "") {
    isValid = false;
    errorMessage = "Ce champ est obligatoire.";
  }

  // Validation selon le type
  if (value !== "") {
    switch (field.type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          isValid = false;
          errorMessage = "Email invalide.";
        }
        break;

      case "tel":
        const phoneRegex = /^[0-9+\s\-\(\)]{10,20}$/;
        if (!phoneRegex.test(value)) {
          isValid = false;
          errorMessage = "Téléphone invalide.";
        }
        break;
    }
  }

  // Mettre à jour l'état visuel
  if (isValid) {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  } else {
    field.classList.remove("is-valid");
    field.classList.add("is-invalid");
  }

  return isValid;
}
```

**Explication :**

- `trim()` : Supprime les espaces au début et à la fin
- `let` : Déclare une variable modifiable
- `hasAttribute()` : Vérifie si un attribut existe
- `switch` : Structure conditionnelle pour plusieurs cas
- Expressions régulières (regex) :
  - `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` : Valide un email
    - `^` : Début de la chaîne
    - `[^\s@]+` : Un ou plusieurs caractères (sauf espace et @)
    - `@` : Le symbole @
    - `\.` : Le point (échappé)
    - `$` : Fin de la chaîne
  - `/^[0-9+\s\-\(\)]{10,20}$/` : Valide un téléphone
    - `[0-9+\s\-\(\)]` : Chiffres, +, espaces, tirets, parenthèses
    - `{10,20}` : Entre 10 et 20 caractères
- `test()` : Méthode regex qui teste si la chaîne correspond
- `!` : Opérateur de négation

#### 3. Validation du Formulaire Complet

```javascript
function validateForm() {
  let isFormValid = true;
  inputs.forEach((input) => {
    if (!validateField(input)) {
      isFormValid = false;
    }
  });
  return isFormValid;
}
```

**Explication :**

- Parcourt tous les champs
- Si un champ est invalide, le formulaire est invalide
- Retourne `true` seulement si tous les champs sont valides

#### 4. Soumission du Formulaire

```javascript
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi par défaut
  e.stopPropagation(); // Empêche la propagation de l'événement

  if (validateForm()) {
    // Récupérer les données
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Afficher le message de succès
    successMessage.classList.remove("d-none");

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      contactForm.reset();
      successMessage.classList.add("d-none");
    }, 5000);

    console.log("Formulaire soumis:", data);
  } else {
    // Faire défiler vers le premier champ invalide
    const firstInvalid = contactForm.querySelector(".is-invalid");
    if (firstInvalid) {
      firstInvalid.scrollIntoView({ behavior: "smooth" });
      firstInvalid.focus();
    }
  }
});
```

**Explication :**

- `e.preventDefault()` : Empêche le comportement par défaut (rechargement de page)
- `FormData` : Objet pour récupérer les données du formulaire
- `Object.fromEntries()` : Convertit FormData en objet JavaScript
- `reset()` : Réinitialise le formulaire
- `scrollIntoView()` : Fait défiler jusqu'à l'élément
- `focus()` : Met le focus sur l'élément (curseur)
- `console.log()` : Affiche dans la console du navigateur (pour debug)

---

## JavaScript - Page À Propos (script_apropos.js)

### 📄 Description

Gère les animations au scroll de la page à propos.

### 🔍 Code Détaillé

#### 1. Animation au Scroll

```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const scrollObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observer les éléments
const elementsToAnimate = document.querySelectorAll(
  ".about-intro img, .timeline-item, .team-card, .value-card"
);

elementsToAnimate.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  scrollObserver.observe(el);
});
```

**Explication :**

- Même principe que pour la page d'accueil
- Utilise CSS pour les animations au lieu d'anime.js
- `transition` : Propriété CSS pour animer les changements

#### 2. Animation au Hover

```javascript
teamCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});
```

**Explication :**

- Animation simple avec CSS
- `translateY(-10px)` : Remonte de 10px
- `scale(1.02)` : Agrandit de 2%

---

## JavaScript - Bouton Retour en Haut (back-to-top.js)

### 📄 Description

Crée un bouton pour remonter en haut de la page.

### 🔍 Code Détaillé

#### 1. Créer le Bouton

```javascript
(function () {
  "use strict";

  if (!document.getElementById("back-to-top")) {
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "back-to-top";
    backToTopBtn.className = "back-to-top";
    backToTopBtn.setAttribute("aria-label", "Retour en haut");
    backToTopBtn.innerHTML = "<svg>...</svg>";
    document.body.appendChild(backToTopBtn);
  }
})();
```

**Explication :**

- `(function() { ... })()` : IIFE (Immediately Invoked Function Expression)
  - Fonction anonyme exécutée immédiatement
  - Évite de polluer l'espace de noms global
- `'use strict'` : Mode strict JavaScript (meilleures pratiques)
- `createElement()` : Crée un nouvel élément HTML
- `setAttribute()` : Définit un attribut HTML
- `innerHTML` : Définit le contenu HTML
- `appendChild()` : Ajoute l'élément au DOM

#### 2. Afficher/Masquer selon le Scroll

```javascript
function toggleBackToTop() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleBackToTop);
```

**Explication :**

- `window.pageYOffset` : Position de défilement verticale en pixels
- Si défilé de plus de 300px, affiche le bouton
- `addEventListener('scroll')` : Écoute l'événement de défilement

#### 3. Scroll vers le Haut

```javascript
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Défilement fluide
  });
}

backToTopButton.addEventListener("click", scrollToTop);
```

**Explication :**

- `scrollTo()` : Méthode pour faire défiler la page
- `top: 0` : Position en haut (0px)
- `behavior: 'smooth'` : Défilement animé

---

## 📚 Concepts Clés pour BTS SIO 1ère Année

### HTML5

- **Balises sémantiques** : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Attributs data-\*** : Stocker des données personnalisées (`data-filter`, `data-id`)
- **Accessibilité** : `aria-label`, `role`, `alt` pour les images
- **Formulaires** : `required`, `pattern`, `minlength`, `maxlength`

### CSS3

- **Variables CSS** : `:root { --primary-blue: #1e3a8a; }`
- **Flexbox** : `display: flex`, `flex-direction: column`
- **Grid** : Système de grille Bootstrap (12 colonnes)
- **Responsive** : Media queries via classes Bootstrap (`col-md-4`, etc.)
- **Transitions** : `transition: opacity 0.6s ease`

### JavaScript ES6+

- **Variables** : `const` (constante), `let` (modifiable)
- **Fonctions fléchées** : `() => {}` au lieu de `function() {}`
- **Template literals** : `` `${variable}` `` avec backticks
- **Classes** : `class CartManager { ... }`
- **Méthodes de tableau** : `forEach()`, `map()`, `filter()`, `reduce()`, `find()`
- **Destructuring** : `const { id, name } = product;`
- **Spread operator** : `[...array]`

### APIs Web

- **DOM API** : `document.getElementById()`, `querySelector()`, `addEventListener()`
- **localStorage** : Stockage local côté client
- **Intersection Observer** : Détecter la visibilité d'éléments
- **FormData** : Manipuler les données de formulaire

### Bibliothèques

- **Bootstrap 5** : Framework CSS pour le responsive et les composants
- **anime.js** : Bibliothèque d'animations JavaScript

---

## 🎯 Bonnes Pratiques Utilisées

1. **Séparation des préoccupations** : HTML, CSS et JavaScript dans des fichiers séparés
2. **Code réutilisable** : Classe `CartManager` utilisable sur toutes les pages
3. **Accessibilité** : Attributs ARIA, balises sémantiques
4. **Performance** : Intersection Observer pour animer seulement les éléments visibles
5. **Validation** : Validation côté client avant envoi
6. **Feedback utilisateur** : Animations, notifications, messages de succès
7. **Responsive** : Design adaptatif avec Bootstrap
8. **Maintenabilité** : Code commenté et organisé

---

## 📝 Notes pour les Étudiants

- **Comprendre avant de modifier** : Lisez le code et les commentaires avant de faire des changements
- **Tester progressivement** : Testez chaque fonctionnalité après modification
- **Console du navigateur** : Utilisez `F12` pour voir les erreurs JavaScript
- **Inspecteur d'éléments** : Clic droit > Inspecter pour voir le HTML/CSS
- **Documentation** : Consultez la doc Bootstrap et MDN Web Docs

---

**Documentation créée pour le projet TechShop - Niveau BTS SIO 1ère Année**
