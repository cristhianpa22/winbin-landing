# WinBin – Landing Page (React + Vite)

Reciclaje escolar gamificado con IA. Landing page responsive construida con React 18 y Vite.

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├── main.jsx                  # punto de entrada
├── App.jsx                   # composición de la página
├── styles/                   # variables (tokens) y estilos globales
├── data/                     # contenido separado de la UI (textos, planes, equipo…)
├── hooks/                    # useMobileMenu, useScrollSpy
├── utils/                    # helpers (classNames)
└── components/
    ├── common/               # Button, Icon, Container, SectionHeader
    ├── layout/               # Navbar, Footer
    └── sections/             # Hero, Problem, Solution, Technology, Pricing, Team, Download
```

Cada componente vive en su carpeta junto a su CSS Module (`Componente.module.css`).
Para cambiar textos, precios o miembros del equipo edita los archivos de `src/data/`.
