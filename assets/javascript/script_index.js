/* ========================================
   SCRIPT PAGE ACCUEIL
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Carousel
    const carousel = document.getElementById('heroCarousel');
    if (carousel) {
        // Animation après transition
        carousel.addEventListener('slid.bs.carousel', function(event) {
            const activeSlide = event.relatedTarget;
            const title = activeSlide.querySelector('h1');
            const lead = activeSlide.querySelector('.lead');
            const badge = activeSlide.querySelector('.promo-badge');
            const btn = activeSlide.querySelector('.btn-animated');
            const image = activeSlide.querySelector('.hero-image-placeholder');

            const elements = [title, lead, badge, btn, image].filter(el => el !== null);
            elements.forEach(el => {
                el.style.opacity = '0';
            });

            if (title) {
                anime({
                    targets: title,
                    translateY: [-20, 0],
                    opacity: [0, 1],
                    duration: 400,
                    easing: 'easeOutExpo'
                });
            }

            if (badge) {
                anime({
                    targets: badge,
                    scale: [0.8, 1],
                    rotate: [-90, 0],
                    opacity: [0, 1],
                    duration: 350,
                    easing: 'easeOutElastic(1, .6)',
                    delay: 50
                });
            }

            if (lead) {
                anime({
                    targets: lead,
                    translateX: [-20, 0],
                    opacity: [0, 1],
                    duration: 400,
                    delay: 100,
                    easing: 'easeOutExpo'
                });
            }

            if (btn) {
                anime({
                    targets: btn,
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 400,
                    delay: 200,
                    easing: 'easeOutExpo'
                });
            }

            if (image) {
                anime({
                    targets: image,
                    scale: [0.9, 1],
                    opacity: [0, 1],
                    duration: 450,
                    delay: 150,
                    easing: 'easeOutExpo'
                });
            }
        });

        // Animation avant transition
        carousel.addEventListener('slide.bs.carousel', function(event) {
            const currentSlide = event.from;
            const prevSlide = carousel.querySelectorAll('.carousel-item')[currentSlide];
            if (prevSlide) {
                const prevElements = prevSlide.querySelectorAll('h1, .lead, .promo-badge, .btn-animated, .hero-image-placeholder');
                prevElements.forEach(el => {
                    anime({
                        targets: el,
                        opacity: [1, 0],
                        duration: 200,
                        easing: 'easeInExpo'
                    });
                });
            }
        });

        // Animation premier slide
        const firstSlide = carousel.querySelector('.carousel-item.active');
        if (firstSlide) {
            const title = firstSlide.querySelector('h1');
            const lead = firstSlide.querySelector('.lead');
            const badge = firstSlide.querySelector('.promo-badge');
            const btn = firstSlide.querySelector('.btn-animated');
            const image = firstSlide.querySelector('.hero-image-placeholder');

            anime({
                targets: [title, lead, badge, btn, image],
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 1000,
                delay: anime.stagger(100),
                easing: 'easeOutExpo'
            });
        }
    }

    // Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('card')) {
                    anime({
                        targets: element,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                } else if (element.classList.contains('collage-item')) {
                    anime({
                        targets: element,
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeOutElastic(1, .8)'
                    });
                } else if (element.tagName === 'H2') {
                    anime({
                        targets: element,
                        translateX: [-50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Éléments à observer
    const elementsToAnimate = document.querySelectorAll('.card, .collage-item, .services-section h2, .collage-section h2, .testimonials-section h2');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Animation cartes services
    const serviceCards = document.querySelectorAll('.services-section .card');
    if (serviceCards.length > 0) {
        const serviceSection = document.querySelector('.services-section');
        const serviceObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: serviceCards,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: anime.stagger(100),
                        easing: 'easeOutExpo'
                    });
                    serviceObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        serviceObserver.observe(serviceSection);
    }

    // Animation témoignages
    const testimonialCards = document.querySelectorAll('.testimonials-section .card');
    if (testimonialCards.length > 0) {
        const testimonialSection = document.querySelector('.testimonials-section');
        const testimonialObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: testimonialCards,
                        translateX: [-50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: anime.stagger(150),
                        easing: 'easeOutExpo'
                    });
                    testimonialObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        testimonialObserver.observe(testimonialSection);

        // Animation hover témoignages
        testimonialCards.forEach(card => {
            const stars = card.querySelectorAll('.rating .star');
            const text = card.querySelector('.testimonial-text');
            const author = card.querySelector('.testimonial-author');

            card.addEventListener('mouseenter', function() {
                anime({
                    targets: stars,
                    rotate: function() {
                        return anime.random(-15, 15);
                    },
                    scale: [1, 1.3],
                    duration: 600,
                    delay: anime.stagger(50),
                    easing: 'easeOutElastic(1, .8)'
                });

                if (text) {
                    anime({
                        targets: text,
                        scale: [1, 1.02],
                        duration: 400,
                        easing: 'easeOutExpo'
                    });
                }

                if (author) {
                    anime({
                        targets: author,
                        translateX: [0, 10],
                        opacity: [0.7, 1],
                        duration: 400,
                        delay: 200,
                        easing: 'easeOutExpo'
                    });
                }

                anime({
                    targets: card,
                    rotateY: [0, 2],
                    rotateX: [0, -2],
                    duration: 500,
                    easing: 'easeOutExpo'
                });
            });

            card.addEventListener('mouseleave', function() {
                anime({
                    targets: stars,
                    rotate: 0,
                    scale: 1,
                    duration: 400,
                    delay: anime.stagger(30),
                    easing: 'easeInExpo'
                });

                if (text) {
                    anime({
                        targets: text,
                        scale: 1,
                        duration: 300,
                        easing: 'easeInExpo'
                    });
                }

                if (author) {
                    anime({
                        targets: author,
                        translateX: 0,
                        opacity: 0.7,
                        duration: 300,
                        easing: 'easeInExpo'
                    });
                }

                anime({
                    targets: card,
                    rotateY: 0,
                    rotateX: 0,
                    duration: 400,
                    easing: 'easeInExpo'
                });
            });
        });
    }
});
