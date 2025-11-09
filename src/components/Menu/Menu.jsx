// src/components/Menu/Menu.jsx

import Section from "./section/Section";
import "./menu.css";

/**
 * Componente Menu.jsx
 * Renderiza la lista de categorías (sections) recibida de App.jsx.
 * Pasa las funciones de CRUD de CATEGORÍA a Section.jsx.
 * Maneja el botón global para añadir una nueva categoría (en modo edición).
 *
 * @param {Object[]} props.data - Array de categorías con sus ítems.
 * @param {boolean} props.modoEdicion - Indica si está en modo edición.
 * @param {Function} props.onAgregarCategoria - Callback para añadir categoría.
 * @param {Function} props.onEliminarCategoria - Callback para eliminar categoría.
 * @param {Function} props.onEditarCategoria - Callback para editar categoría.
 * @returns {JSX.Element} - Elemento JSX que representa el menú completo.
 */

export default function Menu({
  data,
  modoEdicion,
  // Props CRUD de Categoría
  onAgregarCategoria,
  onEliminarCategoria,
  onEditarCategoria,
}) {
  // ===== LOGICA =====

  // Renderizado condicional de las secciones
  const secciones = Array.isArray(data)
    ? data.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.title}
          image={section.image}
          // Section.jsx se encarga de cargar sus propios ítems internamente.
          modoEdicion={modoEdicion}
          // Funciones CRUD de Categoría
          onEliminarCategoria={onEliminarCategoria}
          onEditarCategoria={onEditarCategoria}
        />
      ))
    : null;

  // Botón para añadir categoría (solo en modo edición)
  const agregarCategoriaBoton = modoEdicion && (
    <button className="btn-agregar-categoria" onClick={onAgregarCategoria}>
      ➕ Agregar Categoría
    </button>
  );

  // ===== RETURN =====

  return (
    <main>
      {secciones}
      {agregarCategoriaBoton}
    </main>
  );
}
