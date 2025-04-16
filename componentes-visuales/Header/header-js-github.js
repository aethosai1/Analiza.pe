/**
 * Header Component - Analiza.pe
 * Funcionalidad JavaScript para el header responsive
 * Ubicación: componentes-visuales/header/header.js
 */

/**
 * Inicializa las funcionalidades del header
 * Esta función debe ser llamada después de cargar el HTML del header
 */
function initializeHeader() {
    // Referencias a elementos del DOM
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    const header = document.querySelector('#header-component');
    
    if (!menuToggle || !mobileMenuContainer || !header) {
        console.error('No se encontraron los elementos necesarios para el header');
        return;
    }
    
    // Crear el botón de cierre "X" para el menú móvil
    const closeButton = document.createElement('div');
    closeButton.id = 'menuClose';
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.classList.add('menu-close');
    
    // Añadir el botón de cierre al header
    header.querySelector('.container').appendChild(closeButton);
    
    // Ocultar inicialmente el botón de cierre
    closeButton.style.display = 'none';
    
    // Función para abrir el menú móvil
    function openMobileMenu() {
        mobileMenuContainer.classList.add('active');
        menuToggle.style.display = 'none';
        closeButton.style.display = 'flex';
        document.body.classList.add('menu-open'); // Para evitar el scroll
    }
    
    // Función para cerrar el menú móvil
    function closeMobileMenu() {
        mobileMenuContainer.classList.remove('active');
        menuToggle.style.display = 'flex';
        closeButton.style.display = 'none';
        document.body.classList.remove('menu-open');
    }
    
    // Listeners de eventos
    menuToggle.addEventListener('click', openMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);
    
    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
    
    // Cerrar el menú al hacer clic en el botón CTA
    const navCta = document.getElementById('navCta');
    if (navCta) {
        const ctaButton = navCta.querySelector('a');
        if (ctaButton) {
            ctaButton.addEventListener('click', closeMobileMenu);
        }
    }
    
    // Ajustar el menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            closeMobileMenu();
        }
    });
    
    // Detectar página actual y destacar enlace correspondiente
    highlightCurrentPage();
    
    // Implementar desplazamiento suave para enlaces con anclas
    implementSmoothScroll();
}

/**
 * Destaca el enlace correspondiente a la página actual
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Si es la página de inicio
        if (currentPath === '/' || currentPath === '/index.html') {
            if (linkPath === 'index.html' || linkPath === '/') {
                link.classList.add('active');
            }
        } 
        // Para otras páginas, verificar si el path contiene el nombre del enlace
        else if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
            link.classList.add('active');
        }
        // Para links con anclas internas como index.html#soluciones
        else if (linkPath.includes('#') && currentPath.includes(linkPath.split('#')[0])) {
            // No marcar como activo si es un ancla en otra página
            if (currentPath === '/' || currentPath === '/index.html' || currentPath.includes('index.html')) {
                link.classList.add('active-section');
            }
        }
    });
}

/**
 * Implementa desplazamiento suave para enlaces con anclas
 */
function implementSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('#header-component').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Función para cargar el header de forma dinámica
 * Ejemplo de uso:
 * <div id="header-container"></div>
 * <script>loadHeader('componentes-visuales/header/header.html');</script>
 */
function loadHeader(headerPath) {
    const headerContainer = document.getElementById('header-container');
    
    if (!headerContainer) {
        console.error('No se encontró el contenedor del header');
        return;
    }
    
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el header');
            }
            return response.text();
        })
        .then(data => {
            headerContainer.innerHTML = data;
            initializeHeader();
        })
        .catch(error => {
            console.error('Error al cargar el header:', error);
            
            // Implementar un header de fallback
            headerContainer.innerHTML = `
                <header id="header-component">
                    <div class="container">
                        <div class="navbar">
                            <div class="nav-header">
                                <a href="index.html" class="logo">
                                    Analiza<span>.pe</span>
                                </a>
                                <div class="menu-toggle" id="menuToggle">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            `;
            
            initializeHeader();
        });
}

// Si el DOM ya está cargado, verificar si hay un contenedor de header para cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('header-container') && typeof loadHeaderPath !== 'undefined') {
            loadHeader(loadHeaderPath);
        }
    });
} else {
    if (document.getElementById('header-container') && typeof loadHeaderPath !== 'undefined') {
        loadHeader(loadHeaderPath);
    }
}