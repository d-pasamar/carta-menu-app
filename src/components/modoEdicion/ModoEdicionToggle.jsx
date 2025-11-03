// src/components/modoEdicion/ModoEdicionToggle.jsx
// Botón que permite activar o desactivar el modo edición.
// Cambia el estado y la funcionalidad según el estado.

import "./ModoEdicionToggle.css";

export default function ModoEdicionToggle({ modoEdicion, setModoEdicion }) {
  return (
    <button
      className="modo-edicion-toggle"
      onClick={() => setModoEdicion(!modoEdicion)}
    >
      {modoEdicion ? "🔒 Salir" : "🛠 Editar"}
    </button>
  );
}
