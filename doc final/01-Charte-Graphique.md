# 🎨 Charte Graphique - TechShop

## 📋 Table des Matières

1. [Palette de Couleurs](#palette-de-couleurs)
2. [Typographie](#typographie)
3. [Espacements](#espacements)
4. [Style des Composants](#style-des-composants)
5. [Mode **Sombre**](#mode-sombre)
6. [Variables CSS](#variables-css)

---

## 🎨 Palette de Couleurs

### Couleurs Principales - Mode Clair

- **Bleu profond** : `#1E3A8A`
  - Usage : Couleur principale, header, footer
  
- **Cyan électrique** : `#06B6D4`
  - Usage : Accents, boutons CTA, liens

### Couleurs Secondaires - Mode Clair

- **Gris ardoise** : `#334155`
  - Usage : Textes de contenu
  
- **Blanc cassé** : `#F8FAFC`
  - Usage : Fond de page, cartes produits

- **Orange vif** : `#F97316`
  - Usage : Promotions, badges urgence, alertes

---

## 🌙 Mode Sombre

### Couleurs Principales - Mode Sombre

- **Noir profond** : `#0F172A`
  - Usage : Fond principal, arrière-plans
  
- **Cyan lumineux** : `#06B6D4`
  - Usage : Accents, boutons CTA, liens

### Couleurs Secondaires - Mode Sombre

- **Gris clair** : `#E2E8F0`
  - Usage : Textes principaux (contraste élevé sur fond sombre)
  
- **Gris ardoise sombre** : `#1E293B`
  - Usage : Cartes, sections secondaires, élévation

- **Orange lumineux** : `#F97316`
  - Usage : Promotions, badges urgence, alertes

### Couleurs Tertiaires - Mode Sombre

- **Bleu-gris** : `#64748B`
  - Usage : Bordures, séparateurs (plus clair pour meilleure visibilité)
  
- **Blanc atténué** : `#F1F5F9`
  - Usage : Titres importants, texte à forte emphase

---

## 📊 Comparaison Mode Clair / Mode Sombre

| Élément | Mode Clair | Mode Sombre |
|---------|------------|-------------|
| **Fond principal** | `#F8FAFC` (Blanc cassé) | `#0F172A` (Noir profond) |
| **Couleur primaire** | `#1E3A8A` (Bleu profond) | `#1E3A8A` (Bleu profond) |
| **Accents** | `#06B6D4` (Cyan électrique) | `#06B6D4` (Cyan électrique) |
| **Texte principal** | `#334155` (Gris ardoise) | `#F1F5F9` (Gris clair) |
| **Texte titres** | `#1E3A8A` (Bleu profond) | `#06B6D4` (Cyan) |
| **Cartes/Sections** | `#FFFFFF` (Blanc) | `#1E293B` (Gris ardoise sombre) |
| **Promotions** | `#F97316` (Orange vif) | `#F97316` (Orange vif) |
| **Bordures** | `#E2E8F0` (Gris clair) | `#64748B` (Bleu-gris) |

---

## ✏️ Typographie

### Titres
- **Police** : Inter (Bold/ExtraBold)
- **Usage** : H1, H2, H3, titres de sections
- **Taille** : 
  - H1 : 2.5rem (desktop), 1.75rem (mobile)
  - H2 : 2rem (desktop), 1.5rem (mobile)
  - H3 : 1.5rem (desktop), 1.25rem (mobile)

### Textes
- **Police** : Inter (Regular/Medium)
- **Usage** : Paragraphes, descriptions, contenu général
- **Taille** : 1rem (16px)

### Prix & Chiffres
- **Police** : JetBrains Mono
- **Usage** : Prix produits, quantités, numéros
- **Taille** : 1.5rem pour les prix principaux

---

## 📐 Espacements

- **Petit** : 8px (`--spacing-sm`)
- **Moyen** : 16px (`--spacing-md`)
- **Grand** : 24px (`--spacing-lg`)
- **Très grand** : 32px (`--spacing-xl`)

---

## 🎯 Style des Composants

### Boutons

#### Bouton Principal
- **Fond** : `#06B6D4` (Cyan électrique)
- **Texte** : Blanc
- **Border-radius** : 6px
- **Hover** : Opacité 0.9 + transition 0.3s

#### Bouton Secondaire
- **Fond** : `#1E3A8A` (Bleu profond)
- **Texte** : Blanc
- **Border-radius** : 6px

### Cartes Produits

#### Mode Clair
- **Fond** : `#FFFFFF` (Blanc)
- **Bordure** : `1px solid #E2E8F0`
- **Border-radius** : 12px
- **Ombre** : `0 4px 12px rgba(0, 0, 0, 0.1)`

#### Mode Sombre
- **Fond** : `#1E293B` (Gris ardoise sombre)
- **Bordure** : `1px solid #64748B`
- **Border-radius** : 12px
- **Ombre** : `0 4px 16px rgba(0, 0, 0, 0.7)`
- **Hover** : Bordure `#06B6D4` + ombre renforcée

### Badges Promo

- **Fond** : `#F97316` (Orange vif)
- **Texte** : Blanc
- **Border-radius** : 20px
- **Padding** : 6px 12px
- **Font-weight** : 600

### Badges Produit Phare

- **Fond** : Dégradé `#FFD700` → `#FFED4E`
- **Texte** : `#1E3A8A` (Bleu profond)
- **Border-radius** : 20px
- **Position** : Haut gauche
- **Font-weight** : 700

---

## 🔄 Variables CSS

### Mode Clair (défaut)
```css
:root {
  --primary-blue: #1e3a8a;
  --accent-cyan: #06b6d4;
  --dark-gray: #334155;
  --light-bg: #f8fafc;
  --accent-orange: #f97316;
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --text-primary: #334155;
  --text-secondary: #64748b;
  --text-heading: #1e3a8a;
  --text-accent: #06b6d4;
  --border-color: #e2e8f0;
  --card-bg: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

### Mode Sombre
```css
[data-theme="dark"] {
  --primary-blue: #1e3a8a;
  --accent-cyan: #06b6d4;
  --dark-gray: #334155;
  --light-bg: #0f172a;
  --accent-orange: #f97316;
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #cbd5e1;
  --text-heading: #e2e8f0;
  --text-accent: #06b6d4;
  --border-color: #64748b;
  --border-color-light: #94a3b8;
  --card-bg: #1e293b;
  --shadow-color: rgba(0, 0, 0, 0.7);
  --shadow-color-hover: rgba(0, 0, 0, 0.9);
}
```



