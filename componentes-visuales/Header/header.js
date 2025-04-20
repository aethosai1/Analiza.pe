// Contenido de: componentes-visuales/Header/header.js

function inicializarMenuHeader() {
    console.log("Inicializando lógica del menú header...");

    // MODIFICADO: Buscar el header DENTRO del placeholder
    const header = document.querySelector('#header-placeholder header');

    if (!header) {
        console.error("CRÍTICO: Elemento <header> no encontrado dentro de #header-placeholder después de la carga dinámica.");
        return; // Salir si no se encuentra el header
    }

    console.log("Elemento <header> encontrado para inicialización:", header);

    // --- INICIO DEL CÓDIGO ORIGINAL DE header.js ---
    // (Todo el código que tenías antes, desde la definición de menuToggle hasta el final,
    // EXCEPTO la línea original "const header = document.querySelector('header');"
    // y el console.log inicial que movimos arriba)

    const menuToggle = header.querySelector('#menuToggle');
    const mobileMenuContainer = header.querySelector('#mobileMenuContainer');
    let closeButton = header.querySelector('#menuClose');

    // --- Verificar elementos esenciales ---
    if (!menuToggle) console.error("CRITICAL: #menuToggle not found inside loaded header!");
    if (!mobileMenuContainer) console.warn("Warning: #mobileMenuContainer not found inside loaded header.");
    if (!closeButton) console.log("Info: #menuClose not found in loaded header HTML, will attempt to create.");

    // --- Solo proceder si tenemos lo mínimo (menuToggle y container) ---
    if (menuToggle && mobileMenuContainer) {

        // --- Crear botón de cierre si no existe ---
        if (!closeButton) {
            const navHeader = header.querySelector('.nav-header');
            if (navHeader) {
                closeButton = document.createElement('div');
                closeButton.id = 'menuClose';
                closeButton.innerHTML = '<i class="fas fa-times"></i>';
                closeButton.classList.add('menu-close'); // Clase CSS para el botón
                closeButton.style.display = 'none';
                // Aplicar estilos CSS via JS si es necesario o confiar en header.css
                 closeButton.style.position = 'absolute';
                 closeButton.style.top = '50%';
                 closeButton.style.right = '15px'; // Asegúrate que coincida con tu CSS
                 closeButton.style.transform = 'translateY(-50%)';
                 closeButton.style.fontSize = '24px';
                 closeButton.style.color = 'var(--text-dark)'; // Usa tu variable CSS
                 closeButton.style.cursor = 'pointer';
                 closeButton.style.padding = '5px';
                 closeButton.style.zIndex = '1005';

                navHeader.appendChild(closeButton);
                console.log("Botón de cierre creado y añadido dinámicamente.");
            } else {
                console.warn(".nav-header not found inside loaded header, cannot create close button.");
            }
        } else {
             // Si ya existía (quizás en el HTML del componente), asegurar que esté oculto inicialmente
             closeButton.style.display = 'none';
        }


        // --- Funciones Open/Close ---
        function openMobileMenu() {
            console.log("Abriendo menú móvil...");
            mobileMenuContainer.classList.add('active');
            menuToggle.style.display = 'none';
            if (closeButton) closeButton.style.display = 'flex';
            document.body.classList.add('menu-open');
        }

        function closeMobileMenu() {
             console.log("Cerrando menú móvil...");
            mobileMenuContainer.classList.remove('active');
             // Solo mostrar toggle si estamos en vista móvil (check display o media query match)
             if (window.innerWidth < 1024) { // O usa matchMedia si prefieres
                menuToggle.style.display = 'flex';
            } else {
                 menuToggle.style.display = 'none'; // Asegurar que esté oculto en desktop
             }
            if (closeButton) closeButton.style.display = 'none';
            document.body.classList.remove('menu-open');
        }

        // --- Listeners ---
        if (menuToggle) {
             menuToggle.addEventListener('click', openMobileMenu);
        }

        if (closeButton) {
             closeButton.addEventListener('click', closeMobileMenu);
        } else {
            console.warn("No se pudo añadir listener al botón de cierre porque no existe.");
        }

        // Cerrar al hacer clic en enlaces/CTA dentro del menú
        const linksAndCtas = mobileMenuContainer.querySelectorAll('#navLinks a, #navCta a');
        linksAndCtas.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuContainer.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });

        // --- Listener de Resize ---
        window.addEventListener('resize', function() {
            const isDesktop = window.innerWidth >= 1024;
            if (isDesktop && mobileMenuContainer.classList.contains('active')) {
                closeMobileMenu(); // Cerrar si se redimensiona a desktop con el menú abierto
            }
            // Actualizar visibilidad de iconos en resize
            if(isDesktop) {
                menuToggle.style.display = 'none';
                if (closeButton) closeButton.style.display = 'none';
                 document.body.classList.remove('menu-open');
            } else {
                 // Si volvemos a móvil: mostrar hamburguesa si menú cerrado, o X si menú abierto
                 if (mobileMenuContainer.classList.contains('active')) {
                      menuToggle.style.display = 'none';
                      if (closeButton) closeButton.style.display = 'flex';
                 } else {
                      menuToggle.style.display = 'flex';
                      if (closeButton) closeButton.style.display = 'none';
                 }
            }
        });

        // --- Estado inicial (basado en el ancho actual) ---
        if (window.innerWidth < 1024) {
            menuToggle.style.display = 'flex';
            if (closeButton) closeButton.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            if (closeButton) closeButton.style.display = 'none';
        }
        console.log("Estado inicial del menú header configurado.");

    } else { // Fin if (menuToggle && mobileMenuContainer)
        console.error("No se pudo configurar el menú header porque faltan #menuToggle o #mobileMenuContainer en el HTML cargado.");
    }

    console.log("Inicialización del menú header completada.");

} // --- FIN DE LA FUNCIÓN inicializarMenuHeader ---

// IMPORTANTE: No llames a inicializarMenuHeader() aquí fuera.
// Se llamará desde template.html después de cargar el componente.
