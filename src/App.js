import React, { useRef, useState } from "react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navbar from "./components/navbar";
import Servicios from "./components/servicios";
import Contacto from "./components/contacto";
import Productos from "./components/productos";
import Pie from "./components/pie";

function App() {
  const serviciosRef = useState(useRef(null));
  const productosRef = useState(useRef(null));
  const contactoRef = useState(useRef(null));

  return (
    <div>
      <Navbar
        serviciosRef={serviciosRef}
        productosRef={productosRef}
        contactoRef={contactoRef}
      />
      <div ref={serviciosRef}>
        <Servicios />
      </div>
      <div ref={productosRef}>
        <Productos />
      </div>
      {/*
            <div ref={contactoRef}>
        <Contacto />
      </div> 
      */}
      <Pie />
    </div>
  );
}

export default App;
