/* ========================================
   SCRIPT PAGE PRODUITS
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
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

    // Filtre de prix
    function initPriceFilter() {
        const minPriceSlider = document.getElementById('min-price');
        const maxPriceSlider = document.getElementById('max-price');
        const minPriceLabel = document.getElementById('min-price-label');
        const maxPriceLabel = document.getElementById('max-price-label');
        const resetPriceBtn = document.getElementById('reset-price');
        const productItems = Array.from(document.querySelectorAll('.product-item'));

        let minPrice = 0;
        let maxPrice = 2200;

        function updatePriceLabels() {
            minPriceLabel.textContent = minPrice;
            maxPriceLabel.textContent = maxPrice;
        }

        function filterByPrice() {
            productItems.forEach(item => {
                const button = item.querySelector('.add-to-cart');
                const price = parseInt(button.dataset.originalPrice);
                
                if (price >= minPrice && price <= maxPrice) {
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

        minPriceSlider.addEventListener('input', function() {
            minPrice = parseInt(this.value);
            if (minPrice > maxPrice - 10) {
                minPrice = maxPrice - 10;
                this.value = minPrice;
            }
            updatePriceLabels();
            filterByPrice();
        });

        maxPriceSlider.addEventListener('input', function() {
            maxPrice = parseInt(this.value);
            if (maxPrice < minPrice + 10) {
                maxPrice = minPrice + 10;
                this.value = maxPrice;
            }
            updatePriceLabels();
            filterByPrice();
        });

        resetPriceBtn.addEventListener('click', function() {
            minPrice = 0;
            maxPrice = 2200;
            minPriceSlider.value = minPrice;
            maxPriceSlider.value = maxPrice;
            updatePriceLabels();
            filterByPrice();
        });
    }
});
