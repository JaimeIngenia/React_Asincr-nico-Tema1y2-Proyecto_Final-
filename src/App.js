import { useState } from "react";
import Busqueda from "./components/busqueda/Busqueda";
import Header from "./components/header/Header";
import Resultado from "./components/resultado/Resultado";
import styles from "./App.module.css"



function App() {
  const [darkMode,setDarkMode]=useState(true)
  return (
    <div className={ !darkMode? styles.AppDark : styles.AppLigth }>
      <Header 
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      />
      <Busqueda/>
      <Resultado/>
    </div>
  );
}

export default App;
