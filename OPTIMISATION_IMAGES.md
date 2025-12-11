# Guide d'optimisation des images pour PageSpeed

## Problème identifié

Les images hero (`smartphone.webp`, `laptop.webp`, `accessories.webp`) sont actuellement :
- **Taille intrinsèque** : 800x600 pixels
- **Taille d'affichage** : ~388x291 pixels (sur mobile/tablette)
- **Taille du fichier** : 117 KiB, 31 KiB, 23 KiB respectivement

## Solution recommandée

Pour optimiser ces images et améliorer le score PageSpeed, créez des versions optimisées :

### 1. Créer des versions responsives

Créez 3 versions de chaque image hero :
- **Mobile** : 400x300px (pour écrans < 768px)
- **Tablette** : 600x450px (pour écrans 768px - 992px)
- **Desktop** : 800x600px (pour écrans > 992px)

### 2. Utiliser des outils d'optimisation

#### Avec ImageMagick (ligne de commande) :
```bash
# Créer version mobile (400x300)
magick smartphone.webp -resize 400x300 smartphone-400w.webp

# Créer version tablette (600x450)
magick smartphone.webp -resize 600x450 smartphone-600w.webp

# Version desktop existe déjà (800x600)
```

#### Avec Squoosh (outil en ligne) :
1. Allez sur https://squoosh.app/
2. Uploadez l'image originale
3. Réduisez la taille à 400x300, 600x450, 800x600
4. Exportez en WebP avec qualité 80-85%

#### Avec Sharp (Node.js) :
```javascript
const sharp = require('sharp');

async function optimizeImages() {
  const sizes = [400, 600, 800];
  const images = ['smartphone', 'laptop', 'accessories'];
  
  for (const image of images) {
    for (const size of sizes) {
      await sharp(`./assets/src/hero/${image}.webp`)
        .resize(size, null, { aspectRatio: 4/3 })
        .webp({ quality: 85 })
        .toFile(`./assets/src/hero/${image}-${size}w.webp`);
    }
  }
}
```

### 3. Mettre à jour le HTML

Une fois les versions créées, mettez à jour `index.html` :

```html
<!-- Exemple pour smartphone.webp -->
<img 
  src="./assets/src/hero/smartphone-400w.webp" 
  srcset="./assets/src/hero/smartphone-400w.webp 400w,
          ./assets/src/hero/smartphone-600w.webp 600w,
          ./assets/src/hero/smartphone-800w.webp 800w"
  sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, 400px"
  alt="Smartphones Premium" 
  class="img-fluid rounded shadow" 
  loading="eager" 
  fetchpriority="high" 
  width="400" 
  height="300">
```

### 4. Résultats attendus

- **Économies estimées** : ~90 KiB pour smartphone.webp
- **Amélioration LCP** : Réduction du temps de chargement de l'image principale
- **Meilleur score PageSpeed** : Amélioration significative sur mobile

## Images à optimiser

- `./assets/src/hero/smartphone.webp` (117 KiB → ~30 KiB estimé)
- `./assets/src/hero/laptop.webp` (31 KiB → ~15 KiB estimé)
- `./assets/src/hero/accessories.webp` (23 KiB → ~10 KiB estimé)

## Note

Les dimensions `width` et `height` dans le HTML ont été ajustées à 400x300 pour correspondre à la taille d'affichage réelle, ce qui aide déjà le navigateur à éviter les décalages de mise en page (CLS).

