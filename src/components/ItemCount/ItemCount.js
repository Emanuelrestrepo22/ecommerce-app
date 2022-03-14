import React, {useState, useEffect} from 'react'


export const ItemCount = ({ stock, initial, onAdd }) => {
    let count = 0;
    // let newName = "";
    const [counter, setCounter] = useState(initial);
    // const [nombre, setNombre] = useState("Restrepo");

    useEffect(() => {
    }, [counter]);



    const increment = () => {
        if(counter < stock){
            count=counter+1;
            setCounter(count);
        }
   }

   const decrement = () => {
       if(counter > 1){
           count = counter-1;
           setCounter(count);
       }
    }
    // const cambiarNombre = () => {
    //     newName="Joel";
    //     setNombre(newName);
    // }

  return (
    <>
        {/* <p>{nombre}</p> */}
        <h5>{counter}</h5>
        {/* <button onClick={cambiarNombre}>Cambiar Nombre</button> */}
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <button>Agregar al carrito</button>
    </>
  )
}

