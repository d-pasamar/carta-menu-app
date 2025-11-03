import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";
import ModoEdicionToggle from "./components/modoEdicion/ModoEdicionToggle";

// HOOKS
import useCategorias from "./hooks/useCategorias";
import { useItems } from "./hooks/useItems";

// DATOS BASE DE LA APP
import { menuData } from "./data/menuData";

import "./App.css";

function App() {
  const [modoEdicion, setModoEdicion] = useState(false);

  // OBTIENE ESTADO Y SETTER
  const {
    categorias,
    setCategorias,
    agregarCategoria,
    eliminarCategoria,
    editarCategoria,
  } = useCategorias(menuData);

  // CONECTAR HOOK
  const { agregarItem, eliminarItem, editarItem } = useItems(
    categorias,
    setCategorias
  );

  return (
    <div className="menu">
      <Header />
      <ModoEdicionToggle
        modoEdicion={modoEdicion}
        setModoEdicion={setModoEdicion}
      />
      <Line />
      <Menu
        data={categorias}
        modoEdicion={modoEdicion}
        // Funciones CRUD de CATEGORÍA
        onAgregarCategoria={agregarCategoria}
        onEliminarCategoria={eliminarCategoria}
        onEditarCategoria={editarCategoria}
        // Funciones CRUD ITEM
        onAgregarItem={agregarItem}
        onEliminarItem={eliminarItem}
        onEditarItem={editarItem}
      />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
