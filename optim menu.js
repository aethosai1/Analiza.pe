document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navCta = document.getElementById('navCta');
    const header = document.querySelector('header');
    
    // Crear el botón de cierre "X" para el menú móvil
    const closeButton = document.createElement('div');
    closeButton.id = 'menuClose';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.classList.add('menu-close');
    
    // Añadir el botón de cierre al header después del menú toggle
    menuToggle.parentNode.insertBefore(closeButton, menuToggle.nextSibling);
    
    // Ocultar inicialmente el botón de cierre
    closeButton.style.display = 'none';
    
    // Función para abrir el menú móvil
    function openMobileMenu() {
        navLinks.classList.add('active');
        navCta.classList.add('active');
        menuToggle.style.display = 'none';
        closeButton.style.display = 'flex';
        document.body.classList.add('menu-open'); // Para evitar el scroll
    }
    
    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        navCta.classList.remove('active');
        menuToggle.style.display = 'flex';
        closeButton.style.display = 'none';
        document.body.classList.remove('menu-open');
    }
    
    // Listeners de eventos
    menuToggle.addEventListener('click', openMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);
    
    // Cerrar el menú al hacer clic en un enlace
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar el menú al hacer clic en el botón CTA
    const ctaButton = navCta.querySelector('a');
    if (ctaButton) {
        ctaButton.addEventListener('click', closeMobileMenu);
    }
    
    // Ajustar el menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });
});
