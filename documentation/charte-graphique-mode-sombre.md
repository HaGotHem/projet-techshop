# 🎨 Charte Graphique - TechShop (Mode Sombre)

## 🌙 Palette de Couleurs - Mode Sombre

### Couleurs Principales
- **Noir profond** : `#0F172A`
  - Usage : Fond principal, arrière-plans
  
- **Cyan lumineux** : `#22D3EE`
  - Usage : Accents, boutons CTA, liens (plus lumineux pour contraster)

### Couleurs Secondaires
- **Gris clair** : `#E2E8F0`
  - Usage : Textes principaux (contraste élevé sur fond sombre)
  
- **Gris ardoise sombre** : `#1E293B`
  - Usage : Cartes, sections secondaires, élévation

- **Orange lumineux** : `#FB923C`
  - Usage : Promotions, badges urgence, alertes (plus doux pour les yeux)

### Couleurs Tertiaires
- **Bleu-gris** : `#334155`
  - Usage : Bordures, séparateurs
  
- **Blanc atténué** : `#F1F5F9`
  - Usage : Titres importants, texte à forte emphase

---

## 📊 Comparaison Mode Clair / Mode Sombre

| Élément | Mode Clair | Mode Sombre |
|---------|------------|-------------|
| **Fond principal** | `#F8FAFC` (Blanc cassé) | `#0F172A` (Noir profond) |
| **Couleur primaire** | `#1E3A8A` (Bleu profond) | `#22D3EE` (Cyan lumineux) |
| **Accents** | `#06B6D4` (Cyan électrique) | `#22D3EE` (Cyan lumineux) |
| **Texte principal** | `#334155` (Gris ardoise) | `#E2E8F0` (Gris clair) |
| **Cartes/Sections** | `#FFFFFF` (Blanc) | `#1E293B` (Gris ardoise sombre) |
| **Promotions** | `#F97316` (Orange vif) | `#FB923C` (Orange lumineux) |
| **Bordures** | `#334155` (Gris ardoise) | `#334155` (Bleu-gris) |

---

## 🎯 Recommandations d'Usage - Mode Sombre

### Contrastes
- **Texte sur fond** : Ratio minimum 7:1 pour le mode sombre (WCAG AAA)
- **Éléments interactifs** : Ratio minimum 4.5:1

### Intensités
- **Fond principal** : `#0F172A` (très sombre mais pas noir pur)
- **Cartes** : `#1E293B` (légèrement plus clair pour créer de la profondeur)
- **Hover states** : Augmenter la luminosité de 10-15%

### Ombres
Remplacer les ombres noires par des ombres avec luminosité réduite :
```css
/* Mode clair */
box-shadow: 0 2px 8px rgba(0,0,0,0.1);

/* Mode sombre */
box-shadow: 0 2px 8px rgba(0,0,0,0.5);
```

---

## 🔄 Variables CSS - Mode Sombre

### Mode Clair (défaut)
```css
:root {
  --color-bg-primary: #F8FAFC;
  --color-bg-secondary: #FFFFFF;
  --color-primary: #1E3A8A;
  --color-accent: #06B6D4;
  --color-text: #334155;
  --color-promo: #F97316;
  --color-border: #334155;
}
```

### Mode Sombre
```css
[data-theme="dark"] {
  --color-bg-primary: #0F172A;
  --color-bg-secondary: #1E293B;
  --color-primary: #22D3EE;
  --color-accent: #22D3EE;
  --color-text: #E2E8F0;
  --color-promo: #FB923C;
  --color-border: #334155;
}
```

---

## 💡 Conseils d'Implémentation

### 1. Transition Douce
```css
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### 2. Images et Icônes
- Utiliser des filtres CSS pour inverser/ajuster les images si nécessaire
- Privilégier les icônes SVG qui s'adaptent automatiquement

### 3. Toggle Switch
- Placer le bouton de changement de thème dans le header
- Icône soleil (☀️) pour activer mode clair
- Icône lune (🌙) pour activer mode sombre

### 4. Préférence Utilisateur
```javascript
// Détecter la préférence système
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('data-theme', 'dark');
}
```

---

## 📐 Espacements (identiques)

- **Petit** : 8px
- **Moyen** : 16px
- **Grand** : 24px
- **Très grand** : 32px

---

## 🎨 Aperçu Visuel des Couleurs

### Mode Sombre - Palette Complète

**Fond & Structure**
- `#0F172A` ███████ Noir profond (fond principal)
- `#1E293B` ███████ Gris ardoise sombre (cartes)
- `#334155` ███████ Bleu-gris (bordures)

**Accents & CTA**
- `#22D3EE` ███████ Cyan lumineux (primaire/accents)
- `#FB923C` ███████ Orange lumineux (promotions)

**Textes**
- `#E2E8F0` ███████ Gris clair (texte principal)
- `#F1F5F9` ███████ Blanc atténué (titres)
