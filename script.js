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
        if (document.getElementById('modo1')) {
            document.getElementById('modo1').textContent = translations[currentLanguage].modo1;
        }
        if (document.getElementById('modo2')) {
            document.getElementById('modo2').textContent = translations[currentLanguage].modo2;
        }
        if (document.getElementById('modo3')) {
            document.getElementById('modo3').textContent = translations[currentLanguage].modo3;
        }
        if (document.getElementById('modo4')) {
            document.getElementById('modo4').textContent = translations[currentLanguage].modo4;
        }
        if (document.getElementById('movimiento_title')) {
            document.getElementById('movimiento_title').textContent = translations[currentLanguage].movimiento_title;
        }
        if (document.getElementById('turbo_texto')) {
            document.getElementById('turbo_texto').textContent = translations[currentLanguage].turbo_texto;
        }
        if (document.getElementById('quienes_texto')) {
            document.getElementById('quienes_texto').textContent = translations[currentLanguage].quienes_texto;
        }
        if (document.getElementById('code_texto1')) {
            document.getElementById('code_texto1').textContent = translations[currentLanguage].code_texto1;
        }
        if (document.getElementById('code_texto2')) {
            document.getElementById('code_texto2').textContent = translations[currentLanguage].code_texto2;
        }

        if (document.getElementById('rotacion_title1')) {
            document.getElementById('rotacion_title1').textContent = translations[currentLanguage].rotacion_title1;
        }
        if (document.getElementById('rotacion_title2')) {
            document.getElementById('rotacion_title2').textContent = translations[currentLanguage].rotacion_title2;  
        }

        if (document.getElementById('rotacion_texto1')) {
            document.getElementById('rotacion_texto1').textContent = translations[currentLanguage].rotacion_texto1;  
        }
        if (document.getElementById('rotacion_texto2')) {
            document.getElementById('rotacion_texto2').textContent = translations[currentLanguage].rotacion_texto2;  
        }

        if (document.getElementById('turn_left')) {
            document.getElementById('turn_left').textContent = translations[currentLanguage].turn_left;  
        }
        if (document.getElementById('turn_right')) {
            document.getElementById('turn_right').textContent = translations[currentLanguage].turn_right;
        }
        if (document.getElementById('turn_left2')) {
            document.getElementById('turn_left2').textContent = translations[currentLanguage].turn_left2;  
        }
        if (document.getElementById('turn_right2')) {
            document.getElementById('turn_right2').textContent = translations[currentLanguage].turn_right2;
        }
        if (document.getElementById('mame')) {
            document.getElementById('mame').textContent = translations[currentLanguage].mame;
        }
        if (document.getElementById('dreamcast')) {
            document.getElementById('dreamcast').textContent = translations[currentLanguage].dreamcast;  
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