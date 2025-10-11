import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import './styles.css';

const menuData = [
    {
        title: 'Coffee',
        image: 'https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg',
        items: [
            { name: 'French Vanilla', price: '3.00' },
            { name: 'Caramel Macchiato', price: '3.75' },
            { name: 'Pumpkin Spice', price: '3.50' },
            { name: 'Hazelnut', price: '4.00' },
            { name: 'Mocha', price: '4.50' },
        ],
    },
    {
        title: 'Desserts',
        image: 'https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg',
        items: [
            { name: 'Donut', price: '1.50' },
            { name: 'Cherry Pie', price: '2.75' },
            { name: 'Cheesecake', price: '3.00' },
            { name: 'Cinnamon Roll', price: '2.50' },
        ],
    },
    ];

    function App() {
    return (
        <div className="menu">
            <main>
                <Header />
                <Menu data={menuData} />
            </main>
            <hr className="bottom-line" />
            <Footer />
        </div>
    );  
}

export default App;