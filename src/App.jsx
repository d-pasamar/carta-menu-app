import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";
import ModoEdicionToggle from "./components/modoEdicion/ModoEdicionToggle";

// HOOKS
import useCategorias from "./hooks/useCategorias";

import "./App.css";

export default function App() {
  // ===== ESTADO DE LA INTERFAZ =====
  const [modoEdicion, setModoEdicion] = useState(false);

  // ===== GESTION DEL ESTADO Y CRUD DE CATEGORIAS (NIVEL SUPERIOR) =====
  // useCategorias se encarga de cargar las categorías desde la API
  const { categorias, agregarCategoria, eliminarCategoria, editarCategoria } =
    useCategorias(7032); // Nuestro usuario_id

  // ===== RETURN =====
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
      />
      <Line />
      <Footer />
    </div>
  );
}
