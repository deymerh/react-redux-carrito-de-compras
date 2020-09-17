import React from "react";
import { Provider } from 'react-redux'
import store from './redux'
import Listado from './Listado'
import Carrito from "./Carrito"

import "./style.css";
export default function App() {

  store.subscribe(() => {
    console.log('Nuevo Store', store.getState())
  });

  return (
    <Provider store={store}>
      <div>
        <Listado />
        <Carrito /> 
      </div>
    </Provider>
  )
}


