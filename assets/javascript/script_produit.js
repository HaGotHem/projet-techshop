/* ========================================
   SCRIPT PAGE PRODUITS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Ajouter lazy loading aux images qui n'en ont pas
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        // Ne pas ajouter lazy loading aux images au-dessus de la ligne de flottaison
        if (!img.hasAttribute('loading')) {
            img.loading = 'lazy';
        }
    });
    
    setTimeout(() => {
        initProductFilters();
        initAddToCartButtons();
        initPagination();
        initPriceFilter();
    }, 100);

    // Filtres produits
    function initProductFilters() {
        const filterButtons = document.querySelectorAll('.btn-filter');
        const productItems = document.querySelectorAll('.product-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;

                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                productItems.forEach(item => {
                    const category = item.dataset.category;
                    
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            item.style.transition = 'all 0.4s ease';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 300);
                    }
                });
            });
        });
    }

    // Boutons ajout au panier
    function initAddToCartButtons() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const product = {
                    id: parseInt(this.dataset.id),
                    name: this.dataset.name,
                    price: parseFloat(this.dataset.price)
                };

                if (typeof cartManager !== 'undefined') {
                    cartManager.addToCart(product);
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '✓ Ajouté !';
                    this.style.backgroundColor = '#28a745';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.backgroundColor = '';
                    }, 1500);
                } else {
                    setTimeout(() => {
                        if (typeof cartManager !== 'undefined') {
                            cartManager.addToCart(product);
                        }
                    }, 100);
                }
            });
        });
    }

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const productObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const productCard = entry.target.querySelector('.product-card');
                if (productCard) {
                    productCard.style.opacity = '1';
                    productCard.style.transform = 'translateY(0)';
                }
                productObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-item').forEach(item => {
        productObserver.observe(item);
    });

    // Pagination
    function initPagination() {
        const productsPerPage = 12;
        let currentPage = 1;
        const productItems = Array.from(document.querySelectorAll('.product-item'));
        const paginationContainer = document.getElementById('pagination');

        function showPage(page) {
            const start = (page - 1) * productsPerPage;
            const end = start + productsPerPage;

            productItems.forEach((item, index) => {
                if (index >= start && index < end) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function renderPagination() {
            const totalPages = Math.ceil(productItems.length / productsPerPage);
            paginationContainer.innerHTML = '';

            // Bouton Précédent
            const prevItem = document.createElement('li');
            prevItem.className = `page-item ${currentPage === 1 ? 'disabled' : ''}`;
            prevItem.innerHTML = `<a class="page-link" href="#" aria-label="Précédent">‹</a>`;
            prevItem.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage > 1) {
                    currentPage--;
                    showPage(currentPage);
                    renderPagination();
                }
            });
            paginationContainer.appendChild(prevItem);

            // Numéros de page
            for (let i = 1; i <= totalPages; i++) {
                const pageItem = document.createElement('li');
                pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
                pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
                pageItem.addEventListener('click', (e) => {
                    e.preventDefault();
                    currentPage = i;
                    showPage(currentPage);
                    renderPagination();
                });
                paginationContainer.appendChild(pageItem);
            }

            // Bouton Suivant
            const nextItem = document.createElement('li');
            nextItem.className = `page-item ${currentPage === totalPages ? 'disabled' : ''}`;
            nextItem.innerHTML = `<a class="page-link" href="#" aria-label="Suivant">›</a>`;
            nextItem.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                    currentPage++;
                    showPage(currentPage);
                    renderPagination();
                }
            });
            paginationContainer.appendChild(nextItem);
        }

        // Initialiser la pagination
        showPage(1);
        renderPagination();

        // Adapter la pagination aux filtres
        const filterButtons = document.querySelectorAll('.btn-filter');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                currentPage = 1;
                const filter = this.dataset.filter;
                
                productItems.forEach(item => {
                    const category = item.dataset.category;
                    item.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
                });

                const visibleItems = productItems.filter(item => item.style.display !== 'none');
                const totalPages = Math.ceil(visibleItems.length / productsPerPage);
                
                if (totalPages <= 1) {
                    paginationContainer.parentElement.parentElement.style.display = 'none';
                } else {
                    paginationContainer.parentElement.parentElement.style.display = 'block';
                    renderPagination();
                }
            });
        });
    }

    // Filtre de prix par checkboxes
    function initPriceFilter() {
        const priceCheckboxes = document.querySelectorAll('.price-checkbox');
        const resetPriceBtn = document.getElementById('reset-price');
        const productItems = Array.from(document.querySelectorAll('.product-item'));

        function getPriceRanges() {
            const selectedRanges = [];
            priceCheckboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    const value = checkbox.value;
                    if (value === '0-50') {
                        selectedRanges.push({ min: 0, max: 50 });
                    } else if (value === '50-150') {
                        selectedRanges.push({ min: 50, max: 150 });
                    } else if (value === '150-500') {
                        selectedRanges.push({ min: 150, max: 500 });
                    } else if (value === '500-1000') {
                        selectedRanges.push({ min: 500, max: 1000 });
                    } else if (value === '1000-2000') {
                        selectedRanges.push({ min: 1000, max: 2000 });
                    } else if (value === '2000-plus') {
                        selectedRanges.push({ min: 2000, max: 999999 });
                    }
                }
            });
            return selectedRanges;
        }

        function filterByPrice() {
            const selectedRanges = getPriceRanges();
            
            productItems.forEach(item => {
                const button = item.querySelector('.add-to-cart');
                const price = parseInt(button.dataset.originalPrice);
                
                // Si aucune case n'est cochée, afficher tous les produits
                if (selectedRanges.length === 0) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    // Vérifier si le prix est dans une des tranches sélectionnées
                    const isInRange = selectedRanges.some(range => 
                        price >= range.min && price <= range.max
                    );
                    
                    if (isInRange) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });

            // Mettre à jour la pagination
            const visibleItems = productItems.filter(item => item.style.display !== 'none');
            const paginationContainer = document.getElementById('pagination');
            if (visibleItems.length <= 12) {
                paginationContainer.parentElement.parentElement.style.display = 'none';
            } else {
                paginationContainer.parentElement.parentElement.style.display = 'block';
            }
        }

        // Écouter les changements sur les checkboxes
        priceCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', filterByPrice);
        });

        // Bouton de réinitialisation
        resetPriceBtn.addEventListener('click', function() {
            priceCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            filterByPrice();
        });
    }
});
