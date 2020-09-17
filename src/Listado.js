import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import Card from "./Card"

const Listado = () => {
  const productos = useSelector(state => (state.productos))
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className="titulo"> PRODUCTOS DISPONIBLES  </h1>
      <div className="flex" >
      {productos.map((p,indice)=> {
        return (
          <Card
            key={indice}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
            btnTexto="Agregar"
            onPress={  () => {
              dispatch({
                type: "AÑADIR_PRODUCTO",
                nuevoProducto: p
              })
            }}
           />
        )
      })}
      </div>
      <hr/>
    </div>
  )
} 
export default Listado;