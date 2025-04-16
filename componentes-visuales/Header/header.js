document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM DENTRO del header
    const header = document.querySelector('header'); // Asume que solo hay un header
    if (!header) return; // Salir si no se encuentra el header

    const menuToggle = header.querySelector('#menuToggle');
    const mobileMenuContainer = header.querySelector('#mobileMenuContainer');
    const navLinksContainer = header.querySelector('#navLinks');
    const navCtaContainer = header.querySelector('#navCta');

    // Verificar que todos los elementos necesarios existen
    if (!menuToggle || !mobileMenuContainer || !navLinksContainer || !navCtaContainer) {
        console.warn("No se encontraron todos los elementos necesarios para el menú móvil en el header.");
        return;
    }

    // Crear el botón de cierre "X" si no existe
    let closeButton = header.querySelector('#menuClose');
    if (!closeButton) {
        closeButton = document.createElement('div');
        closeButton.id = 'menuClose';
        closeButton.innerHTML = '<i class="fas fa-times"></i>'; // Asegúrate de tener FontAwesome cargado
        closeButton.classList.add('menu-close');
        closeButton.style.display = 'none'; // Oculto inicialmente

        // Insertar el botón de cierre dentro del nav-header para mejor posicionamiento
        const navHeader = header.querySelector('.nav-header');
        if (navHeader) {
            navHeader.appendChild(closeButton);
        } else {
            console.warn("No se encontró '.nav-header' para añadir el botón de cierre.");
            // Como fallback, añadirlo al contenedor principal del header
             header.querySelector('.container').appendChild(closeButton);
        }
    }


    // Función para abrir el menú móvil
    function openMobileMenu() {
        mobileMenuContainer.classList.add('active');
        menuToggle.style.display = 'none';
        closeButton.style.display = 'flex';
        document.body.classList.add('menu-open'); // Para evitar el scroll del body
    }

    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        mobileMenuContainer.classList.remove('active');
        // Solo mostrar el toggle si estamos en vista móvil (basado en CSS)
        if (window.getComputedStyle(menuToggle).display !== 'none') {
             menuToggle.style.display = 'flex';
        }
        closeButton.style.display = 'none';
        document.body.classList.remove('menu-open');
    }

    // Listeners de eventos
    menuToggle.addEventListener('click', openMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);

    // Cerrar el menú al hacer clic en un enlace dentro del contenedor de enlaces
    const menuLinks = navLinksContainer.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cerrar si el menú móvil está visible (activo)
            if (mobileMenuContainer.classList.contains('active')) {
                 closeMobileMenu();
            }
        });
    });

    // Cerrar el menú al hacer clic en el botón CTA dentro del contenedor CTA
    const ctaButton = navCtaContainer.querySelector('a');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
             // Solo cerrar si el menú móvil está visible (activo)
            if (mobileMenuContainer.classList.contains('active')) {
                 closeMobileMenu();
            }
        });
    }

    // Ajustar el estado del menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        // Si la ventana es más grande que el punto de quiebre de escritorio (1024px)
        // y el menú móvil está abierto, ciérralo.
        if (window.innerWidth >= 1024) {
            if (mobileMenuContainer.classList.contains('active')) {
                closeMobileMenu();
            }
            // Asegurarse de que el botón de cierre esté oculto y el toggle también (manejado por CSS)
            closeButton.style.display = 'none';
            menuToggle.style.display = 'none'; // CSS debería hacer esto, pero por si acaso.
             document.body.classList.remove('menu-open'); // Asegurar que el scroll esté habilitado
        } else {
             // Si estamos en móvil y el menú NO está activo, asegurarse que el toggle sea visible
             if (!mobileMenuContainer.classList.contains('active')) {
                 menuToggle.style.display = 'flex';
                 closeButton.style.display = 'none';
             }
        }
    });

     // Llamada inicial para establecer el estado correcto en carga de página
     if (window.innerWidth < 1024) {
         closeButton.style.display = 'none';
         menuToggle.style.display = 'flex';
     } else {
         menuToggle.style.display = 'none';
         closeButton.style.display = 'none';
     }

});
