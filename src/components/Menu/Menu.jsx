import Section from "./Section";
import "./menu.css";

function Menu({ data, modoEdicion }) {
  return (
    <main>
      {data.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          image={section.image}
          items={section.items}
          modoEdicion={modoEdicion}
        />
      ))}
    </main>
  );
}

export default Menu;
