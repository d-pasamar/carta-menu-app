import { useState } from "react";
import BotonesCRUD from "../botonesCRUD/BotonesCrud";
import Item from "./Item";

import "./section.css";

function Section({
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
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(title);

  const handleSave = () => {
    onEditarCategoria(id, nuevoTitulo); // Actualización, se pasa id en lugar de title
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCRUDBtnClick = isEditing ? handleSave : handleEditClick;

  return (
    <section>
      {/* Si estamos en modo edición, se muestran los botonesCRUD */}
      {modoEdicion ? (
        <div className="section-header">
          {/* Edición */}
          {isEditing ? (
            <input
              className="titulo-editable-input"
              type="text"
              value={nuevoTitulo}
              onChange={(e) => setNuevoTitulo(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSave(); // Guardar al presionar Enter
              }}
            />
          ) : (
            <h2 className="titulo-editable">{title}</h2>
          )}

          {/* Conectar la acción de editar al BotonesCRUD */}
          <BotonesCRUD
            isEditing={isEditing}
            onEliminar={() => onEliminarCategoria(id)}
            onEditar={handleCRUDBtnClick} // Conectar el botón de editar
          />
        </div>
      ) : (
        <h2 className="titulo-centrado">{title}</h2>
      )}
      {/* Imagen de la Categoría */}
      <img src={image} alt={title} />
      {/* Listado de Items */}
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          price={item.price}
          modoEdicion={modoEdicion}
          // Pasamos el título de la categoría para las funciones CRUD de item
          tituloCategoria={title}
          // Pasamos las funciones de CRUD
          onEliminarItem={onEliminarItem}
          onEditarItem={onEditarItem}
        />
      ))}
      {/* Botón para Añadir Item (solo en modo edición) */}
      {modoEdicion && (
        <button
          className="btn-agregar-item"
          onClick={() => onAgregarItem(title)}
        >
          ➕ Añadir Item
        </button>
      )}
    </section>
  );
}

export default Section;
