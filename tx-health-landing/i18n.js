const translations = {
    'pt-BR': {
        'hero.badge': 'Crescimento em Saúde não é só Marketing.',
        'hero.headline': 'É <br> <span class="gradient-text-turquoise">infraestrutura.</span>',
        'hero.text': 'A <span class="text-brand-turquoise">TX Health Growth</span> ajuda clínicas e profissionais de saúde a estruturarem presença digital, atendimento, automação e jornada do paciente com tecnologia de ponta.',
        'nav.cta': 'Agendar Consultoria'
    },
    'en-US': {
        'hero.badge': 'Health Growth is more than just Marketing.',
        'hero.headline': 'It is <br> <span class="gradient-text-turquoise">infrastructure.</span>',
        'hero.text': '<span class="text-brand-turquoise">TX Health Growth</span> helps clinics and healthcare professionals structure their digital presence, service, automation, and patient journey with cutting-edge technology.',
        'nav.cta': 'Book Consultancy'
    }
};

let currentLang = 'pt-BR';

function updateContent() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}
