import React from 'react'


export const ItemCount = ({ stock, initial, onAdd }) => {
   const increment = () => {
        count++;
   }
   const decrement = () => { 
        initial--;
    }
  return (
    <>
        <h5>{initial + count}</h5>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button>Agregar al carrito</button>
    </>
  )
}

