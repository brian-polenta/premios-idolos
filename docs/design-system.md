# Sistema visual de Premios Ídolo

Fuente: frame `142:7` del archivo de Figma “Varios Programon”. Esta guía define fundamentos reutilizables; no prescribe la composición de las páginas.

## Tipografía

- **Rosevine FREE:** displays, H1 y H2.
- **Gambarino:** H3, títulos editoriales y botones.
- **Open Sans variable:** cuerpo, navegación, etiquetas y formularios.
- **Mea Culpa:** acentos expresivos breves; nunca para texto funcional.

Las cuatro familias se sirven localmente mediante `next/font/local`, evitando dependencias externas y cambios visuales por red.

## Color

Los tokens `brand-*` están definidos en `app/globals.css`: ink, blush, petal, cream, paper, charcoal, aqua, red, yellow y pink. Los componentes deben usar tokens semánticos o de marca, no valores hexadecimales aislados.

## Layout y espaciado

- `PageGutter`: margen horizontal fluido de 16 a 40 px.
- `Container`: anchos small, medium, large y full.
- `Section`: ritmos verticales small, medium y large.
- Escala observada: 4, 8, 12, 16, 20, 24, 32, 48, 72, 88 y 132 px.

## Recursos

- `/brand/logo-premios-idolo-light.svg`
- `/brand/wordmark-idolo-dark.svg`
- `/media/hero.mp4` — H.264, vertical, 576×1024, 20 s.

La ruta `/style-guide` permite revisar tipografía, color, marca y componentes sin convertir esa documentación en una página pública del sitio.
