# 📊 Analyse du Site TechShop - Défauts & Solutions

## 🏠 Page Accueil

| #   | Défaut identifié                  | Solution proposée                                        |
| --- | --------------------------------- | -------------------------------------------------------- |
| 1   | Pas de responsivité               | Refaire en mobile-first avec media queries               |
| 2   | Couleurs agressives               | Choisir une nouvelle palette de couleurs professionnelle |
| 3   | Pas d'animations pour les boutons | Ajouter des effets de hover et transitions CSS           |

---

## 🛍️ Page Produits

| #   | Défaut identifié                                             | Solution proposée                                                       |
| --- | ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| 1   | Filtre reste en haut et n'est pas fonctionnel                | Repositionner le filtre avec position absolute et le rendre fonctionnel |
| 2   | Pop-up de confirmation dans le navigateur au lieu de la page | Créer une notification personnalisée dans le DOM avec JavaScript        |
| 3   | Gap en bas de page après le footer                           | Retirer le margin du footer                                             |

---

## 📧 Page Contact

| #   | Défaut identifié                              | Solution proposée                                        |
| --- | --------------------------------------------- | -------------------------------------------------------- |
| 1   | Manque de padding sur la droite du formulaire | Ajuster le style CSS du formulaire                       |
| 2   | Email et numéro de téléphone non cliquables   | Ajouter les attributs `mailto:` et `tel:` dans les liens |

---

## ℹ️ Page À Propos

| #   | Défaut identifié                               | Solution proposée                                            |
| --- | ---------------------------------------------- | ------------------------------------------------------------ |
| 1   | Les photos ne chargent pas                     | Ajouter des sources valides pour les images                  |
| 2   | Espace pour les photos trop petit              | Augmenter la taille des conteneurs d'images                  |
| 3   | Boutons pas animés                             | Ajouter des effets de hover                                  |
| 4   | La bordure est dans le container et non autour | Modifier la propriété border pour l'appliquer au bon élément |

---

## ⚠️ Erreurs Générales (Structure & Code)

| #   | Défaut identifié                           | Solution proposée                                        |
| --- | ------------------------------------------ | -------------------------------------------------------- |
| 1   | CSS dans le HTML                           | Déplacer tout le CSS dans un fichier `style.css` externe |
| 2   | Photos qui ne chargent pas / pas de source | Ajouter des sources d'images valides                     |
| 3   | Le script est hors du body                 | Déplacer le `<script>` à la fin du `<body>`              |
| 4   | Pas de balise de fermeture du body         | Ajouter la balise `</body>`                              |
| 5   | Nav hors du header                         | Déplacer le `<nav>` à l'intérieur du `<header>`          |
| 6   | Le header est dans le body                 | Structure correcte : `<body>` contient `<header>`        |

---

## 📈 Récapitulatif

**Total de défauts identifiés : 15**

### Répartition par catégorie :

- **Design & UX** : 6 défauts
- **Fonctionnalités** : 3 défauts
- **Structure HTML** : 6 défauts

### Priorités :

1. 🔴 **Critique** : Erreurs de structure HTML (défauts généraux)
2. 🟠 **Important** : Responsivité et accessibilité
3. 🟡 **Moyen** : Animations et micro-interactions
