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

// Анимация курсора
document.addEventListener('mousemove', (e) => {
    const cursorTrail = document.getElementById('cursor-trail');
    cursorTrail.style.left = e.pageX + 'px';
    cursorTrail.style.top = e.pageY + 'px';

    // Создаем частицы
    const particle = document.createElement('div');
    particle.classList.add('cursor-particle');
    particle.style.left = e.pageX + 'px';
    particle.style.top = e.pageY + 'px';
    document.body.appendChild(particle);

    // Удаляем частицы через 1 секунду
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Кнопка "Наверх"
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Обработка формы обратной связи
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    e.target.reset();
});