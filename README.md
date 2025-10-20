# Carta Menú React 🍰☕

Proyecto UT02 - DAM 2º Nocturno  
Creación de una carta de restaurante con React 19.1 y Atomic Design.

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
