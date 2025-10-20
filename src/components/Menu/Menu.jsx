import Section from "./Section";
import "./menu.css";

function Menu({ data }) {
  return (
    <main>
      {data.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          image={section.image}
          items={section.items}
        />
      ))}
    </main>
  );
}

export default Menu;
