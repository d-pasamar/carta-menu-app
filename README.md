# Carta Menú React 🍰☕

Proyecto UT02 - DAM 2º Nocturno  
Creación de una carta de restaurante con React 19.1 y Atomic Design.

## ✨ Novedades y Funcionalidad CRUD

El proyecto ha sido mejorado para incluir la gestión completa de datos, permitiendo al usuario añadir, editar y eliminar categorías e ítems en tiempo real.

CRUD Implementado (Create, Read, Update, Delete)
Categorías: Se pueden añadir, renombrar y eliminar secciones completas del menú (ej: "Postres").

Ítems: Se pueden añadir nuevos productos a cualquier categoría, y editar su nombre y precio, o eliminarlos.

Modo Edición: Un interruptor global activa la visibilidad de los Botones CRUD en toda la interfaz.

🎣 Gestión de Estado con Hooks
El manejo de datos se centraliza en Custom Hooks para garantizar la inmutabilidad del estado y separar la lógica de negocio de los componentes visuales.

useCategorias.js: Es la fuente de verdad (Source of Truth), encargada de almacenar y actualizar el estado de todo el menú (categorías e ítems anidados).

useItems.js: Delega la lógica de manipulación de los ítems (anidados dentro de las categorías), asegurando que todas las modificaciones internas se realicen de forma inmutable a través de setCategorias.

## 🧩 Componentes

| Nivel Atomic Design | Componente    | Descripción                               |
| ------------------- | ------------- | ----------------------------------------- |
| Átomo               | `Item.jsx`    | Muestra nombre y precio de un producto.   |
| Átomo               | `Line.jsx`    | Línea divisoria visual entre organismos.  |
| Molécula            | `Section.jsx` | Agrupa productos bajo un título e imagen. |
| Organismo           | `Menu.jsx`    | Renderiza todas las secciones del menú.   |
| Organismo           | `Header.jsx`  | Título principal y subtítulo de la carta. |
| Organismo           | `Footer.jsx`  | Dirección y enlace web.                   |
| Template            | `App.jsx`     | Estructura general de la carta.           |
| Página              | `main.jsx`    | Punto de entrada de la aplicación.        |

## 📦 Tecnologías

- React 19.1
- Vite
- JSX
- CSS modular
- Git + GitHub

## 📁 Estructura del proyecto

```plaintext
src/
├── components/
│   ├── botonesCRUD/
│   │   ├── BotonesCRUD.jsx
│   │   └── botonesCrud.css
│   ├── modoEdicion/
│   │   ├── ModoEdicionToogle.jsx
│   │   └── modoEdicionToogle.css
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── header.css
│   ├── Menu/
│   │   ├── Menu.jsx
│   │   ├── menu.css
│   │   ├── Section.jsx
│   │   ├── section.css
│   │   ├── Item.jsx
│   │   └── item.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── footer.css
│   │── Line.jsx
│   └── line.css
├── hooks/
│   ├── useCategorias.js
│   └── useItems.js
├── img/
│   └── Meal.png
├── data/
│   └── menuData.js
│── App.jsx
│── main.jsx
└── App.css
```

## 🧠 Enfoque académico

Este proyecto replica una carta de restaurante basada en el tutorial de freeCodeCamp, migrando de HTML estático a componentes React. Se ha seguido el modelo de Atomic Design para estructurar los componentes y se ha documentado cada paso en un informe PDF.

## 📄 Autor

Alumno: David García Pasamar  
Profesor: José Francisco Lorenzo Hernández  
Asignatura: Programación multimedia y dispositivos móviles  
Curso: 2º DAM (nocturno)

## 🔗 Enlace al proyecto base

[freeCodeCamp - Design a Cafe Menu](https://www.freecodecamp.org/learn/full-stack-developer/workshop-cafe-menu/step-1)
