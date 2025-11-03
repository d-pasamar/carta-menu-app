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
      {data.map((section, index) => (
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
    </main>
  );
}

export default Menu;
