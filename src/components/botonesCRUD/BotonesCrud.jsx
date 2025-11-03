// src/components/botonesCRUD/BotonesCRUD.jsx
// Componente de botones CRUD para edición.

import "./botonesCRUD.css";

export default function BotonesCRUD({ onEditar, onEliminar, isEditing }) {
  // Si estamos en edición -> guardar, si no -> Editar
  const buttonText = isEditing ? "💾 Guardar" : "✏️ Editar";

  return (
    <div className="botones-crud">
      <button
        className={isEditing ? "btn-guardar" : "btn-editar"}
        onClick={onEditar}
      >
        {buttonText}
      </button>

      {!isEditing && (
        <button className="btn-eliminar" onClick={onEliminar}>
          🗑️ Eliminar
        </button>
      )}
    </div>
  );
}
