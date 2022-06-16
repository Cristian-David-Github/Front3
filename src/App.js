import React, {useState} from "react";
import Cabecera from "./components/cabecera";
import Listado from "./components/listado";
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [itemsInCart, setItemsInCart] = useState(0);

  return (
    <div className="App">
      <Cabecera itemsInCart={itemsInCart}/>
      <Listado setItemsInCart={setItemsInCart}/>
    </div>
  );
}

export default App;