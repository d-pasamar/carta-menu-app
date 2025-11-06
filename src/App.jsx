import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";
import ModoEdicionToggle from "./components/modoEdicion/ModoEdicionToggle";

// HOOKS
import useCategorias from "./hooks/useCategorias";
import { useItems } from "./hooks/useItems";

import "./App.css";

function App() {
  const [modoEdicion, setModoEdicion] = useState(false);

  // OBTIENE ESTADO
  const { categorias, agregarCategoria, eliminarCategoria, editarCategoria } =
    useCategorias(7032); // Nuestro usuario_id

  // CONECTAR HOOK
  const { agregarItem, eliminarItem, editarItem } = useItems(categorias);

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
