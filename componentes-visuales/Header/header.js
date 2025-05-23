// Definimos la función inicializarMenuHeader que será llamada desde template.html
function inicializarMenuHeader() {
    console.log("Inicializando menú header...");
    
    // Añadir clase para desactivar transiciones inicialmente
    document.body.classList.add('no-transition');

    const header = document.querySelector('header');

    if (!header) {
        console.error("CRITICAL: Header element not found when initializing menu!");
        return;
    }

    // Buscar elementos esenciales dentro del header
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    let closeButton = document.getElementById('menuClose');

    // Verificar elementos esenciales
    if (!menuToggle) {
        console.error("CRITICAL: #menuToggle not found!");
        return;
    }

    if (!mobileMenuContainer) {
        console.error("CRITICAL: #mobileMenuContainer not found!");
        return;
    }

    // Crear botón de cierre si no existe
    if (!closeButton) {
        const navHeader = header.querySelector('.nav-header');
        if (navHeader) {
            closeButton = document.createElement('div');
            closeButton.id = 'menuClose';
            closeButton.innerHTML = '<i class="fas fa-times"></i>';
            closeButton.style.display = 'none';
            navHeader.appendChild(closeButton);
            console.log("Close button created and appended.");
        } else {
            console.warn(".nav-header not found, cannot create close button.");
        }
    } else {
        closeButton.style.display = 'none'; // Asegurar que esté oculto si ya existía
    }

    // Funciones para abrir y cerrar el menú móvil
    function openMobileMenu() {
        console.log("Opening mobile menu");
        mobileMenuContainer.classList.add('active');
        menuToggle.style.display = 'none';
        if (closeButton) closeButton.style.display = 'flex';
        document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
        console.log("Closing mobile menu");
        mobileMenuContainer.classList.remove('active');
        
        // Solo mostrar toggle si estamos en vista móvil
        if (window.innerWidth < 1024) {
            menuToggle.style.display = 'flex';
        }
        
        if (closeButton) closeButton.style.display = 'none';
        document.body.classList.remove('menu-open');
    }

    // Eventos para abrir/cerrar menú
    menuToggle.addEventListener('click', openMobileMenu);

    if (closeButton) {
        closeButton.addEventListener('click', closeMobileMenu);
    }

    // Cerrar al hacer clic en enlaces o botones dentro del menú
    const navLinks = document.getElementById('navLinks');
    const navCta = document.getElementById('navCta');
    
    if (navLinks) {
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuContainer.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });
        console.log(`Added close listeners to ${links.length} navigation links.`);
    }
    
    if (navCta) {
        const ctaLinks = navCta.querySelectorAll('a');
        ctaLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuContainer.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });
        console.log(`Added close listeners to ${ctaLinks.length} CTA links.`);
    }

    // Ajustar en cambios de tamaño de pantalla
    window.addEventListener('resize', function() {
        const isDesktop = window.innerWidth >= 1024;
        
        if (isDesktop) {
            // En escritorio
            menuToggle.style.display = 'none';
            if (closeButton) closeButton.style.display = 'none';
            document.body.classList.remove('menu-open');
            
            // Si el menú estaba abierto, lo cerramos sin animación
            if (mobileMenuContainer.classList.contains('active')) {
                mobileMenuContainer.classList.remove('active');
            }
        } else {
            // En móvil y el menú no está activo, mostramos hamburguesa
            if (!mobileMenuContainer.classList.contains('active')) {
                menuToggle.style.display = 'flex';
                if (closeButton) closeButton.style.display = 'none';
            }
        }
    });

    // Establecer estado inicial
    if (window.innerWidth < 1024) {
        menuToggle.style.display = 'flex';
        if (closeButton) closeButton.style.display = 'none';
    } else {
        menuToggle.style.display = 'none';
        if (closeButton) closeButton.style.display = 'none';
    }

    // Reactivar transiciones después de la configuración inicial
    setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 100);

    console.log("Header menu initialization complete.");
}

// También mantener la inicialización automática como respaldo
// en caso de que alguna página no use el template pattern
document.addEventListener('DOMContentLoaded', function() {
    // Verificamos si estamos en template.html (que llama a inicializarMenuHeader explícitamente)
    // o en una página normal donde necesitamos inicializar automáticamente
    if (!document.getElementById('header-placeholder')) {
        console.log("No header-placeholder found. Initializing header directly.");
        inicializarMenuHeader();
    } else {
        console.log("Found header-placeholder. Header will be initialized by template.html");
    }
});
