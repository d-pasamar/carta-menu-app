import BotonesCRUD from "../botonesCRUD/BotonesCrud";
import Item from "./Item";

import "./section.css";

function Section({ title, image, items, modoEdicion }) {
  return (
    <section>
      {/* Si estamos en modo edición, se muestran los botonesCRUD */}
      {modoEdicion ? (
        <div className="section-header">
          <h2 className="titulo-editable">{title}</h2>
          <BotonesCRUD />
        </div>
      ) : (
        <h2 className="titulo-centrado">{title}</h2>
      )}

      <img src={image} alt={title} />

      {items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} />
      ))}
    </section>
  );
}

export default Section;
