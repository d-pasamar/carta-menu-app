import { useState } from "react";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";
import ModoEdicionToggle from "./components/modoEdicion/ModoEdicionToggle";

// DATOS BASE DE LA APP
import { menuData } from "./data/menuData";

import "./App.css";

function App() {
  const [modoEdicion, setModoEdicion] = useState(false);

  return (
    <div className="menu">
      <Header />
      <ModoEdicionToggle
        modoEdicion={modoEdicion}
        setModoEdicion={setModoEdicion}
      />
      <Line />
      <Menu data={menuData} modoEdicion={modoEdicion} />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
