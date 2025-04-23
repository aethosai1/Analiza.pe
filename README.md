# Analiza.pe - Soluciones de Inteligencia Financiera y de Mercado

![Logo Analiza.pe](https://wizuhcnxstukjnhsgsac.supabase.co/storage/v1/object/public/Aethos%20ai//logo.svg)

## 📊 Descripción

Este repositorio contiene el código fuente del sitio web para Analiza.pe, una plataforma especializada en soluciones de análisis e inteligencia de datos para empresas. El sitio ofrece una interfaz moderna y responsive que presenta los servicios de análisis financiero, inteligencia de mercado y optimización operativa.

## 🚀 Características

- **Diseño Responsive**: Adaptable a diferentes dispositivos (Mobile-First).
- **Interfaz Moderna**: Estética contemporánea con enfoque en la experiencia de usuario.
- **Navegación Optimizada**: Estructura intuitiva con menú hamburguesa para dispositivos móviles.
- **Secciones de Valor**: Presentación efectiva de soluciones, características y beneficios.
- **Personalización Visual**: Sistema de variables CSS para fácil adaptación de colores y estilos.
- **Integración con WhatsApp**: Botón flotante para contacto directo.

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con variables y Media Queries)
- JavaScript (vanilla)
- Font Awesome (para iconografía)
- Google Fonts (familia tipográfica Inter)

## 📂 Estructura del Proyecto

```
analiza.pe/
│
├── index.html                  # Página principal
├── servicios.html              # Páginas adicionales del sitio
├── nosotros.html
├── blog.html
├── contacto.html
├── CSS       Estilos
│    ├── global.css        # estilo global
│    │   ├── nosotros.css          # Estilos nosotros
│    │   ├── contacto.css           # Estilo contacto
└── componentes-visuales/       # Componentes reutilizables
    ├── Header/                 # Componente de cabecera
    │   ├── header.html         # Estructura HTML del header
    │   ├── header.css          # Estilos específicos del header
    │   ├── header.js           # Funcionalidad JavaScript del header
    │   └── README.md           # Documentación del componente
    │
    └── Footer/                 # Componente de pie de página
        ├── footer.html         # Estructura HTML del footer
        ├── footer.css          # Estilos específicos del footer
        ├── footer.js           # Funcionalidad JavaScript del footer
        └── README.md           # Documentación del componente

## 📱 Páginas del sitio:

1. **Home**: Es la principa
2. **Nosotro**: Quienes somo.
3. **Soluciones**: CRM, Analisis, etc.
4. **servicios**: prestaciones de servicios.
5. **Contacto**: contactar a la empresa.
6. **agendar**: Agendar una reunión con Martín.

## 🎨 Personalización

### Variables CSS Principales

```css
:root {
    --primary-blue: #2563eb;     /* Azul principal para elementos destacados */
    --dark-blue: #1d4ed8;        /* Azul oscuro para hover */
    --accent-red: #ef4444;       /* Rojo para acentos y elementos de atención */
    --text-dark: #111827;        /* Color de texto principal */
    --text-medium: #4b5563;      /* Color de texto secundario */
    --bg-light: #f8fafc;         /* Fondo claro */
    --white: #ffffff;            /* Blanco */
    --footer-dark: #111827;      /* Color oscuro para el footer */
    --footer-text: #9ca3af;      /* Color texto footer */
}
```

### Personalización del Login (GoHighLevel)

El proyecto incluye plantillas CSS para personalizar pantallas de login en GoHighLevel:

```css
:root {
    --loginBtnColor: #42984f;
    --loginBtnHover: #42984f;
    --bodyBgColor: #fff;
    --login-button-background-color: #fff;
    --login-button-background-hover-color: #fff;
    --login-button-text-color: #02b0ac;
}
```

### Personalización del Dashboard (GoHighLevel)

```css
:root {
    --header-background-color: #009be4;
    --icon-background-color: #0075ac;
    --icon-color: #ffffff;
}
```

## 📌 Funcionalidades JavaScript

### Menú Responsive

El sitio implementa un menú hamburguesa totalmente funcional para dispositivos móviles mediante JavaScript vanilla:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Control del menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenuContainer = document.getElementById('mobileMenuContainer');
    
    // Funcionalidad para abrir/cerrar menú y gestionar el estado
    // del documento cuando se activa el menú
});
```

### Integración elementos de CEO

Reemplaza el head en cada página del sitio con esto

<head>
    <!-- META BÁSICO (No modificar) -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Analiza.pe">
    
    <!-- META SEO ESPECÍFICO DE PÁGINA (Personalizar para cada página) -->
    <title><!-- EDITAR -->Analiza.pe - Soluciones de Inteligencia Financiera | Página Principal<!-- /EDITAR --></title>
    <meta name="description" content="<!-- EDITAR -->Transforma tus datos financieros en ventajas competitivas con dashboards personalizados, análisis predictivos e inteligencia artificial para empresas en Perú.<!-- /EDITAR -->">
    <meta name="keywords" content="<!-- EDITAR -->analítica de datos, inteligencia financiera, dashboards, análisis predictivo, big data, Perú<!-- /EDITAR -->">
    
    <!-- URL CANÓNICA (Actualizar para cada página) -->
    <link rel="canonical" href="<!-- EDITAR -->https://analiza.pe/<!-- /EDITAR -->">
    
    <!-- OPEN GRAPH - REDES SOCIALES (Personalizar para cada página) -->
    <meta property="og:title" content="<!-- EDITAR -->Analiza.pe - Soluciones de Inteligencia Financiera<!-- /EDITAR -->">
    <meta property="og:description" content="<!-- EDITAR -->Transforma tus datos financieros en ventajas competitivas reales con nuestras soluciones personalizadas.<!-- /EDITAR -->">
    <meta property="og:image" content="<!-- EDITAR -->https://wizuhcnxstukjnhsgsac.supabase.co/storage/v1/object/public/Aethos%20ai//logo.svg<!-- /EDITAR -->">
    <meta property="og:url" content="<!-- EDITAR -->https://analiza.pe/<!-- /EDITAR -->">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="es_PE">
    
    <!-- TWITTER CARDS (Personalizar para cada página) -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<!-- EDITAR -->Analiza.pe - Inteligencia Financiera<!-- /EDITAR -->">
    <meta name="twitter:description" content="<!-- EDITAR -->Soluciones de análisis de datos financieros para empresas en Perú.<!-- /EDITAR -->">
    <meta name="twitter:image" content="<!-- EDITAR -->https://wizuhcnxstukjnhsgsac.supabase.co/storage/v1/object/public/Aethos%20ai//logo.svg<!-- /EDITAR -->">
    
    <!-- CSS GLOBAL (No modificar) -->
    <link rel="stylesheet" href="/CSS/global.css">
    <link rel="stylesheet" href="/componentes-visuales/Header/header.css">
    <link rel="stylesheet" href="/componentes-visuales/Footer/footer.css">
    
    <!-- CSS ESPECÍFICO DE PÁGINA (Personalizar si es necesario) -->
    <link rel="stylesheet" href="<!-- EDITAR -->/CSS/index.css<!-- /EDITAR -->">
    
    <!-- FONTS (No modificar) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- ÍCONOS (No modificar) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- FAVICON (Agregar cuando estén disponibles - Descomenta cuando tengas los archivos) -->
    <!--
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    -->
    
    <!-- GOOGLE ANALYTICS (No modificar una vez configurado) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    </script>
    
    <!-- OPTIMIZACIÓN DE CARGA (No modificar) -->
    <style>
        body { opacity: 0; transition: opacity 0.3s ease-in-out; }
        body.loaded { opacity: 1; }
    </style>
    
    <!-- SCRIPTS COMUNES (No modificar) -->
    <script src="/componentes-visuales/Header/header.js" defer></script>
    
    <!-- SCHEMA.ORG DATOS ESTRUCTURADOS (Descomenta y personaliza cuando esté listo) -->
    <!--
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Analiza.pe",
      "description": "Soluciones de inteligencia para transformar datos corporativos en ventajas competitivas reales.",
      "url": "https://analiza.pe",
      "logo": "https://wizuhcnxstukjnhsgsac.supabase.co/storage/v1/object/public/Aethos%20ai//logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5115555555",
        "contactType": "customer service",
        "email": "info@analiza.pe"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Isidro",
        "addressRegion": "Lima",
        "addressCountry": "PE"
      }
    }
    </script>
    -->
</head>

## 🚀 Instalación y Uso

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/analiza-pe-website.git
```

2. Navega al directorio del proyecto:
```bash
cd analiza-pe-website
```

3. Abre `index.html` en tu navegador o utiliza un servidor local para probar el sitio.

## 📐 Adaptabilidad y Media Queries

El diseño implementa un enfoque Mobile-First con breakpoints en:

- 640px (Tablets pequeñas)
- 768px (Tablets)
- 1024px (Escritorios)
- 1280px (Pantallas grandes)

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## 📞 Contacto

Para consultas sobre este proyecto, puedes contactar a:
- Email: info@analiza.pe
- Teléfono: (51) 555-5555
- WhatsApp: +51 999 999 999

---

&copy; 2025 Analiza.pe - Todos los derechos reservados
