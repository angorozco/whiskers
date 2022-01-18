const menu = document.querySelector('.icofont-navigation-menu');
const lista = document.querySelector('.menu__menu');

menu.addEventListener('click', () => {
    if (lista.classList.contains('menu__menu')) {
        lista.classList.toggle('show__menu')
    }
})