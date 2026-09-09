# Premios Ídolos

Base técnica del sitio de Premios Ídolos. El proyecto está preparado para que el desarrollo visual comience desde Figma sin imponer todavía una página ni un sistema de contenido definitivo.

## Stack

- Next.js 16 con App Router y React 19.
- Tailwind CSS 4.
- shadcn/ui con Base UI y preset Nova.
- Sanity Studio integrado en `/studio`.
- TypeScript, ESLint y Prettier.
- GitHub como fuente del proyecto; Vercel será el primer entorno de despliegue.

## Primer inicio

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Abrir `http://localhost:3000` para el sitio y `http://localhost:3000/studio` para Sanity Studio. La copia de variables sólo es necesaria si `.env.local` no existe en la computadora.

## Verificaciones

```bash
pnpm check
```

El comando ejecuta lint, comprobación de tipos y compilación de producción.

## Componentes

```bash
pnpm dlx shadcn@latest add button
```

Los componentes generados viven en `components/ui`. Los componentes propios del sitio deben seguir las convenciones de [Client‑First adaptado](docs/client-first.md).

## Contenido y secretos

Las variables públicas que identifican el proyecto y el dataset están documentadas en `.env.example`. Tokens de escritura, vista previa o despliegue nunca deben subirse al repositorio.

El esquema inicial de Sanity está vacío deliberadamente. Se define cuando comience el modelado real del sitio para evitar estructuras prematuras.
