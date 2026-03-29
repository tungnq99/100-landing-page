// FAP Financial Management - Interactive Scripts

// ======================
// Scroll Animations
// ======================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ======================
// Navbar Scroll Effect
// ======================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ======================
// Mobile Menu Toggle
// ======================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-active');

    // Toggle icon
    if (navLinks.classList.contains('mobile-active')) {
        mobileMenuBtn.textContent = '✕';
    } else {
        mobileMenuBtn.textContent = '☰';
    }
});

// Close mobile menu when clicking a link
const navLinkItems = navLinks.querySelectorAll('a');
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('mobile-active');
            mobileMenuBtn.textContent = '☰';
        }
    });
});

// ======================
// Smooth Scroll
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for navbar height

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ======================
// Animated Counter
// ======================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        // Format number based on target
        if (target >= 1000000) {
            element.textContent = (current / 1000000).toFixed(1).replace('.', ',');
        } else if (target >= 1000) {
            element.textContent = Math.floor(current / 1000) + 'K';
        } else if (target < 100 && target > 10) {
            element.textContent = current.toFixed(1);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;

            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseFloat(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.3 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ======================
// Parallax Effect for Hero Background Orbs
// ======================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        const parallaxElements = hero.querySelectorAll('.hero::before, .hero::after');
        // Apply subtle parallax through CSS transforms
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ======================
// Dashboard Mockup Animations
// ======================
const dashboardMockup = document.querySelector('.dashboard-mockup');

if (dashboardMockup) {
    // Add subtle floating animation to mockup stats
    const mockupStats = dashboardMockup.querySelectorAll('.mockup-stat');

    mockupStats.forEach((stat, index) => {
        const delay = index * 0.1;
        stat.style.animationDelay = `${delay}s`;
    });
}

// ======================
// Dynamic Gradient Animation
// ======================
function createGradientAnimation() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    let hue = 250; // Start with purple-blue

    setInterval(() => {
        hue = (hue + 0.5) % 360;
        // Subtle hue rotation for the gradient
        hero.style.setProperty('--gradient-hue', hue);
    }, 50);
}

// Initialize gradient animation
createGradientAnimation();

// ======================
// Button Ripple Effect
// ======================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ======================
// Preload Images & Performance
// ======================
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .fade-in');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 100);
});

// ======================
// Glass Card Tilt Effect (Optional Enhancement)
// ======================
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ======================
// Console Log (Developer Message)
// ======================
console.log('%c🚀 FAP Financial Management', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt with modern web technologies', 'font-size: 14px; color: #8b5cf6;');
console.log('%cGlassmorphism • Smooth Animations • Responsive Design', 'font-size: 12px; color: #06b6d4;');
