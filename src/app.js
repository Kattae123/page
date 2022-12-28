const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#menu');
const active = () => {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('show');
};

menu.addEventListener('click', (active));