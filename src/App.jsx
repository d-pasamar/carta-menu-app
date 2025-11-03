import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Line from "./components/Line";

// DATOS BASE DE LA APP
import { menuData } from "./data/menuData";

import "./App.css";

function App() {
  return (
    <div className="menu">
      <Header />
      <Line />
      <Menu data={menuData} />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
