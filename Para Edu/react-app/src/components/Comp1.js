import React, { useState } from 'react'
//rafc
export const Comp1 = () => {

   // let nombre = "Fabri";
    const [nombre, setNombre] = useState("Fabri");

    const cambiarNombre = (newName) => {
        setNombre(newName);
    }

  return (
    <div>
        <p>Component 1</p>
        <input type="text" onChange={ e => cambiarNombre(e.target.value)} 
        placeholder='escriba'>

        </input>
        <button onClick={e => cambiarNombre("FABRICIO")} >
            Cambiar Nombre
            </button>
        <p>
            hola <b> {nombre}</b>
        </p>
        
    </div>
  )
}
