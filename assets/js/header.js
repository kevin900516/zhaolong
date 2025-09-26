document.addEventListener('DOMContentLoaded', () => {
    console.log("Header script loaded");
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');

    if (hamburgerButton && navLinks && overlay) {
        console.log("Hamburger menu, nav links, and overlay found");
        hamburgerButton.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburgerButton.classList.toggle('is-active');
            overlay.classList.toggle('is-active');

            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
        });
    } else {
        console.log("Hamburger menu, nav links, or overlay not found");
    }
});
