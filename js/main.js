/**
 * Bukuk - Hlavní JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobilní menu
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Zavřít menu při kliknutí na odkaz
        const mobileLinks = mobileNav.querySelectorAll('.mobile-nav__link');
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Smooth scroll pro kotvy
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Aktivní stav menu podle aktuální stránky
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('nav__link--active');
        }
    });

    // Formulář - základní validace (pro budoucí použití)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Tady bude připojení na backend
            alert('Děkujeme za zprávu! Ozveme se vám co nejdříve.');
            contactForm.reset();
        });
    }

    // Newsletter formulář
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Tady bude připojení na backend
            alert('Děkujeme za přihlášení k odběru!');
            newsletterForm.reset();
        });
    }
});
