document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de desplazamiento suave para los enlaces del menú de navegación
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Agregar evento de envío de formulario de contacto
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

// Función para desplazamiento suave al hacer clic en un enlace del menú de navegación
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Función para manejar el envío del formulario de contacto
function handleSubmit(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Aquí puedes agregar el código para enviar el formulario (por ejemplo, a través de AJAX)
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);

    // Limpiar los campos del formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';

    // Mostrar un mensaje de confirmación al usuario
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
}
