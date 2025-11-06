import Section from "./Section";
import "./menu.css";

function Menu({
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
  return (
    <main>
      {/* Verificamos que data es un array */}
      {Array.isArray(data) &&
        data.map((section) => (
          <Section
            key={section.id} // Se crea id único basado en timestamp
            id={section.id} // Pasamos el nuevo id a section
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
        ))}

      {modoEdicion && (
        <button className="btn-agregar-categoria" onClick={onAgregarCategoria}>
          ➕ Agregar Categoría
        </button>
      )}
    </main>
  );
}

export default Menu;
