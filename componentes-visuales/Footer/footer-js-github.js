/**
 * Footer Component - Analiza.pe
 * Funcionalidad JavaScript para el footer
 * Ubicación: componentes-visuales/footer/footer.js
 */

/**
 * Inicializa las funcionalidades del footer
 * Esta función debe ser llamada después de cargar el HTML del footer
 */
function initializeFooter() {
    // Actualiza el año actual en el copyright
    updateCopyrightYear();
    
    // Inicializa funcionalidades adicionales del footer
    initializeFooterEvents();
}

/**
 * Actualiza el año en el copyright automáticamente
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Inicializa eventos y funcionalidades adicionales del footer
 */
function initializeFooterEvents() {
    // Añadir smooth scroll a los enlaces del footer
    const footerLinks = document.querySelectorAll('#footer-component a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Solo aplicar para enlaces con anclas internas
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Ajustar el desplazamiento para considerar el header fijo
                    const headerHeight = document.querySelector('#header-component')?.offsetHeight || 0;
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Gestionar animaciones del botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp-float');
    if (whatsappButton) {
        // Mostrar el botón solo después de un poco de scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                whatsappButton.classList.add('visible');
            } else {
                whatsappButton.classList.remove('visible');
            }
        });
        
        // Comprobar posición inicial
        if (window.scrollY > 300) {
            whatsappButton.classList.add('visible');
        }
    }
}

/**
 * Función para cargar el footer de forma dinámica
 * Ejemplo de uso:
 * <div id="footer-container"></div>
 * <script>loadFooter('componentes-visuales/footer/footer.html');</script>
 */
function loadFooter(footerPath) {
    const footerContainer = document.getElementById('footer-container');
    
    if (!footerContainer) {
        console.error('No se encontró el contenedor del footer');
        return;
    }
    
    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el footer');
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
            initializeFooter();
        })
        .catch(error => {
            console.error('Error al cargar el footer:', error);
            
            // Implementar un footer de fallback simple
            footerContainer.innerHTML = `
                <footer id="footer-component">
                    <div class="container">
                        <div class="footer-bottom">
                            <div>© ${new Date().getFullYear()} Analiza.pe - Todos los derechos reservados</div>
                        </div>
                    </div>
                </footer>
            `;
        });
}

// Si el DOM ya está cargado, verificar si hay un contenedor de footer para cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('footer-container') && typeof loadFooterPath !== 'undefined') {
            loadFooter(loadFooterPath);
        }
    });
} else {
    if (document.getElementById('footer-container') && typeof loadFooterPath !== 'undefined') {
        loadFooter(loadFooterPath);
    }
}