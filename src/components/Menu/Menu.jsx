import Section from "./Section";
import "./menu.css";

function Menu({
  data,
  modoEdicion,
  onAgregarCategoria,
  onEliminarCategoria,
  onEditarCategoria,
}) {
  return (
    <main>
      {data.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          image={section.image}
          items={section.items}
          modoEdicion={modoEdicion}
          onEliminarCategoria={onEliminarCategoria}
          onEditarCategoria={onEditarCategoria}
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
