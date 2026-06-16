document.addEventListener('DOMContentLoaded', () => {
    // Navbar effect on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-dark/80', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/5');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('bg-brand-dark/80', 'backdrop-blur-xl', 'py-4', 'border-b', 'border-white/5');
            navbar.classList.add('py-6');
        }
    });

    // Simple reveal animation for elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Dashboard data simulation (subtle)
    const kpiNumbers = document.querySelectorAll('.font-black.tracking-tighter');
    kpiNumbers.forEach(num => {
        const target = parseInt(num.innerText.replace('.', ''));
        if (!isNaN(target)) {
            let count = 0;
            const step = Math.ceil(target / 50);
            const timer = setInterval(() => {
                count += step;
                if (count >= target) {
                    num.innerText = target.toLocaleString('pt-BR');
                    clearInterval(timer);
                } else {
                    num.innerText = count.toLocaleString('pt-BR');
                }
            }, 30);
        }
    });
});

// Form Interaction
const form = document.getElementById('diagnostico-form');
if (form) {
    const levelBtns = form.querySelectorAll('button[type="button"]');
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            levelBtns.forEach(b => b.classList.remove('bg-brand-turquoise', 'text-brand-dark', 'border-brand-turquoise'));
            btn.classList.add('bg-brand-turquoise', 'text-brand-dark', 'border-brand-turquoise');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = 'PROCESSANDO ANÁLISE...';
        btn.disabled = true;

        setTimeout(() => {
            alert('Obrigado! Sua análise está sendo gerada e será enviada via WhatsApp em instantes.');
            btn.innerText = originalText;
            btn.disabled = false;
            form.reset();
            levelBtns.forEach(b => b.classList.remove('bg-brand-turquoise', 'text-brand-dark', 'border-brand-turquoise'));
        }, 1500);
    });
}
