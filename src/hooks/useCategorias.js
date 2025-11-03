// src/hooks/useCategorias.js
// Hook para gestión de las categorías del menú.

import { useState } from "react";

export default function useCategorias(menuData) {
  const initialState = JSON.parse(JSON.stringify(menuData));
  const [categorias, setCategorias] = useState(initialState);

  // AGREGAR CATEGORIA
  const agregarCategoria = () => {
    const nuevaCategoria = {
      title: "Nueva categoría",
      image: "ruta/imagen.jpg",
      items: [],
    };
    setCategorias([...categorias, nuevaCategoria]);
  };

  // ELIMINAR CATEGORIA
  const eliminarCategoria = (titulo) => {
    console.log(`Intentando eliminar: ${titulo}`);
    const nuevas = categorias.filter((cat) => cat.title !== titulo);
    console.log(`Categorías restantes: ${nuevas.length}`);
    setCategorias(nuevas);
  };

  // EDITAR CATEGORIA
  const editarCategoria = (titulo, nuevoTitulo) => {
    const nuevasCategorias = categorias.map((cat) => {
      if (cat.title === titulo) {
        return {
          ...cat, // Mantenemos el resto de propiedades (image, items)
          title: nuevoTitulo, // Actualizamos solo el título
        };
      }
      return cat;
    });
    setCategorias(nuevasCategorias);
  };

  return {
    categorias,
    agregarCategoria,
    eliminarCategoria,
    editarCategoria,
  };
}
