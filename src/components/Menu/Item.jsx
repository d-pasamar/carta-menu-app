import "./item.css";

function Item({ name, price }) {
  return (
    <article className="item">
      <p className="flavor">{name}</p>
      <p className="price">{price}</p>
    </article>
  );
}

export default Item;
