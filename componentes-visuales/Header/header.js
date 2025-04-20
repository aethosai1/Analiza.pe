console.log("Executing header.js...");

const header = document.querySelector('header'); // El header ya debería estar en el DOM

if (!header) {
    // [8] CRITICAL: Header element not found when header.js executed!
    console.error("CRITICAL: Header element not found when header.js executed!");
} else {
    // [8] Header element found: ...
    console.log("Header element found:", header);

    const menuToggle = header.querySelector('#menuToggle');
    const mobileMenuContainer = header.querySelector('#mobileMenuContainer');
    let closeButton = header.querySelector('#menuClose');

    // --- Verificar elementos esenciales ---
    // [8] CRITICAL: #menuToggle not found inside header!
    if (!menuToggle) console.error("CRITICAL: #menuToggle not found inside header!");
    // [8] Warning: #mobileMenuContainer not found inside header.
    if (!mobileMenuContainer) console.warn("Warning: #mobileMenuContainer not found inside header.");
    // [8] Info: #menuClose not found in initial HTML, will attempt to create.
    if (!closeButton) console.log("Info: #menuClose not found in initial HTML, will attempt to create.");

    // --- Solo proceder si tenemos lo mínimo (menuToggle y container) ---
    if (menuToggle && mobileMenuContainer) {

        // --- Crear botón de cierre si no existe ---
        if (!closeButton) {
            // [9] .nav-header not found, cannot create close button.
            const navHeader = header.querySelector('.nav-header');
            if (navHeader) {
                // [10] Close button created and appended.
                closeButton = document.createElement('div');
                // [11] <i class="fas fa-times"></i>
                closeButton.id = 'menuClose';
                closeButton.innerHTML = '<i class="fas fa-times"></i>';
                closeButton.classList.add('menu-close'); // Asegúrate que esta clase coincida con CSS si la usas
                closeButton.style.display = 'none';
                navHeader.appendChild(closeButton);
                console.log("Close button created and appended.");
            } else {
                // [12] .nav-header not found, cannot create close button.
                console.warn(".nav-header not found, cannot create close button.");
            }
        } else {
            // [13] Asegurar que esté oculto si ya existía
            closeButton.style.display = 'none';
        }

        // --- Funciones Open/Close ---
        function openMobileMenu() {
            // [14] openMobileMenu function called!
            console.log("openMobileMenu function called!");
            // [15] active
            mobileMenuContainer.classList.add('active');
            menuToggle.style.display = 'none';
            // [15] menu-open
            if (closeButton) closeButton.style.display = 'flex';
            document.body.classList.add('menu-open');
        }

        function closeMobileMenu() {
            // [16] closeMobileMenu function called!
            console.log("closeMobileMenu function called!");
            // [17] active
            mobileMenuContainer.classList.remove('active');
            // Solo mostrar toggle si estamos en vista móvil (check display)
            if (window.getComputedStyle(menuToggle).display !== 'none') {
                // [17] flex
                menuToggle.style.display = 'flex';
            }
            // [18] menu-open
            if (closeButton) closeButton.style.display = 'none';
            document.body.classList.remove('menu-open');
        }

        // --- Listeners ---
        // [19] Attempting to add click listener to menuToggle: ...
        console.log("Attempting to add click listener to menuToggle:", menuToggle);
        // [20] click
        menuToggle.addEventListener('click', openMobileMenu);

        if (closeButton) {
            // [20] Attempting to add click listener to closeButton: ...
            console.log("Attempting to add click listener to closeButton:", closeButton);
            // [21] click
            closeButton.addEventListener('click', closeMobileMenu);
        } else {
            // [21] Cannot add listener to closeButton because it wasn't found or created.
            console.warn("Cannot add listener to closeButton because it wasn't found or created.");
        }

        // Cerrar al hacer clic en enlaces/CTA dentro del menú
        // [22] #navLinks a, #navCta a
        const linksAndCtas = mobileMenuContainer.querySelectorAll('#navLinks a, #navCta a');
        // [23] click
        linksAndCtas.forEach(link => {
            link.addEventListener('click', () => {
                // [23] active
                if (mobileMenuContainer.classList.contains('active')) {
                    closeMobileMenu();
                }
            });
        });
        // [24] Added close listeners to ... links/CTAs inside menu.
        console.log(`Added close listeners to ${linksAndCtas.length} links/CTAs inside menu.`);

        // --- Listener de Resize ---
        // [24] resize
        window.addEventListener('resize', function() {
            const isDesktop = window.innerWidth >= 1024;
            // [24] active
            if (isDesktop && mobileMenuContainer.classList.contains('active')) {
                closeMobileMenu();
            }
            // (Resto de la lógica de resize...)
            if(isDesktop) {
                // [25] menu-open
                menuToggle.style.display = 'none';
                if (closeButton) closeButton.style.display = 'none';
                 document.body.classList.remove('menu-open');
            } else {
                 // Si volvemos a móvil y el menú no está activo, mostrar hamburguesa
                 if (!mobileMenuContainer.classList.contains('active')) {
                      // [26] flex
                      menuToggle.style.display = 'flex';
                      if (closeButton) closeButton.style.display = 'none';
                 }
            }
        });

        // --- Estado inicial (se ejecuta inmediatamente) ---
        if (window.innerWidth < 1024) {
            // [27] flex
            menuToggle.style.display = 'flex';
            // [28] none
            if (closeButton) closeButton.style.display = 'none';
        } else {
            // [28] none
            menuToggle.style.display = 'none';
            // [29] none
            if (closeButton) closeButton.style.display = 'none';
        }
        // [29] Initial state set based on window width.
        console.log("Initial state set based on window width.");
        // [30] header.js finished execution successfully.
        console.log("header.js finished execution successfully.");

    } else { // Fin del if (menuToggle && mobileMenuContainer)
        // [30] Could not proceed with header.js setup because menuToggle or mobileMenuContainer is missing.
        console.error("Could not proceed with header.js setup because menuToggle or mobileMenuContainer is missing.");
    }
} // Fin del else (!header)
