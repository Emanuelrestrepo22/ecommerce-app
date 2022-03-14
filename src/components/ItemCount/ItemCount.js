import React, {useState, useEffect} from 'react'


export const ItemCount = ({ stock, initial, onAdd, decrement }) => {
    return (
    <>

        <h5>{initial}</h5>
        <button onClick={()=>onAdd()}>+</button>
        <button onClick={()=>decrement()}>-</button>
        <button>Agregar al carrito</button>
        <p>Stock: {stock}</p>
    </>
  )
}

