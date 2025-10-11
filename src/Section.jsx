import Item from './Item';

function Section({ title, image, items }) {
    return (
        <section>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            {items.map((item, index) => (
                <Item key={index} name={item.name} price={item.price} />
            ))}
        </section>
    );
}

export default Section;