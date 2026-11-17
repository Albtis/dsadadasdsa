document.addEventListener('DOMContentLoaded', () => {
    // --- Мобильное меню ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');

    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            nav.classList.toggle('open');
        });
    }

    // --- Анимации при скролле ---
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });
});
