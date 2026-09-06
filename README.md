# WearFresh Frontend

Frontend del catálogo público de Fresh.co.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- pnpm

## Requisitos

- Node.js 20.19+ (recomendado: Node 22)
- pnpm 10.34.3

## Desarrollo

```bash
pnpm install
pnpm dev
```

La aplicación se sirve en `http://localhost:8443`.

## Verificaciones

```bash
pnpm typecheck
pnpm build
```

## Estructura actual

```text
src/
├── assets/
│   └── images/
├── features/
│   └── catalog/
│       ├── components/
│       ├── data/
│       └── types/
├── shared/
│   ├── components/
│   │   └── icons/
│   ├── config/
│   └── utils/
├── App.tsx
├── index.css
└── main.tsx
```

Esta versión mantiene el diseño y comportamiento del catálogo original, pero elimina la infraestructura específica de Figma Make y separa responsabilidades para continuar creciendo por funcionalidades.
