<script>
    document.addEventListener('DOMContentLoaded', function() {
        // === НОВАЯ УНИВЕРСАЛЬНАЯ НАВИГАЦИЯ ===
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (!targetSection) return;

                // 1. Скрыть все секции
                document.querySelectorAll('section').forEach(sec => {
                    sec.classList.remove('active');
                });

                // 2. Показать целевую секцию
                targetSection.classList.add('active');

                // 3. Обновить активный класс в меню
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`a[href="#${targetId}"]`);
                if (activeLink) activeLink.classList.add('active');

                // 4. Плавная прокрутка к секции
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // === Остальной функционал (форма, модалка, мобильное меню и т.д.) ===

        // Форма
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Спасибо за ваше сообщение! Я отвечу вам в ближайшее время.');
                contactForm.reset();
            });
        }

        // Мобильное меню
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
        }

        // Модальное окно галереи
        document.querySelectorAll('.gallery-img').forEach(img => {
            img.addEventListener('click', function() {
                const modal = document.getElementById('modal');
                const modalImg = document.getElementById('modal-img');
                modalImg.src = this.src;
                modal.style.display = 'flex';
            });
        });

        document.querySelector('.close')?.addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Переключение языка
        document.querySelectorAll('.lang-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Прокрутка вниз
        document.querySelector('.scroll-down')?.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

        // Анимация при скролле (fade-in)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    });
</script>
