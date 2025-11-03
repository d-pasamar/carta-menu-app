// src/data/menuData.js
// Este archivo contiene los datos estáticos del menú del restaurante.
// Comprende de un array de objetos.
// Cada sección incluye:
// - 'title': nombre de la categoría.
// - 'image': una URL con el icono representativo de la categoría.
// - 'items': array de objetos con 'name' y 'price' para cada producto.

export const menuData = [
  {
    title: "Coffee",
    image: "https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg",
    items: [
      { name: "French Vanilla", price: "3.00" },
      { name: "Caramel Macchiato", price: "3.75" },
      { name: "Pumpkin Spice", price: "3.50" },
      { name: "Hazelnut", price: "4.00" },
      { name: "Mocha", price: "4.50" },
    ],
  },
  {
    title: "Desserts",
    image: "https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg",
    items: [
      { name: "Donut", price: "1.50" },
      { name: "Cherry Pie", price: "2.75" },
      { name: "Cheesecake", price: "3.00" },
      { name: "Cinnamon Roll", price: "2.50" },
    ],
  },
];
