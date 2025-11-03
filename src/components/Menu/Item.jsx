import { useState } from "react";
import BotonesCRUD from "../botonesCRUD/BotonesCrud";
import "./item.css";

function Item({
  name,
  price,
  modoEdicion,
  tituloCategoria,
  onEliminarItem,
  onEditarItem,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(name);
  const [nuevoPrecio, setNuevoPrecio] = useState(price);

  // Convierte el precio a un formato con dos decimales para el input
  const precioDisplay = typeof price === "number" ? price.toFixed(2) : price;

  const handleSave = () => {
    // Llama a la función de edición del hook useItems
    onEditarItem(
      tituloCategoria, // Categoría actual
      name, // Nombre original del ítem
      nuevoNombre.trim(), // Nuevo nombre
      parseFloat(nuevoPrecio) // Nuevo precio como número
    );
    setIsEditing(false);
  };

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

  const handleCRUDBtnClick = isEditing ? handleSave : handleEditClick;

  // Renderizado condicional
  return (
    <article className={`item ${modoEdicion ? "item-editable" : ""}`}>
      {/* Campos del Ítem: Texto vs. Input */}
      <div className="item-details">
        {isEditing && modoEdicion ? (
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
        )}
      </div>

      {/* Botones de CRUD (Solo en modo edición) */}
      {modoEdicion && (
        <BotonesCRUD
          isEditing={isEditing}
          onEliminar={() => onEliminarItem(tituloCategoria, name)}
          onEditar={handleCRUDBtnClick}
        />
      )}
    </article>
  );
}

export default Item;
