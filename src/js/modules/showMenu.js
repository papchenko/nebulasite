// show menu mobile (burger) 2.0

export const showMenu = () => {
    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close');

    if(navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }
    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // remove memu mobile
    const navLink = document.querySelectorAll('.nav-link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));
}