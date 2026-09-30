# propuesta-erp-tibisay

Mockup navegable del Sistema de Gestión Hotelera para Hoteles Tibisay (CRM, operaciones, gestión humana, indicadores, inventarios y panel de IT). UI tipo AppShell estilo suite Sigo con la paleta Tibisay.

## Cómo usarlo

Abre `index.html` en el navegador. No necesita servidor ni build.

1. **Login** (`index.html`): cualquier usuario y contraseña. Elige la propiedad.
2. **Inicio** (`dashboard.html`): una métrica protagonista, «Requiere tu acción» y acciones rápidas según la vista; lo demás en acordeones.
3. **Módulos** (sidebar plegable): `tablero.html`, `crm.html`, `operaciones.html`, `rrhh.html`, `inventarios.html`, `it.html` (con «Conectar servicios» para conexiones puntuales).
4. El **selector de propiedad** de la barra superior filtra los datos (o "Todas las propiedades"). "Cerrar sesión" está en el menú del usuario.
5. El **selector de vista** (Gerencia, Front Desk, A&B, RRHH, Almacén, IT) reordena el menú y el inicio: primero los módulos del rol, el resto plegado en «Más módulos».

## Principios de diseño (iteración 3)

- Cada pantalla responde una sola pregunta; lo secundario va en pestañas, acordeones o paneles de detalle.
- Un solo botón principal por pantalla y acciones clave a 3 clics o menos desde el menú (crear OC, marcación manual, cotizar evento, aprobar transferencia).
- Enlaces profundos: `pagina.html#pestaña` abre esa pestaña y `#accion` dispara el botón con `data-hash="accion"` (p. ej. `inventarios.html#nueva-oc`, `rrhh.html#marcar`, `crm.html#nueva-cotizacion`).

## Estructura

- `assets/logo-tibisay.png`: logo oficial (login y sidebar).
- `css/app.css`: estilos. Colores (paleta del logo: dorado `#c9a24b`, negro `#141414`, gris `#606060`, champagne `#c0b090`), tipografía, radios y sombras en los tokens de `:root`.
- `js/data.js`: datos mock de las 7 propiedades (habitaciones, ocupación, ADR, F&B, PMS/ERP).
- `js/app.js`: sesión mock (localStorage), sidebar por rol y barra superior, filtros por propiedad, pestañas, gráficos SVG y componentes compartidos (asistente por pasos, panel lateral, «ver más», tarjeta hero).
- `js/tour.js`: tour guiado de primer uso (lo usa el CRM; se repite con «Cómo usar este módulo»).
- Cada pantalla es un HTML independiente con sus tablas; las filas con `data-sede="…"` se filtran según la propiedad elegida.
