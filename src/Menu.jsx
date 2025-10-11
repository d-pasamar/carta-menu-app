import Section from './Section';

function Menu({ data }) {
    return (
        <>
            {data.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    image={section.image}
                    items={section.items}
                />
            ))}
        </>
    );
}

export default Menu;