// src/components/Menu/section/item/Item.jsx

import { useState } from "react";
import BotonesCRUD from "../../../botonesCRUD/BotonesCrud";
import "./item.css";

/**
 * Componente Item.jsx
 * Renderiza un ítem de la carta con su nombre y precio.
 * Permite edición o eliminación según el modo actual.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.id - ID único del ítem.
 * @param {string} props.name - Nombre del ítem (ej. "Pizza Margarita").
 * @param {number} props.price - Precio del ítem en la carta.
 * @param {boolean} props.modoEdicion - Indica si el componente está en modo edición.
 * @param {Function} props.onEliminarItem - Callback para eliminar el ítem.
 * @param {Function} props.onEditarItem - Callback para editar el ítem.
 * @returns {JSX.Element} - Elemento JSX que representa el ítem.
 */

export default function Item({
  id, // Id del item: Reemplaza al anterior tituloCategoria
  name,
  price,
  modoEdicion,
  onEliminarItem,
  onEditarItem,
}) {
  // ===== ESTADO LOCAL =====
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
    if (nuevoNombre.trim() && !isNaN(parseFloat(nuevoPrecio))) {
      // 💡 Llamada a la función del hook usando el ID
      onEditarItem(
        id, // Usamos el ID del ítem
        nuevoNombre,
        parseFloat(nuevoPrecio)
      );
      setIsEditing(false);
    }
  };

  /**
   * Manejador que activa el modo edición del ítem.
   * @returns {void} - Activa el modo edición.
   */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /**
   * Manejador que alterna entre los modos 'Editar' y 'Guardar' el ítem.
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
        <p className="flavor" onClick={modoEdicion ? handleEditClick : null}>
          {name}
        </p>
        <p className="price">${precioDisplay}</p>
      </>
    );

  // Renderizado condicional de los botones CRUD
  const botonesCRUD = modoEdicion && (
    <BotonesCRUD
      isEditing={isEditing}
      onEliminar={() => onEliminarItem(id)}
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
