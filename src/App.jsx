import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";
import ModoEdicionToggle from "./components/modoEdicion/ModoEdicionToggle";

import useCategorias from "./hooks/useCategorias";

// DATOS BASE DE LA APP
import { menuData } from "./data/menuData";

import "./App.css";

function App() {
  const [modoEdicion, setModoEdicion] = useState(false);
  const { categorias, agregarCategoria, eliminarCategoria, editarCategoria } =
    useCategorias(menuData);

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
        onAgregarCategoria={agregarCategoria}
        onEliminarCategoria={eliminarCategoria}
        onEditarCategoria={editarCategoria}
      />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
