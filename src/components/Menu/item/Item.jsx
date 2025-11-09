// src/components/Menu/item/Item.jsx

import { useState } from "react";
import BotonesCRUD from "../../botonesCRUD/BotonesCrud";
import "./item.css";

/**
 * Componente Item.jsx
 * Renderiza un ítem de la carta con su nombre y precio.
 * Permite edición o eliminación según el modo actual.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.name - Nombre del ítem (ej. "Pizza Margarita").
 * @param {number} props.price - Precio del ítem en la carta.
 * @param {boolean} props.modoEdicion - Indica si el componente está en modo edición.
 * @param {string} props.tituloCategoria - Categoría a la que pertenece el ítem.
 * @param {Function} props.onEliminarItem - Callback para eliminar el ítem.
 * @param {Function} props.onEditarItem - Callback para editar el ítem.
 * @returns {JSX.Element} - Elemento JSX que representa el ítem.
 */

export default function Item({
  name,
  price,
  modoEdicion,
  tituloCategoria,
  onEliminarItem,
  onEditarItem,
}) {
  // Estados locales para edición
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(name);
  const [nuevoPrecio, setNuevoPrecio] = useState(price);

  // Convierte el precio a un formato con dos decimales para el input
  const precioDisplay = typeof price === "number" ? price.toFixed(2) : price;

  // ===== MANEJADORES =====

  /**
   * Manejador que guarda los estados del ítem.
   * Llama a la función onEditarItem con los valores actualizados.
   *
   * @returns {void} - Actualiza estado de edición, no devuelve valor.
   */

  const handleSave = () => {
    // Llama a la función de edición del hook useItems.js
    onEditarItem(
      tituloCategoria, // Categoría actual
      name, // Nombre original del ítem
      nuevoNombre.trim(), // Nuevo nombre
      parseFloat(nuevoPrecio) // Nuevo precio como número
    );
    setIsEditing(false);
  };

  /**
   * Manejador que controla el inicio o cierre del modo edición.
   * - Si ya está en edición y no hay cambios, cierra sin guardar.
   * - Si no está en edición, activa el modo edición.
   *
   * @returns {void} - Actualiza el estado de edición, no devuelve valor.
   */

  const handleEditClick = () => {
    // Si ya estamos editando y el nombre no ha cambiado, cerramos sin guardar
    if (
      isEditing &&
      nuevoNombre.trim() === name &&
      parseFloat(nuevoPrecio) === price
    ) {
      setIsEditing(false);
      return;
    }
    // Si no estamos editando, empezamos a editar
    setIsEditing(true);
  };

  /**
   * Referencia al manejador de acción CRUD según el estado de edición.
   * - Si está en modo edición, apunta a handleSave (guardar cambios).
   * - Si no está en modo edición, apunta a handleEditClick (activar edición).
   *
   * @type {Function} - Función de manejador que se ejecuta al hacer clic.
   */

  const handleCRUDBtnClick = isEditing ? handleSave : handleEditClick;

  // ===== LOGICA =====

  // Para el CSS: si estamos en modo de edición, el item recibe la clase "item-editable"
  const itemClass = `item ${modoEdicion ? "item-editable" : ""}`;

  // Renderizado condicional de los detalles del ítem
  const itemDetails =
    isEditing && modoEdicion ? (
      <>
        <input
          className="item-name-input"
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <input
          className="item-price-input"
          type="number"
          step="0.01"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave(); // Guardar al presionar Enter
          }}
        />
      </>
    ) : (
      <>
        <p className="flavor">{name}</p>
        <p className="price">${precioDisplay}</p>
      </>
    );

  // Renderizado condicional de los botones CRUD
  const botonesCRUD = modoEdicion && (
    <BotonesCRUD
      isEditing={isEditing}
      onEliminar={() => onEliminarItem(tituloCategoria, name)}
      onEditar={handleCRUDBtnClick}
    />
  );

  // ===== RETURN =====

  return (
    <article className={itemClass}>
      {/* Campos del Ítem: Texto vs. Input */}
      <div className="item-details">{itemDetails}</div>
      {/* Botones de CRUD (Solo en modo edición) */}
      {botonesCRUD}
    </article>
  );
}
