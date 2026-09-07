# WearFresh Frontend

Frontend del catálogo público y panel administrativo de Fresh.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 8
- pnpm

## Requisitos

- Node.js 20.19+ (recomendado Node 22)
- pnpm 10.34.3

## Desarrollo

```bash
pnpm install
pnpm dev
```

La aplicación se sirve por defecto en `http://localhost:8443`.

## Validación

```bash
pnpm typecheck
pnpm build
```

## Rutas actuales

### Público

- `/` — landing actual con hero + catálogo
- `/catalogo` — catálogo sin hero

### Administración

- `/admin/login` — acceso administrativo (autenticación pendiente)
- `/admin` — dashboard
- `/admin/productos` — gestión de productos
- `/admin/productos/nuevo` — creación de producto
- `/admin/productos/:productId/editar` — edición de producto
- `/admin/categorias` — gestión de categorías

## Arquitectura

```text
src/
├── app/
│   ├── layouts/
│   └── router/
├── features/
│   ├── admin/
│   └── catalog/
├── shared/
│   ├── components/
│   ├── config/
│   ├── pages/
│   └── utils/
├── assets/
├── App.tsx
└── main.tsx
```

La aplicación se mantiene intencionalmente simple: solo se crean capas/carpetas cuando tienen una responsabilidad real. La próxima evolución será desacoplar los datos locales del catálogo mediante una capa de servicios preparada para consumir la API.
