import { createStore } from  'redux';

const INITIAL = {
  productos: [
    { id: 1, nombre: 'Blanqueador', precio: 18000, imagen: 'https://image.freepik.com/vector-gratis/anuncio-productos-limpieza-realista_52683-37248.jpg' },
   {id: 2, nombre: 'Galleta Oreo', precio: 4000, imagen: 'https://concepto.de/wp-content/uploads/2019/11/producto-packaging-e1572738514178.jpg'},
    { id:3, nombre: 'iPhone', precio: 4000000, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmq0Si9JyAaGwDoOzzEWiGY8UklVuGZgShBQ&usqp=CAU'}
  ],
  carrito: [

  ],
  nombre: 'yoiler'
}

const reducer =  (state = INITIAL, action ) => {
  switch(action.type){
    case "AÑADIR_PRODUCTO":
      let nuevoP = action.nuevoProducto
      const existe = state.carrito.some(p => p.id === nuevoP.id)
      if (existe) nuevoP.cantidad = state.carrito.find(p => p.id === nuevoP.id).cantidad + 1
      else nuevoP.cantidad = 1
      return {
        ...state,
        carrito: [
          ...state.carrito.filter(p => p.id != nuevoP.id),
          nuevoP
        ]
      }
    case "ELIMINAR_PRODUCTO":
      return {
        ...state,
        carrito: [
          ...state.carrito.filter(p => p.id != action.id)
        ],
      }
    default:
      return state;

  }
}

const store = createStore(reducer)
export default store