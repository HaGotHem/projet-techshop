# 🗺️ Roadmap TechShop - Refonte E-commerce

## 📅 JOUR 1 : Analyse & Conception

### ✅ Tâches
1. **Analyse du site existant** (2-3h)
   - Parcourir les 4 pages
   - Lister 15+ défauts + solutions
   - Document PDF/Markdown

2. **Maquettes Figma** (3-4h)
   - Définir charte graphique (couleurs, typos, espacements)
   - Créer maquettes mobile + desktop (4 pages)
   - Penser mobile-first

3. **Planification technique** (1h)
   - Schémas structure HTML sémantique
   - Liste fonctionnalités JS (obligatoires vs bonus)

### 📦 Livrables
- Document d'analyse
- Maquettes complètes + charte graphique
- Schémas HTML + tableau fonctionnalités

---

## 📅 JOUR 2 : HTML/CSS

### ✅ Tâches
1. **HTML sémantique** (2-3h)
   - Créer 4 fichiers : `index.html`, `produits.html`, `contact.html`, `apropos.html`
   - Balises sémantiques (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
   - Navigation entre pages

2. **CSS Responsive** (3-4h)
   - Variables CSS
   - Mobile-first + media queries
   - Flexbox/Grid
   - Hover effects + transitions

3. **Optimisation** (1h)
   - Contrastes couleurs (4.5:1)
   - Images WebP
   - Tests Lighthouse + WAVE

### 📦 Livrables
- 4 pages HTML complètes
- CSS responsive (mobile/tablette/desktop)
- Site accessible et optimisé

---

## 📅 JOUR 3 : JavaScript

### ✅ Fonctionnalités Obligatoires
1. **Menu hamburger** (1h)
   - Visible sur mobile uniquement
   - Animation ouverture/fermeture

2. **Panier d'achat** (1-2h)
   - Bouton "Ajouter au panier"
   - Compteur header persistant
   - Affichage produits + total
   - Supprimer articles

3. **Validation formulaires** (1h)
   - Validation temps réel
   - Messages erreur/succès

4. **Filtres produits** (1h - facultatif)
   - Filtre par catégorie
   - Affichage dynamique

### 🎁 Bonus (si temps)
- Slider produits
- Recherche temps réel
- Scroll to top
- Wishlist localStorage

### 🧪 Tests (1h)
- Tester sur 4 pages
- Vérifier responsive
- Corriger bugs

### 📦 Livrables
- Site complet et fonctionnel
- Code JS organisé et commenté
- README.md

---

## 📁 Structure Finale

```
projet-techshop/
├── index.html
├── produits.html
├── contact.html
├── apropos.html
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
└── README.md
```

---

## 🎯 Points Clés

- ⚠️ Mobile-first obligatoire
- ⚠️ HTML sémantique (pas de `<div>` partout)
- ⚠️ Panier persistant sur toutes pages
- ⚠️ 4 fichiers HTML distincts
- ⚠️ Accessibilité à chaque étape

---

## 💡 Conseils

1. Commence simple, améliore après
2. Commente ton code
3. Teste régulièrement
4. Commits Git fréquents
5. Priorité aux fonctionnalités obligatoires
