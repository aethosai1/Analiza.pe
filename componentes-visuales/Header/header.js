document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); // Asume que solo hay un header
    if (!header) return;

    // Buscar elementos DENTRO del header cargado
    const menuToggle = header.querySelector('#menuToggle');
    const mobileMenuContainer = header.querySelector('#mobileMenuContainer');
    // Asumimos que el botón de cierre se crea aquí si no existe
    let closeButton = header.querySelector('#menuClose');

    // Verificar elementos esenciales para el menú
    if (!menuToggle || !mobileMenuContainer) {
        console.warn("No se encontraron menuToggle o mobileMenuContainer en el header.");
        return;
    }

    // Crear y añadir el botón de cierre si no existe en el HTML cargado
    if (!closeButton) {
        const navHeader = header.querySelector('.nav-header');
        if (navHeader) {
            closeButton = document.createElement('div');
            closeButton.id = 'menuClose';
            closeButton.innerHTML = '<i class="fas fa-times"></i>';
            closeButton.classList.add('menu-close'); // Asegúrate que esta clase existe en header.css
            closeButton.style.display = 'none'; // Oculto por defecto
            navHeader.appendChild(closeButton); // Añadirlo al .nav-header
        } else {
             console.warn("No se encontró .nav-header para añadir el botón de cierre.");
        }
    }
    // Si el botón ya existía en el HTML pero estaba oculto por defecto
    else if(closeButton) {
         closeButton.style.display = 'none';
    }


    function openMobileMenu() {
        mobileMenuContainer.classList.add('active');
        menuToggle.style.display = 'none'; // Ocultar hamburguesa
         if(closeButton) closeButton.style.display = 'flex'; // Mostrar 'X'
        document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
        mobileMenuContainer.classList.remove('active');
         // Solo mostrar toggle si estamos en vista móvil (checkeando su display CSS)
        if (window.getComputedStyle(menuToggle).display !== 'none') {
             menuToggle.style.display = 'flex'; // Mostrar hamburguesa
        }
         if(closeButton) closeButton.style.display = 'none'; // Ocultar 'X'
        document.body.classList.remove('menu-open');
    }

    menuToggle.addEventListener('click', openMobileMenu);
    // Solo añadir listener a closeButton si se encontró o creó
    if (closeButton) {
         closeButton.addEventListener('click', closeMobileMenu);
    }


    // Cerrar menú al hacer clic en enlaces y botón CTA DENTRO del contenedor del menú
    const linksAndCtas = mobileMenuContainer.querySelectorAll('#navLinks a, #navCta a');
    linksAndCtas.forEach(link => {
        link.addEventListener('click', () => {
             // Solo cerrar si el menú está visible (activo)
             if (mobileMenuContainer.classList.contains('active')) {
                 closeMobileMenu();
             }
        });
    });

    // Ajustar estado en resize
     window.addEventListener('resize', function() {
        const isDesktop = window.innerWidth >= 1024;
        // Si pasamos a escritorio y el menú estaba activo, lo cerramos
        if (isDesktop && mobileMenuContainer.classList.contains('active')) {
            closeMobileMenu();
        }
        // Asegurarse de que el icono correcto (o ninguno) se muestre en escritorio
         if(isDesktop) {
             menuToggle.style.display = 'none';
             if (closeButton) closeButton.style.display = 'none';
              document.body.classList.remove('menu-open'); // Asegurar scroll si pasamos a desktop
         } else {
             // Si volvemos a móvil y el menú no está activo, mostrar hamburguesa
             if (!mobileMenuContainer.classList.contains('active')) {
                  menuToggle.style.display = 'flex';
                  if (closeButton) closeButton.style.display = 'none';
             }
         }
    });

     // Estado inicial al cargar la página (para evitar FOUC)
     if (window.innerWidth < 1024) {
        menuToggle.style.display = 'flex';
         if (closeButton) closeButton.style.display = 'none';
     } else {
         menuToggle.style.display = 'none';
          if (closeButton) closeButton.style.display = 'none';
     }
});
