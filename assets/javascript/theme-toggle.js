// Gestionnaire de thème (mode clair/sombre)

(function() {
  'use strict';

  // Récupérer le thème sauvegardé ou utiliser le thème système
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Détecter la préférence système
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Appliquer le thème
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      updateToggleIcon('dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      updateToggleIcon('light');
    }
  }

  // Mettre à jour l'icône du bouton toggle
  function updateToggleIcon(theme) {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;

    const icon = toggleBtn.querySelector('svg');
    if (!icon) return;

    // Supprimer l'ancienne icône
    icon.remove();

    // Créer la nouvelle icône
    const newIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newIcon.setAttribute('width', '20');
    newIcon.setAttribute('height', '20');
    newIcon.setAttribute('viewBox', '0 0 24 24');
    newIcon.setAttribute('fill', 'none');
    newIcon.setAttribute('stroke', 'currentColor');
    newIcon.setAttribute('stroke-width', '2');
    newIcon.setAttribute('stroke-linecap', 'round');
    newIcon.setAttribute('stroke-linejoin', 'round');

    if (theme === 'dark') {
      // Icône soleil pour passer en mode clair
      newIcon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
    } else {
      // Icône lune pour passer en mode sombre
      newIcon.innerHTML = `
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      `;
    }

    toggleBtn.appendChild(newIcon);
  }

  // Initialiser le thème au chargement
  function initTheme() {
    const theme = getInitialTheme();
    setTheme(theme);
  }

  // Gérer le clic sur le bouton toggle
  function handleThemeToggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Écouter les changements de préférence système
  function watchSystemTheme() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Ne changer que si l'utilisateur n'a pas de préférence sauvegardée
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  // Initialiser quand le DOM est prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initTheme();
      watchSystemTheme();
      
      const toggleBtn = document.getElementById('theme-toggle-btn');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', handleThemeToggle);
      }
    });
  } else {
    initTheme();
    watchSystemTheme();
    
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', handleThemeToggle);
    }
  }
})();

