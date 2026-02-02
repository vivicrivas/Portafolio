# CV Interactivo - Viviana Canales Rivas

Este proyecto consiste en el desarrollo de un Currículum Vitae (CV) interactivo en formato web. Fue creado como parte de la **Evaluación Final del Módulo 2** de la carrera Full Stack Java en **KIBERNUM IT Academy**.

El objetivo es demostrar competencias en el desarrollo frontend, la maquetación responsiva y la manipulación del DOM mediante eventos.

---

##  Tecnologías Utilizadas
* **HTML5:** Estructura semántica del documento.
* **CSS3:** Estilos personalizados y variables CSS.
* **Bootstrap 5.3:** Framework para el diseño responsivo (Grid system, Navbar, Cards, Badges).
* **JavaScript & jQuery:** Lógica para la interactividad y manipulación del DOM.
* **Git & GitHub:** Control de versiones y alojamiento.

##  Funcionalidades e Interactividad
El proyecto cumple con los requerimientos de la rúbrica implementando las siguientes características:

1.  **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio mediante el sistema de grillas de Bootstrap.
2.  **Modo Oscuro/Claro:** Botón en la barra de navegación que permite alternar el tema visual del sitio utilizando jQuery para cambiar clases en el `body`.
3.  **Validación de Formulario:** Script que verifica que los campos del formulario de contacto no estén vacíos antes de enviar.
4.  **Efectos Visuales:** Animaciones "Hover" en las tarjetas de experiencia utilizando eventos de jQuery (`mouseenter`/`mouseleave`).
5.  **Navbar Colapsable:** Menú de navegación funcional en vista móvil.

## Estructura del Proyecto
```text
├── MICV
│   ├── css
│   │   └── styles.css      # Estilos personalizados y modo oscuro
│   ├── js
│   │    └── script.js      # Lógica jQuery (Eventos y validaciones)
│   └── imagenes
│       └── foto perfil.png 
├── index.html             # Estructura principal
└── README.md              # Documentación del proyecto