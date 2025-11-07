document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function () {
        // Переключаем класс .active у меню
        nav.classList.toggle('active');
        // Переключаем класс .open у кнопки бургер-меню
        menuToggle.classList.toggle('open');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function scrollToForm() {
    const formSection = document.getElementById('buy-wholesale-section');
    if (formSection) {
        formSection.scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
            block: 'start'      // Прокрутка к началу элемента
        });
    }
}