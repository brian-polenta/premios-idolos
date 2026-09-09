# Client‑First adaptado a React y Tailwind

Este proyecto conserva el modelo mental de Client‑First de Finsweet sin copiar literalmente el sistema de clases de Webflow. El objetivo es mantener nombres claros y una estructura familiar, mientras React administra componentes y Tailwind administra estilos.

## Traducción de conceptos

| Client‑First en Webflow | En este proyecto |
| --- | --- |
| `page-wrapper` | `SiteShell` en el layout raíz |
| `main-wrapper` | El elemento semántico `<main>` |
| `section_[identifier]` | Componente `Section[Name]`, archivo descriptivo e `id` de sección |
| `padding-global` | Primitiva `PageGutter` y token horizontal global |
| `container-[size]` | Componente `Container` con variante `size` |
| `padding-section-[size]` | Componente `Section` con variante `spacing` |
| Clase personalizada como `home_hero_heading` | Nombre de componente o `data-slot="home_hero_heading"` |
| Combo class `is-[variant]` | Prop tipada o variante de CVA, por ejemplo `tone="brand"` |
| Utility class | Utilidad de Tailwind basada en tokens del proyecto |

Las primitivas `SiteShell`, `PageGutter`, `Container` y `Section` se crearán cuando el diseño de Figma defina sus medidas reales. No se fijan valores visuales antes de tiempo.

## Carpetas y nombres

```text
app/                         rutas y layouts de Next.js
components/
  ui/                        primitivas de shadcn/Base UI
  layout/                    estructura global
  sections/                  secciones reutilizables
  pages/                     composiciones específicas de una página
sanity/
  schemaTypes/               documentos, objetos y bloques de contenido
```

- Archivos y carpetas: `kebab-case`.
- Componentes React: `PascalCase`.
- Props, funciones y variables: `camelCase`.
- Tipos de Sanity: nombres singulares en `camelCase`.
- Identificadores y slugs: descriptivos, sin abreviaturas ambiguas.
- Componentes específicos de una página: prefijo de página, por ejemplo `HomeHero`.
- Componentes reutilizables: nombre global sin prefijo de página, por ejemplo `NomineeGrid`.

## Estructura de una sección

Una sección debería leerse con la misma claridad que en el Navigator de Webflow:

```tsx
<section id="nominados" data-slot="home_nominations_section">
  <PageGutter>
    <Container size="large">
      <Section spacing="large">...</Section>
    </Container>
  </PageGutter>
</section>
```

`data-slot` sirve para reconocer elementos en el inspector y en editores visuales como Onlook. No debe usarse como selector de estilos salvo que una integración lo requiera.

## Reglas de estilos

1. Los valores globales de color, tipografía, radio y espaciado viven como tokens CSS.
2. Tailwind aplica esos tokens; no se crean clases duplicadas como `margin-large` si una utilidad ya expresa el mismo valor.
3. Una variante visual se modela como prop o CVA, no como booleanos dispersos.
4. El espaciado de sección y el ancho de contenedor se controlan desde primitivas globales.
5. Los estilos únicos quedan junto al componente que los necesita.
6. Las clases personalizadas que sean inevitables siguen Client‑First: general a específico y guion bajo para agrupar, por ejemplo `home_hero_texture`.

## Sanity

Los nombres editoriales deben ser comprensibles para una persona no técnica. El esquema describe contenido, no CSS. En vez de exponer márgenes arbitrarios, se ofrecen opciones acotadas como `small`, `medium` y `large`, que React traduce a tokens del sistema.

Esto mantiene la flexibilidad visual sin permitir que el contenido rompa la consistencia del sitio.

## Referencia

La convención toma como base la [documentación oficial de Client‑First](https://finsweet.com/client-first/docs/intro), en especial su estructura de secciones, contenedores, padding global y nombres descriptivos.
