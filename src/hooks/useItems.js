// src/hooks/useItems.js
// Lógica de manipulación de items (CRUD)
// Recibe el estado global (categorias) y el setter (setCategorias) para funcionar.

export const useItems = (categorias, setCategorias) => {
  const newItemTemplate = { name: "Nuevo Item", price: 0.0 };

  // ELIMINAR ITEM
  const eliminarItem = (tituloCategoria, nombreItem) => {
    const nuevasCategorias = categorias.map((cat) => {
      if (cat.title === tituloCategoria) {
        // Filtrar el item a eliminar
        const nuevosItems = cat.items.filter(
          (item) => item.name !== nombreItem
        );
        return { ...cat, items: nuevosItems };
      }
      return cat;
    });
    setCategorias(nuevasCategorias);
  };

  // EDITAR ITEM (Nombre y Precio)
  const editarItem = (
    tituloCategoria,
    nombreItemAntiguo,
    nombreItemNuevo,
    precioItemNuevo
  ) => {
    const nuevasCategorias = categorias.map((cat) => {
      if (cat.title === tituloCategoria) {
        // Mapear los items y actualizar el que coincida
        const nuevosItems = cat.items.map((item) => {
          // Identificar el item por el nombre antiguo
          if (item.name === nombreItemAntiguo) {
            return {
              name: nombreItemNuevo,
              price: parseFloat(precioItemNuevo),
            };
          }
          return item;
        });
        return { ...cat, items: nuevosItems };
      }
      return cat;
    });
    setCategorias(nuevasCategorias);
  };

  // AGREGAR ITEM
  const agregarItem = (tituloCategoria) => {
    // Aseguramos unicidad: Genera una marca de tiempo (timestamp) específica
    const uniqueName = `${newItemTemplate.name} - ${new Date().getTime()}`;
    const newItem = { name: uniqueName, price: newItemTemplate.price };

    const nuevasCategorias = categorias.map((cat) => {
      if (cat.title === tituloCategoria) {
        // Devolver una NUEVA categoría con el item añadido
        return { ...cat, items: [...cat.items, newItem] };
      }
      return cat;
    });
    setCategorias(nuevasCategorias);
  };

  return {
    eliminarItem,
    editarItem,
    agregarItem,
  };
};
