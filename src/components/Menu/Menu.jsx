// src/components/Menu/Menu.jsx

import Section from "./section/Section";
import "./menu.css";

/**
 * Componente Menu.jsx
 * Renderiza la lista de categorías (sections) con sus ítems.
 * Permite edición y operaciones CRUD sobre categorías e ítems.
 *
 * @param {Object[]} props.data - Array de categorías con sus ítems.
 * @param {boolean} props.modoEdicion - Indica si está en modo edición.
 * @param {Function} props.onAgregarCategoria - Callback para añadir categoría.
 * @param {Function} props.onEliminarCategoria - Callback para eliminar categoría.
 * @param {Function} props.onEditarCategoria - Callback para editar categoría.
 * @param {Function} props.onAgregarItem - Callback para añadir ítem.
 * @param {Function} props.onEliminarItem - Callback para eliminar ítem.
 * @param {Function} props.onEditarItem - Callback para editar ítem.
 * @returns {JSX.Element} - Elemento JSX que representa el menú completo.
 */

export default function Menu({
  data,
  modoEdicion,
  // Props CRUD de Categoría
  onAgregarCategoria,
  onEliminarCategoria,
  onEditarCategoria,
  // Props CRUD de Item
  onAgregarItem,
  onEliminarItem,
  onEditarItem,
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
          items={section.items}
          modoEdicion={modoEdicion}
          // Funciones CRUD de Categoría
          onEliminarCategoria={onEliminarCategoria}
          onEditarCategoria={onEditarCategoria}
          // Funciones CRUD de Item
          onAgregarItem={onAgregarItem}
          onEliminarItem={onEliminarItem}
          onEditarItem={onEditarItem}
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
