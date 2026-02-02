$(document).ready(function () {

    // --- INTERACTIVIDAD 1: Modo Oscuro/Claro [cite: 33] ---
    $('#btn-theme').click(function () {
        // Alternamos la clase en el body
        $('body').toggleClass('dark-mode');

        // Cambiamos el texto e icono del botón según el estado
        if ($('body').hasClass('dark-mode')) {
            $(this).html('<i class="bi bi-sun-fill"></i> Claro');
            $(this).removeClass('btn-outline-dark').addClass('btn-outline-light');
        } else {
            $(this).html('<i class="bi bi-moon-stars-fill"></i> Oscuro');
            $(this).removeClass('btn-outline-light').addClass('btn-outline-dark');
        }
    });

    // --- INTERACTIVIDAD 2: Validación de Formulario [cite: 35] ---
    $('#contactForm').submit(function (event) {
        event.preventDefault(); // Evita que la página se recargue

        // Capturamos valores
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var mensaje = $('#mensaje').val();

        // Validación simple: ningún campo vacío
        if (nombre === "" || email === "" || mensaje === "") {
            alert("⚠️ Por favor completa todos los campos antes de enviar.");
        } else {
            alert("✅ ¡Gracias " + nombre + "! Tu mensaje ha sido enviado correctamente.");
            // Reseteamos el formulario
            $('#contactForm')[0].reset();
        }
    });

    // --- INTERACTIVIDAD 3: Efecto Hover en Tarjetas [cite: 36] ---
    // Al pasar el mouse, añadimos una clase CSS para resaltar
    $('.interactive-card').hover(
        function () {
            $(this).addClass('card-highlight'); // Mouse entra
        },
        function () {
            $(this).removeClass('card-highlight'); // Mouse sale
        }
    );

});