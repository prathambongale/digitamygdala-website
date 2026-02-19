/* =======================================================================
   DIGITAMYGDALA — Main JavaScript
   Handles: navigation, scroll effects, reveal animations, loader
   ======================================================================= */

(function () {
    'use strict';

    // =========================================================================
    // DOM References
    // =========================================================================
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const loader = $('#loader');
    const navbar = $('#navbar');
    const hamburger = $('#hamburger');
    const navLinks = $('#nav-links');
    const navOverlay = $('#nav-overlay');
    const navAnchors = $$('.nav-links a[data-section]');

    // =========================================================================
    // LOADER — hide after page load
    // =========================================================================
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => { loader.style.display = 'none'; }, 600);
        }, 1600); // Let the bar animation finish
    });

    // =========================================================================
    // FOOTER YEAR
    // =========================================================================
    const yearEl = $('#footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // =========================================================================
    // NAVBAR — scroll effect
    // =========================================================================
    let lastScrollY = 0;

    function handleScroll() {
        const sy = window.scrollY;

        // Add "scrolled" class for background blur
        if (sy > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = sy;

        // Update active nav link based on scroll position
        updateActiveNav();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // =========================================================================
    // ACTIVE NAV — highlight based on section in view
    // =========================================================================
    function updateActiveNav() {
        const sections = $$('section[id], .hero[id]');
        let currentSection = 'hero';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom > 150) {
                currentSection = section.id;
            }
        });

        navAnchors.forEach((link) => {
            link.classList.toggle('active', link.dataset.section === currentSection);
        });
    }

    // =========================================================================
    // MOBILE NAV
    // =========================================================================
    function openMobileNav() {
        hamburger.classList.add('active');
        navLinks.classList.add('open');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    navOverlay.addEventListener('click', closeMobileNav);

    // Close mobile nav on link click
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            closeMobileNav();
        }
    });

    // =========================================================================
    // SMOOTH SCROLL — for all internal anchor links
    // =========================================================================
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const targetId = link.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update URL hash without jumping
        history.pushState(null, null, `#${targetId}`);
    });

    // =========================================================================
    // SCROLL REVEAL — animate elements into view
    // =========================================================================
    function initScrollReveal() {
        const revealElements = $$('.reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        revealElements.forEach((el) => observer.observe(el));
    }

    // Run after loader hides
    window.addEventListener('load', () => {
        setTimeout(initScrollReveal, 1700);
    });

    // =========================================================================
    // SERVICE CARD HOVER TILT (subtle)
    // =========================================================================
    $$('.service-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `translateY(-6px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // =========================================================================
    // KEYBOARD ACCESSIBILITY
    // =========================================================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileNav();
        }
    });

    // =========================================================================
    // CONSOLE BRANDING
    // =========================================================================
    console.log(
        '%c🧠 Digitamygdala %c Technology Advisory ',
        'background: #c9a84c; color: #0a0e17; font-size: 14px; font-weight: bold; padding: 6px 12px; border-radius: 4px 0 0 4px;',
        'background: #1a2236; color: #e8e6e1; font-size: 14px; padding: 6px 12px; border-radius: 0 4px 4px 0;'
    );
})();
