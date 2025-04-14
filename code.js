// admin/admin.js
document.addEventListener('DOMContentLoaded', function() {
    // Navegación en el menú lateral
    const menuItems = document.querySelectorAll('.menu li a');
    const contentAreas = document.querySelectorAll('.content-area');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el ID del contenido a mostrar
            const targetId = this.getAttribute('href').substring(1) + '-content';
            
            // Actualizar clases activas en el menú
            menuItems.forEach(menuItem => {
                menuItem.parentElement.classList.remove('active');
            });
            this.parentElement.classList.add('active');
            
            // Mostrar el contenido correspondiente
            contentAreas.forEach(area => {
                area.classList.add('hidden');
                if (area.id === targetId) {
                    area.classList.remove('hidden');
                }
            });
        });
    });

    // Botón para crear nueva entrada
    const newPostBtn = document.getElementById('new-post-btn');
    if (newPostBtn) {
        newPostBtn.addEventListener('click', function() {
            openEditor();
        });
    }
    
    // Simulación de API de GitHub para la gestión de contenido
    function openEditor(postId = null) {
        // Aquí implementarías la lógica para abrir el editor
        // En un entorno real, esto abriría una ventana modal o redirigiría a una página de edición
        
        // Por simplicidad, simulamos una alerta
        if (postId) {
            alert('Editando entrada ID: ' + postId);
        } else {
            alert('Creando nueva entrada...');
            
            // Aquí podrías implementar la integración con la API de GitHub
            // Para crear un nuevo archivo Markdown en tu repositorio
            
            /*
            Ejemplo conceptual (no funcionará directamente):
            
            const token = localStorage.getItem('github_token');
            const repo = 'username/repo';
            const path = '_posts/' + new Date().toISOString().split('T')[0] + '-nueva-entrada.md';
            const content = '---\ntitle: Nueva Entrada\ndate: ' + new Date().toISOString() + '\n---\n\nContenido de la entrada...';
            
            // Codificar el contenido en base64
            const encodedContent = btoa(content);
            
            fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: 'Crear nueva entrada',
                    content: encodedContent
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Entrada creada:', data);
                // Actualizar la interfaz
            })
            .catch(error => console.error('Error al crear entrada:', error));
            */
        }
    }
    
    // Simulación de carga de datos desde GitHub
    function loadPosts() {
        // Aquí implementarías la lógica para cargar las entradas desde GitHub
        // En un entorno real, esto haría una solicitud a la API de GitHub
        
        /*
        Ejemplo conceptual:
        
        const token = localStorage.getItem('github_token');
        const repo = 'username/repo';
        const path = '_posts';
        
        fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => response.json())
        .then(files => {
            // Procesar archivos y actualizar la interfaz
            const postsTable = document.querySelector('#posts-content tbody');
            postsTable.innerHTML = '';
            
            files.forEach(file => {
                // Para cada archivo, obtener su contenido
                fetch(file.download_url)
                .then(response => response.text())
                .then(content => {
                    // Procesar frontmatter para extraer metadatos
                    const frontmatter = content.split('---')[1];
                    const metadata = parseFrontmatter(frontmatter);
                    
                    // Crear fila en la tabla
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td><input type="checkbox"></td>
                        <td>${metadata.title || file.name}</td>
                        <td>${metadata.author || 'Desconocido'}</td>
                        <td>${metadata.categories || 'Sin categoría'}</td>
                        <td>${metadata.tags || 'Sin etiquetas'}</td>
                        <td>${metadata.date || 'Sin fecha'}</td>
                    `;
                    postsTable.appendChild(row);
                });
            });
        })
        .catch(error => console.error('Error al cargar entradas:', error));
        */
    }
    
    // Función auxiliar para parsear frontmatter YAML
    function parseFrontmatter(frontmatter) {
        const metadata = {};
        const lines = frontmatter.trim().split('\n');
        
        lines.forEach(line => {
            const parts = line.split(':');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join(':').trim();
                metadata[key] = value;
            }
        });
        
        return metadata;
    }
    
    // Simulación inicial de carga de datos
    // loadPosts();
});
