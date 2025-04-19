// QUITAR: document.addEventListener('DOMContentLoaded', function() {
console.log("Executing header.js...");

const header = document.querySelector('header'); // El header ya debería estar en el DOM

if (!header) {
    console.error("CRITICAL: Header element not found when header.js executed!");
} else {
    console.log("Header element found:", header);

    const menuToggle = header.querySelector('#menuToggle');
    const mobileMenuContainer = header.querySelector('#mobileMenuContainer');
    let closeButton = header.querySelector('#menuClose');

    // --- Verificar elementos esenciales ---
    if (!menuToggle) console.error("CRITICAL: #menuToggle not found inside header!");
    if (!mobileMenuContainer) console.warn("Warning: #mobileMenuContainer not found inside header.");
    if (!closeButton) console.log("Info: #menuClose not found in initial HTML, will attempt to create.");

    // --- Solo proceder si tenemos lo mínimo (menuToggle y container) ---
    if (menuToggle && mobileMenuContainer) {

        // --- Crear botón de cierre si no existe ---
        if (!closeButton) {
            const navHeader = header.querySelector('.nav-header');
            if (navHeader) {
                closeButton = document.createElement('div');
                closeButton.id = 'menuClose';
                closeButton.innerHTML = '<i class="fas fa-times"></i>';
                closeButton.classList.add('menu-close');
                closeButton.style.display = 'none';
                navHeader.appendChild(closeButton);
                console.log("Close button created and appended.");
            } else {
                console.warn(".nav-header not found, cannot create close button.");
            }
        } else {
            closeButton.style.display = 'none'; // Asegurar que esté oculto si ya existía
        }

        // --- Funciones Open/Close ---
        function openMobileMenu() {
            console.log("openMobileMenu function called!");
            mobileMenuContainer.classList.add('active');
            menuToggle.style.display = 'none';
            if (closeButton) closeButton.style.display = 'flex';
            document.body.classList.add('menu-open');
        }

        function closeMobileMenu() {
            console.log("closeMobileMenu function called!");
            mobileMenuContainer.classList.remove('active');
            // Solo mostrar toggle si estamos en vista móvil (check display)
            if (window.getComputedStyle(menuToggle).display !== 'none') {
                menuToggle.style.display = 'flex';
            }
            if (closeButton) closeButton.style.display = 'none';
            document.body.classList.remove('menu-open');
        }

        // --- Listeners ---
        console.log("Attempting to add click listener to menuToggle:", menuToggle);
        menuToggle.addEventListener('click', openMobileMenu);

        if (closeButton) {
            console.log("Attempting to add click listener to closeButton:", closeButton);
            closeButton.addEventListener('click', closeMobileMenu);
        } else {
            console.warn("Cannot add listener to closeButton because it wasn't found or created.");
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
        console.log(`Added close listeners to ${linksAndCtas.length} links/CTAs inside menu.`);

        // --- Listener de Resize ---
        window.addEventListener('resize', function() {
            const isDesktop = window.innerWidth >= 1024;
            if (isDesktop && mobileMenuContainer.classList.contains('active')) {
                closeMobileMenu();
            }
            // (Resto de la lógica de resize...)
            if(isDesktop) {
                menuToggle.style.display = 'none';
                if (closeButton) closeButton.style.display = 'none';
                 document.body.classList.remove('menu-open');
            } else {
                if (!mobileMenuContainer.classList.contains('active')) {
                     menuToggle.style.display = 'flex';
                     if (closeButton) closeButton.style.display = 'none';
                }
            }
        });

        // --- Estado inicial (se ejecuta inmediatamente) ---
        if (window.innerWidth < 1024) {
            menuToggle.style.display = 'flex';
            if (closeButton) closeButton.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            if (closeButton) closeButton.style.display = 'none';
        }
        console.log("Initial state set based on window width.");


        console.log("header.js finished execution successfully.");

    } else { // Fin del if (menuToggle && mobileMenuContainer)
        console.error("Could not proceed with header.js setup because menuToggle or mobileMenuContainer is missing.");
    }
} // Fin del else (!header)

// QUITAR: });
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
