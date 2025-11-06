// src/services/categoriasAPI.js

const BASE_URL = "https://jlorenzo.ddns.net/carta_restaurante/categorias/";

// GET: Obtiene las categorias por usuario: 7032
const getCategorias = async (usuario_id) => {
  const res = await fetch(`${BASE_URL}?usuario_id=${usuario_id}`);
  if (!res.ok) throw new Error("Error al obtener asignación por ID");
  return res.json();
};

// POST: Añadir nueva categoría
const createCategoria = async (categoria) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(categoria),
  });
  if (!res.ok) throw new Error("Error al crear categoria");
  return res.json();
};

// Exporta todas las funciones como un objeto para uso externo
export default { getCategorias, createCategoria };
