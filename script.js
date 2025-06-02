// Translations
const translations = {
    it: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Progetti',
        'nav.contact': 'Contatti',
        'hero.viewProjects': 'Vedi Progetti',
        'hero.getInTouch': 'Contattami',
        'about.title': 'Chi Sono',
        'about.description': 'Ciao! Sono uno studente di informatica alle superiori con una grande passione per lo sviluppo software. Mi piace esplorare nuove tecnologie e creare soluzioni innovative che possano fare la differenza.',
        'about.certification': 'Certificazione Inglese',
        'about.viewCert': 'Vedi Certificato →',
        'projects.title': 'I Miei Progetti',
        'projects.convertami.description': 'Un tool innovativo pensato per semplificare i processi di conversione, offrendo soluzioni efficienti e veloci per trasformare dati e formati.',
        'projects.digitalreports.description': 'Un\'applicazione desktop progettata per aiutare il corpo di Polizia Locale a tenere traccia dei report in maniera digitale. Gestisce turni di lavoro, attività, mezzi e infrazioni.',
        'projects.viewCode': 'Vedi Codice →',
        'contact.title': 'Connettiamoci',
        'contact.description': 'Interessato a collaborare o semplicemente fare una chiacchierata? Contattami!',
        'footer.license': 'Licenza CC0 1.0 Universal.',
        'footer.madeWith': 'Creato con ❤️ usando HTML, CSS e JavaScript.',
        // Nuove frasi per il typewriter del sottotitolo
        'typewriter.phrases': [
            "Wannabe Full Stack Developer",
            "Aviation Enjoyer",
            "Cosa posso scrivere qui?",
            "Studente Appassionato",
            "Sempre Pronto a Imparare",
            "Caffè e Codice 24/7",
            "Debug Master in Training"
        ]
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.viewProjects': 'View Projects',
        'hero.getInTouch': 'Get in Touch',
        'about.title': 'About Me',
        'about.description': 'Hi! I\'m a high school computer science student with a great passion for software development. I love exploring new technologies and creating innovative solutions that can make a difference.',
        'about.certification': 'English Certification',
        'about.viewCert': 'View Certificate →',
        'projects.title': 'My Projects',
        'projects.convertami.description': 'An innovative tool designed to simplify conversion processes, offering efficient and fast solutions to transform data and formats.',
        'projects.digitalreports.description': 'A desktop application designed to help the Local Police force keep track of reports digitally. It manages work shifts, activities, vehicles and violations.',
        'projects.viewCode': 'View Code →',
        'contact.title': 'Let\'s Connect',
        'contact.description': 'Interested in collaborating or just having a chat? Get in touch!',
        'footer.license': 'CC0 1.0 Universal license.',
        'footer.madeWith': 'Made with ❤️ using HTML, CSS, and JavaScript.',
        // Nuove frasi per il typewriter del sottotitolo
        'typewriter.phrases': [
            "Wannabe Full Stack Developer",
            "Aviation Enjoyer", 
            "What should I write here?",
            "Passionate Student",
            "Always Ready to Learn",
            "Coffee & Code 24/7",
            "Debug Master in Training"
        ]
    },
    es: {
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.projects': 'Proyectos',
        'nav.contact': 'Contacto',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.getInTouch': 'Contactar',
        'about.title': 'Sobre Mí',
        'about.description': '¡Hola! Soy un estudiante de informática de secundaria con una gran pasión por el desarrollo de software. Me gusta explorar nuevas tecnologías y crear soluciones innovadoras que puedan marcar la diferencia.',
        'about.certification': 'Certificación de Inglés',
        'about.viewCert': 'Ver Certificado →',
        'projects.title': 'Mis Proyectos',
        'projects.convertami.description': 'Una herramienta innovadora diseñada para simplificar los procesos de conversión, ofreciendo soluciones eficientes y rápidas para transformar datos y formatos.',
        'projects.digitalreports.description': 'Una aplicación de escritorio diseñada para ayudar al cuerpo de Policía Local a realizar un seguimiento digital de los informes. Gestiona turnos de trabajo, actividades, vehículos e infracciones.',
        'projects.viewCode': 'Ver Código →',
        'contact.title': 'Conectemos',
        'contact.description': '¿Interesado en colaborar o simplemente charlar? ¡Contáctame!',
        'footer.license': 'Licencia CC0 1.0 Universal.',
        'footer.madeWith': 'Hecho con ❤️ usando HTML, CSS y JavaScript.',
        // Nuove frasi per il typewriter del sottotitolo
        'typewriter.phrases': [
            "Aspirante a Full Stack Developer",
            "Amante de la Aviación",
            "¿Qué puedo escribir aquí?",
            "Estudiante Apasionado",
            "Siempre Listo para Aprender",
            "Café y Código 24/7",
            "Maestro del Debug en Entrenamiento"
        ]
    }
};

let subtitleTypewriterInterval;

// Typewriter effect for subtitle
function initSubtitleTypewriter() {
    const subtitleEl = document.getElementById("subtitleTypewriter");
    if (!subtitleEl) return;

    // Cancella l'intervallo precedente se esiste
    if (subtitleTypewriterInterval) {
        clearTimeout(subtitleTypewriterInterval);
    }

    const currentLang = localStorage.getItem('language') || 'it';
    
    const phrases = {
        it: [
            "Wannabe Full Stack Developer",
            "Aviation Enjoyer",
            "Cosa posso scrivere qui?",
            "Studente Appassionato",
            "Sempre Pronto a Imparare",
            "Caffè e Codice 24/7",
            "Debug Master in Training"
        ],
        en: [
            "Wannabe Full Stack Developer",
            "Aviation Enjoyer", 
            "What should I write here?",
            "Passionate Student",
            "Always Ready to Learn",
            "Coffee & Code 24/7",
            "Debug Master in Training"
        ],
        es: [
            "Aspirante a Full Stack Developer",
            "Amante de la Aviación",
            "¿Qué puedo escribir aquí?",
            "Estudiante Apasionado",
            "Siempre Listo para Aprender",
            "Café y Código 24/7",
            "Maestro del Debug en Entrenamiento"
        ]
    };

    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[currentLang][currentPhraseIndex];
        
        if (isDeleting) {
            // Cancellazione
            subtitleEl.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            // Scrittura
            subtitleEl.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        let typeSpeed = 100;

        if (isDeleting) {
            typeSpeed /= 2; // Cancella più velocemente
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            // Finito di scrivere, pausa e poi inizia a cancellare
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            // Finito di cancellare, passa alla frase successiva
            isDeleting = false;
            currentPhraseIndex++;
            if (currentPhraseIndex >= phrases[currentLang].length) {
                currentPhraseIndex = 0;
            }
            typeSpeed = 500;
        }

        subtitleTypewriterInterval = setTimeout(typeEffect, typeSpeed);
    }

    // Inizia l'effetto
    subtitleEl.textContent = '';
    currentCharIndex = 0;
    isDeleting = false;
    typeEffect();
}
// Age calculation
function calculateAge() {
    const birthDate = new Date(2007, 5, 8); // June 8, 2007 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Update age display
function updateAgeDisplay(lang) {
    const age = calculateAge();
    const ageElement = document.getElementById('ageDisplay');
    const currentLang = lang || localStorage.getItem('language') || 'it';

    const ageTexts = {
        it: `${age} anni • Studente di Informatica`,
        en: `${age} years old • Computer Science Student`,
        es: `${age} años • Estudiante de Informática`
    };

    ageElement.textContent = ageTexts[currentLang];
}

// Theme functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;

    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
}

function updateThemeToggle(theme) {
    const toggle = document.getElementById('themeToggle');
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

// Language functionality
// Modifica la funzione updateLanguage esistente
function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
    updateAgeDisplay(lang);
    
    // Riavvia il typewriter del sottotitolo con la nuova lingua
    initSubtitleTypewriter();
}

function initializeLanguage() {
    let savedLang = localStorage.getItem('language');
    if (!savedLang) {
        const browserLang = navigator.language.slice(0, 2);
        savedLang = ['it', 'en', 'es'].includes(browserLang) ? browserLang : 'it';
    }
    document.getElementById('langSelector').value = savedLang;
    updateLanguage(savedLang);
}

// Smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('header');
    const scrolled = window.scrollY > 100;

    if (scrolled) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.1)';
        header.style.backdropFilter = 'blur(20px)';
    }
}

// Skill items hover effect
function initializeSkillHovers() {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeLanguage();
    updateAgeDisplay();
    createParticles();
    initializeSkillHovers();

    // Event listeners
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    document.getElementById('langSelector').addEventListener('change', function () {
        updateLanguage(this.value);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleHeaderScroll();
    });

    // System theme change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeToggle(newTheme);
        }
    });

    // Initial scroll animation check
    handleScrollAnimations();

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    });

    // Typewriter effect per il nome (esistente)
    const text = "Riccardo Murachelli";
    const el = document.getElementById("typewriter");
    let i = 0;

    function type() {
        if (i <= text.length) {
            el.textContent = text.slice(0, i);
            i++;
            setTimeout(type, 120);
        }
    }

    if (el) {
        type();
    }

    // Inizializza il typewriter del sottotitolo DOPO tutto il resto
    setTimeout(() => {
        initSubtitleTypewriter();
    }, 100);
});