import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className= 'imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt='foto'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>{props.nombre} </p>
        <p className='ciudad-testimonio'>{props.ciudad} </p>
        <p className='texto-testimonio'>"{props.testimonio}" </p>
      </div>
    </div>
  );
}

export default Testimonio;