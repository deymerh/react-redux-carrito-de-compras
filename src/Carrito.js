import React from "react"
import { useSelector, useDispatch} from "react-redux"
import Card from "./Card"

const Carrito = () => {
  const carrito = useSelector((state) => state.carrito)
  const dispatch = useDispatch()
  return (
    <div>
      <h1 className="titulo"> PRODUCTOS EN EL CARRITO DE COMPRAS  </h1>
      <div className="flex" >
      {carrito.map((p,indice)=> {
        return (
          <Card
            key={indice}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
            btnTexto="ELIMINAR"
            onPress={  () => {
              dispatch({
                type: "ELIMINAR_PRODUCTO",
                id: p.id
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


export default Carrito;