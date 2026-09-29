# propuesta-erp-tibisay

Mockup navegable del Sistema de Gestión Hotelera para Hoteles Tibisay (CRM, operaciones, gestión humana, indicadores, inventarios, integración y servicios). UI tipo AppShell estilo suite Sigo con la paleta Tibisay.

## Cómo usarlo

Abre `index.html` en el navegador. No necesita servidor ni build.

1. **Login** (`index.html`): cualquier usuario y contraseña. Elige la propiedad.
2. **Inicio** (`dashboard.html`): KPIs del día, alertas, accesos a los módulos.
3. **Módulos** (sidebar plegable): `tablero.html`, `crm.html`, `operaciones.html`, `rrhh.html`, `inventarios.html`, `integracion.html`, `servicios.html`.
4. El **selector de propiedad** de la barra superior filtra los datos (o "Todas las propiedades"). "Cerrar sesión" está en el menú del usuario.

## Estructura

- `css/app.css`: estilos. Colores, tipografía, radios y sombras en los tokens de `:root`.
- `js/data.js`: datos mock de las 7 propiedades (habitaciones, ocupación, ADR, F&B, PMS/ERP).
- `js/app.js`: sesión mock (localStorage), sidebar y barra superior, filtros por propiedad, pestañas y gráficos SVG.
- Cada pantalla es un HTML independiente con sus tablas; las filas con `data-sede="…"` se filtran según la propiedad elegida.
