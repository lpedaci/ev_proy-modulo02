# Evaluación de Proyectos
### Caso de uso: Ferretería El Tornillo

> Material educativo para **7mo Informática 2026** - Instituto Leonardo Murialdo  
> Prof. Pedaci, Lourdes - Módulo 2 — Fases de un proyecto

---

## Descripción

Sitio web educativo de una sola página (SPA estática) que recorre de forma completa el proceso de relevamiento y análisis de un proyecto de software real: desde la entrevista inicial con el cliente hasta la definición de requerimientos y OKRs medibles.

El caso de uso está basado en **Roberto Fernández**, dueño de la Ferretería El Tornillo (Villa Bosch, Tres de Febrero), y sirve como referencia concreta para que los alumnos aprendan a:

- Diseñar y aplicar una entrevista estructurada de relevamiento
- Distinguir síntomas de causas reales en el diagnóstico de un problema
- Construir la línea de base del proyecto con datos medibles
- Definir Requerimientos Funcionales (RF) y No Funcionales (RNF) trazables
- Formular OKRs con Key Results verificables
- Armar perfiles de usuario completos con criterios de accesibilidad

---

## Estructura de archivos

```
ferreteria-tornillo/
│
├── index.html              ← Estructura HTML completa (6 secciones)
│
├── assets/
│   ├── css/
│   │   └── style.css       ← Todos los estilos (variables, layout, componentes, responsive)
│   └── js/
│       └── script.js       ← Lógica interactiva (accordion, tabs, progress bar, observer)
│
└── README.md               ← Este archivo
```

---

## Tecnologías usadas

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de contenido y formularios |
| CSS3 (variables, grid, flexbox) | Layout responsive y sistema de diseño |
| JavaScript vanilla (ES6+) | Interactividad sin dependencias externas |
| Google Fonts — DM Sans | Tipografía principal |
| Intersection Observer API | Resaltado activo del nav y TOC según scroll |

No se usa ningún framework ni librería externa. El proyecto es 100% estático y no requiere build step.

---

## Funcionalidades interactivas

- **Formulario de entrevista**: 28 preguntas agrupadas en 8 bloques colapsables con barra de progreso
- **Tabs de requerimientos**: Alternancia entre RF y RNF sin recarga
- **Navegación activa**: El link del nav y la píldora del TOC se resaltan según la sección visible
- **Menú mobile**: Hamburguesa con overlay fullscreen para pantallas pequeñas
- **Animaciones de entrada**: Fade + translate en el hero con delays escalonados

---

## Créditos

- **Docente**: Prof. Pedaci, Lourdes [LinkedIn](https://www.linkedin.com/in/lourdes-pedaci/)
- **Institución**: Instituto Leonardo Murialdo · 7mo Informática 2026
- **Módulo**: 02 - Fases de un Proyecto

---

> _"Definición incorrecta → solución incorrecta."_
