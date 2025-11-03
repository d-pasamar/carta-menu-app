import { useState } from "react";
import BotonesCRUD from "../botonesCRUD/BotonesCrud";
import Item from "./Item";

import "./section.css";

function Section({
  title,
  image,
  items,
  modoEdicion,
  onEliminarCategoria,
  onEditarCategoria,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(title);

  const handleSave = () => {
    onEditarCategoria(title, nuevoTitulo);
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
            onEliminar={() => onEliminarCategoria(title)}
            onEditar={handleCRUDBtnClick} // Conectar el botón de editar
          />
        </div>
      ) : (
        <h2 className="titulo-centrado">{title}</h2>
      )}

      <img src={image} alt={title} />

      {items.map((item, index) => (
        <Item key={item.name} name={item.name} price={item.price} />
      ))}
    </section>
  );
}

export default Section;
