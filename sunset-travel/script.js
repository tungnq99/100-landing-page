// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUNSET JOURNEY - ADVANCED 2026 ANIMATIONS
// Magnetic Cursor + Multi-Layer Parallax + Spring Physics + Kinetic Typography
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

gsap.registerPlugin(ScrollTrigger);

// Global mouse position
let mouse = { x: 0, y: 0 };

// ===== MAGNETIC CURSOR - WARM GLOW =====
function initMagneticCursor() {
    if (window.innerWidth < 768) return; // Skip on mobile

    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    cursor.innerHTML = '<div class="cursor-outer"></div><div class="cursor-inner"></div>';
    document.body.appendChild(cursor);

    const cursorOuter = cursor.querySelector('.cursor-outer');
    const cursorInner = cursor.querySelector('.cursor-inner');

    // Styles
    cursor.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:99999;';
    cursorOuter.style.cssText = 'width:40px;height:40px;border:2px solid rgba(244,162,89,0.5);border-radius:50%;position:absolute;transform:translate(-50%,-50%);transition:all 0.15s ease;';
    cursorInner.style.cssText = 'width:6px;height:6px;background:#F4A259;border-radius:50%;position:absolute;transform:translate(-50%,-50%);box-shadow:0 0 10px rgba(244,162,89,0.8);';

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        gsap.to(cursorOuter, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: 'power2.out'
        });

        gsap.to(cursorInner, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15,
            ease: 'power2.out'
        });
    });

    // Magnetic effect on buttons
    const magneticElements = document.querySelectorAll('.btn, .card-link, .destination-card');

    magneticElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursorOuter, { scale: 1.5, duration: 0.3 });
            gsap.to(cursorInner, { scale: 1.5, duration: 0.3 });
        });

        el.addEventListener('mouseleave', () => {
            gsap.to(cursorOuter, { scale: 1, duration: 0.3 });
            gsap.to(cursorInner, { scale: 1, duration: 0.3 });
        });
    });
}

// ===== HERO - MULTI-LAYER PARALLAX WITH KINETIC TITLE =====
function initAdvancedHeroParallax() {
    const heroImage = document.querySelector('.hero-image');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Background parallax
    if (heroImage) {
        gsap.to(heroImage, {
            y: '30%',
            scale: 1.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        });
    }

    // Title kinetic movement (follows mouse slightly)
    if (heroTitle && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
            const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

            gsap.to(heroTitle, {
                x: moveX,
                y: moveY,
                duration: 1,
                ease: 'power2.out'
            });
        });
    }

    // Subtitle fade out on scroll
    if (heroSubtitle) {
        gsap.to(heroSubtitle, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5
            }
        });
    }
}

// ===== CARDS - 3D TILT + SPRING PHYSICS =====
function initAdvancedCardAnimations() {
    const cards = gsap.utils.toArray('.destination-card');

    cards.forEach((card, index) => {
        // Initial reveal with rotation
        gsap.from(card, {
            y: 100,
            opacity: 0,
            rotationX: -15,
            duration: 1.2,
            ease: 'back.out(1.2)',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });

        // Scroll-linked rotation
        gsap.to(card, {
            rotateY: (index % 2 === 0 ? 5 : -5),
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });

        // Mouse move 3D tilt
        if (window.innerWidth > 768) {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        }
    });
}

// ===== IMAGES - KEN BURNS EFFECT =====
function initKenBurnsEffect() {
    const images = document.querySelectorAll('.card-image, .split-image img');

    images.forEach(img => {
        ScrollTrigger.create({
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                gsap.to(img, {
                    scale: 1 + (progress * 0.15),
                    duration: 0,
                });
            }
        });
    });
}

// ===== SPLIT SECTION - ADVANCED PARALLAX LAYERS =====
function initAdvancedSplitParallax() {
    const splitImage = document.querySelector('.split-image img');
    const splitContent = document.querySelector('.split-content');

    if (splitImage) {
        // Image moves faster (background layer)
        gsap.to(splitImage, {
            y: -100,
            ease: 'none',
            scrollTrigger: {
                trigger: '.split-layout',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.5
            }
        });
    }

    if (splitContent) {
        // Content moves slower (foreground layer)
        gsap.to(splitContent, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.split-layout',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5
            }
        });
    }
}

// ===== STATS - SPRING PHYSICS COUNTER =====
function initAdvancedStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const isDecimal = stat.getAttribute('data-target').includes('.');

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 80%',
            once: true,
            onEnter: () => {
                gsap.from(stat.parentElement, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'back.out(2)'
                });

                gsap.to(stat, {
                    innerText: target,
                    duration: 2.5,
                    ease: 'expo.out',
                    snap: { innerText: isDecimal ? 0.1 : 1 },
                    onUpdate: function () {
                        const currentValue = this.targets()[0].innerText;
                        if (isDecimal) {
                            stat.innerText = parseFloat(currentValue).toFixed(1);
                        } else {
                            stat.innerText = Math.ceil(currentValue).toLocaleString();
                        }
                    }
                });
            }
        });
    });
}

// ===== SECTION HEADERS - STAGGER WITH ROTATION =====
function initAdvancedSectionAnimations() {
    const headers = gsap.utils.toArray('.section-header');

    headers.forEach(header => {
        const title = header.querySelector('.section-title');
        const label = header.querySelector('.section-label');
        const desc = header.querySelector('.section-description');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
        console.log(tl);

        if (label) tl.from(label, { opacity: 0, x: -20, duration: 0.6, ease: 'power3.out' });
        if (title) tl.from(title, { opacity: 0, y: 30, rotationX: -10, duration: 0.8, ease: 'back.out(1.5)' }, '-=0.3');
        if (desc) tl.from(desc, { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    });
}

// ===== FEATURES - MAGNETIC HOVER =====
function initMagneticFeatures() {
    const features = document.querySelectorAll('.feature-item');

    features.forEach((feature, index) => {
        // Initial animation
        gsap.from(feature, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: '.features',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        // Magnetic hover effect
        if (window.innerWidth > 768) {
            feature.addEventListener('mouseenter', () => {
                gsap.to(feature, {
                    x: 10,
                    scale: 1.05,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });

            feature.addEventListener('mouseleave', () => {
                gsap.to(feature, {
                    x: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        }
    });
}

// ===== CTA - WAVE ANIMATION =====
function initAdvancedCTAAnimation() {
    const ctaContent = document.querySelector('.cta-content');

    if (ctaContent) {
        const title = ctaContent.querySelector('.cta-title');
        const text = ctaContent.querySelector('.cta-text');
        const btn = ctaContent.querySelector('.btn');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ctaContent,
                start: 'top 60%',
                toggleActions: 'play none none none',
            }
        });

        if (title) tl.from(title, { opacity: 0, y: 50, scale: 0.9, duration: 0.6, ease: 'back.out(1.5)' }).to(title, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.5)' });
        if (text) tl.from(text, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.3').to(text, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3');
        if (btn) tl.from(btn, { opacity: 0, y: 20, scale: 0.9, duration: 0.6, ease: 'back.out(2)' }, '-=0.4').to(btn, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(2)' }, '-=0.4');
    }
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                gsap.to(window, {
                    scrollTo: { y: target, offsetY: 80 },
                    duration: 1.5,
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ===== SCROLL HINT - GSAP SMOOTH ANIMATION =====
function initScrollHintAnimation() {
    const scrollHint = document.querySelector('.scroll-hint');
    const scrollArrow = document.querySelector('.scroll-arrow');

    if (scrollHint) {
        // Smooth float animation
        gsap.to(scrollHint, {
            y: -12,
            duration: 3,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
    }

    if (scrollArrow) {
        // Smooth fade + move
        gsap.to(scrollArrow, {
            opacity: 0.3,
            y: 8,
            duration: 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
        });
    }
}

// ===== LOADING ANIMATION - SPRING ENTRANCE =====
function initLoadingAnimation() {
    const heroElements = gsap.utils.toArray('.fade-in-up');

    gsap.set(heroElements, { opacity: 0, y: 50, rotationX: -15 });

    gsap.to(heroElements, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'back.out(1.5)',
        delay: 0.3
    });
}

// ===== SPLIT TEXT REVEAL ANIMATION =====
function initSplitTextReveal() {
    const titles = document.querySelectorAll('.section-title, .card-title');

    titles.forEach(title => {
        const text = title.textContent;
        const words = text.split(' ');
        title.innerHTML = '';

        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.style.cssText = 'display:inline-block;overflow:hidden;';

            word.split('').forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.textContent = char;
                charSpan.style.display = 'inline-block';
                wordSpan.appendChild(charSpan);
            });

            title.appendChild(wordSpan);
            if (wordIndex < words.length - 1) title.appendChild(document.createTextNode(' '));
        });

        const chars = title.querySelectorAll('span span');
        gsap.set(chars, { y: 100, opacity: 0 });

        ScrollTrigger.create({
            trigger: title,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                gsap.to(chars, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.02,
                    ease: 'back.out(1.5)'
                });
            }
        });
    });
}

// ===== FLOATING GEOMETRIC SHAPES =====
function initFloatingShapes() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:hidden;';
    document.body.appendChild(container);

    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        const size = 60 + Math.random() * 80;

        shape.style.cssText = `
            position:absolute;
            width:${size}px;
            height:${size}px;
            border:2px solid rgba(244,162,89,0.12);
            border-radius:${Math.random() > 0.5 ? '50%' : '0'};
            left:${Math.random() * 100}%;
            top:${Math.random() * 100}%;
        `;

        container.appendChild(shape);

        gsap.to(shape, {
            y: -150 - Math.random() * 100,
            x: (Math.random() - 0.5) * 80,
            rotation: 360,
            duration: 20 + Math.random() * 15,
            repeat: -1,
            ease: 'none',
            yoyo: true
        });

        gsap.to(shape, {
            y: -250 * (i / 6),
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1 + (i / 6)
            }
        });
    }
}

// ===== LIQUID CURSOR TRAIL =====
function initLiquidTrail() {
    if (window.innerWidth < 768) return;

    const trail = [];
    const trailLength = 15;

    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `
            position:fixed;
            width:${7 - i * 0.3}px;
            height:${7 - i * 0.3}px;
            background:rgba(244,162,89,${0.4 - i * 0.025});
            border-radius:50%;
            pointer-events:none;
            z-index:99998;
        `;
        document.body.appendChild(dot);
        trail.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        trail[0].x = mouseX;
        trail[0].y = mouseY;

        for (let i = 0; i < trailLength; i++) {
            if (i > 0) {
                trail[i].x += (trail[i - 1].x - trail[i].x) * 0.25;
                trail[i].y += (trail[i - 1].y - trail[i].y) * 0.25;
            }
            trail[i].el.style.transform = `translate(${trail[i].x}px, ${trail[i].y}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ===== BUTTON RIPPLE EFFECT =====
function initButtonRipples() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.cssText += 'position:relative;overflow:hidden;';

        btn.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position:absolute;
                width:${size}px;
                height:${size}px;
                left:${x}px;
                top:${y}px;
                background:rgba(255,255,255,0.4);
                border-radius:50%;
                transform:scale(0);
                pointer-events:none;
            `;

            btn.appendChild(ripple);

            gsap.to(ripple, {
                scale: 2,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
                onComplete: () => ripple.remove()
            });
        });
    });
}

// ===== IMAGE REVEAL MASK =====
function initImageRevealMask() {
    document.querySelectorAll('.card-image-wrapper').forEach(wrapper => {
        const mask = document.createElement('div');
        mask.style.cssText = `
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:#F4A259;
            z-index:2;
            transform-origin:left;
        `;
        wrapper.style.position = 'relative';
        wrapper.appendChild(mask);

        ScrollTrigger.create({
            trigger: wrapper,
            start: 'top 75%',
            once: true,
            onEnter: () => {
                gsap.to(mask, {
                    scaleX: 0,
                    duration: 1.2,
                    ease: 'expo.inOut'
                });
            }
        });
    });
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = `
        position:fixed;
        top:0;
        left:0;
        width:0;
        height:3px;
        background:linear-gradient(90deg,#F4A259,#D66853);
        z-index:100000;
        transition:width 0.1s ease;
    `;
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = scrolled + '%';
    });
}

// ===== UNIVERSAL PARALLAX =====
function initUniversalParallax() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section, i) => {
        gsap.to(section, {
            y: -40 * (i % 3),
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.3
            }
        });
    });
}

// ===== MICRO-INTERACTIONS =====
function initMicroInteractions() {
    document.querySelectorAll('a, .card-link').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { scale: 1.05, duration: 0.3, ease: 'back.out(2)' });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
}

// ===== INITIALIZE ALL =====
function init() {
    console.log('🌅 Sunset Journey - Ultimate Loading...');

    // Original animations
    initMagneticCursor();
    initAdvancedHeroParallax();
    initAdvancedCardAnimations();
    initKenBurnsEffect();
    initAdvancedSplitParallax();
    initAdvancedStatsCounter();
    initAdvancedSectionAnimations();
    initMagneticFeatures();
    initAdvancedCTAAnimation();
    initSmoothScroll();
    initScrollHintAnimation();
    initLoadingAnimation();

    // NEW: Advanced effects
    initSplitTextReveal();
    initFloatingShapes();
    initLiquidTrail();
    initButtonRipples();
    initImageRevealMask();
    initScrollProgress();
    initUniversalParallax();
    initMicroInteractions();

    console.log('✨ Sunset Journey - 20+ Animations LOADED!');
    console.log('🎬 Systems Active: Magnetic Cursor, Split Text, Liquid Trail, Ripples, Masks, Progress Bar, Universal Parallax');
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Refresh ScrollTrigger on resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});
