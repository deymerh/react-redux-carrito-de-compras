import React from 'react';

const Card = ( {nombre, precio, imagen, btnTexto, onPress} ) => {
  return (
    <div className="card">
      <h4 className={"titulo"}> {nombre} </h4>
      <img className={"img"} src={imagen} alt="alternativo" />
      <p className={"precio"}> {precio} </p>
      <button onClick={() => onPress()} > {btnTexto}  </button>
    </div>
  )
}


export default  Card; 