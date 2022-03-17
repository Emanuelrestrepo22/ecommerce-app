import React, {useState } from 'react'


export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

    
  const decrement = () => {
    if(counter > 0 ){
       setCounter (counter - 1)
    }
 }

  const increment  = () => {
      if(counter < stock){
          setCounter(counter + 1);
      }
      
 }
    return (
    <>

        <h5>{counter}</h5>
        <button onClick={()=>increment()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <button onClick={onAdd}>Agregar al carrito</button>
        <p>Stock: {stock}</p>
    </>
  )
}

