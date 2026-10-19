// Padmavati Navrang ZaykaWrap - Premium JavaScript
// Professional interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Navigation
    // ========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // ========================================
    // Dropdown Menu Functionality
    // ========================================
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Function to position dropdown menu
    function positionDropdownMenu(toggle, menu) {
        if (window.innerWidth > 768) {
            const toggleRect = toggle.getBoundingClientRect();
            const menuWidth = menu.offsetWidth || 250;
            const leftPosition = toggleRect.left + (toggleRect.width / 2);
            const topPosition = toggleRect.bottom + 10;
            
            menu.style.left = leftPosition + 'px';
            menu.style.top = topPosition + 'px';
            menu.style.transform = 'translateX(-50%) translateY(0)';
            menu.style.position = 'fixed';
            menu.style.zIndex = '999999';
        }
    }
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (!menu) return;
        
        // Position dropdown on window resize and scroll
        function updateDropdownPosition() {
            if (menu.classList.contains('active')) {
                positionDropdownMenu(toggle, menu);
            }
        }
        
        window.addEventListener('resize', updateDropdownPosition);
        window.addEventListener('scroll', updateDropdownPosition, true);
        
        // Desktop hover
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                positionDropdownMenu(toggle, menu);
                menu.classList.add('active');
                menu.style.pointerEvents = 'auto';
            }
        });
        
        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                menu.classList.remove('active');
                menu.style.pointerEvents = 'none';
            }
        });
        
        // Click toggle for mobile and desktop
        if (toggle) {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = menu.classList.contains('active');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown').forEach(d => {
                    if (d !== dropdown) {
                        const otherMenu = d.querySelector('.dropdown-menu');
                        if (otherMenu) {
                            otherMenu.classList.remove('active');
                            otherMenu.style.pointerEvents = 'none';
                        }
                    }
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    positionDropdownMenu(toggle, menu);
                    menu.classList.add('active');
                    menu.style.pointerEvents = 'auto';
                } else {
                    menu.classList.remove('active');
                    menu.style.pointerEvents = 'none';
                }
            });
        }
        
        // Prevent dropdown from closing when clicking inside menu
        menu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Handle clicks on dropdown menu links
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Allow navigation, but don't close dropdown on mobile immediately
                if (window.innerWidth <= 768) {
                    // Close dropdown on mobile after navigation
                    setTimeout(() => {
                        menu.classList.remove('active');
                        menu.style.pointerEvents = 'none';
                        navLinks.classList.remove('active');
                        if (mobileToggle) {
                            mobileToggle.classList.remove('active');
                            const spans = mobileToggle.querySelectorAll('span');
                            spans[0].style.transform = 'none';
                            spans[1].style.opacity = '1';
                            spans[2].style.transform = 'none';
                        }
                    }, 100);
                }
            });
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        // Check if click is outside any dropdown
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-menu')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('active');
                menu.style.pointerEvents = 'none';
            });
        }
    });
    
    // ========================================
    // Header Scroll Effect with Smooth Animation
    // ========================================
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Scroll Animations with Intersection Observer
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.product-card, .feature-card, .section-header, .about-text, .testimonial-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // ========================================
    // Parallax Effect for Hero Sections
    // ========================================
    const parallaxElements = document.querySelectorAll('.hero-slider, .page-hero');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ========================================
    // Gallery Filter Tabs
    // ========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach((item, index) => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // ========================================
    // Gallery Lightbox
    // ========================================
    const viewBtns = document.querySelectorAll('.view-btn');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const galleryItem = this.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            const title = galleryItem.querySelector('h3')?.textContent || 'Product Image';
            
            if (img) {
                openLightbox(img.src, title);
            }
        });
    });
    
    // Also allow clicking on gallery image
    galleryItems.forEach(item => {
        const img = item.querySelector('.gallery-image img');
        if (img) {
            img.addEventListener('click', function() {
                const title = item.querySelector('h3')?.textContent || 'Product Image';
                openLightbox(this.src, title);
            });
        }
    });
    
    function openLightbox(imageSrc, title) {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close">&times;</button>
                <img src="${imageSrc}" alt="${title}">
                <div class="lightbox-title">${title}</div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Close on button click
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            closeLightbox(lightbox);
        });
        
        // Close on overlay click
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox(lightbox);
            }
        });
        
        // Close on ESC key
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closeLightbox(lightbox);
                document.removeEventListener('keydown', escHandler);
            }
        });
        
        // Animate in
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }
    
    function closeLightbox(lightbox) {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
        }, 300);
    }
    
    // ========================================
    // Contact Form
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            let isValid = true;
            const requiredFields = ['name', 'phone', 'email', 'subject', 'message'];
            
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    input.style.borderColor = '#c41e3a';
                    isValid = false;
                } else {
                    input.style.borderColor = '#cccccc';
                }
            });
            
            if (isValid) {
                // Success animation
                const btn = this.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = 'Message Sent ✓';
                btn.style.background = '#2e7d32';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    this.reset();
                }, 3000);
            }
        });
        
        // Input focus effects
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    }
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const fadeInObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, fadeInObserverOptions);
    
    // Observe elements
    const animateElements = document.querySelectorAll(
        '.feature-card, .product-card, .testimonial-card, .gallery-item, ' +
        '.mv-card, .choose-item, .cert-item, .qc-item, .stat-item, .pf-item'
    );
    
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        fadeInObserver.observe(el);
    });
    
    // ========================================
    // Image Lazy Loading & Fade In
    // ========================================
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            img.addEventListener('error', function() {
                this.classList.add('loaded');
            });
        }
    });
    
    // ========================================
    // Counter Animation for Stats
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                
                if (!isNaN(number) && number > 0) {
                    animateCounter(target, number, suffix);
                }
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    function animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, stepTime);
    }
    
    // ========================================
    // Image Slider Functionality
    // ========================================
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentSlide = 0;
    let slideInterval;
    
    if (slides.length > 0) {
        // Function to show slide
        function showSlide(index) {
            // Remove active class from all slides first
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                // Reset content animations
                const content = slide.querySelector('.slide-content');
                if (content) {
                    const elements = content.querySelectorAll('.tagline, h1, p, .hero-buttons');
                    elements.forEach(el => {
                        el.style.animation = 'none';
                        setTimeout(() => {
                            el.style.animation = '';
                        }, 10);
                    });
                }
            });
            
            // Add active class to current slide
            setTimeout(() => {
                slides[index].classList.add('active');
            }, 50);
            
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                if (i === index) {
                    dot.classList.add('active');
                }
            });
            
            currentSlide = index;
        }
        
        // Next slide
        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }
        
        // Previous slide
        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }
        
        // Auto-play
        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        }
        
        function stopSlider() {
            clearInterval(slideInterval);
        }
        
        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                stopSlider();
                nextSlide();
                startSlider();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                stopSlider();
                prevSlide();
                startSlider();
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopSlider();
                showSlide(index);
                startSlider();
            });
        });
        
        // Pause on hover
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopSlider);
            sliderContainer.addEventListener('mouseleave', startSlider);
        }
        
        // Start auto-play
        startSlider();
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                stopSlider();
                prevSlide();
                startSlider();
            } else if (e.key === 'ArrowRight') {
                stopSlider();
                nextSlide();
                startSlider();
            }
        });
        
        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (sliderContainer) {
            sliderContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            sliderContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
            }
        }
    }
    
    // ========================================
    // Image Error Handling
    // ========================================
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.classList.add('error');
            this.alt = 'Image not available';
        });
        
        // Lazy loading support
        if ('loading' in HTMLImageElement.prototype) {
            img.loading = 'lazy';
        }
    });
    
    // ========================================
    // Parallax Effect for Hero
    // ========================================
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // ========================================
    // Video Play Button
    // ========================================
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Placeholder for video modal
            alert('Video player will be integrated here');
        });
    });
    
    // ========================================
    // Hover Effects Enhancement
    // ========================================
    const cards = document.querySelectorAll('.feature-card, .product-card, .gallery-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
    
});

// ========================================
// Add CSS Animations
// ========================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .fade-in.visible {
        animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    /* Staggered animations */
    .features-grid .fade-in:nth-child(1).visible { animation-delay: 0s; }
    .features-grid .fade-in:nth-child(2).visible { animation-delay: 0.1s; }
    .features-grid .fade-in:nth-child(3).visible { animation-delay: 0.2s; }
    .features-grid .fade-in:nth-child(4).visible { animation-delay: 0.3s; }
    
    .products-grid .fade-in:nth-child(1).visible { animation-delay: 0s; }
    .products-grid .fade-in:nth-child(2).visible { animation-delay: 0.15s; }
    .products-grid .fade-in:nth-child(3).visible { animation-delay: 0.3s; }
    
    .stats-grid .fade-in:nth-child(1).visible { animation-delay: 0s; }
    .stats-grid .fade-in:nth-child(2).visible { animation-delay: 0.1s; }
    .stats-grid .fade-in:nth-child(3).visible { animation-delay: 0.2s; }
    .stats-grid .fade-in:nth-child(4).visible { animation-delay: 0.3s; }
`;
document.head.appendChild(styleSheet);

// ========================================
// Preloader (Optional)
// ========================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.hero-text, .hero-image').forEach((el, i) => {
            el.style.animation = `fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.2}s forwards`;
        });
    }, 100);
    
    // ========================================
    // Products Page Filter Functionality
    // ========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card[data-filter]');
    const categoryGroups = document.querySelectorAll('.product-category-group');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter products
                productCards.forEach(card => {
                    const cardFilter = card.getAttribute('data-filter');
                    
                    if (filterValue === 'all' || cardFilter === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Show/hide category groups
                categoryGroups.forEach(group => {
                    const groupCategory = group.getAttribute('data-category');
                    
                    if (filterValue === 'all' || groupCategory === filterValue) {
                        group.style.display = 'block';
                        setTimeout(() => {
                            group.style.opacity = '1';
                        }, 10);
                    } else {
                        group.style.opacity = '0';
                        setTimeout(() => {
                            group.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ========================================
    // Theme Switcher Functionality
    // ========================================
    const themeSwitchers = document.querySelectorAll('.theme-switcher, .theme-switcher-nav');
    const currentTheme = localStorage.getItem('theme') || 'colorful';
    
    // Function to update theme switcher text
    function updateThemeSwitcherText() {
        const isColorful = document.body.classList.contains('colorful-theme');
        themeSwitchers.forEach(switcher => {
            if (switcher) {
                switcher.textContent = isColorful ? 'Older Version' : 'Colorful Theme';
            }
        });
    }
    
    // Apply saved theme
    if (currentTheme === 'colorful') {
        document.body.classList.add('colorful-theme');
        document.documentElement.classList.add('colorful-theme');
    } else {
        document.body.classList.remove('colorful-theme');
        document.documentElement.classList.remove('colorful-theme');
    }
    updateThemeSwitcherText();
    
    // Theme switcher click handler
    themeSwitchers.forEach(switcher => {
        if (switcher) {
            switcher.addEventListener('click', function(e) {
                e.preventDefault();
                const isColorful = document.body.classList.contains('colorful-theme');
                
                if (isColorful) {
                    // Switch to older version (dark theme)
                    document.body.classList.remove('colorful-theme');
                    document.documentElement.classList.remove('colorful-theme');
                    localStorage.setItem('theme', 'dark');
                } else {
                    // Switch to colorful theme
                    document.body.classList.add('colorful-theme');
                    document.documentElement.classList.add('colorful-theme');
                    localStorage.setItem('theme', 'colorful');
                }
                updateThemeSwitcherText();
            });
        }
    });
});
