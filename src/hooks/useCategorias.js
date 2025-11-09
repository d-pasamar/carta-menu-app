// src/hooks/useCategorias.js

// Hook para gestión de las categorías del menú.
import { useEffect, useState } from "react";
import categoriasAPI from "../services/categoriasAPI"; // Importa API

import defaultImage from "../img/Meal.png";

export default function useCategorias(usuario_id) {
  const [categorias, setCategorias] = useState([]); // Lista de categorías cargados desde la Base de Datos
  const [isLoading, setIsLoading] = useState(true); // Esta cargando?
  const [error, setError] = useState(null); // Mensaje de error si algo falla

  // Petición GET para obtener categorías
  const fetchCategorias = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await categoriasAPI.getCategorias(usuario_id); // Llama a la función getCategorias() API
      const categoriasAPIData = response.data; // accede al array dentro del objeto (donde se almacena)

      // Adaptación para el frontend
      const transformadas = categoriasAPIData.map((cat) => ({
        id: cat.id,
        title: cat.nombre,
        image: defaultImage,
        items: [],
      }));

      setCategorias(transformadas); // Actualiza la lista
    } catch (err) {
      setError(err.message || "Error al cargar categorias");
      console.error("Error al cargar categorias:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Se ejecuta al montar el componente
  useEffect(() => {
    fetchCategorias();
  }, [usuario_id]);

  // Petición POST para añadir categorías
  const agregarCategoria = async () => {
    try {
      const nuevaCategoria = {
        nombre: "Nueva categoría",
        usuario_id,
        orden: null,
      };

      await categoriasAPI.createCategoria(nuevaCategoria);
      await fetchCategorias(); // Recarga desde la API
    } catch (err) {
      console.error("Error al agregar categoría:", err);
    }
  };

  // Petición DELETE para eliminar categorías
  const eliminarCategoria = async (id) => {
    try {
      await categoriasAPI.deleteCategoria(id, usuario_id);
      await fetchCategorias(); // Recarga desde la API
    } catch (err) {
      console.error("Error al eliminar categoría:", err);
    }
  };

  // Petición PUT para editar categorías
  const editarCategoria = async (id, nuevoNombre) => {
    try {
      const datosActualizados = {
        usuario_id,
        nombre: nuevoNombre,
        orden: null,
      };

      await categoriasAPI.updateCategoria(id, datosActualizados);
      await fetchCategorias(); // Recarga desde la API
    } catch (err) {
      console.error("Error al editar categoría:", err);
    }
  };

  // Devuelve estado y funciones para que el componente los use
  return {
    categorias,
    isLoading,
    error,
    fetchCategorias,
    agregarCategoria,
    eliminarCategoria,
    editarCategoria,
  };
}

// CÓDIGO ANTERIOR
/* 
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
} */
