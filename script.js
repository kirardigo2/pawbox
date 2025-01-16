        let currentLanguage = localStorage.getItem('language') || 'es';
        let translations = {};

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        translations = await response.json();
        loadContent();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function loadContent() {
    if (translations[currentLanguage]) {
        document.getElementById('inicio').textContent = translations[currentLanguage].inicio;
        document.getElementById('movimiento').textContent = translations[currentLanguage].movimiento;
        document.getElementById('rotacion').textContent = translations[currentLanguage].rotacion;
        document.getElementById('interfaz').textContent = translations[currentLanguage].interfaz;
        document.getElementById('codigo').textContent = translations[currentLanguage].codigo;
        document.getElementById('quienes').textContent = translations[currentLanguage].quienes;
        
        if (document.getElementById('interfaz_title')) {
            document.getElementById('interfaz_title').textContent = translations[currentLanguage].interfaz_title;
        }
        if (document.getElementById('interfaz_texto')) {
            document.getElementById('interfaz_texto').textContent = translations[currentLanguage].interfaz_texto;
        }
        if (document.getElementById('layout_title')) {
            document.getElementById('layout_title').textContent = translations[currentLanguage].layout_title;
        }
        if (document.getElementById('layout_texto')) {
            document.getElementById('layout_texto').textContent = translations[currentLanguage].layout_texto;
        }

        document.querySelector('.language-btn').textContent = currentLanguage === 'es' ? 'English' : 'Español';
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    loadContent();
}


// Load translations on page load
loadTranslations();