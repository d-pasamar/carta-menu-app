// src/components/Menu/section/Section.jsx

import { useState } from "react";
import BotonesCRUD from "../../botonesCRUD/BotonesCrud";
import Item from "./item/Item";
import "./section.css";

/**
 * Componente Section.jsx
 * Representa una categoría del menú con su título, imagen e ítems.
 * Permite edición del título y operaciones CRUD sobre la categoría y sus ítems.
 *
 * @param {string|number} props.id - Identificador único de la categoría.
 * @param {string} props.title - Título de la categoría.
 * @param {string} props.image - Imagen asociada a la categoría.
 * @param {Object[]} props.items - Lista de ítems dentro de la categoría.
 * @param {boolean} props.modoEdicion - Indica si está en modo edición.
 * @param {Function} props.onEliminarCategoria - Callback para eliminar categoría.
 * @param {Function} props.onEditarCategoria - Callback para editar categoría.
 * @param {Function} props.onAgregarItem - Callback para añadir ítem.
 * @param {Function} props.onEliminarItem - Callback para eliminar ítem.
 * @param {Function} props.onEditarItem - Callback para editar ítem.
 * @returns {JSX.Element} - Elemento JSX que representa una sección del menú.
 */

export default function Section({
  id,
  title,
  image,
  items,
  modoEdicion,
  onEliminarCategoria,
  onEditarCategoria,
  onAgregarItem,
  onEliminarItem,
  onEditarItem,
}) {
  // ===== ESTADO LOCAL =====
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(title);

  // ===== MANEJADORES =====

  /**
   * Manejador que guarda los cambios de la categoría.
   * Llama a la función onEditarCategoria con los valores actualizados,
   * y desactiva el modo edición.
   *
   * @returns {void} - Actualiza estado de edición, no devuelve valor.
   */

  const handleSave = () => {
    onEditarCategoria(id, nuevoTitulo);
    setIsEditing(false);
  };

  /**
   * Manejador que activa el modo edición de la categoría.
   *
   * @returns {void} - No devuelve valor.
   */

  const handleEditClick = () => setIsEditing(true);

  /**
   * Referencia al manejador de acción CRUD según el estado de edición.
   * - Si está en modo edición, apunta a handleSave (guardar cambios).
   * - Si no está en modo edición, apunta a handleEditClick (activar edición).
   *
   * @type {Function} - Función de manejador que se ejecuta al hacer clic.
   */

  const handleCRUDBtnClick = isEditing ? handleSave : handleEditClick;

  // ===== LOGICA =====

  const tituloCategoria = modoEdicion ? (
    <div className="section-header">
      {/* Edición */}
      {isEditing ? (
        <input
          className="titulo-editable-input"
          type="text"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
      ) : (
        <h2 className="titulo-editable">{title}</h2>
      )}
      <BotonesCRUD
        isEditing={isEditing}
        onEliminar={() => onEliminarCategoria(id)}
        onEditar={handleCRUDBtnClick}
      />
    </div>
  ) : (
    <h2 className="titulo-centrado">{title}</h2>
  );

  const listaItems = items.map((item) => (
    <Item
      key={item.id || item.name} // mejor usar id si existe
      name={item.name}
      price={item.price}
      modoEdicion={modoEdicion}
      tituloCategoria={title}
      onEliminarItem={onEliminarItem}
      onEditarItem={onEditarItem}
    />
  ));

  const agregarItemBoton = modoEdicion && (
    <button
      className="btn-agregar-item"
      onClick={() => onAgregarItem(id)} // mejor pasar id en vez de title
    >
      ➕ Añadir Item
    </button>
  );

  // ===== RETURN =====

  return (
    <section>
      {tituloCategoria}
      <img src={image} alt={title} />
      {listaItems}
      {agregarItemBoton}
    </section>
  );
}
