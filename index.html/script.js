// Инициализация частиц
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Частицы загружены!');
});

// Анимации при прокрутке
document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            el.classList.add('animate__fadeInUp');
        }
    });
});
