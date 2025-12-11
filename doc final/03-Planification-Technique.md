# 🔧 Planification Technique - TechShop

## 📋 Vue d'ensemble

**Framework CSS** : Bootstrap 5.3
**Approche** : Mobile-first avec breakpoints personnalisés
**Pages** : 4 (Accueil, Produits, Contact, À propos)

---

## 🏗️ 1. Structure HTML Sémantique

### 1.1 Structure Globale (Commune à toutes les pages)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechShop - [Nom de la page]</title>
    <!-- Bootstrap CSS -->
    <link href="bootstrap.min.css" rel="stylesheet">
    <!-- CSS Custom -->
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body>
    <!-- HEADER -->
    <header class="header-site">
        <nav class="navbar navbar-expand-lg">
            <!-- Navigation -->
        </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main>
        <!-- Contenu spécifique à chaque page -->
    </main>

    <!-- FOOTER -->
    <footer class="footer-site">
        <!-- Pied de page -->
    </footer>

    <!-- Bootstrap JS -->
    <script src="bootstrap.bundle.min.js"></script>
    <!-- JS Custom -->
    <script src="assets/js/script.js"></script>
</body>
</html>
```

---

### 1.2 Composant Header/Navigation

**Classes Bootstrap** : `navbar`, `navbar-expand-lg`, `container-fluid`, `navbar-brand`, `navbar-toggler`, `collapse`, `navbar-collapse`

```html
<header class="header-site bg-primary">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <!-- Logo -->
            <a class="navbar-brand" href="index.html">
                <i class="bi bi-lightning-charge-fill"></i>
                TechShop
            </a>

            <!-- Menu Hamburger (Mobile) -->
            <button class="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Liens Navigation -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="produits.html">Produits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="apropos.html">À propos</a>
                    </li>
                </ul>

                <!-- Panier -->
                <div class="cart-icon ms-3">
                    <button class="btn btn-outline-light position-relative">
                        <i class="bi bi-cart3"></i>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="cart-count">
                            0
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</header>
```

**Balises sémantiques** : `<header>`, `<nav>`
**Accessibilité** : `aria-label`, `aria-expanded`, `role="navigation"`

---

### 1.3 Page Accueil (index.html)

#### Structure complète

```html
<main>
    <!-- Section Hero / Promo -->
    <section class="hero-section py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">Bienvenue chez TechShop</h1>
                    <p class="lead">Les meilleurs produits tech au meilleur prix</p>
                    <a href="produits.html" class="btn btn-primary btn-lg">Découvrir nos produits</a>
                </div>
                <div class="col-lg-6">
                    <img src="assets/images/hero.webp" alt="Hero image" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <!-- Section Services -->
    <section class="services-section py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Nos Services</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card text-center h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-truck fs-1 text-primary mb-3"></i>
                            <h3 class="h5">Livraison Rapide</h3>
                            <p class="card-text">Livraison gratuite dès 50€</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-shield-check fs-1 text-primary mb-3"></i>
                            <h3 class="h5">Paiement Sécurisé</h3>
                            <p class="card-text">Transactions 100% sécurisées</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center h-100 border-0 shadow-sm">
                        <div class="card-body">
                            <i class="bi bi-headset fs-1 text-primary mb-3"></i>
                            <h3 class="h5">Support 24/7</h3>
                            <p class="card-text">Assistance disponible tous les jours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Collage (Galerie produits mis en avant) -->
    <section class="collage-section py-5">
        <div class="container">
            <h2 class="text-center mb-5">Produits Phares</h2>
            <div class="row g-3">
                <div class="col-md-6 col-lg-3">
                    <div class="collage-item">
                        <img src="assets/images/product1.webp" alt="Produit 1" class="img-fluid rounded">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="collage-item">
                        <img src="assets/images/product2.webp" alt="Produit 2" class="img-fluid rounded">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="collage-item">
                        <img src="assets/images/product3.webp" alt="Produit 3" class="img-fluid rounded">
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="collage-item">
                        <img src="assets/images/product4.webp" alt="Produit 4" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Avis Clients -->
    <section class="testimonials-section py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Avis Clients</h2>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="rating mb-2">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <p class="card-text">"Excellent service, livraison rapide !"</p>
                            <footer class="blockquote-footer">Marie D.</footer>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="rating mb-2">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                            </div>
                            <p class="card-text">"Produits de qualité à prix compétitifs"</p>
                            <footer class="blockquote-footer">Pierre L.</footer>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="rating mb-2">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <p class="card-text">"Je recommande vivement TechShop !"</p>
                            <footer class="blockquote-footer">Sophie M.</footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

**Balises sémantiques** : `<section>`, `<article>`, `<h1>`-`<h3>`, `<footer>` (dans blockquote)

---

### 1.4 Page Produits (produits.html)

```html
<main>
    <!-- Section Filtres + Produits -->
    <section class="products-section py-5">
        <div class="container">
            <h1 class="text-center mb-5">Nos Produits</h1>

            <!-- Filtres par catégorie -->
            <div class="filters mb-4">
                <div class="btn-group" role="group" aria-label="Filtres catégories">
                    <button type="button" class="btn btn-outline-primary active" data-filter="all">
                        Tous
                    </button>
                    <button type="button" class="btn btn-outline-primary" data-filter="smartphone">
                        Smartphones
                    </button>
                    <button type="button" class="btn btn-outline-primary" data-filter="laptop">
                        Laptops
                    </button>
                    <button type="button" class="btn btn-outline-primary" data-filter="accessoire">
                        Accessoires
                    </button>
                </div>
            </div>

            <!-- Grille de produits -->
            <div class="row g-4" id="products-grid">
                <!-- Carte Produit 1 -->
                <div class="col-sm-6 col-md-4 col-lg-3 product-item" data-category="smartphone">
                    <article class="card h-100 shadow-sm">
                        <!-- Badge Promo (optionnel) -->
                        <span class="badge bg-warning position-absolute top-0 end-0 m-2">-20%</span>

                        <img src="assets/images/smartphone1.webp"
                             class="card-img-top"
                             alt="Smartphone X Pro">

                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title h5">Smartphone X Pro</h3>
                            <p class="card-text text-muted">Écran OLED 6.5", 128GB</p>

                            <div class="mt-auto">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="h4 mb-0 text-primary">599€</span>
                                    <span class="text-decoration-line-through text-muted">749€</span>
                                </div>

                                <button class="btn btn-primary w-100 add-to-cart"
                                        data-id="1"
                                        data-name="Smartphone X Pro"
                                        data-price="599">
                                    <i class="bi bi-cart-plus"></i> Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </article>
                </div>

                <!-- Répéter pour 8-12 produits -->
                <!-- ... autres cartes produits ... -->
            </div>
        </div>
    </section>

    <!-- Modal Panier -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title h5" id="cartModalLabel">Votre Panier</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                </div>
                <div class="modal-body">
                    <div id="cart-items">
                        <!-- Articles du panier (généré par JS) -->
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <div>
                        <strong>Total :</strong>
                        <span id="cart-total" class="h4 text-primary">0€</span>
                    </div>
                    <div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continuer mes achats</button>
                        <button type="button" class="btn btn-primary">Valider la commande</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
```

**Balises sémantiques** : `<article>` (pour chaque produit), `<section>`
**Classes Bootstrap** : `card`, `badge`, `btn-group`, `modal`

---

### 1.5 Page Contact (contact.html)

```html
<main>
    <section class="contact-section py-5">
        <div class="container">
            <h1 class="text-center mb-5">Contactez-nous</h1>

            <div class="row g-5">
                <!-- Formulaire de contact -->
                <div class="col-lg-7">
                    <form id="contact-form" novalidate>
                        <!-- Nom -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Nom complet *</label>
                            <input type="text"
                                   class="form-control"
                                   id="name"
                                   name="name"
                                   required>
                            <div class="invalid-feedback">
                                Veuillez entrer votre nom.
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email *</label>
                            <input type="email"
                                   class="form-control"
                                   id="email"
                                   name="email"
                                   required>
                            <div class="invalid-feedback">
                                Veuillez entrer une adresse email valide.
                            </div>
                        </div>

                        <!-- Téléphone -->
                        <div class="mb-3">
                            <label for="phone" class="form-label">Téléphone</label>
                            <input type="tel"
                                   class="form-control"
                                   id="phone"
                                   name="phone"
                                   pattern="[0-9]{10}">
                            <div class="invalid-feedback">
                                Format : 10 chiffres (ex: 0612345678)
                            </div>
                        </div>

                        <!-- Sujet -->
                        <div class="mb-3">
                            <label for="subject" class="form-label">Sujet *</label>
                            <select class="form-select" id="subject" name="subject" required>
                                <option value="">Choisir un sujet</option>
                                <option value="info">Demande d'information</option>
                                <option value="order">Question sur une commande</option>
                                <option value="return">Retour produit</option>
                                <option value="other">Autre</option>
                            </select>
                            <div class="invalid-feedback">
                                Veuillez sélectionner un sujet.
                            </div>
                        </div>

                        <!-- Message -->
                        <div class="mb-3">
                            <label for="message" class="form-label">Message *</label>
                            <textarea class="form-control"
                                      id="message"
                                      name="message"
                                      rows="5"
                                      required></textarea>
                            <div class="invalid-feedback">
                                Veuillez entrer votre message.
                            </div>
                        </div>

                        <!-- Bouton Submit -->
                        <button type="submit" class="btn btn-primary btn-lg w-100">
                            <i class="bi bi-send"></i> Envoyer
                        </button>

                        <!-- Message de confirmation (masqué par défaut) -->
                        <div class="alert alert-success mt-3 d-none" id="success-message" role="alert">
                            <i class="bi bi-check-circle-fill"></i> Votre message a été envoyé avec succès !
                        </div>
                    </form>
                </div>

                <!-- Informations de contact -->
                <div class="col-lg-5">
                    <div class="card">
                        <div class="card-body">
                            <h2 class="h4 mb-4">Nos Coordonnées</h2>

                            <div class="mb-3">
                                <h3 class="h6"><i class="bi bi-geo-alt-fill text-primary"></i> Adresse</h3>
                                <p class="ms-4">123 Rue de la Tech<br>75001 Paris, France</p>
                            </div>

                            <div class="mb-3">
                                <h3 class="h6"><i class="bi bi-telephone-fill text-primary"></i> Téléphone</h3>
                                <p class="ms-4">
                                    <a href="tel:+33123456789" class="text-decoration-none">+33 1 23 45 67 89</a>
                                </p>
                            </div>

                            <div class="mb-3">
                                <h3 class="h6"><i class="bi bi-envelope-fill text-primary"></i> Email</h3>
                                <p class="ms-4">
                                    <a href="mailto:contact@techshop.fr" class="text-decoration-none">contact@techshop.fr</a>
                                </p>
                            </div>

                            <div class="mb-3">
                                <h3 class="h6"><i class="bi bi-clock-fill text-primary"></i> Horaires</h3>
                                <p class="ms-4">
                                    Lundi - Vendredi : 9h - 18h<br>
                                    Samedi : 10h - 16h<br>
                                    Dimanche : Fermé
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

**Balises sémantiques** : `<form>`, `<label>`, `<input>`, `<textarea>`, `<select>`
**Accessibilité** : `for`, `id`, `aria-label`, `required`, `pattern`

---

### 1.6 Page À propos (apropos.html)

```html
<main>
    <!-- Section Introduction -->
    <section class="about-intro py-5 bg-light">
        <div class="container">
            <h1 class="text-center mb-5">À propos de TechShop</h1>
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <img src="assets/images/about-hero.webp"
                         alt="Notre équipe TechShop"
                         class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6">
                    <h2 class="h3 mb-3">Notre Mission</h2>
                    <p class="lead">
                        Rendre la technologie accessible à tous avec des produits de qualité
                        et un service client exceptionnel.
                    </p>
                    <p>
                        Depuis 2020, TechShop s'engage à proposer les meilleurs produits
                        technologiques aux prix les plus compétitifs du marché.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Histoire -->
    <section class="history-section py-5">
        <div class="container">
            <h2 class="text-center mb-5">Notre Histoire</h2>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="timeline">
                        <div class="mb-4">
                            <h3 class="h5 text-primary">2020 - Les Débuts</h3>
                            <p>Création de TechShop avec une petite équipe passionnée de technologie.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="h5 text-primary">2021 - Expansion</h3>
                            <p>Ouverture de notre premier magasin physique à Paris.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="h5 text-primary">2023 - Innovation</h3>
                            <p>Lancement de notre plateforme e-commerce nouvelle génération.</p>
                        </div>
                        <div class="mb-4">
                            <h3 class="h5 text-primary">2024 - Aujourd'hui</h3>
                            <p>Plus de 50 000 clients satisfaits et une équipe de 20 personnes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Équipe -->
    <section class="team-section py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Notre Équipe</h2>
            <div class="row g-4">
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center border-0 shadow-sm">
                        <img src="assets/images/team1.webp"
                             class="card-img-top"
                             alt="Jean Dupont">
                        <div class="card-body">
                            <h3 class="h5 card-title">Jean Dupont</h3>
                            <p class="text-muted">CEO & Fondateur</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center border-0 shadow-sm">
                        <img src="assets/images/team2.webp"
                             class="card-img-top"
                             alt="Marie Martin">
                        <div class="card-body">
                            <h3 class="h5 card-title">Marie Martin</h3>
                            <p class="text-muted">Directrice Marketing</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center border-0 shadow-sm">
                        <img src="assets/images/team3.webp"
                             class="card-img-top"
                             alt="Pierre Durand">
                        <div class="card-body">
                            <h3 class="h5 card-title">Pierre Durand</h3>
                            <p class="text-muted">Responsable Logistique</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card text-center border-0 shadow-sm">
                        <img src="assets/images/team4.webp"
                             class="card-img-top"
                             alt="Sophie Leroy">
                        <div class="card-body">
                            <h3 class="h5 card-title">Sophie Leroy</h3>
                            <p class="text-muted">Service Client</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section Valeurs -->
    <section class="values-section py-5">
        <div class="container">
            <h2 class="text-center mb-5">Nos Valeurs</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="bi bi-heart-fill fs-1 text-danger mb-3"></i>
                        <h3 class="h5">Passion</h3>
                        <p>Passionnés par la technologie et l'innovation</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="bi bi-people-fill fs-1 text-primary mb-3"></i>
                        <h3 class="h5">Proximité</h3>
                        <p>À l'écoute de nos clients</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <i class="bi bi-award-fill fs-1 text-success mb-3"></i>
                        <h3 class="h5">Qualité</h3>
                        <p>Des produits triés sur le volet</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

**Balises sémantiques** : `<section>`, `<article>`, `<h1>`-`<h3>`

---

### 1.7 Composant Footer

```html
<footer class="footer-site bg-dark text-white py-5">
    <div class="container">
        <div class="row g-4">
            <!-- Colonne 1 : À propos -->
            <div class="col-md-4">
                <h3 class="h5 mb-3">TechShop</h3>
                <p>Votre partenaire technologie depuis 2020. Les meilleurs produits aux meilleurs prix.</p>
                <div class="social-links mt-3">
                    <a href="#" class="text-white me-3" aria-label="Facebook">
                        <i class="bi bi-facebook fs-4"></i>
                    </a>
                    <a href="#" class="text-white me-3" aria-label="Twitter">
                        <i class="bi bi-twitter fs-4"></i>
                    </a>
                    <a href="#" class="text-white me-3" aria-label="Instagram">
                        <i class="bi bi-instagram fs-4"></i>
                    </a>
                    <a href="#" class="text-white" aria-label="LinkedIn">
                        <i class="bi bi-linkedin fs-4"></i>
                    </a>
                </div>
            </div>

            <!-- Colonne 2 : Liens utiles -->
            <div class="col-md-4">
                <h3 class="h5 mb-3">Liens Utiles</h3>
                <ul class="list-unstyled">
                    <li class="mb-2">
                        <a href="index.html" class="text-white-50 text-decoration-none">Accueil</a>
                    </li>
                    <li class="mb-2">
                        <a href="produits.html" class="text-white-50 text-decoration-none">Produits</a>
                    </li>
                    <li class="mb-2">
                        <a href="contact.html" class="text-white-50 text-decoration-none">Contact</a>
                    </li>
                    <li class="mb-2">
                        <a href="apropos.html" class="text-white-50 text-decoration-none">À propos</a>
                    </li>
                </ul>
            </div>

            <!-- Colonne 3 : Newsletter -->
            <div class="col-md-4">
                <h3 class="h5 mb-3">Newsletter</h3>
                <p>Recevez nos offres exclusives</p>
                <form class="newsletter-form">
                    <div class="input-group">
                        <input type="email"
                               class="form-control"
                               placeholder="Votre email"
                               aria-label="Email pour newsletter">
                        <button class="btn btn-primary" type="submit">
                            S'abonner
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <hr class="my-4 bg-white">

        <!-- Copyright -->
        <div class="text-center text-white-50">
            <p class="mb-0">&copy; 2024 TechShop. Tous droits réservés.</p>
        </div>
    </div>
</footer>
```

**Balises sémantiques** : `<footer>`
**Accessibilité** : `aria-label` sur les liens sociaux

---

## 🎨 2. Classes Bootstrap Utilisées

### Grid System
- `container`, `container-fluid`
- `row`, `col`, `col-sm-*`, `col-md-*`, `col-lg-*`
- `g-4`, `g-5` (gap/gutter)

### Navigation
- `navbar`, `navbar-expand-lg`, `navbar-dark`, `navbar-light`
- `navbar-brand`, `navbar-toggler`, `navbar-collapse`
- `nav`, `nav-item`, `nav-link`

### Cartes
- `card`, `card-img-top`, `card-body`, `card-title`, `card-text`
- `h-100` (hauteur 100%)

### Boutons
- `btn`, `btn-primary`, `btn-secondary`, `btn-outline-*`
- `btn-lg`, `btn-sm`
- `btn-group`

### Utilitaires Spacing
- `py-5`, `px-4`, `m-*`, `p-*`
- `mb-3`, `mt-4`, `ms-auto`, `me-3`

### Flexbox
- `d-flex`, `flex-column`, `align-items-center`, `justify-content-between`
- `mt-auto` (margin-top auto pour pousser en bas)

### Position
- `position-relative`, `position-absolute`
- `top-0`, `end-0`, `start-100`, `translate-middle`

### Affichage
- `d-none`, `d-block`, `d-md-flex`
- `text-center`, `text-muted`

### Couleurs
- `bg-primary`, `bg-light`, `bg-dark`
- `text-white`, `text-white-50`, `text-primary`

### Modal
- `modal`, `modal-dialog`, `modal-content`
- `modal-header`, `modal-body`, `modal-footer`

### Formulaires
- `form-control`, `form-label`, `form-select`
- `input-group`
- `invalid-feedback`, `valid-feedback`

### Badges
- `badge`, `rounded-pill`, `bg-danger`, `bg-warning`

### Ombres
- `shadow-sm`, `shadow`

---

## 🎯 3. CSS Custom Nécessaire

### Fichier : `assets/css/style.css`

```css
/* === VARIABLES CSS === */
:root {
    /* Couleurs de la charte */
    --primary-blue: #1E3A8A;
    --accent-cyan: #06B6D4;
    --dark-gray: #334155;
    --light-bg: #F8FAFC;
    --accent-orange: #F97316;

    /* Espacements */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;

    /* Typographie */
    --font-titles: 'Inter', sans-serif;
    --font-text: 'Roboto', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}

/* === OVERRIDE BOOTSTRAP === */
.btn-primary {
    background-color: var(--accent-cyan);
    border-color: var(--accent-cyan);
}

.btn-primary:hover {
    background-color: #0891b2;
    opacity: 0.9;
    transition: all 0.3s ease;
}

.bg-primary {
    background-color: var(--primary-blue) !important;
}

.text-primary {
    color: var(--accent-cyan) !important;
}

/* === HEADER === */
.header-site {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
}

/* === HERO SECTION === */
.hero-section {
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%);
    color: white;
}

/* === CARTES PRODUITS === */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 8px;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.product-item .badge {
    font-size: 0.875rem;
    padding: 0.5rem;
}

/* === BOUTONS === */
.btn {
    border-radius: 6px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.add-to-cart:hover {
    transform: scale(1.05);
}

/* === PANIER === */
.cart-icon .badge {
    font-size: 0.75rem;
}

/* === FORMULAIRE === */
.form-control:focus,
.form-select:focus {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 0 0.25rem rgba(6, 182, 212, 0.25);
}

/* === FOOTER === */
.footer-site {
    margin-top: auto;
}

.footer-site a:hover {
    color: var(--accent-cyan) !important;
    transition: color 0.3s ease;
}

/* === ANIMATIONS === */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease-out;
}

/* === RESPONSIVE === */
/* Mobile First - déjà géré par Bootstrap */

/* Tablette (768px et +) */
@media (min-width: 768px) {
    .hero-section h1 {
        font-size: 3rem;
    }
}

/* Desktop (1200px et +) */
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}

/* === ACCESSIBILITÉ === */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* Focus visible pour accessibilité */
a:focus-visible,
button:focus-visible {
    outline: 2px solid var(--accent-cyan);
    outline-offset: 2px;
}
```

---

## ⚙️ 4. Fonctionnalités JavaScript

### 4.1 Fonctionnalités OBLIGATOIRES

| #   | Fonctionnalité          | Description                                                    | Priorité | Temps estimé |
| --- | ----------------------- | -------------------------------------------------------------- | -------- | ------------ |
| 1   | Menu Hamburger          | Animation d'ouverture/fermeture sur mobile                     | 🔴 HIGH  | 1h           |
| 2   | Panier d'achat          | Ajouter/supprimer produits, compteur, calcul total, persistance | 🔴 HIGH  | 2h           |
| 3   | Validation formulaire   | Validation temps réel, messages erreur/succès                  | 🔴 HIGH  | 1h           |
| 4   | Filtres produits        | Filtrer par catégorie dynamiquement                            | 🟡 MED   | 1h           |

#### 1️⃣ Menu Hamburger Mobile

**Fichier** : `assets/js/script.js`

```javascript
// Menu hamburger déjà géré par Bootstrap
// Ajouter animation custom si besoin
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        // Animation personnalisée si besoin
        navbarCollapse.classList.toggle('show-animation');
    });
});
```

**Utilisation** : Bootstrap gère nativement le menu hamburger avec `data-bs-toggle="collapse"`

---

#### 2️⃣ Panier d'Achat (Fonctionnalité Principale)

**Structure de données** :
```javascript
// Objet panier stocké dans localStorage
const cart = {
    items: [
        {
            id: 1,
            name: "Smartphone X Pro",
            price: 599,
            quantity: 1
        }
    ],
    total: 599
};
```

**Fonctions nécessaires** :
- `addToCart(id, name, price)` : Ajouter un produit
- `removeFromCart(id)` : Supprimer un produit
- `updateCartCount()` : Mettre à jour le badge du compteur
- `calculateTotal()` : Calculer le total
- `displayCartItems()` : Afficher les produits dans le modal
- `saveCart()` : Sauvegarder dans localStorage
- `loadCart()` : Charger depuis localStorage

**Événements** :
- Click sur bouton "Ajouter au panier"
- Click sur icône panier (ouvrir modal)
- Click sur bouton "Supprimer" dans le panier

**Persistance** : localStorage

---

#### 3️⃣ Validation Formulaire Contact

**Validations** :
- Nom : requis, min 2 caractères
- Email : requis, format valide
- Téléphone : 10 chiffres (optionnel)
- Sujet : requis
- Message : requis, min 10 caractères

**Méthode** : Utiliser l'API de validation Bootstrap + validation JavaScript custom

**Événements** :
- `input` : validation en temps réel
- `submit` : validation finale et affichage message succès

---

#### 4️⃣ Filtres Produits

**Logique** :
- Cliquer sur un bouton de filtre
- Masquer tous les produits
- Afficher uniquement les produits de la catégorie sélectionnée
- "Tous" affiche tous les produits

**Méthode** :
- Utiliser `data-category` sur les cartes produits
- Utiliser `data-filter` sur les boutons
- Toggle classe `d-none` sur les produits

---

### 4.2 Fonctionnalités BONUS (si temps disponible)

| #   | Fonctionnalité       | Description                                      | Priorité | Temps estimé |
| --- | -------------------- | ------------------------------------------------ | -------- | ------------ |
| 1   | Slider produits      | Carrousel automatique des produits phares        | 🟢 LOW   | 1h           |
| 2   | Recherche temps réel | Barre de recherche avec filtrage dynamique       | 🟢 LOW   | 1h           |
| 3   | Scroll to top        | Bouton pour remonter en haut de page             | 🟢 LOW   | 30min        |
| 4   | Wishlist             | Liste de souhaits avec localStorage              | 🟢 LOW   | 1h           |
| 5   | Dark mode            | Toggle thème sombre/clair                        | 🟢 LOW   | 1h           |
| 6   | Notifications toast  | Notifications élégantes (ajout panier, etc.)     | 🟢 LOW   | 30min        |
| 7   | Animation scroll     | Éléments apparaissent au scroll (IntersectionObserver) | 🟢 LOW   | 1h           |

---

## 📂 5. Structure des Fichiers

```
projet-techshop/
├── index.html                  # Page d'accueil
├── produits.html               # Page produits
├── contact.html                # Page contact
├── apropos.html                # Page à propos
├── assets/
│   ├── css/
│   │   └── style.css           # CSS custom (variables + overrides Bootstrap)
│   ├── js/
│   │   └── script.js           # JavaScript (panier, filtres, validation)
│   └── images/
│       ├── hero.webp
│       ├── product1.webp
│       ├── team1.webp
│       └── ...
├── documentation/
│   ├── maquette.pdf
│   ├── charte-graphique-techshop.md
│   ├── roadmap-techshop.md
│   └── planification-technique.md  # Ce fichier
└── README.md
```

---

## 🔧 6. Technologies & CDN

### Bootstrap 5.3
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.min.css" rel="stylesheet">

<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Polices Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
```

---

## 🎯 7. Checklist de Développement

### Jour 1 - Tâche 3 ✅
- [x] Analyse de la maquette
- [x] Planification structure HTML sémantique
- [x] Identification classes Bootstrap
- [x] Liste fonctionnalités JS
- [x] Schéma CSS custom

### Jour 2 - HTML/CSS
- [ ] Créer les 4 fichiers HTML
- [ ] Intégrer Bootstrap via CDN
- [ ] Implémenter la navigation
- [ ] Créer les sections de chaque page
- [ ] Ajouter le CSS custom
- [ ] Tester la responsivité (mobile, tablette, desktop)
- [ ] Optimiser les images (WebP)
- [ ] Vérifier l'accessibilité (contrastes, ARIA)

### Jour 3 - JavaScript
- [ ] Menu hamburger
- [ ] Panier d'achat complet
- [ ] Validation formulaire
- [ ] Filtres produits
- [ ] Fonctionnalités bonus (si temps)
- [ ] Tests cross-browser
- [ ] Débogage

---

## 📊 8. Points d'Attention

### ⚠️ CRITIQUES
1. **Mobile-first obligatoire** : Développer d'abord pour mobile
2. **HTML sémantique** : Utiliser les bonnes balises (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
3. **Accessibilité** : ARIA labels, contrastes 4.5:1, navigation au clavier
4. **Panier persistant** : Doit fonctionner sur toutes les pages

### 🎨 DESIGN
1. Respecter strictement la charte graphique
2. Animations fluides (transitions CSS)
3. Hover effects sur tous les éléments interactifs
4. Cohérence visuelle entre les pages

### ⚡ PERFORMANCE
1. Images WebP optimisées
2. CSS/JS minifiés en production
3. Lazy loading pour les images
4. Lighthouse score > 90

### 🧪 TESTS
1. Tester sur Chrome, Firefox, Safari
2. Tester responsive sur DevTools
3. Vérifier avec WAVE (accessibilité)
4. Valider HTML (W3C Validator)

---

## 🚀 9. Prochaines Étapes

1. **Valider cette planification** avec l'équipe/formateur
2. **Préparer l'environnement de développement** (éditeur, extensions, serveur local)
3. **Créer la structure de dossiers**
4. **Commencer le développement HTML** (Jour 2)

---

**Date de création** : 10 décembre 2024
**Version** : 1.0
**Statut** : Planification complète pour début développement
