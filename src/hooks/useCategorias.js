// src/hooks/useCategorias.js
// Hook para gestión de las categorías del menú.

import { useState } from "react";
import defaultImage from "../img/Meal.png";

const DEFAULT_IMAGE_URL = defaultImage;

export default function useCategorias(menuData) {
  // Clonación datos base
  const initialState = JSON.parse(JSON.stringify(menuData));

  // Añadimos id único a cada categoría de menuData.js
  // id basado en timestamp
  const categoriasId = initialState.map((cat, index) => ({
    ...cat,
    id: Date.now() + index, // clave única basada en timestamp + index ya que se crean a la vez
  }));

  const [categorias, setCategorias] = useState(categoriasId);

  // const [categorias, setCategorias] = useState(initialState);

  // AGREGAR CATEGORIA
  const agregarCategoria = () => {
    // Copiamos la idea de useItems.js
    // Se crea id único basada en timestamp
    const uniqueId = Date.now();

    const nuevaCategoria = {
      id: uniqueId,
      title: "Nueva categoría",
      image: DEFAULT_IMAGE_URL,
      items: [],
    };
    setCategorias([...categorias, nuevaCategoria]);
  };

  // ELIMINAR CATEGORIA
  const eliminarCategoria = (id) => {
    const nuevas = categorias.filter((cat) => cat.id !== id);
    setCategorias(nuevas);
  };

  // EDITAR CATEGORIA
  // Actualizamos el parámetro de entrada a id, ya que ahora el id es único
  const editarCategoria = (id, nuevoTitulo) => {
    const nuevasCategorias = categorias.map((cat) => {
      if (cat.id === id) {
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
    setCategorias,
    agregarCategoria,
    eliminarCategoria,
    editarCategoria,
  };
}
