const menuBtn = document.querySelector('.menu-toggle');
const navItems = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    navItems.classList.toggle('is-active');
});


document.querySelectorAll('.items a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        navItems.classList.remove('is-active');
    });
});